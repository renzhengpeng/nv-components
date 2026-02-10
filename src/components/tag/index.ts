/*
 * @Descripttion: tag组件
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
 * tag组件
 *
 * @slot - 默认插槽，用于放置标签内容
 */
@customElement('nv-tag')
export class NvTag extends Component {
  /**
   * 类型，可选: success/info/warning/error
   */
  @property({ type: String })
  type: 'success' | 'info' | 'warning' | 'error' | '' = '';

  /**
   * 是否可关闭
   */
  @property({ type: Boolean })
  closable: boolean = false;

  /**
   * 是否有边框描边
   */
  @property({ type: Boolean })
  hit: boolean = false;

  /**
   * 背景色
   */
  @property({ type: String })
  color: string = '';

  /**
   * 尺寸，可选: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 主题，可选: dark/light/plain
   */
  @property({ type: String })
  effect: 'dark' | 'light' | 'plain' = 'light';

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

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-tag': NvTag;
  }
}
