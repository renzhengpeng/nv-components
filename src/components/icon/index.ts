/*
 * @Descripttion: 
 * @creater: zhengpeng.ren
 * @since: 2024-06-20 16:03:26
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-06-20 16:24:41
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * icon组件
 */
@customElement('nv-icon')
export class NvIcon extends Component {
  /**
   * 图标名
   */
  @property({ type: String })
  name = '';

  /**
   * 图标位置,left/right
   */
  @property({ type: String })
  position = '';

  /**
   * 图标颜色，如：#666 / rgb(...) / var(--color) 等
   */
  @property({ type: String })
  color: string = '';

  /**
   * 图标大小，支持 16px / 1em / 1.25rem 等
   */
  @property({ type: String })
  size: string = '';

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-icon': NvIcon
  }
}
