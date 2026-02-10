/*
 * @Descripttion: message组件
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
export * from './message';

/**
 * message组件
 *
 * @slot - 默认插槽，用于放置消息内容
 */
@customElement('nv-message')
export class NvMessage extends Component {
  /**
   * 消息类型，可选: success/warning/info/error
   */
  @property({ type: String, reflect: true })
  type: 'success' | 'warning' | 'info' | 'error' = 'info';

  /**
   * 是否显示图标
   */
  @property({ type: Boolean })
  showIcon: boolean = true;

  /**
   * 是否居中
   */
  @property({ type: Boolean })
  center: boolean = false;

  /**
   * 是否可关闭
   */
  @property({ type: Boolean })
  closable: boolean = false;

  /**
   * 显示的文字
   */
  @property({ type: String })
  message: string = '';

  /**
   * 显示时长，毫秒。设为 0 则不会自动关闭
   */
  @property({ type: Number })
  duration: number = 3000;

  private _timer: number | null = null;
  private _remainingDuration: number = 0;
  private _startTime: number = 0;

  render() {
    return template.call(this, {
      _handleClose: this._handleClose.bind(this),
      _handleMouseEnter: this._handleMouseEnter.bind(this),
      _handleMouseLeave: this._handleMouseLeave.bind(this)
    });
  }

  $mounted(): void {
    // 触发从上往下的出现动画
    requestAnimationFrame(() => {
      this.style.opacity = '1';
      this.style.transform = 'translateX(-50%) translateY(0)';
    });

    this._startTimer();
  }

  /**
   * 启动倒计时
   */
  private _startTimer(): void {
    if (this.duration > 0) {
      // 如果是首次启动，使用 duration；否则使用剩余时间
      if (this._remainingDuration === 0) {
        this._remainingDuration = this.duration;
      }
      this._startTime = Date.now();
      this._timer = window.setTimeout(() => {
        this.close();
      }, this._remainingDuration);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._timer) {
      window.clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * 处理关闭事件
   */
  private _handleClose(event: Event): void {
    event.stopPropagation();
    this.close();
  }

  /**
   * 处理鼠标移入事件
   */
  private _handleMouseEnter(): void {
    if (this._timer && this.duration > 0) {
      // 计算剩余时间
      const elapsed = Date.now() - this._startTime;
      this._remainingDuration = this._remainingDuration - elapsed;
      // 清除定时器
      window.clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * 处理鼠标移出事件
   */
  private _handleMouseLeave(): void {
    if (this._remainingDuration > 0 && this.duration > 0) {
      // 重新启动定时器
      this._startTime = Date.now();
      this._timer = window.setTimeout(() => {
        this.close();
      }, this._remainingDuration);
    }
  }

  /**
   * 关闭消息
   */
  close(): void {
    if (this._timer) {
      window.clearTimeout(this._timer);
      this._timer = null;
    }
    this.style.opacity = '0';
    this.style.transform = 'translateX(-50%) translateY(-100%)';
    setTimeout(() => {
      this.remove();
    }, 300);
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-message': NvMessage;
  }
}
