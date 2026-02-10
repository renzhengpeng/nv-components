/*
 * @Descripttion: progress组件
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
 * progress组件
 *
 * @slot - 默认插槽，用于自定义显示文字
 */
@customElement('nv-progress')
export class NvProgress extends Component {
  /**
   * 百分比
   */
  @property({ type: Number })
  percentage: number = 0;

  /**
   * 进度条类型，可选: line/circle/dashboard
   */
  @property({ type: String })
  type: 'line' | 'circle' | 'dashboard' = 'line';

  /**
   * 进度条状态，可选: success/warning/error
   */
  @property({ type: String })
  status: 'success' | 'warning' | 'error' | '' = '';

  /**
   * 进度条高度（仅 type 为 'line' 时可用）
   */
  @property({ type: Number, attribute: 'stroke-width' })
  strokeWidth: number = 6;

  /**
   * 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
   */
  @property({ type: Boolean, attribute: 'text-inside' })
  textInside: boolean = false;

  /**
   * 是否不显示进度条文字
   */
  @property({ type: Boolean, attribute: 'without-text' })
  withoutText: boolean = false;

  /**
   * 进度条背景色
   */
  @property({ type: String })
  color: string = '';

  /**
   * 进度条尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

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
    'nv-progress': NvProgress;
  }
}
