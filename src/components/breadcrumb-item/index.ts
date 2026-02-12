/*
 * @Descripttion: breadcrumb-item组件
 * @creater: zhengpeng.ren
 * @since: 2026-02-12
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
 * breadcrumb-item组件
 *
 * @slot - 默认插槽，用于显示文字或自定义内容
 * @slot separator - 分隔符插槽
 */
@customElement('nv-breadcrumb-item')
export class NvBreadcrumbItem extends Component {
  /**
   * 链接地址
   */
  @property({ type: String })
  href: string = '';

  /**
   * 链接打开方式
   */
  @property({ type: String })
  target: '_self' | '_blank' | '_parent' | '_top' = '_self';

  /**
   * 当前项分隔符（优先级高于父组件 separator）
   */
  @property({ type: String })
  separator: string = '';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 从父组件计算得到，是否为最后一项
   */
  @property({ type: Boolean, attribute: false })
  isLast: boolean = false;

  /**
   * 从父组件继承的分隔符
   */
  @property({ type: String, attribute: false })
  parentSeparator: string = '/';

  /**
   * 从父组件计算得到，索引
   */
  @property({ type: Number, attribute: false })
  index: number = 0;

  render() {
    return template.call(this, {
      _handleClick: this._handleClick.bind(this)
    });
  }

  private _handleClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(new CustomEvent('nv-click', {
      detail: {
        index: this.index,
        href: this.href
      },
      bubbles: true,
      composed: true
    }));
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-breadcrumb-item': NvBreadcrumbItem;
  }
}
