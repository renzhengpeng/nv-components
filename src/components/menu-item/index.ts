/*
 * @Descripttion: menu-item组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import '../tooltip/index';

/**
 * menu-item组件
 *
 * @slot - 默认插槽，菜单项内容
 * @slot icon - 图标插槽
 */
@customElement('nv-menu-item')
export class NvMenuItem extends Component {
  /**
   * 唯一标识符
   */
  @property({ type: String })
  index: string = '';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否激活（由父组件控制）
   */
  @property({ type: Boolean })
  isActive: boolean = false;

  /**
   * 图标（可以是图标类名或 SVG 字符串）
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 是否折叠（由父菜单控制）
   */
  @property({ type: Boolean, reflect: true })
  collapsed: boolean = false;

  /**
   * 菜单项文本内容（用于tooltip）
   */
  @state()
  // @ts-ignore - 保留用于未来功能
  private _textContent: string = '';

  /**
   * 处理点击事件
   */
  protected _handleClick(): void {
    if (this.disabled || !this.index) {
      return;
    }
    this.dispatchEvent(new CustomEvent('nv-menu-item-select', {
      detail: this.index,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 获取默认插槽的文本内容
   */
  private _getSlotTextContent(): string {
    const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    if (!slot) return '';
    
    const nodes = slot.assignedNodes({ flatten: true });
    return nodes.map(node => node.textContent || '').join('').trim();
  }

  protected firstUpdated(changedProperties: Map<string, any>): void {
    super.firstUpdated(changedProperties);
    // 初始化文本内容
    this._textContent = this._getSlotTextContent();
    
    // 监听slot变化
    const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    if (slot) {
      slot.addEventListener('slotchange', () => {
        this._textContent = this._getSlotTextContent();
      });
    }
  }

  render() {
    return template.call(this, {
      _handleClick: this._handleClick.bind(this)
    });
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-menu-item': NvMenuItem
  }
}

