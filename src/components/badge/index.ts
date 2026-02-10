/*
 * @Descripttion: badge组件
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
 * badge组件
 *
 * @slot - 默认插槽，用于放置需要显示徽章的内容
 */
@customElement('nv-badge')
export class NvBadge extends Component {
  /**
   * 显示值
   */
  @property({ type: Number })
  value: number | undefined = undefined;

  /**
   * 最大值，超过最大值会显示 '{max}+'
   */
  @property({ type: Number })
  max: number | undefined = undefined;

  /**
   * 是否显示为点
   */
  @property({ type: Boolean, attribute: 'is-dot' })
  isDot: boolean = false;

  /**
   * 是否固定在右上角
   */
  @property({ type: Boolean })
  isFixed: boolean = false;

  /**
   * 自定义背景色
   */
  @property({ type: String })
  color: string = '';

  /**
   * 水平偏移量（px）
   */
  @property({ type: Number, attribute: 'offset-x' })
  offsetX: number = 0;

  /**
   * 垂直偏移量（px）
   */
  @property({ type: Number, attribute: 'offset-y' })
  offsetY: number = 0;

  /**
   * 圆点半径（px），至少为1，仅当 is-dot 为 true 时有效
   */
  @property({ type: Number })
  size: number | undefined = undefined;

  /**
   * 当值为0时是否展示徽标
   */
  @property({ type: Boolean, attribute: 'show-zero' })
  showZero: boolean = false;

  /**
   * 用来展示非数字的徽标内容
   */
  @property({ type: String })
  text: string = '';

  /**
   * 徽标状态：success/error/warning/processing/info
   */
  @property({ type: String })
  status: 'success' | 'error' | 'warning' | 'processing' | 'info' | '' = '';

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
    'nv-badge': NvBadge;
  }
}
