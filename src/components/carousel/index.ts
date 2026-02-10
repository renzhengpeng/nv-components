/*
 * @Descripttion: carousel组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';

/**
 * carousel组件
 *
 * @slot - 默认插槽，用于放置carousel-item
 */
@customElement('nv-carousel')
export class NvCarousel extends Component {
  /**
   * 当前激活的幻灯片索引
   */
  @property({ type: Number })
  value: number = 0;

  /**
   * 高度
   */
  @property({ type: String })
  height: string = '300px';

  /**
   * 是否显示指示器
   */
  @property({ type: Boolean })
  indicator: boolean = true;

  /**
   * 指示器位置
   */
  @property({ type: String })
  indicatorPosition: 'outside' | 'none' | '' = '';

  /**
   * 指示器触发方式
   */
  @property({ type: String })
  trigger: 'click' | 'hover' = 'click';

  /**
   * 是否自动切换
   */
  @property({ type: Boolean })
  autoplay: boolean = true;

  /**
   * 自动切换的时间间隔（毫秒）
   */
  @property({ type: Number })
  interval: number = 4000;

  /**
   * 切换动画类型
   */
  @property({ type: String })
  type: 'card' | '' = '';

  /**
   * 是否循环播放（无缝循环）
   */
  @property({ type: Boolean, reflect: true })
  loop: boolean = false;

  /**
   * 是否显示导航按钮（前后箭头）
   */
  @property({ type: Boolean, reflect: true })
  navigation: boolean = true;

  /**
   * 是否正在滚动
   */
  @state()  
  private _scrolling: boolean = false;

  /**
   * 滚动方向
   */
  @property({ type: String })
  direction: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * 过渡效果时长（毫秒）
   */
  @property({ type: Number })
  transitionDuration: number = 400;

  /**
   * 指示器大小（像素）
   */
  @property({ type: Number })
  indicatorSize: number = 12;

  /**
   * 幻灯片数量
   */
  @state()
  private _itemCount: number = 0;

  /**
   * 自动播放定时器
   */
  private _autoplayTimer: number | null = null;

  /**
   * 滚动超时定时器（防止scrolling状态卡死）
   */
  private _scrollingTimer: number | null = null;

  /**
   * 鼠标是否悬停在组件上
   */
  private _isHovering: boolean = false;

  /**
   * 处理指示器点击
   */
  protected _handleIndicatorClick(index: number): void {
    if (this._scrolling) return;
    if (this.trigger === 'click') {
      this.value = index;
      this.loop
        ? this._scrollToItem(this.value + 1, 'smooth')
        : this._scrollToItem(this.value, 'smooth');
      this._resetAutoplay();
    }
  }

  /**
   * 处理指示器悬停
   */
  protected _handleIndicatorHover(index: number): void {
    if (this._scrolling) return;
    if (this.trigger === 'hover') {
      this.value = index;
      this.loop
        ? this._scrollToItem(this.value + 1, 'smooth')
        : this._scrollToItem(this.value, 'smooth');
      this._resetAutoplay();
    }
  }

  /**
   * 处理上一张
   */
  protected _handlePrev(): void {
    if (this._scrolling) return;
    if (this.loop) {
      if (this.value === 0) {
        this.value = (this.value - 1 + this._itemCount) % this._itemCount;
        this._scrollToItem(0, 'smooth');
        this._resetAutoplay();
      } else {
        this.value = (this.value - 1 + this._itemCount) % this._itemCount;
        
        this._scrollToItem(this.value + 1, 'smooth');
        this._resetAutoplay();
      }
    } else {
      this.value = (this.value - 1 + this._itemCount) % this._itemCount;
      
      this._scrollToItem(this.value, 'smooth');
      this._resetAutoplay();
    }
  }

  /**
   * 处理下一张
   */
  protected _handleNext(): void {
    if (this._scrolling) return;
    if (this.loop) {
      if (this.value === this._itemCount - 1) {
        this.value = (this.value + 1) % this._itemCount;
        this._scrollToItem(this._itemCount + 1, 'smooth');
        this._resetAutoplay();
      } else {
        this.value = (this.value + 1) % this._itemCount;
        this._scrollToItem(this.value + 1, 'smooth');
        this._resetAutoplay();
      }
    } else {
      this.value = (this.value + 1) % this._itemCount;
      this._scrollToItem(this.value, 'smooth');
      this._resetAutoplay();
    }
  }
  
  private synchronizeSlides(): void {
    const allItems = this.querySelectorAll('nv-carousel-item');

    if (this.loop) {
      if (this.value === 0) {
        this._scrollToItem(1, 'instant');
      } else if (this.value === this._itemCount - 1) {
        this._scrollToItem(allItems.length - 2, 'instant');
      }
    }
  }

  /**
   * 重置自动播放
   */
  private _resetAutoplay(): void {
    if (this.autoplay) {
      this._stopAutoplay();
      this._startAutoplay();
    }
  }

  /**
   * 开始自动播放
   */
  private _startAutoplay(): void {
    if (!this.autoplay || this._itemCount <= 1 || this._isHovering) {
      return;
    }
    this._autoplayTimer = window.setInterval(() => {
      this._handleNext();
    }, this.interval);
  }

