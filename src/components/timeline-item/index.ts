/*
 * @Descripttion: timeline-item组件
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
 * timeline-item组件
 *
 * @slot - 默认插槽，用于放置时间轴内容
 * @slot timestamp - 时间戳插槽
 */
@customElement('nv-timeline-item')
export class NvTimelineItem extends Component {
  /**
   * 时间戳
   */
  @property({ type: String })
  timestamp: string = '';

  /**
   * 是否待处理
   */
  @property({ type: Boolean })
  pending: boolean = false;

  /**
   * 是否反向
   */
  @property({ type: Boolean })
  reverse: boolean = false;

  /**
   * 图标
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 节点类型，可选: primary/success/warning/error/info
   */
  @property({ type: String })
  type: 'primary' | 'success' | 'warning' | 'error' | 'info' | '' = '';

  /**
   * 节点颜色
   */
  @property({ type: String })
  color: string = '';

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
    'nv-timeline-item': NvTimelineItem;
  }
}
