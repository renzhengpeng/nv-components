/*
 * @Descripttion: checkbox-group组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * checkbox-group组件
 * 
 * @slot - 默认插槽，用于放置 Checkbox 组件
 */
@customElement('nv-checkbox-group')
export class NvCheckboxGroup extends Component {
  /**
   * 绑定值，当前选中的 Checkbox 的 value 数组
   */
  @property({ type: Object })
  value: string[] = [];

  /**
   * 原生 name 属性
   */
  @property({ type: String })
  name: string = '';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 多选框组尺寸，仅对带有边框的 Checkbox 有效
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 最小选中数量
   */
  @property({ type: Number })
  min: number = 0;

  /**
   * 最大选中数量
   */
  @property({ type: Number })
  max: number = 0;

  /**
   * 子元素列表
   */
  private _checkboxChildren: Element[] = [];

  render() {
    return template.call(this, { _handleSlotChange: this._handleSlotChange.bind(this) });
  }

  $mounted(): void {
    this._updateCheckboxes();
    this._updateCheckboxSpacing();
    // 同步 disabled 属性到 host 元素
    if (this.disabled) {
      this.setAttribute('disabled', '');
    }
  }

  /**
   * 处理 checkbox 变化
   */
  _handleCheckboxChange(value: string, checked: boolean): void {
    const currentValue = Array.isArray(this.value) ? [...this.value] : [];
    const index = currentValue.indexOf(value);

    if (checked) {
      // 检查最大选中数量
      if (this.max > 0 && currentValue.length >= this.max) {
        return;
      }
      if (index === -1) {
        currentValue.push(value);
      }
    } else {
      // 检查最小选中数量
      if (this.min > 0 && currentValue.length <= this.min) {
        return;
      }
      if (index > -1) {
        currentValue.splice(index, 1);
      }
    }

    this.value = currentValue;

    // 更新所有 checkbox 的选中状态
    this._updateCheckboxes();

    // 触发 change 事件
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * 处理 slot 变化
   */
  private _handleSlotChange(): void {
    this._updateCheckboxes();
    this._updateCheckboxSpacing();
  }

  /**
   * 更新 checkbox 间距
   */
  private _updateCheckboxSpacing(): void {
    setTimeout(() => {
      const children = Array.from(this.children);
      const checkboxChildren = children.filter(
        (node) => node.tagName?.toLowerCase() === 'nv-checkbox'
      ) as HTMLElement[];

      checkboxChildren.forEach((checkbox, index) => {
        if (index < checkboxChildren.length - 1) {
          checkbox.style.marginRight = '30px';
        } else {
          checkbox.style.marginRight = '0';
        }
      });
    }, 0);
  }

  /**
   * 更新所有 checkbox 子元素
   */
  private _updateCheckboxes(): void {
    setTimeout(() => {
      const children = Array.from(this.children);
      this._checkboxChildren = children.filter(
        (node) => node.tagName?.toLowerCase() === 'nv-checkbox'
      );

      // 更新每个 checkbox
      this._checkboxChildren.forEach((checkbox) => {
        const checkboxElement = checkbox as any;
        
        // 设置 name
        if (this.name) {
          checkboxElement.name = this.name;
        }

        // 设置 disabled：如果 checkbox-group 禁用，则所有 checkbox 都禁用
        // 否则保留 checkbox 自己的 disabled 属性（不覆盖）
        if (this.disabled) {
          checkboxElement.disabled = this.disabled;
        }
        // 如果 checkbox-group 未禁用，checkbox 的 disabled 属性保持不变

        // 设置 checked 状态（value 是数组）
        const currentValue = Array.isArray(this.value) ? this.value : [];
        checkboxElement.checked = currentValue.includes(checkboxElement.value);

        // 触发更新
        checkboxElement.requestUpdate();
      });
    }, 0);
  }

  /**
   * 属性改变回调
   */
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('value') || 
        changedProperties.has('name') || 
        changedProperties.has('disabled')) {
      this._updateCheckboxes();
    }

    if (changedProperties.has('disabled')) {
      // 更新 host 元素的 disabled 属性
      if (this.disabled) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    // 监听子元素变化，更新间距
    this._updateCheckboxSpacing();
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-checkbox-group': NvCheckboxGroup
  }
}
