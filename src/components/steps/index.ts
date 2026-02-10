/*
 * @Descripttion: steps组件
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
import { PropertyValues } from 'lit';

/**
 * steps组件
 *
 * @slot - 默认插槽，用于放置 nv-step 组件
 */
@customElement('nv-steps')
export class NvSteps extends Component {
  /**
   * 设置当前激活步骤
   */
  @property({ type: Number })
  active: number = 0;

  /**
   * 显示方向，可选: horizontal/vertical
   */
  @property({ type: String })
  direction: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * 是否居中
   */
  @property({ type: Boolean })
  center: boolean = false;

  /**
   * 是否简洁风格
   */
  @property({ type: Boolean })
  simple: boolean = false;

  /**
   * 完成状态，可选: finish/success
   */
  @property({ type: String })
  finishStatus: 'finish' | 'success' = 'finish';

  /**
   * 进行中状态，可选: process/wait
   */
  @property({ type: String })
  processStatus: 'process' | 'wait' = 'process';

  /**
   * 步骤条尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  render() {
    return template.call(this);
  }

  $mounted(): void {
    this._updateSteps();
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    if (
      _changedProperties.has('active') ||
      _changedProperties.has('direction') ||
      _changedProperties.has('center') ||
      _changedProperties.has('simple') ||
      _changedProperties.has('size')
    ) {
      this._updateSteps();
    }
  }

  /**
   * 更新步骤状态
   */
  private _updateSteps(): void {
    const steps = Array.from(this.querySelectorAll('nv-step')) as any[];
    steps.forEach((step, index) => {
      step.direction = this.direction;
      step.center = this.center;
      step.simple = this.simple;
      step.size = this.size;
      step.index = index;
      step.isLast = index === steps.length - 1;

      if (index < this.active) {
        step.status = this.finishStatus;
      } else if (index === this.active) {
        step.status = this.processStatus;
      } else {
        step.status = 'wait';
      }
    });
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-steps': NvSteps;
  }
}
