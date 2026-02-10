/*
 * @Descripttion: tabs组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import {
  unsafeCSS,
  css,
  customElement,
  property,
  Component
} from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import '../icon/index';

interface Tab {
  name: string;
  label: string;
  disabled: boolean;
  active: boolean;
}

/**
 * tabs组件
 *
 * @slot - 默认插槽，用于放置 nv-tab-pane 组件
 */
@customElement('nv-tabs')
export class NvTabs extends Component {
  /**
   * 绑定值，选中选项卡的 name
   */
  @property({ type: String })
  value: string = '';

  /**
   * 风格类型，可选: card/border-card
   */
  @property({ type: String })
  type: '' | 'card' | 'border-card' = '';

  /**
   * 选项卡位置，可选: top/right/bottom/left
   */
  @property({ type: String, attribute: 'position' })
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /**
   * 标签是否可关闭
   */
  @property({ type: Boolean })
  closable: boolean = false;

  /**
   * 标签是否可添加
   */
  @property({ type: Boolean })
  addable: boolean = false;

  /**
   * 标签是否可编辑
   */
  @property({ type: Boolean })
  editable: boolean = false;

  /**
   * 标签列表
   */
  tabs: Tab[] = [];

  /**
   * 当前正在编辑的标签 name
   */
  private _editingTabName: string | null = null;

  render() {
    return template.call(this, {
      _handleTabClick: this._handleTabClick.bind(this),
      _handleTabRemove: this._handleTabRemove.bind(this),
      _handleTabAdd: this._handleTabAdd.bind(this),
      _handleTabEdit: this._handleTabEdit.bind(this),
      _handleTabEditComplete: this._handleTabEditComplete.bind(this),
      _handleTabEditCancel: this._handleTabEditCancel.bind(this),
      _editingTabName: this._editingTabName
    });
  }

  $mounted(): void {
    // 延迟更新，确保子元素已渲染
    setTimeout(() => {
      this._updateTabs();
    }, 0);
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    // 只在 value 变化时更新 tabs 状态
    if (_changedProperties.has('value')) {
      this._updateTabsState();
    }
  }

  /**
   * 更新标签列表（供模板和 slotchange 调用）
   */
  _updateTabs(): void {
    const tabPanes = Array.from(this.querySelectorAll('nv-tab-pane')) as any[];
    const newTabs = tabPanes.map((pane) => ({
      name: pane.name || '',
      label: pane.label || '',
      disabled: pane.disabled || false,
      active: pane.name === this.value
    }));

    // 只有当 tabs 真正变化时才更新
    const tabsChanged = JSON.stringify(this.tabs) !== JSON.stringify(newTabs);
    if (tabsChanged) {
      this.tabs = newTabs;
      this.requestUpdate();
    }

    // 更新 tab-pane 的 active 状态
    tabPanes.forEach((pane) => {
      pane.active = pane.name === this.value;
    });

    // 更新 active-bar 位置
    if (tabsChanged || this.tabs.length > 0) {
      setTimeout(() => {
        this._updateActiveBar();
      }, 0);
    }
  }

  /**
   * 只更新 tabs 的 active 状态
   */
  private _updateTabsState(): void {
    const tabPanes = Array.from(this.querySelectorAll('nv-tab-pane')) as any[];
    
    // 检查是否需要更新
    let needsUpdate = false;
    const newTabs = this.tabs.map((tab) => {
      const newActive = tab.name === this.value;
      if (tab.active !== newActive) {
        needsUpdate = true;
      }
      return {
        ...tab,
        active: newActive
      };
    });

    // 只有当 active 状态真正变化时才更新
    if (needsUpdate) {
      this.tabs = newTabs;
      // 触发重新渲染以更新 UI
      this.requestUpdate();
    }

    // 更新 tab-pane 的 active 状态
    tabPanes.forEach((pane) => {
      pane.active = pane.name === this.value;
    });

    // 更新 active-bar 位置
    setTimeout(() => {
      this._updateActiveBar();
    }, 0);
  }

