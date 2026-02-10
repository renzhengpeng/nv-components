/*
 * @Descripttion: step组件
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
 * step组件
 *
 * @slot title - 标题插槽
 * @slot description - 描述插槽
 */
@customElement('nv-step')
export class NvStep extends Component {
  /**
   * 标题
   */
  @property({ type: String, reflect: true })
  label: string = '';

  /**
   * 描述性文字
   */
  @property({ type: String })
  description: string = '';

  /**
   * 图标
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 设置当前步骤的状态，可选: wait/process/finish/error/success
   */
  @property({ type: String })
  status: 'wait' | 'process' | 'finish' | 'error' | 'success' | '' = '';

  /**
   * 步骤方向，从父组件获取
   */
  direction: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * 是否居中，从父组件获取
   */
  center: boolean = false;

  /**
   * 是否简洁风格，从父组件获取
   */
  simple: boolean = false;

  /**
   * 步骤索引，从父组件获取
   */
  index: number = 0;

  /**
   * 是否为最后一个步骤，从父组件获取
   */
  isLast: boolean = false;

  /**
   * 尺寸，从父组件获取
   */
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
    'nv-step': NvStep;
  }
}
