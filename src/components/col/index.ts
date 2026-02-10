/*
 * @Descripttion: col组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * col组件
 * 
 * @slot - 默认插槽，用于放置内容
 */
@customElement('nv-col')
export class NvCol extends Component {
  /**
   * 栅格占据的列数，范围为 1-24
   */
  @property({ type: Number })
  span: number = 24;

  /**
   * 栅格左侧的间隔格数，范围为 0-24
   */
  @property({ type: Number })
  offset: number = 0;

  /**
   * 栅格向右移动格数，范围为 0-24
   */
  @property({ type: Number })
  push: number = 0;

  /**
   * 栅格向左移动格数，范围为 0-24
   */
  @property({ type: Number })
  pull: number = 0;

  /**
   * 栅格间距（从父组件 row 获取）
   */
  gutter: number = 0;

  /**
   * 响应式断点：xs（超小屏幕，<768px）
   */
  @property({ type: Number })
  xs?: number;

  /**
   * 响应式断点：sm（小屏幕，≥768px）
   */
  @property({ type: Number })
  sm?: number;

  /**
   * 响应式断点：md（中等屏幕，≥992px）
   */
  @property({ type: Number })
  md?: number;

  /**
   * 响应式断点：lg（大屏幕，≥1200px）
   */
  @property({ type: Number })
  lg?: number;

  /**
   * 响应式断点：xl（超大屏幕，≥1920px）
   */
  @property({ type: Number })
  xl?: number;

  render() {
    return template.call(this);
  }

  /**
   * 更新样式到 :host
   */
  private _updateHostStyle(): void {
    const style = this._getColStyle();
    if (style) {
      this.style.cssText = style;
    }
  }

  $mounted(): void {
    this._updateGutterFromParent();
    this._updateHostStyle();
    // 监听窗口大小变化，用于响应式处理
    window.addEventListener('resize', this._handleResize.bind(this));
  }

  protected $destroyed(): void {
    super.$destroyed();
    window.removeEventListener('resize', this._handleResize.bind(this));
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
  }

  /**
   * 处理窗口大小变化（防抖处理）
   */
  private _resizeTimer?: number;
  private _handleResize(): void {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
    this._resizeTimer = window.setTimeout(() => {
      this._updateHostStyle();
    }, 100);
  }

  /**
   * 获取列样式
   */
  private _getColStyle(): string {
    const styles: string[] = [];
    const gutter = this.gutter || 0;

    // 获取当前屏幕宽度，用于响应式处理
    const screenWidth = window.innerWidth;
    let currentSpan = this.span;

    // 响应式断点处理
    if (screenWidth >= 1920 && this.xl !== undefined) {
      currentSpan = this.xl;
    } else if (screenWidth >= 1200 && this.lg !== undefined) {
      currentSpan = this.lg;
    } else if (screenWidth >= 992 && this.md !== undefined) {
      currentSpan = this.md;
    } else if (screenWidth >= 768 && this.sm !== undefined) {
      currentSpan = this.sm;
    } else if (screenWidth < 768 && this.xs !== undefined) {
      currentSpan = this.xs;
    }

    // 计算宽度
    const width = (currentSpan / 24) * 100;
    styles.push(`width: ${ width }%`);

    // offset 偏移（通过 margin-left）
    if (this.offset > 0) {
      const marginLeft = (this.offset / 24) * 100;
      styles.push(`margin-left: ${ marginLeft }%`);
    }

    // push 向右移动（通过 position: relative + left）
    if (this.push > 0) {
      const left = (this.push / 24) * 100;
      styles.push('position: relative');
      styles.push(`left: ${ left }%`);
    }

    // pull 向左移动（通过 position: relative + right）
    if (this.pull > 0) {
      const right = (this.pull / 24) * 100;
      styles.push('position: relative');
      styles.push(`right: ${ right }%`);
    }

    // gutter 间距
    if (gutter > 0) {
      const paddingValue = gutter / 2;
      styles.push(`padding-left: ${ paddingValue }px`);
      styles.push(`padding-right: ${ paddingValue }px`);
    }

    return styles.join('; ');
  }

  /**
   * 从父组件获取 gutter
   */
  private _updateGutterFromParent(): void {
    // 使用 setTimeout 确保父组件已挂载
    setTimeout(() => {
      let parent = this.parentElement;
      
      // 查找父组件 nv-row
      while (parent && parent.tagName) {
        if (parent.tagName.toLowerCase() === 'nv-row') {
          const rowComponent = parent as any;
          if (rowComponent && rowComponent.gutter !== undefined) {
            this.gutter = rowComponent.gutter || 0;
            this._updateHostStyle();
          }
          break;
        }
        parent = parent.parentElement;
      }
    }, 0);
  }

  /**
   * 属性改变回调
   */
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    
    // 当 span、offset、push、pull 或响应式属性变化时，需要更新样式
    if (changedProperties.has('gutter') || 
        changedProperties.has('span') || 
        changedProperties.has('offset') || 
        changedProperties.has('push') || 
        changedProperties.has('pull') ||
        changedProperties.has('xs') ||
        changedProperties.has('sm') ||
        changedProperties.has('md') ||
        changedProperties.has('lg') ||
        changedProperties.has('xl')) {
      this._updateHostStyle();
    }
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-col': NvCol
  }
}
