/*
 * @Descripttion: result组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * result组件
 *
 * @slot icon - 自定义图标插�?
 * @slot title - 自定义标题插�?
 * @slot subTitle - 自定义副标题插槽
 * @slot extra - 额外操作插槽
 */
@customElement('nv-result')
export class NvResult extends Component {
  /**
   * 结果类型，可�? success/warning/info/error
   */
  @property({ type: String })
  type: 'success' | 'warning' | 'info' | 'error' = 'info';

  /**
   * 标题
   */
  @property({ type: String, reflect: true })
  label: string = '';

  /**
   * 副标�?
   */
  @property({ type: String })
  subTitle: string = '';

  /**
   * 图标名称（自定义图标�?
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 检查是否有icon slot内容
   */
  protected _hasIconSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="icon"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0;
  }

  /**
   * 检查是否有title slot内容
   */
  protected _hasTitleSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="title"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0;
  }

  /**
   * 检查是否有subTitle slot内容
   */
  protected _hasSubTitleSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="subTitle"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0;
  }

  /**
   * 检查是否有extra slot内容
   */
  protected _hasExtraSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="extra"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0;
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-result': NvResult
  }
}
