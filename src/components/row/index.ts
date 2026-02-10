/*
 * @Descripttion: row组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * row组件
 * 
 * @slot - 默认插槽，用于放置 Col 组件
 */
@customElement('nv-row')
export class NvRow extends Component {
  /**
   * 栅格间距，单位为像素
   */
  @property({ type: Number })
  gutter: number = 0;

  /**
   * 布局模式，可选 flex，或不设置
   */
  @property({ type: String })
  type: 'flex' | '' = '';

  /**
   * flex 布局下的水平排列方式，可选值：start/center/end/space-around/space-between
   */
  @property({ type: String })
  justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between' = 'start';

  /**
   * flex 布局下的垂直对齐方式，可选值：top/middle/bottom
   */
  @property({ type: String })
  align: 'top' | 'middle' | 'bottom' = 'top';

  /**
   * 子元素列表
   */
  private _colChildren: Element[] = [];

  render() {
    return template.call(this, { _getRowStyle: this._getRowStyle.bind(this) });
  }

  $mounted(): void {
    this._updateGutter();
  }

  /**
   * 获取行样式
   */
  private _getRowStyle(): string {
    const styles: string[] = [];

    if (this.type === 'flex') {
      // Flexbox 布局样式
      const justifyMap: Record<string, string> = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        'space-around': 'space-around',
        'space-between': 'space-between'
      };

      const alignMap: Record<string, string> = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      };

      styles.push(`justify-content: ${ justifyMap[this.justify] || 'flex-start' }`);
      styles.push(`align-items: ${ alignMap[this.align] || 'flex-start' }`);
    }

    // gutter 间距处理
    if (this.gutter > 0) {
      const gutterValue = this.gutter / 2;
      styles.push(`margin-left: -${ gutterValue }px`);
      styles.push(`margin-right: -${ gutterValue }px`);
    }

    return styles.join('; ');
  }

  /**
   * 更新子元素的 gutter
   */
  private _updateGutter(): void {
    // 使用 setTimeout 确保 DOM 已更新
    setTimeout(() => {
      // 获取所有子元素（包括 light DOM 中的）
      const children = Array.from(this.children);
      this._colChildren = children.filter(
        (node) => node.tagName?.toLowerCase() === 'nv-col'
      );

      // 更新每个 col 的 gutter
      this._colChildren.forEach((col) => {
        if (col.tagName?.toLowerCase() === 'nv-col') {
          (col as any).gutter = this.gutter;
          (col as any).requestUpdate();
        }
      });
    }, 0);
  }

  /**
   * 属性改变回调
   */
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    
    if (changedProperties.has('gutter')) {
      this._updateGutter();
    }
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-row': NvRow
  }
}
