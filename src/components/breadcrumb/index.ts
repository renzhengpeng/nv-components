/*
 * @Descripttion: breadcrumb组件
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
import '../breadcrumb-item/index';
import { PropertyValues } from 'lit';

/**
 * breadcrumb组件
 *
 * @slot - 默认插槽，用于放置 nv-breadcrumb-item 组件
 */
@customElement('nv-breadcrumb')
export class NvBreadcrumb extends Component {
  /**
   * 全局分隔符
   */
  @property({ type: String })
  separator: string = '/';

  render() {
    return template.call(this, {
      _handleSlotChange: this._handleSlotChange.bind(this)
    });
  }

  $mounted(): void {
    this._updateItems();
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('separator')) {
      this._updateItems();
    }
  }

  private _handleSlotChange(): void {
    this._updateItems();
  }

  private _updateItems(): void {
    const items = Array.from(this.querySelectorAll('nv-breadcrumb-item')) as any[];
    items.forEach((item, index) => {
      item.index = index;
      item.isLast = index === items.length - 1;
      item.parentSeparator = this.separator;
    });
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-breadcrumb': NvBreadcrumb;
  }
}
