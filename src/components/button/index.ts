/*
 * @Descripttion: button组件
 * @creater: zhengpeng.ren
 * @since: 2024-05-29 15:04:23
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-08-23 15:52:14
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * button组件
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nv-button')
export class NvButton extends Component {
  /**
   * button类型，可选: default/primary/success/warning/info/error/danger/text
   */
  @property({ type: String })
  type: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'error' | 'danger' | 'text' = 'default';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 纯按钮
   */
  @property({ type: Boolean })
  plain: boolean = false;

  /**
   * 圆角按钮
   */
  @property({ type: Boolean })
  round: boolean = false;

  /**
   * 圆形按钮
   */
  @property({ type: Boolean })
  circle: boolean = false; //

  /**
   * 是否处于loading状态
   */
  @property({ type: Boolean })
  loading: boolean = false;

  /**
   * 是否处于激活状态（用于表示按钮被选中或当前激活）
   */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  /**
   * button size. default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * icon name
   */
  @property({ type: String })
  icon: string = '';

  render() {
    return template.call(this, { _handleClick: this._handleClick });
  }

  $mounted(): void {
    //
  }

  private _handleClick(): void {
    //
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-button': NvButton
  }
}
