/*
 * @Descripttion: switch组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
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
import classNamesConfig from './classNames';

/**
 * active-value / inactive-value 属性转换器：支持纯字符串（如 "on"/"off"）与 JSON，
 * 避免 type: Object 下 JSON.parse("on") 失败导致属性为 undefined、开关无法关闭
 */
const objectOrStringConverter = {
  fromAttribute(value: string | null): string | number | boolean | undefined {
    if (value === null || value === undefined) return undefined;
    try {
      const parsed = JSON.parse(value);
      return parsed as string | number | boolean;
    } catch {
      return value;
    }
  },
  toAttribute(value: string | number | boolean | undefined): string | null {
    if (value === undefined || value === null) return null;
    if (typeof value === 'string') return value;
    return JSON.stringify(value);
  }
};

/**
 * switch组件
 */
@customElement('nv-switch')
export class NvSwitch extends Component {
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
   * 绑定值
   */
  @property({ type: Object })
  value: string | number | boolean = false;

  /**
   * 表单字段名称（用于表单提交）
   */
  @property({ type: String, reflect: true })
  name: string = '';

  /**
   * 关联的表单 id（与原生 form 属性一致，用于在表单外仍可参与提交与校验）
   */
  @property({ type: String, reflect: true })
  form: string = '';

  /**
   * 是否必选为开启状态（参与 form.reportValidity() / checkValidity()，未开启时校验不通过）
   */
  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * switch 打开时的文字描述
   */
  @property({ type: String, attribute: 'active-text' })
  activeText: string = '';

  /**
   * switch 关闭时的文字描述
   */
  @property({ type: String, attribute: 'inactive-text' })
  inactiveText: string = '';

  /**
   * switch 打开时的值
   */
  @property({ type: Object, attribute: 'active-value', converter: objectOrStringConverter })
  activeValue: string | number | boolean = true;

  /**
   * switch 关闭时的值
   */
  @property({ type: Object, attribute: 'inactive-value', converter: objectOrStringConverter })
  inactiveValue: string | number | boolean = false;

  /**
   * switch 打开时的背景色
   */
  @property({ type: String, attribute: 'active-color' })
  activeColor: string = '';

  /**
   * switch 关闭时的背景色
   */
  @property({ type: String, attribute: 'inactive-color' })
  inactiveColor: string = '';

  /**
   * switch 打开时的图标
   */
  @property({ type: String, attribute: 'active-icon' })
  activeIcon: string = '';

  /**
   * switch 关闭时的图标
   */
  @property({ type: String, attribute: 'inactive-icon' })
  inactiveIcon: string = '';

  /**
   * switch 的尺寸，可选: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * switch 的宽度（像素），若指定则文本超长隐藏
   */
  @property({ type: Number })
  width: number = 0;

  /**
   * 获取当前是否选中
   */
  get checked(): boolean {
    return this.value === this.activeValue;
  }

  render() {
    return template.call(this, {
      _handleChange: this._handleChange.bind(this),
      _handleClick: this._handleClick.bind(this)
    });
  }

  $mounted(): void {
    // 初始化完成
    this._updateColors();
  }

  /**
   * 属性改变回调
   */
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('value')) {
      // 同步 input 元素的 checked 状态
      const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (input && input.checked !== this.checked) {
        input.checked = this.checked;
      }
      this._updateFormValue();
    }
    if (changedProperties.has('required') || changedProperties.has('value')) {
      this._updateValidity();
    }

    // 更新自定义颜色
    if (changedProperties.has('activeColor') || changedProperties.has('inactiveColor') || changedProperties.has('value')) {
      this._updateColors();
    }
  }

  /**
   * 更新自定义颜色
   */
  private _updateColors(): void {
    setTimeout(() => {
      const core = this.shadowRoot?.querySelector(`.${ classNamesConfig.elements.core }`) as HTMLElement;
      if (!core) return;

      if (this.checked && this.activeColor) {
        core.style.borderColor = this.activeColor;
        core.style.backgroundColor = this.activeColor;
      } else if (!this.checked && this.inactiveColor) {
        core.style.borderColor = this.inactiveColor;
        core.style.backgroundColor = this.inactiveColor;
      } else {
        // 如果没有自定义颜色，清除内联样式，使用 CSS 默认样式
        core.style.borderColor = '';
        core.style.backgroundColor = '';
      }
    }, 0);
  }

  /**
   * 处理点击事件（点击可见区域时在此处理，避免与内部 input 的 change 重复或与表单 label 联动导致二次切换）
   */
  private _handleClick(event: Event): void {
    const targetTag = (event.target as HTMLElement).tagName;
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // 如果点击的是 input 元素，不处理（由 change 事件处理）
    if (targetTag === 'INPUT') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    // 切换 value
    const newValue = this.checked ? this.inactiveValue : this.activeValue;
    this.value = newValue;

    this._updateFormValue();
    this._updateValidity();

    // 同步 input 元素的状态
    const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
    if (input) {
      input.checked = this.checked;
    }

    // 触发 change 事件
    this.dispatchEvent(
      new CustomEvent('nv-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * 处理 change 事件
   */
  private _handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputChecked = input?.checked;
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.value = inputChecked ? this.activeValue : this.inactiveValue;

    this._updateFormValue();
    this._updateValidity();

    this.dispatchEvent(
      new CustomEvent('nv-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * 表单集成：更新表单值（提交当前 value 的字符串形式）
   */
  private _updateFormValue(): void {
    if (this._internals) {
      this._internals.setFormValue(String(this.value));
    }
  }

  /**
   * 表单集成：根据 required 与 value 更新 ElementInternals 校验状态
   * required 时要求为开启状态（value === activeValue）
   */
  private _updateValidity(): void {
    if (!this._internals) return;
    if (this.required && !this.checked) {
      this._internals.setValidity({ valueMissing: true }, '请开启');
    } else {
      this._internals.setValidity({});
    }
  }

  /**
   * 表单集成：表单重置时的回调
   */
  formResetCallback(): void {
    this.value = this.inactiveValue;
    this._updateFormValue();
    this._updateValidity();
    const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
    if (input) {
      input.checked = this.checked;
    }
    this.requestUpdate();
  }

  /**
   * 表单集成：表单状态恢复时的回调
   */
  formStateRestoreCallback(state: string, mode: 'restore' | 'autocomplete'): void {
    if (mode === 'restore') {
      if (state === String(this.activeValue)) {
        this.value = this.activeValue;
      } else if (state === String(this.inactiveValue)) {
        this.value = this.inactiveValue;
      } else {
        this.value = state as unknown as string | number | boolean;
      }
      this._updateFormValue();
      const input = this.shadowRoot?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      if (input) {
        input.checked = this.checked;
      }
      this.requestUpdate();
    }
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-switch': NvSwitch;
  }
}
