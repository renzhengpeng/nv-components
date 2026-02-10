/*
 * @Descripttion: radio组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * radio组件
 *
 * @slot - 默认插槽，用于放置标签文本
 */
@customElement('nv-radio')
export class NvRadio extends Component {
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
   * 单选框的值
   */
  @property({ type: String })
  value: string = '';

  /**
   * 单选框的标签
   */
  @property({ type: String })
  label: string = '';

  /**
   * 原生 name 属性（用于表单提交，同组 radio 共用同一 name）
   */
  @property({ type: String, reflect: true })
  name: string = '';

  /**
   * 关联的表单 id（与原生 form 属性一致，用于在表单外仍可参与提交与校验）
   */
  @property({ type: String, reflect: true })
  form: string = '';

  /**
   * 是否必选（同组中至少选一项时参与 form.reportValidity() / checkValidity()）
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
   * 单选框类型，可选: radio/button，默认为 radio
   */
  @property({ type: String })
  type: 'radio' | 'button' = 'radio';

  /**
   * 单选框尺寸，可选: mini/small/medium/large/huge，默认为 medium
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 单选框组实例（从父组件获取）
   */
  private _radioGroup: any = null;

  render() {
    return template.call(this, {
      _handleChange: this._handleChange.bind(this),
      _handleFocus: this._handleFocus.bind(this),
      _handleBlur: this._handleBlur.bind(this)
    });
  }

  $mounted(): void {
    this._updateRadioGroup();
  }

  /**
   * 处理 change 事件
   */
  private _handleChange(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    this._updateFormValue();
    this._updateValidity();

    if (this.checked && this._radioGroup) {
      // 通知 radio-group 更新选中值
      this._radioGroup._handleRadioChange(this.value);
    }

    // 触发自定义 change 事件
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
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
   * 更新与 radio-group 的关联
   */
  private _updateRadioGroup(): void {
    setTimeout(() => {
      let parent = this.parentElement;

      // 查找父组件 nv-radio-group
      while (parent && parent.tagName) {
        if (parent.tagName.toLowerCase() === 'nv-radio-group') {
          this._radioGroup = parent;
          const groupValue = (parent as any).value;
          const groupName = (parent as any).name || 'radio-group';

          // 同步 name
          if (groupName) {
            this.name = groupName;
          }

          // 同步 checked 状态
          this.checked = this.value === groupValue;

          // 同步 disabled 状态：如果 radio-group 禁用，则 radio 也禁用
          // 否则保留 radio 自己的 disabled 属性
          if ((parent as any).disabled) {
            this.disabled = (parent as any).disabled;
          }
          // 如果 radio-group 未禁用，保留 radio 自己的 disabled 属性（不覆盖）

          // 同步 size 状态
          if ((parent as any).size) {
            this.size = (parent as any).size;
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

    if (changedProperties.has('checked')) {
      // 更新原生 input 的 checked 状态
      const input = this.shadowRoot?.querySelector('input[type="radio"]') as HTMLInputElement;
      if (input && input.checked !== this.checked) {
        input.checked = this.checked;
      }
      this._updateFormValue();
    }
    if (changedProperties.has('required') || changedProperties.has('checked')) {
      this._updateValidity();
    }

    if (changedProperties.has('disabled')) {
      // 更新原生 input 的 disabled 状态
      const input = this.shadowRoot?.querySelector('input[type="radio"]') as HTMLInputElement;
      if (input) {
        input.disabled = this.disabled;
      }
    }
  }

  /**
   * 表单集成：更新表单值（选中时提交 value，未选中时不提交）
   */
  private _updateFormValue(): void {
    if (this._internals) {
      this._internals.setFormValue(this.checked ? this.value : null);
    }
  }

  /**
   * 表单集成：根据 required 与同组选中状态更新 ElementInternals 校验状态
   * 当 required 且同 name 组内无选中项时报告 valueMissing
   */
  private _updateValidity(): void {
    if (!this._internals) return;
    if (!this.required) {
      this._internals.setValidity({});
      return;
    }
    if (this.checked) {
      this._internals.setValidity({});
      return;
    }
    const form = this._internals.form;
    if (form) {
      const sameNameRadios = Array.from(form.elements).filter(
        (el): el is NvRadio => el instanceof NvRadio && (el as NvRadio).name === this.name
      );
      if (sameNameRadios.some(r => r.checked)) {
        this._internals.setValidity({});
        return;
      }
    }
    this._internals.setValidity({ valueMissing: true }, '请选择一项');
  }

  /**
   * 表单集成：表单重置时的回调
   */
  formResetCallback(): void {
    this.checked = false;
    this._updateFormValue();
    this._updateValidity();
    const input = this.shadowRoot?.querySelector('input[type="radio"]') as HTMLInputElement;
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
      this.checked = state === this.value;
      this._updateFormValue();
      const input = this.shadowRoot?.querySelector('input[type="radio"]') as HTMLInputElement;
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
    'nv-radio': NvRadio
  }
}
