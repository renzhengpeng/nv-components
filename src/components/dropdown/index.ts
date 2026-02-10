/*
 * @creater: zhengpeng.ren
 * @since: 2024/8/30 17:55
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: dropdown
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import '../icon/index';
import '../popup/index';
import '../option/index';


/**
 * dropdown组件
 */
@customElement('nv-dropdown')
export class NvDropdown extends Component {
  /**
   * 是否禁用，默认false
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * 是否处于激活(展开)状态
   */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  /**
   * 触发方式，默认click
   */
  @property({ type: String, reflect: true })
  trigger: 'click' | 'hover' | 'contextmenu' = 'click';

  /**
   * 下拉菜单的位置，默认bottom
   */
  @property({ type: String, reflect: true })
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'bottom-start';

  /**
   * 是否与目标节点左右对齐
   */
  @property({ type: Boolean, reflect: true })
  align: boolean = false;

  /**
   * 定位策略：absolute（相对于定位父元素）或 fixed（相对于视口）
   */
  @property({ type: String, reflect: true })
  strategy: 'absolute' | 'fixed' = 'absolute';

  /**
   * 是否自动调整位置（当空间不足时自动翻转）
   */
  @property({ type: Boolean, reflect: true, attribute: 'auto-adjust' })
  autoAdjust: boolean = false;

  /**
   * 点击菜单项后是否隐藏（Element UI: hide-on-click）
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-on-click' })
  hideOnClick: boolean = true;

  /**
   * hover 展开/收起的延时（毫秒）（Element UI: showTimeout/hideTimeout）
   */
  @property({ type: Number })
  showTimeout: number = 250;

  @property({ type: Number })
  hideTimeout: number = 150;

  private _hoverTimer: number | null = null;

  /**
   * 是否显示下拉箭头，默认true
   */
  @property({ type: Boolean, reflect: true })
  arrow: boolean = false;

  /**
   * 占位符
   */
  @property({ type: String })
  placeholder: string = '请选择';

    /**
   * popup 距离锚点的距离（像素）
   */
  @property({ type: Number, reflect: true })
  distance: number = 3;

  /**
   * 点击外部关闭的处理函数
   */
  private _documentClickHandler: ((evt: MouseEvent) => void) | null = null;

  /**
   * dropdown click event handler
   * @param evt
   * @protected
   */
  protected async _handleClick(evt: Event) {
    evt.stopPropagation();
    if (this.disabled) {
      evt.preventDefault();
      return;
    }

    if (this.trigger === 'click' || this.trigger === 'contextmenu') {
      this.active = !this.active;
      if (this.popupEl) {
        this.popupEl.active = this.active;
      }
      this._updateDocumentClickHandler();
    }

    await this.updateComplete;
  }

  /**
   * 右键触发
   */
  protected _handleContextMenu(evt: Event) {
    evt.preventDefault();
    if (this.disabled) {
      evt.stopPropagation();
      return;
    }
    if (this.trigger !== 'contextmenu') return;
    this._handleClick(evt);
  }

  /**
   * hover enter event handler
   * @param evt
   * @protected
   */
  protected _handleMouseEnter(evt: Event) {
    if (this.disabled) {
      evt.stopPropagation();
      evt.preventDefault();
      return;
    }
    if (this.trigger !== 'hover') return;
    evt.stopPropagation();
    if (this._hoverTimer) {
      window.clearTimeout(this._hoverTimer);
      this._hoverTimer = null;
    }
    this._hoverTimer = window.setTimeout(() => {
      this.active = true;
      if (this.popupEl) {
        this.popupEl.active = true;
      }
    }, this.showTimeout);
  }

  /**
   * hover leave event handler
   * @param evt
   * @protected
   */
  protected _handleMouseLeave(evt: Event) {
    if (this.disabled) {
      evt.stopPropagation();
      evt.preventDefault();
      return;
    }
    if (this.trigger !== 'hover') return;
    evt.stopPropagation();
    if (this._hoverTimer) {
      window.clearTimeout(this._hoverTimer);
      this._hoverTimer = null;
    }
    this._hoverTimer = window.setTimeout(() => {
      this.active = false;
      if (this.popupEl) {
        this.popupEl.active = false;
      }
    }, this.hideTimeout);
  }

