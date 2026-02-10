/*
 * @Descripttion: empty组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * empty组件
 *
 * @slot - 默认插槽，用于自定义空状态内容
 * @slot image - 自定义图片
 * @slot description - 自定义描述文字
 */
@customElement('nv-empty')
export class NvEmpty extends Component {
  /**
   * 图片地址
   */
  @property({ type: String })
  image: string = '';

  /**
   * 图片大小（宽度）
   */
  @property({ type: String })
  imageSize: string = '';

  /**
   * 描述文字
   */
  @property({ type: String })
  description: string = '暂无数据';

  /**
   * 尺寸
   */
  @property({ type: String, reflect: true })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 检查是否有默认slot内容
   */
  protected _hasDefaultSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot:not([name])');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0 && assignedNodes.some((node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() !== '';
      }
      return node.nodeType === Node.ELEMENT_NODE;
    });
  }

  /**
   * 检查是否有image slot内容
   */
  protected _hasImageSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="image"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0;
  }

  /**
   * 检查是否有description slot内容
   */
  protected _hasDescriptionSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="description"]');
    if (!slot) {
      return false;
    }
    const assignedNodes = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    return assignedNodes.length > 0 && assignedNodes.some((node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() !== '';
      }
      return node.nodeType === Node.ELEMENT_NODE;
    });
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-empty': NvEmpty
  }
}
