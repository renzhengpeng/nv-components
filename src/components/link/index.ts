/*
 * @Descripttion: link组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * link组件
 * 
 * @slot - 默认插槽，用于放置链接文本
 */
@customElement('nv-link')
export class NvLink extends Component {
  /**
   * 链接类型，可选: primary/success/warning/error/info
   */
  @property({ type: String })
  type: 'primary' | 'success' | 'warning' | 'error' | 'info' = 'primary';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 下划线样式，可选: always/hover/none
   * always: 总是显示下划线
   * hover: 鼠标悬停时显示下划线
   * none: 不显示下划线
   */
  @property({ type: String })
  underline: 'always' | 'hover' | 'none' = 'hover';

  /**
   * 链接地址
   */
  @property({ type: String })
  href: string = '';

  /**
   * 链接打开方式，可选: _self/_blank/_parent/_top
   */
  @property({ type: String })
  target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /**
   * 图标名称
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 链接尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  render() {
    return template.call(this, { _handleClick: this._handleClick.bind(this) });
  }

  $mounted(): void {
    //
  }

  /**
   * 处理点击事件
   */
  private _handleClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // 触发自定义点击事件
    this.dispatchEvent(new CustomEvent('nv-click', {
      detail: { href: this.href, target: this.target },
      bubbles: true,
      cancelable: true
    }));
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-link': NvLink
  }
}
