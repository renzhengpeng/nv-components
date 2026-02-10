/*
 * @Descripttion: infinite-scroll组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * infinite-scroll组件
 *
 * @slot - 默认插槽，滚动内容
 */
@customElement('nv-infinite-scroll')
export class NvInfiniteScroll extends Component {
  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否立即执行加载方法，以防初始状态下内容无法撑满容器
   */
  @property({ type: Boolean })
  immediate: boolean = true;

  /**
   * 触发加载的距离阈值（像素）
   */
  @property({ type: Number })
  distance: number = 0;

  /**
   * 是否加载中
   */
  @state()
  private _loading: boolean = false;

  /**
   * 滚动容器引用
   */
  private _scrollContainer: HTMLElement | null = null;

  /**
   * 滚动监听器
   */
  private _scrollHandler: (() => void) | null = null;

  /**
   * 处理滚动事件
   */
  private _handleScroll(): void {
    if (this.disabled || this._loading) {
      return;
    }

    const container = this._scrollContainer || this;
    const scrollTop = container.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = container.scrollHeight || document.documentElement.scrollHeight;
    const clientHeight = container.clientHeight || window.innerHeight;

    const distance = this.distance || 100;
    const shouldLoad = scrollTop + clientHeight >= scrollHeight - distance;

    if (shouldLoad) {
      this._loading = true;
      this.dispatchEvent(new CustomEvent('nv-load', {
        bubbles: true,
        composed: true
      }));
    }
  }

  /**
   * 完成加载（由外部调用）
   */
  public finishLoad(): void {
    this._loading = false;
    this.requestUpdate();
  }

  protected $mounted(): void {
    // 查找滚动容器
    this._scrollContainer = this._findScrollContainer();

    this._scrollHandler = this._handleScroll.bind(this);
    const container = this._scrollContainer || window;
    container.addEventListener('scroll', this._scrollHandler, { passive: true });

    if (this.immediate) {
      // 立即检查是否需要加载
      requestAnimationFrame(() => {
        this._handleScroll();
      });
    }
  }

  /**
   * 查找滚动容器
   */
  private _findScrollContainer(): HTMLElement | null {
    let element: HTMLElement | null = this.parentElement;
    while (element) {
      const computedStyle = window.getComputedStyle(element);
      const overflow = computedStyle.overflow;
      const overflowY = computedStyle.overflowY;
      if (overflow === 'auto' || overflow === 'scroll' || overflowY === 'auto' || overflowY === 'scroll') {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._scrollHandler) {
      const container = this._scrollContainer || window;
      container.removeEventListener('scroll', this._scrollHandler);
      this._scrollHandler = null;
    }
  }

  render() {
    return template.call(this, {
      _loading: this._loading
    });
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-infinite-scroll': NvInfiniteScroll
  }
}

