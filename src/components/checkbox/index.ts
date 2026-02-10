/*
 * @Descripttion: checkbox组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * checkbox组件
 *
 * @slot - 默认插槽，用于放置标签文本
 */
@customElement('nv-checkbox')
export class NvCheckbox extends Component {
  /**
   * 表单关联支持
   */
  static formAssociated = true;

  /**
   * 焦点委托：校验失败时表单会 focus 到无效控件，委托到内部 input 使其可聚焦，避免 "is not focusable" 报错
   */
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true
  };

  /**
   * ElementInternals 实例，用于表单集成
   */
  private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  /**
   * 复选框的值
   */
  @property({ type: String })
  value: string = '';

  /**
   * 复选框的标签
   */
  @property({ type: String })
  label: string = '';

  /**
   * 原生 name 属性（用于表单提交）
   */
  @property({ type: String, reflect: true })
  name: string = '';

  /**
   * 关联的表单 id（与原生 form 属性一致，用于在表单外仍可参与提交与校验）
   */
  @property({ type: String, reflect: true })
  form: string = '';

  /**
   * 是否必选（参与 form.reportValidity() / checkValidity()，未勾选时校验不通过）
   */
  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  /**
   * 是否选中
   */
  @property({ type: Boolean })
  checked: boolean = false;

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否显示边框
   */
  @property({ type: Boolean })
  border: boolean = false;

  /**
   * 是否半选状态
   */
  @property({ type: Boolean })
  indeterminate: boolean = false;

  /**
   * 复选框尺寸，仅对带有边框的复选框有效.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 复选框组实例（从父组件获取）
   */
  private _checkboxGroup: any = null;

  render() {
    return template.call(this, {
      _handleChange: this._handleChange.bind(this),
      _handleFocus: this._handleFocus.bind(this),
      _handleBlur: this._handleBlur.bind(this),
      _handleLabelClick: this._handleLabelClick.bind(this)
    });
  }

  $mounted(): void {
    this._updateCheckboxGroup();
    // 同步 disabled 属性到 host 元素
    if (this.disabled) {
      this.setAttribute('disabled', '');
    }
  }

  /**
   * 处理 change 事件
   */
  private _handleChange(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      // 恢复 checked 状态
      const input = event.target as HTMLInputElement;
      if (input) {
        input.checked = this.checked;
      }
      return;
    }

    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    this._updateFormValue();
    if (this.required) {
      this._updateValidity();
    }

    if (this._checkboxGroup) {
      // 通知 checkbox-group 更新选中值
      this._checkboxGroup._handleCheckboxChange(this.value, this.checked);
    }

    // 触发自定义 change 事件
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: { value: this.value, checked: this.checked },
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * 处理 focus 事件
   */
  private _handleFocus(): void {
    this.dispatchEvent(new CustomEvent('nv-focus', {
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * 处理 blur 事件
   */
  private _handleBlur(): void {
    this.dispatchEvent(new CustomEvent('nv-blur', {
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * 处理 label 点击事件
   */
  private _handleLabelClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }

  /**
   * 更新与 checkbox-group 的关联
   */
  private _updateCheckboxGroup(): void {
    setTimeout(() => {
      let parent = this.parentElement;

      // 查找父组件 nv-checkbox-group
      while (parent && parent.tagName) {
        if (parent.tagName.toLowerCase() === 'nv-checkbox-group') {
          this._checkboxGroup = parent;
          const groupValue = (parent as any).value || [];
          const groupName = (parent as any).name || 'checkbox-group';

          // 同步 name
          if (groupName) {
            this.name = groupName;
          }

          // 同步 checked 状态（value 是数组）
          this.checked = Array.isArray(groupValue) && groupValue.includes(this.value);

          // 同步 disabled 状态：如果 checkbox-group 禁用，则 checkbox 也禁用
          // 否则保留 checkbox 自己的 disabled 属性
          if ((parent as any).disabled) {
            this.disabled = (parent as any).disabled;
          }
          // 如果 checkbox-group 未禁用，保留 checkbox 自己的 disabled 属性（不覆盖）

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

    if (changedProperties.has('checked')) {
      // 更新原生 input 的 checked 状态
      const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (input && input.checked !== this.checked) {
        input.checked = this.checked;
      }
      this._updateFormValue();
    }
    if (changedProperties.has('required') || changedProperties.has('checked')) {
      this._updateValidity();
    }

    if (changedProperties.has('disabled')) {
      // 更新 host 元素的 disabled 属性
      if (this.disabled) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  }

  /**
   * 表单集成：更新表单值（勾选时提交 value，未勾选时不提交）
   */
  private _updateFormValue(): void {
    if (this._internals) {
      this._internals.setFormValue(this.checked ? this.value : null);
    }
  }

  /**
   * 表单集成：根据 required 与 checked 更新 ElementInternals 校验状态
   */
  private _updateValidity(): void {
    if (!this._internals) return;
    if (this.required && !this.checked) {
      this._internals.setValidity({ valueMissing: true }, '请勾选此项');
    } else {
      this._internals.setValidity({});
    }
  }

  /**
   * 表单集成：表单重置时的回调
   */
  formResetCallback(): void {
    this.checked = false;
    this._updateFormValue();
    this._updateValidity();
    const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
    if (input) {
      input.checked = false;
    }
    this.requestUpdate();
  }

  /**
   * 表单集成：表单状态恢复时的回调
   */
  formStateRestoreCallback(state: string, mode: 'restore' | 'autocomplete'): void {
    if (mode === 'restore') {
      this.checked = state === 'true' || state === this.value;
      this._updateFormValue();
      const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (input) {
        input.checked = this.checked;
      }
      this.requestUpdate();
    }
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-checkbox': NvCheckbox
  }
}