  /**
   * 菜单项点击处理
   * @param evt
   * @protected
   */
  protected _handleMenuItemClick(evt: Event) {
    const target = evt.target as HTMLElement;

    // 检查是否点击了禁用的选项（支持 class 和 disabled 属性）
    const isDisabled = target.classList.contains('is-disabled') ||
                       target.closest('.is-disabled') ||
                       target.hasAttribute('disabled') ||
                       target.closest('[disabled]');

    if (isDisabled) {
      evt.stopPropagation();
      evt.preventDefault();
      return;
    }

    evt.stopPropagation();

    // 读取 command 值（支持 data-command / command 属性）
    const commandEl = (target.closest('[data-command]') as HTMLElement) || (target.closest('[command]') as HTMLElement);
    const command = commandEl ? (commandEl.getAttribute('data-command') ?? commandEl.getAttribute('command')) : null;

    // 触发自定义事件
    this.dispatchEvent(new CustomEvent('nv-menu-item-click', {
      detail: { target, command },
      bubbles: true,
      composed: true
    }));

    if (command !== null) {
      this.dispatchEvent(new CustomEvent('nv-command', {
        detail: command,
        bubbles: true,
        composed: true
      }));
    }

    // 点击菜单项后关闭下拉菜单
    if ((this.trigger === 'click' && this.hideOnClick) || this.trigger === 'contextmenu') {
      this.active = false;
      if (this.popupEl) {
        this.popupEl.active = false;
      }
      this._removeDocumentClickHandler();
    }
  }

  /**
   * 更新文档点击事件处理器
   * @protected
   */
  protected _updateDocumentClickHandler() {
    this._removeDocumentClickHandler();

    if (this.active && this.trigger === 'click') {
      this._documentClickHandler = (evt: MouseEvent) => {
        const target = evt.target as Node;
        // 如果点击的是组件内部，不关闭
        if (this.contains(target) || this.shadowRoot?.contains(target)) {
          return;
        }
        // 如果点击的是popup内容，不关闭
        const popupContent = this.popupEl?.shadowRoot?.querySelector('.nv-popup');
        if (popupContent && (popupContent.contains(target) || popupContent.shadowRoot?.contains(target))) {
          return;
        }

        this.active = false;
        if (this.popupEl) {
          this.popupEl.active = false;
        }
        this._removeDocumentClickHandler();
      };

      // 使用捕获阶段，确保能够捕获到点击事件
      setTimeout(() => {
        document.addEventListener('click', this._documentClickHandler!, true);
      }, 0);
    }
  }

  /**
   * 移除文档点击事件处理器
   * @protected
   */
  protected _removeDocumentClickHandler() {
    if (this._documentClickHandler) {
      document.removeEventListener('click', this._documentClickHandler, true);
      this._documentClickHandler = null;
    }
  }

  /**
   * 生命周期：属性更新后
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // 监听 active 变化，触发 visible-change 事件
    if (changedProperties.has('active')) {
      this.dispatchEvent(new CustomEvent('nv-visible-change', {
        detail: this.active,
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return template.call(this, {
      _handleClick: this._handleClick,
      _handleMouseEnter: this._handleMouseEnter,
      _handleMouseLeave: this._handleMouseLeave,
      _handleMenuItemClick: this._handleMenuItemClick,
      _handleContextMenu: this._handleContextMenu
    });
  }

  protected update(changedProperties: PropertyValues) {
    super.update(changedProperties);

    // 当 active 状态改变时，同步更新 popup 的 active 状态
    if (changedProperties.has('active')) {
      if (this.popupEl) {
        this.popupEl.active = this.active;
      }
    }

    // 当 placement 改变时，更新 popup 的 placement
    if (changedProperties.has('placement')) {
      if (this.popupEl) {
        this.popupEl.placement = this.placement;
      }
    }

    // 当 align 改变时，更新 popup 的 sync
    if (changedProperties.has('align')) {
      if (this.popupEl) {
        this.popupEl.sync = this.align ? 'width' : undefined;
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    this._removeDocumentClickHandler();
    super.disconnectedCallback();
  }

  protected $mounted() {
    // 初始化 popup 配置
    // 注意：trigger 固定为 'manual'，由 dropdown 自己控制显示/隐藏
    if (this.popupEl) {
      this.popupEl.placement = this.placement;
      this.popupEl.sync = this.align ? 'width' : undefined;
      this.popupEl.arrow = this.arrow;
      this.popupEl.active = this.active;
    }
  }


  /**
   * nv-popup
   */
  get popupEl() {
    return this.shadowRoot?.querySelector('nv-popup') as any;
  }

  /**
   * 获取触发器元素
   */
  get triggerEl(): HTMLElement | null {
    return this.shadowRoot?.querySelector('.nv-dropdown__trigger') as HTMLElement | null;
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-dropdown': NvDropdown
  }
}
