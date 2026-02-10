/*
 * @Descripttion: option组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * option组件
 */
@customElement('nv-option')
export class NvOption extends Component {
  /**
   * 选项的值
   */
  @property({ type: Object })
  value: string | number = '';

  /**
   * 选项的标签，如果不设置则使用默认插槽内容
   */
  @property({ type: String })
  label: string = '';

  /**
   * 是否禁用，默认false
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * 是否选中，默认false
   */
  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-option': NvOption
  }
}
