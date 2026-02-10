/*
 * @Descripttion: skeleton组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * skeleton组件
 *
 * @slot - 默认插槽，用于自定义骨架屏内容
 */
@customElement('nv-skeleton')
export class NvSkeleton extends Component {
  /**
   * 是否显示动画效果
   */
  @property({ type: Boolean })
  animated: boolean = false;

  /**
   * 是否显示加载完成后的内容
   */
  @property({ type: Boolean })
  loading: boolean = true;

  /**
   * 渲染骨架屏的行数
   */
  @property({ type: Number })
  rows: number = 1;

  /**
   * 是否显示标题
   */
  @property({ type: Boolean, attribute: 'title' })
  showTitle: boolean = true;

  /**
   * 是否显示头像
   */
  @property({ type: Boolean })
  avatar: boolean = false;

  /**
   * 头像尺寸，可选: large/medium/small
   */
  @property({ type: String })
  avatarSize: 'large' | 'medium' | 'small' = 'medium';

  /**
   * 头像形状，可选: circle/square
   */
  @property({ type: String })
  avatarShape: 'circle' | 'square' = 'circle';

  /**
   * 骨架屏的宽度
   */
  @property({ type: String })
  width: string = '';

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-skeleton': NvSkeleton
  }
}

