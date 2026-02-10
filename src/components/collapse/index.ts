/*
 * @Descripttion: collapse组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import '../collapse-item/index';

/**
 * collapse组件
 *
 * @slot - 默认插槽，用于放置collapse-item
 */
@customElement('nv-collapse')
export class NvCollapse extends Component {
  /**
   * 当前激活的面板（手风琴模式为字符串，非手风琴模式为字符串数组）
   */
  @property({ type: String })
  value: string | string[] = '';

  /**
   * 是否手风琴模式（同时只能展开一个面板）
   */
  @property({ type: Boolean })
  accordion: boolean = false;

  /**
   * 处理面板切换
   */
  protected _handleItemChange(name: string, isActive: boolean): void {
    if (this.accordion) {
      // 手风琴模式
      this.value = isActive ? name : '';
    } else {
      // 非手风琴模式
      const currentValue = Array.isArray(this.value) ? [...this.value] : [];
      const index = currentValue.indexOf(name);
      if (isActive) {
        if (index === -1) {
          currentValue.push(name);
        }
      } else {
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      }
      this.value = currentValue;
    }

    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
    this.requestUpdate();
  }

  /**
   * 检查面板是否激活
   */
  protected _isItemActive(name: string): boolean {
    if (this.accordion) {
      return this.value === name;
    } else {
      return Array.isArray(this.value) && this.value.includes(name);
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    // 更新所有子项的激活状态
    if (changedProperties.has('value')) {
      const items = this.querySelectorAll('nv-collapse-item');
      items.forEach((item: any) => {
        if (item.name) {
          item.isActive = this._isItemActive(item.name);
        }
      });
    }
  }

  protected $mounted(): void {
    // 监听子项的item-change事件
    this.addEventListener('nv-item-change', (event: Event) => {
      const customEvent = event as CustomEvent;
      const { name, isActive } = customEvent.detail;
      this._handleItemChange(name, isActive);
    });

    // 初始化子项的激活状态
    const items = this.querySelectorAll('nv-collapse-item');
    items.forEach((item: any) => {
      if (item.name) {
        item.isActive = this._isItemActive(item.name);
      }
    });
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-collapse': NvCollapse
  }
}
