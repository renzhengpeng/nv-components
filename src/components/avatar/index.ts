/*
 * @Descripttion: avatar组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * avatar组件
 *
 * @slot - 默认插槽，用于自定义头像内容
 */
@customElement('nv-avatar')
export class NvAvatar extends Component {
  /**
   * 头像尺寸，可选: large/medium/small
   */
  @property({ type: String })
  size: 'large' | 'medium' | 'small' | number = 'medium';

  /**
   * 头像形状，可选: circle/square
   */
  @property({ type: String })
  shape: 'circle' | 'square' = 'circle';

  /**
   * 图片地址
   */
  @property({ type: String })
  src: string = '';

  /**
   * 图片加载失败时的备用地址
   */
  @property({ type: String })
  srcSet: string = '';

  /**
   * 图片加载失败时的替代文本
   */
  @property({ type: String })
  alt: string = '';

  /**
   * 图片加载失败时的回调
   */
  @property({ type: Function })
  error: ((event: Event) => void) | null = null;

  /**
   * 图标名称（当没有src时显示图标）
   */
  @property({ type: String })
  icon: string = '';

  /**
   * 背景色
   */
  @property({ type: String })
  backgroundColor: string = '';

  /**
   * 字体类型（当显示文字时）
   */
  @property({ type: String })
  fontFamily: string = '';

  /**
   * 字体大小（当显示文字时）
   */
  @property({ type: String })
  fontSize: string = '';

  /**
   * 字体颜色（当显示文字时）
   */
  @property({ type: String })
  fontColor: string = '';

  /**
   * 字体粗细（当显示文字时）
   */
  @property({ type: String })
  fontWeight: string = '';

  /**
   * 图片加载失败状态
   */
  private _imageError: boolean = false;

  /**
   * 处理图片加载错误
   */
  protected _handleImageError(event: Event): void {
    this._imageError = true;
    if (this.error) {
      this.error(event);
    }
    this.requestUpdate();
  }

  /**
   * 获取尺寸样式
   */
  protected _getSizeStyle(): string {
    if (typeof this.size === 'number') {
      return `width: ${ this.size }px; height: ${ this.size }px; line-height: ${ this.size }px; font-size: ${ Math.floor(this.size * 0.4) }px;`;
    }
    return '';
  }

  /**
   * 检查是否有默认slot内容
   */
  protected _hasDefaultSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) {
      return false;
    }
    const assignedNodes = slot.assignedNodes({ flatten: true });
    return assignedNodes.length > 0 && assignedNodes.some(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() !== '';
      }
      return node.nodeType === Node.ELEMENT_NODE;
    });
  }

  /**
   * 获取文字样式
   * 当设置了文字相关属性时，应用这些样式
   */
  protected _getTextStyle(): string {
    const styles: string[] = [];
    if (this.fontFamily) {
      styles.push(`font-family: ${ this.fontFamily }`);
    }
    if (this.fontSize) {
      styles.push(`font-size: ${ this.fontSize }`);
    }
    if (this.fontColor) {
      styles.push(`color: ${ this.fontColor }`);
    }
    if (this.fontWeight) {
      styles.push(`font-weight: ${ this.fontWeight }`);
    }
    return styles.join('; ');
  }

  /**
   * 获取背景色样式
   */
  protected _getBackgroundStyle(): string {
    if (this.backgroundColor) {
      return `background-color: ${ this.backgroundColor }`;
    }
    return '';
  }

  render() {
    return template.call(this, {
      _handleImageError: this._handleImageError.bind(this),
      _getSizeStyle: this._getSizeStyle.bind(this),
      _getTextStyle: this._getTextStyle.bind(this),
      _getBackgroundStyle: this._getBackgroundStyle.bind(this),
      _imageError: this._imageError
    });
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-avatar': NvAvatar
  }
}
