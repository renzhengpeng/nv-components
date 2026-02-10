/*
 * @Descripttion: loading组件
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
 * loading组件
 *
 * @slot - 默认插槽，用于放置需要加载的内容
 */
@customElement('nv-loading')
export class NvLoading extends Component {
  /**
   * 是否全屏显示
   */
  @property({ type: Boolean, reflect: true })
  fullscreen: boolean = false;

  /**
   * 是否以块级元素显示（占据整行）
   */
  @property({ type: Boolean, reflect: true })
  block: boolean = false;

  /**
   * 自定义图标名称
   * 当设置icon时，将使用自定义图标代替spinner
   */
  @property({ type: String })
  icon: string = '';

  /**
   * loading图标类型
   * - circular: 圆形旋转器（默认）
   * - spinner: 多点旋转器
   * - dots: 点状加载
   * - bars: 条形加载
   */
  @property({ type: String })
  spinner: 'circular' | 'spinner' | 'dots' | 'bars' = 'circular';

  /**
   * loading图标尺寸
   * - mini: 最小尺寸
   * - small: 小尺寸
   * - medium: 中等尺寸（默认）
   * - large: 大尺寸
   * - huge: 超大尺寸
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 是否显示loading图标
   */
  @property({ type: Boolean })
  loading: boolean = true;

  /**
   * 显示在加载图标下方的加载文案
   */
  @property({ type: String })
  text: string = '';

  /**
   * spinner图标的颜色
   */
  @property({ type: String, attribute: 'spinner-color' })
  spinnerColor: string = '';

  /**
   * 文字颜色
   */
  @property({ type: String, attribute: 'text-color' })
  textColor: string = '';

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
    'nv-loading': NvLoading;
  }
}