  /**
   * 处理鼠标移入
   */
  private _handleMouseEnter(): void {
    this._isHovering = true;
    this._stopAutoplay();
  }

  /**
   * 处理鼠标移出
   */
  private _handleMouseLeave(): void {
    this._isHovering = false;
    if (this.autoplay) {
      this._startAutoplay();
    }
  }

  /**
   * 处理滚动结束
   */
  protected _handleScrollEnd(): void {
    this._clearScrollingTimer();
    this._scrolling = false;
    this.synchronizeSlides();
  }

  /**
   * 清除滚动超时定时器
   */
  private _clearScrollingTimer(): void {
    if (this._scrollingTimer) {
      clearTimeout(this._scrollingTimer);
      this._scrollingTimer = null;
    }
  }

  /**
   * 停止自动播放
   */
  private _stopAutoplay(): void {
    if (this._autoplayTimer) {
      clearInterval(this._autoplayTimer);
      this._autoplayTimer = null;
    }
  }

  /**
   * 更新幻灯片数量
   */
  private _updateItemCount(): void {
    const allItems = this.querySelectorAll('nv-carousel-item');
    const items = Array.from(allItems).filter(item => !item.hasAttribute('data-clone'));
    this._itemCount = items.length;
    // 确保value在有效范围内
    if (this.value >= this._itemCount) {
      this._scrollToItem(Math.max(0, this._itemCount - 1), 'smooth');
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
  }

  /**
   * 滚动到指定的 item
   */
  private _scrollToItem(index: number, behavior: ScrollBehavior = 'smooth'): void {
    const items = this.querySelectorAll('nv-carousel-item');
    const targetItem = items[index] as HTMLElement;
    
    if (!targetItem) {
      // 如果目标元素不存在，不改变scrolling状态
      return;
    }

    // 清除之前的超时定时器
    this._clearScrollingTimer();
    this._scrolling = true;
    
    // 在下一帧执行，确保几何信息已更新
    requestAnimationFrame(() => {
      const scrollContainer = this.shadowRoot?.querySelector('.nv-carousel__container') as HTMLElement;
      if (!scrollContainer) {
        // 如果容器不存在，重置scrolling状态
        this._scrolling = false;
        return;
      }

      const scrollContainerRect = scrollContainer.getBoundingClientRect();
      const targetItemRect = targetItem.getBoundingClientRect();

      // 根据方向计算滚动距离
      const isVertical = this.direction === 'vertical';
      
      if (isVertical) {
        const nextTop = targetItemRect.top - scrollContainerRect.top;
        scrollContainer.scrollTo({
          top: nextTop + scrollContainer.scrollTop,
          behavior
        });
      } else {
        const nextLeft = targetItemRect.left - scrollContainerRect.left;
        scrollContainer.scrollTo({
          left: nextLeft + scrollContainer.scrollLeft,
          behavior
        });
      }
      
      if (behavior === 'instant') {
        // instant 模式立即重置
        this._scrolling = false;
      } else {
        // smooth 模式设置超时保护，防止scrollend事件未触发导致状态卡死
        // 超时时间设为过渡时长的1.2倍，确保动画完成后能重置状态
        this._scrollingTimer = window.setTimeout(() => {
          this._scrolling = false;
          this.synchronizeSlides();
        }, this.transitionDuration * 1.2);
      }
    });
  }

  protected $mounted(): void {
    this._updateItemCount();

    if (this.loop) {
      // 克隆首尾 item
      const items = Array.from(this.querySelectorAll('nv-carousel-item'));
      if (items.length > 0) {
        const firstItem = items[0];
        const lastItem = items[items.length - 1];

        // 克隆第一个 item 到最后
        const firstClone = firstItem.cloneNode(true) as HTMLElement;
        firstClone.setAttribute('data-clone', '0');
        this.append(firstClone);

        // 克隆最后一个 item 到最前
        const lastClone = lastItem.cloneNode(true) as HTMLElement;
        lastClone.setAttribute('data-clone', String(items.length - 1));
        this.prepend(lastClone);
        
        // this.value = 1;
        this._scrollToItem(1, 'instant');
      }
    }

    // 监听子元素变化
    const observer = new MutationObserver(() => {
      this._updateItemCount();
      this.requestUpdate();
    });
    observer.observe(this, { childList: true, subtree: true });

    // 添加鼠标事件监听
    this.addEventListener('mouseenter', this._handleMouseEnter.bind(this));
    this.addEventListener('mouseleave', this._handleMouseLeave.bind(this));

    if (this.autoplay) {
      this._startAutoplay();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopAutoplay();
    this._clearScrollingTimer();
    
    // 移除事件监听
    this.removeEventListener('mouseenter', this._handleMouseEnter.bind(this));
    this.removeEventListener('mouseleave', this._handleMouseLeave.bind(this));
  }

  render() {
    return template.call(this, {
      _handleIndicatorClick: this._handleIndicatorClick.bind(this),
      _handleIndicatorHover: this._handleIndicatorHover.bind(this),
      _handlePrev: this._handlePrev.bind(this),
      _handleNext: this._handleNext.bind(this),
      _itemCount: this._itemCount
    });
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-carousel': NvCarousel
  }
}
