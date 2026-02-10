/*
 * @Descripttion: rate组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * rate组件
 */
@customElement('nv-rate')
export class NvRate extends Component {
  /**
   * 当前评分值
   */
  @property({ type: Number })
  value: number = 0;

  /**
   * 最大分值
   */
  @property({ type: Number })
  max: number = 5;

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否允许半选
   */
  @property({ type: Boolean })
  allowHalf: boolean = false;

  /**
   * 是否显示辅助文字
   */
  @property({ type: Boolean })
  showText: boolean = false;

  /**
   * 辅助文字数组
   */
  @property({ type: Array })
  texts: string[] = ['极差', '差', '一般', '好', '极好'];

  /**
   * 是否显示当前分数
   */
  @property({ type: Boolean })
  showScore: boolean = false;

  /**
   * 评分尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 分数模板，{value} 会被替换为当前分数
   */
  @property({ type: String })
  scoreTemplate: string = '{value}';

  /**
   * 当前悬停的值
   */
  @state()
  private _hoverValue: number = 0;

  /**
   * 处理鼠标进入
   */
  protected _handleMouseEnter(index: number, isHalf: boolean): void {
    if (this.disabled) {
      return;
    }
    this._hoverValue = index + (isHalf ? 0.5 : 1);
  }

  /**
   * 处理鼠标离开
   */
  protected _handleMouseLeave(): void {
    if (this.disabled) {
      return;
    }
    this._hoverValue = 0;
  }

  /**
   * 处理点击
   */
  protected _handleClick(index: number, isHalf: boolean): void {
    if (this.disabled) {
      return;
    }
    const newValue = index + (isHalf ? 0.5 : 1);
    this.value = newValue;
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: newValue,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 获取当前显示的值（悬停时显示悬停值，否则显示实际值）
   */
  protected _getDisplayValue(): number {
    return this._hoverValue || this.value;
  }

  /**
   * 获取辅助文字
   */
  protected _getText(): string {
    const displayValue = this._getDisplayValue();
    const index = Math.ceil(displayValue) - 1;
    return this.texts[index] || '';
  }

  /**
   * 获取分数文本
   */
  protected _getScore(): string {
    const displayValue = this._getDisplayValue();
    return this.scoreTemplate.replace('{value}', String(displayValue));
  }

  render() {
    return template.call(this, {
      _handleMouseEnter: this._handleMouseEnter.bind(this),
      _handleMouseLeave: this._handleMouseLeave.bind(this),
      _handleClick: this._handleClick.bind(this),
      _getDisplayValue: this._getDisplayValue.bind(this),
      _getText: this._getText.bind(this),
      _getScore: this._getScore.bind(this),
      _hoverValue: this._hoverValue
    });
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-rate': NvRate
  }
}
