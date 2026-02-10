/*
 * @Descripttion: card组件
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
import classNamesConfig from './classNames';

/**
 * card组件
 *
 * @slot - 默认插槽，用于放置卡片内容
 * @slot header - 卡片头部内容
 * @slot footer - 卡片底部内容
 */
@customElement('nv-card')
export class NvCard extends Component {
  /**
   * 设置阴影显示时机，可选: always/hover/never
   */
  @property({ type: String })
  shadow: 'always' | 'hover' | 'never' = 'always';

  /**
   * 卡片标题
   */
  @property({ type: String })
  header: string = '';

  private _hasHeader: boolean = false;
  private _hasFooter: boolean = false;

  render() {
    return template.call(this, {
      _handleHeaderSlotChange: this._handleHeaderSlotChange.bind(this),
      _handleFooterSlotChange: this._handleFooterSlotChange.bind(this)
    });
  }

  $mounted(): void {
    // 初始化完成
    this._updateSlotStates();
  }

  protected updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    this._updateSlotStates();
  }

  private _updateSlotStates(): void {
    this._handleHeaderSlotChange();
    this._handleFooterSlotChange();
  }

  protected _handleHeaderSlotChange(): void {
    const slot = this.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement | null;
    const hasContent = !!slot && slot.assignedNodes({ flatten: true }).length > 0;
    const hasText = !!(this.header && this.header.trim().length > 0);
    this._hasHeader = hasContent || hasText;

    const headerElement = this.shadowRoot?.querySelector(`.${ classNamesConfig.elements.header }`) as HTMLElement | null;
    if (headerElement) {
      if (this._hasHeader) {
        headerElement.style.display = '';
      } else {
        headerElement.style.display = 'none';
      }
    }
  }

  protected _handleFooterSlotChange(): void {
    const slot = this.shadowRoot?.querySelector('slot[name="footer"]') as HTMLSlotElement | null;
    this._hasFooter = !!slot && slot.assignedNodes({ flatten: true }).length > 0;

    const footerElement = this.shadowRoot?.querySelector(`.${ classNamesConfig.elements.footer }`) as HTMLElement | null;
    if (footerElement) {
      if (this._hasFooter) {
        footerElement.style.display = '';
      } else {
        footerElement.style.display = 'none';
      }
    }
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-card': NvCard;
  }
}
