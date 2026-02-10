/*
 * @Descripttion: divider组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * divider组件
 *
 * @slot - 默认插槽，用于放置分割线中间的内容
 */
@customElement('nv-divider')
export class NvDivider extends Component {
  /**
   * 设置分割线的方向，可选: horizontal/vertical
   */
  @property({ type: String })
  direction: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * 设置分割线文案的位置，可选: left/right/center
   */
  @property({ type: String })
  contentPosition: 'left' | 'right' | 'center' = 'center';

  /**
   * 是否为垂直分割线
   */
  get isVertical(): boolean {
    return this.direction === 'vertical';
  }

  /**
   * 检查是否有slot内容
   */
  protected _hasSlotContent(): boolean {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return false;
    }
    const assignedNodes = slot.assignedNodes({ flatten: true });
    return assignedNodes.some(node => {
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
    'nv-divider': NvDivider
  }
}
