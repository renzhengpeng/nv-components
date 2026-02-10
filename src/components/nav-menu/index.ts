/*
 * @Descripttion: nav-menu组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import '../menu-item/index';
import '../submenu/index';

/**
 * nav-menu组件
 *
 * @slot - 默认插槽，用于放置menu-item或submenu
 * 
 * @fires nv-select - 菜单项被选中时触发，返回选中菜单项的 index
 * @fires nv-open - 子菜单展开时触发，返回展开子菜单的 index
 * @fires nv-close - 子菜单收起时触发，返回收起子菜单的 index
 */
@customElement('nv-nav-menu')
export class NvNavMenu extends Component {
  /**
   * 当前激活菜单的 index
   */
  @property({ type: String })
  defaultActive: string = '';

  /**
   * 当前激活菜单的 index（受控）
   */
  @property({ type: String })
  activeIndex: string = '';

  /**
   * 菜单模式，可选: horizontal/vertical
   */
  @property({ type: String, reflect: true })
  mode: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * 是否折叠（仅在 vertical 模式有效）
   */
  @property({ type: Boolean })
  collapse: boolean = false;

  /**
   * 当前展开的子菜单 index 数组
   */
  @property({ type: Array })
  defaultOpeneds: string[] = [];

  /**
   * 是否只保持一个子菜单的展开
   */
  @property({ type: Boolean })
  uniqueOpened: boolean = false;

  /**
   * 菜单尺寸
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 子菜单触发方式，可选: click/hover
   */
  @property({ type: String })
  trigger: 'click' | 'hover' = 'hover';

  /**
   * 处理菜单项点击
   */
  protected _handleMenuItemClick(index: string): void {
    this.activeIndex = index;
    this.dispatchEvent(new CustomEvent('nv-select', {
      detail: index,
      bubbles: true,
      composed: true
    }));
    this.requestUpdate();
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('activeIndex') || changedProperties.has('defaultActive')) {
      const active = this.activeIndex || this.defaultActive;
      const items = this.querySelectorAll('nv-menu-item');
      items.forEach((item: any) => {
        if (item.index) {
          item.isActive = item.index === active;
        }
      });
    }

    // 当折叠状态或模式改变时，更新子组件
    if (changedProperties.has('collapse') || changedProperties.has('mode')) {
      this._updateCollapseState();
      this._updateTriggerMode();
    }

    // 当 trigger 改变时，更新子菜单
    if (changedProperties.has('trigger')) {
      this._updateTriggerMode();
    }
  }

  /**
   * 更新子组件的折叠状态
   */
  private _updateCollapseState(): void {
    const isCollapsed = this.collapse && this.mode === 'vertical';
    const items = this.querySelectorAll(':scope > nv-menu-item');
    const submenus = this.querySelectorAll(':scope > nv-submenu');
    
    items.forEach((item: any) => {
      item.collapsed = isCollapsed;
    });

    submenus.forEach((submenu: any) => {
      submenu.collapsed = isCollapsed;
    });
  }

  /**
   * 更新子菜单的触发方式
   */
  private _updateTriggerMode(): void {
    const submenus = this.querySelectorAll('nv-submenu');
    submenus.forEach((submenu: any) => {
      // 折叠模式下，强制使用 hover（因为折叠状态下只显示图标，hover 更合适）
      if (this.collapse && this.mode === 'vertical') {
        submenu.trigger = 'hover';
      } else {
        // 其他模式（水平模式和垂直非折叠模式）下，使用 nav-menu 的 trigger 设置
        submenu.trigger = this.trigger;
      }
    });
  }

  /**
   * 处理子菜单展开
   */
  protected _handleSubmenuOpen(index: string): void {
    // 如果设置了 uniqueOpened，同步关闭其他子菜单
    if (this.uniqueOpened) {
      const submenus = this.querySelectorAll('nv-submenu');
      submenus.forEach((submenu: any) => {
        if (submenu.index !== index && submenu.opened) {
          submenu.opened = false;
        }
      });
    }

    this.dispatchEvent(new CustomEvent('nv-open', {
      detail: index,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 处理子菜单收起
   */
  protected _handleSubmenuClose(index: string): void {
    this.dispatchEvent(new CustomEvent('nv-close', {
      detail: index,
      bubbles: true,
      composed: true
    }));
  }

  protected $mounted(): void {
    // 监听菜单项的select事件
    this.addEventListener('nv-menu-item-select', (event: Event) => {
      const customEvent = event as CustomEvent;
      const index = customEvent.detail;
      this._handleMenuItemClick(index);
    });

    // 监听子菜单的展开/收起事件
    this.addEventListener('nv-submenu-open', (event: Event) => {
      const customEvent = event as CustomEvent;
      const index = customEvent.detail;
      this._handleSubmenuOpen(index);
    });

    this.addEventListener('nv-submenu-close', (event: Event) => {
      const customEvent = event as CustomEvent;
      const index = customEvent.detail;
      this._handleSubmenuClose(index);
    });

    // 初始化子项的激活状态
    const active = this.activeIndex || this.defaultActive;
    const items = this.querySelectorAll('nv-menu-item');
    items.forEach((item: any) => {
      if (item.index) {
        item.isActive = item.index === active;
      }
    });

    // 初始化子菜单的展开状态
    if (this.defaultOpeneds.length > 0) {
      const submenus = this.querySelectorAll('nv-submenu');
      submenus.forEach((submenu: any) => {
        if (submenu.index && this.defaultOpeneds.includes(submenu.index)) {
          submenu.opened = true;
        }
      });
    }

    // 初始化折叠状态
    this._updateCollapseState();

    // 初始化触发方式
    this._updateTriggerMode();
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-nav-menu': NvNavMenu
  }
}
