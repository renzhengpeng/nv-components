/*
 * @Descripttion: timeline组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import {
  unsafeCSS,
  css,
  customElement,
  Component
} from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * timeline组件
 *
 * @slot - 默认插槽，用于放置 nv-timeline-item 组件
 */
@customElement('nv-timeline')
export class NvTimeline extends Component {
  /**
   * 是否反向
   */
  reverse: boolean = false;

  render() {
    return template.call(this);
  }

  $mounted(): void {
    // 初始化完成
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-timeline': NvTimeline;
  }
}
