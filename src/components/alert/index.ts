/*
 * @Descripttion: alert组件
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

/**
 * alert组件
 *
 * @slot - 默认插槽，用于放置描述内容
 * @slot title - 标题插槽
 */
@customElement('nv-alert')
export class NvAlert extends Component {
  /**
   * 主题，可选: success/warning/info/error
   */
  @property({ type: String })
  type: 'success' | 'warning' | 'info' | 'error' = 'info';

  /**
   * 是否可关闭
   */
  @property({ type: Boolean })
  closable: boolean = false;

  /**
   * 文字是否居中
   */
  @property({ type: Boolean })
  center: boolean = false;

  /**
   * 是否显示图标
   */
  @property({ type: Boolean, attribute: 'show-icon' })
  showIcon: boolean = false;

  /**
   * 标题
   */
  @property({ type: String, reflect: true })
  label: string = '';

  /**
   * 描述性文字
   */
  @property({ type: String })
  description: string = '';

  /**
   * 警告框尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  render() {
    return template.call(this, { _handleClose: this._handleClose.bind(this) });
  }

  $mounted(): void {
    // 初始化完成
  }

  /**
   * 处理关闭事件
   */
  private _handleClose(event: Event): void {
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('nv-close', {
        bubbles: true,
        composed: true
      })
    );
    this.remove();
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-alert': NvAlert;
  }
}
