/*
 * @Descripttion: carousel-item组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * carousel-item组件
 *
 * @slot - 默认插槽，幻灯片内容
 */
@customElement('nv-carousel-item')
export class NvCarouselItem extends Component {
  /**
   * 唯一标识符
   */
  @property({ type: String })
  name: string = '';

  /**
   * 是否激活（由父组件控制）
   * reflect: true 确保属性值反射到 HTML 属性上，以便 CSS 选择器 :host([isActive]) 能生效
   */
  @property({ type: Boolean, reflect: true })
  isActive: boolean = false;

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-carousel-item': NvCarouselItem
  }
}