  /**
   * 更新激活条位置
   */
  private _updateActiveBar(): void {
    const shadowRoot = this.shadowRoot;
    if (!shadowRoot) return;

    const navEl = shadowRoot.querySelector('.nv-tabs__nav') as HTMLElement;
    const activeItemEl = shadowRoot.querySelector('.nv-tabs__item.is-active') as HTMLElement;

    if (!navEl || !activeItemEl) return;

    const navRect = navEl.getBoundingClientRect();
    const itemRect = activeItemEl.getBoundingClientRect();

    const isVertical = this.position === 'left' || this.position === 'right';

    if (isVertical) {
      // 垂直布局：计算 top 和 height
      const top = itemRect.top - navRect.top;
      const height = itemRect.height;
      navEl.style.setProperty('--active-bar-transform', `translateY(${ top }px)`);
      navEl.style.setProperty('--active-bar-height', `${ height }px`);
      navEl.style.setProperty('--active-bar-width', 'auto');
    } else {
      // 水平布局：计算 left 和 width
      const left = itemRect.left - navRect.left;
      const width = itemRect.width;
      navEl.style.setProperty('--active-bar-transform', `translateX(${ left }px)`);
      navEl.style.setProperty('--active-bar-width', `${ width }px`);
      navEl.style.setProperty('--active-bar-height', 'auto');
    }
  }

  /**
   * 处理标签点击
   */
  private _handleTabClick(name: string, event: Event): void {
    event.stopPropagation();
    const tab = this.tabs.find((t) => t.name === name);
    if (tab && tab.disabled) return;

    // 如果正在编辑，不处理点击
    if (this._editingTabName === name) return;

    // 设置 value，会自动触发 updated() 中的 _updateTabsState()
    this.value = name;

    this.dispatchEvent(
      new CustomEvent('nv-tab-click', {
        detail: { name },
        bubbles: true,
        composed: true
      })
    );

    this.dispatchEvent(
      new CustomEvent('nv-change', {
        detail: name,
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * 处理标签关闭
   */
  private _handleTabRemove(name: string, event: Event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    const tabPanes = Array.from(this.querySelectorAll('nv-tab-pane')) as any[];
    const paneToRemove = tabPanes.find((pane) => pane.name === name);

    if (!paneToRemove) return;

    // 如果关闭的是当前激活的标签，需要切换到其他标签
    if (this.value === name) {
      const currentIndex = this.tabs.findIndex((t) => t.name === name);
      if (currentIndex > 0) {
        this.value = this.tabs[currentIndex - 1].name;
      } else if (this.tabs.length > 1) {
        this.value = this.tabs[1].name;
      } else {
        this.value = '';
      }
    }

    // 移除 tab-pane
    paneToRemove.remove();

    // 更新 tabs 列表
    this._updateTabs();

    this.dispatchEvent(
      new CustomEvent('nv-tab-remove', {
        detail: { name },
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * 处理添加标签
   */
  private _handleTabAdd(event: Event): void {
    event.stopPropagation();

    this.dispatchEvent(
      new CustomEvent('nv-tab-add', {
        detail: {},
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * 处理标签编辑（双击进入编辑模式）
   */
  private _handleTabEdit(name: string, event: Event): void {
    if (!this.editable) return;
    event.stopPropagation();

    this._editingTabName = name;
    
    this.dispatchEvent(
      new CustomEvent('nv-tab-edit-start', {
        detail: { name },
        bubbles: true,
        composed: true
      })
    );
    
    this.requestUpdate();

    // 聚焦到输入框并设置宽度
    setTimeout(() => {
      const shadowRoot = this.shadowRoot;
      if (!shadowRoot) return;
      const item = shadowRoot.querySelector(`.nv-tabs__item[data-name="${ name }"]`) as HTMLElement;
      const input = shadowRoot.querySelector(`.nv-tabs__item[data-name="${ name }"] .nv-tabs__item-edit-input`) as HTMLInputElement;
      if (input && item) {
        // 设置输入框宽度为标签项的宽度
        const itemWidth = item.getBoundingClientRect().width;
        input.style.width = `${ itemWidth }px`;
        input.focus();
        input.select();
      }
    }, 0);
  }

  /**
   * 完成编辑
   */
  private _handleTabEditComplete(name: string, newLabel: string, event: Event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    const tabPanes = Array.from(this.querySelectorAll('nv-tab-pane')) as any[];
    const pane = tabPanes.find((p) => p.name === name);
    if (pane && newLabel.trim()) {
      pane.label = newLabel.trim();
      this._updateTabs();
      
      this.dispatchEvent(
        new CustomEvent('nv-tab-edit-end', {
          detail: { name, newLabel: newLabel.trim() },
          bubbles: true,
          composed: true
        })
      );
    }

    this._editingTabName = null;
    this.requestUpdate();
  }

  /**
   * 取消编辑
   */
  private _handleTabEditCancel(event: Event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    this._editingTabName = null;
    this.requestUpdate();
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-tabs': NvTabs;
  }
}
