/*
 * @Descripttion: select组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import { html } from '../../based-on';
import { repeat } from 'lit/directives/repeat.js';
import { virtualize, virtualizerRef } from '@lit-labs/virtualizer/virtualize.js';
import { FlowLayout } from '@lit-labs/virtualizer/layouts/flow.js';
import type { TemplateResult } from 'lit';

/**
 * 继承 FlowLayout，在构造函数内同步应用 _itemSize，避免 BaseLayout 异步 set config 导致首次 reflow 仍用默认 100px 高度，
 * 从而修复选项叠加与滚动空白。
 */
class SelectFlowLayout extends FlowLayout {
  constructor(
    hostSink: (message: unknown) => void,
    config?: { _itemSize?: { width?: number; height?: number } }
  ) {
    super(hostSink as never, config as never);
    if (config?._itemSize) {
      this._itemSize = { ...this._itemSize, ...config._itemSize };
    }
  }

  /** 禁用子项测量：日志显示首次测量得到 optionHeight≈22px，而 CSS 为 34px，导致布局按 22px 定位、选项叠加。强制仅用 _itemSize 定位。 */
  override get measureChildren(): boolean {
    return false;
  }

  /**
   * 禁用测量时 _metricsCache 始终为空，super 可能算出 _scrollSize=1（items 未就绪时），导致 lower > _scrollSize、
   * _clearItems()、range 变为 -1,-1、列表空白。此处在 items.length>0 时强制 _scrollSize = items.length * itemHeight。
   */
  override _updateScrollSize(): void {
    super._updateScrollSize();
    if (this.items.length > 0) {
      const size = this.items.length * this._getAverageSize();
      this._scrollSize = Math.max(this._scrollSize, Math.max(1, size));
    }
  }
}
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import classNamesConfig from './classNames';
// 导入 option 组件以确保它被注册
import '../option/index';
// 导入 icon 组件以确保它被注册
import '../icon/index';
// 导入 popup 组件，下拉层基于 popup 定位
import '../popup/index';

/**
 * value 属性的 converter
 * 处理 string | number | string[] | number[] 类型与 attribute 字符串之间的转换
 * 对于数组，统一将数组中的值转换为字符串，确保类型一致
 */
const valueConverter = {
  fromAttribute(value: string | null): string | number | string[] | number[] {
    if (value === null || value === '') {
      return '';
    }
    // 尝试解析为 JSON（数组）
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        // 统一将数组中的值转换为字符串，确保类型一致
        return parsed.map(v => String(v));
      }
    } catch {
      // 不是有效的 JSON，继续处理
    }
    // 尝试转换为数字
    if (!isNaN(Number(value)) && !isNaN(parseFloat(value))) {
      const numValue = Number(value);
      if (String(numValue) === value) {
        return numValue;
      }
    }
    // 返回字符串
    return value;
  },
  toAttribute(value: string | number | string[] | number[]): string | null {
    if (value === '' || value === null || value === undefined) {
      return null;
    }
    // 如果是数组，序列化为 JSON（数组中的值已经是字符串）
    if (Array.isArray(value)) {
      return JSON.stringify(value);
    }
    // 其他情况直接转换为字符串
    return String(value);
  }
};

/**
 * maxTagCount 属性 converter：支持数字或字符串 "responsive"
 */
const maxTagCountConverter = {
  fromAttribute(value: string | null): number | 'responsive' | undefined {
    if (value === null || value === '') {
      return undefined;
    }
    if (value === 'responsive') {
      return 'responsive';
    }
    const num = Number(value);
    return !isNaN(num) && num >= 0 ? num : undefined;
  },
  toAttribute(value: number | 'responsive' | undefined): string | null {
    if (value === undefined || value === null) {
      return null;
    }
    return String(value);
  }
};

/**
 * select组件
 */
@customElement('nv-select')
export class NvSelect extends Component {
  /**
   * 表单关联支持
   */
  static formAssociated = true;

  /**
   * 焦点委托，优化点击聚焦体验
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
    // 生成下拉菜单的唯一 ID
    this._dropdownId = `nv-select-dropdown-${ Math.random().toString(36).substr(2, 9) }`;
  }

  /**
   * 绑定值
   */
  @property({ type: Object, reflect: true, converter: valueConverter })
  value: string | number | string[] | number[] = '';

  /**
   * 占位符
   */
  @property({ type: String })
  placeholder: string = '请选择';

  /**
   * 无选项时的占位文案
   */
  @property({ type: String, reflect: true, attribute: 'no-data-text' })
  noDataText: string = '无数据';

  /**
   * 可搜索时无匹配结果的占位文案
   */
  @property({ type: String, reflect: true, attribute: 'no-match-text' })
  noMatchText: string = '无匹配数据';

  /**
   * 是否禁用，默认false
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否可清空，默认false
   */
  @property({ type: Boolean })
  clearable: boolean = false;

  /**
   * 是否可搜索，默认false
   */
  @property({ type: Boolean })
  filterable: boolean = false;

  /**
   * 是否多选，默认false
   */
  @property({ type: Boolean })
  multiple: boolean = false;

  /**
   * 多选时最多可选项数量，不设置则不限制
   */
  @property({ type: Number, reflect: true })
  max: number | undefined = undefined;

  /**
   * 多选时最多展示的 tag 数量，超出部分折叠并显示「+N」；为 "responsive" 时根据容器宽度动态计算
   */
  @property({ reflect: true, attribute: 'max-tag-count', converter: maxTagCountConverter })
  maxTagCount: number | 'responsive' | undefined = undefined;

  /**
   * 尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 下拉层位置（与 Popup 保持一致）
   */
  @property({ type: String, reflect: true })
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'bottom';

  /**
   * 下拉层距离锚点的距离（像素，与 Popup 保持一致）
   */
  @property({ type: Number, reflect: true })
  distance: number = 4;

  /**
   * 定位策略：absolute 或 fixed（与 Popup 保持一致）
   */
  @property({ type: String, reflect: true })
  strategy: 'absolute' | 'fixed' = 'fixed';

  /**
   * 是否自动调整位置以避免被视口边界遮挡（与 Popup 保持一致）
   */
  @property({ type: Boolean, reflect: true, attribute: 'auto-adjust' })
  autoAdjust: boolean = true;

  /**
   * 与锚点同步宽度或高度（与 Popup 保持一致，select 默认同步宽度）
   */
  @property({ type: String, reflect: true })
  sync: 'width' | 'height' | 'both' | undefined = 'width';

  /**
   * 是否启用虚拟滚动（为 true 时，当选项数达到 virtualThreshold 才启用虚拟滚动；为 false 时始终不使用虚拟滚动）
   */
  @property({ type: Boolean, reflect: true })
  virtual: boolean = true;

  /**
   * 启用虚拟滚动的选项数阈值：选项数 >= 该值且 virtual 为 true 时使用虚拟滚动，否则全量渲染（避免少量选项时浮层高度被固定、下方留白）
   */
  @property({ type: Number, reflect: true, attribute: 'virtual-threshold' })
  virtualThreshold: number = 50;

  /**
   * 下拉浮层最大高度，支持 CSS 值（如 "300px"、"50vh"）；不设置时使用变量默认值（--nv-select-dropdown-max-height）
   */
  @property({ type: String, reflect: true, attribute: 'dropdown-max-height' })
  dropdownMaxHeight: string = '';

  /**
   * 当前是否实际使用虚拟滚动：virtual 为 true 且过滤后选项数 >= virtualThreshold
   */
  private get _useVirtualScroll(): boolean {
    if (!this.virtual) return false;
    const count = this._getFilteredOptionsData().length;
    return count >= this.virtualThreshold;
  }

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
   * 是否必填（参与 form.reportValidity() / checkValidity()）
   */
  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  /**
   * 自动完成提示（与原生 autocomplete 一致，如 "on" | "off"）
   */
  @property({ type: String, reflect: true })
  autocomplete: string = 'off';

  /**
   * 是否处于焦点状态
   */
  private _isFocused: boolean = false;

  /**
   * 是否显示下拉菜单
   */
  @state()
  visible: boolean = false;

  /**
   * 浮层内容是否渲染（退场时延迟清空，与 Popup 退场过渡时长一致，避免内容瞬间消失、高度塌陷）
   */
  @state()
  private _dropdownContentVisible: boolean = false;

  /**
   * 退场后延迟清空内容的定时器
   */
  private _contentHideTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * responsive 模式下动态计算出的可见 tag 数量
   */
  @state()
  private _responsiveVisibleCount: number | undefined = undefined;

  /**
   * 上次测量得到的各 tag 宽度（用于 resize 时重算可见数量，无需重新测量）
   */
  private _tagWidths: number[] = [];

  /**
   * tags 容器 ResizeObserver，responsive 模式下监听宽度变化
   */
  private _tagsResizeObserver: ResizeObserver | null = null;

  /** responsive 时 tag 间距（与 style 中 gap 一致） */
  private static readonly TAG_GAP = 6;

  /** responsive 时为「+N」预留宽度 */
  private static readonly TAG_COUNT_RESERVE_WIDTH = 40;

  /**
   * 搜索关键词
   */
  @state()
  query: string = '';

  /**
   * 选项列表
   */
  private _options: Element[] = [];

  /**
   * 当前高亮的选项索引（用于键盘导航）
   */
  private _highlightedIndex: number = -1;

  /**
   * 过滤后的选项列表缓存
   */
  private _filteredOptionsCache: Element[] | null = null;
  private _filteredOptionsCacheKey: string = '';

  /**
   * 下拉菜单的唯一 ID（用于 ARIA）
   */
  protected _dropdownId: string = '';

  /**
   * 获取焦点状态
   */
  get isFocused(): boolean {
    return this._isFocused;
  }

  /**
   * 统一的选项值比较函数
   * 支持字符串、数字类型的智能比较，确保类型一致性
   * @param val1 第一个值
   * @param val2 第二个值
   * @returns 是否相等
   */
  private _compareValues(val1: string | number, val2: string | number): boolean {
    // 先尝试严格相等（处理相同类型的情况）
    if (val1 === val2) {
      return true;
    }
    // 转换为字符串比较
    const val1Str = String(val1);
    const val2Str = String(val2);
    if (val1Str === val2Str) {
      return true;
    }
    // 如果都是数字，尝试数字比较
    const val1Num = Number(val1);
    const val2Num = Number(val2);
    if (!isNaN(val1Num) && !isNaN(val2Num) && isFinite(val1Num) && isFinite(val2Num)) {
      return val1Num === val2Num;
    }
    return false;
  }

  /**
   * 处理点击事件
   */
  protected _handleClick(): void {
    if (this.disabled) {
      return;
    }
    this.visible = !this.visible;
    if (this.visible) {
      // 打开下拉菜单时重置高亮索引
      this._highlightedIndex = -1;
    }
  }

  /**
   * Popup 关闭时同步 visible 状态（如点击外部关闭）
   * 内容清空由 updated 中 visible 变化触发延迟执行，保证退场过渡期间内容仍渲染
   */
  protected _handlePopupHide(): void {
    this.visible = false;
    this._highlightedIndex = -1;
    this.requestUpdate();
  }

  /**
   * 退场后延迟清空浮层内容（与 Popup 退场过渡 ~200ms 对齐，避免退场时内容瞬间消失、高度塌陷）
   */
  private _scheduleContentHide(): void {
    if (this._contentHideTimer) {
      clearTimeout(this._contentHideTimer);
    }
    this._contentHideTimer = setTimeout(() => {
      this._contentHideTimer = null;
      this._dropdownContentVisible = false;
      this.requestUpdate();
    }, 250);
  }

  /**
   * 处理焦点事件
   */
  protected _handleFocus(): void {
    if (this.disabled) {
      return;
    }
    this._isFocused = true;
    this.requestUpdate();
  }

  /**
   * 处理失焦事件
   */
  protected _handleBlur(): void {
    this._isFocused = false;
    this.requestUpdate();
  }

  /**
   * 处理键盘事件（键盘导航支持）
   * @param event 键盘事件
   */
  protected _handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    const filteredOptions = this._getFilteredOptions();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.visible) {
          this.visible = true;
          this._highlightedIndex = 0;
        } else {
          this._highlightedIndex = Math.min(this._highlightedIndex + 1, filteredOptions.length - 1);
        }
        this._scrollToHighlighted();
        this.requestUpdate();
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.visible) {
          this._highlightedIndex = Math.max(this._highlightedIndex - 1, 0);
          this._scrollToHighlighted();
          this.requestUpdate();
        }
        break;

      case 'Enter':
        event.preventDefault();
        if (this.visible && this._highlightedIndex >= 0 && this._highlightedIndex < filteredOptions.length) {
          const option = filteredOptions[this._highlightedIndex];
          const optionValue = this._getOptionProperty<string>(option, 'value');
          if (optionValue !== undefined) {
            const isDisabled = this._getOptionProperty<boolean>(option, 'disabled') || false;
            if (!isDisabled) {
              this._handleOptionClick(optionValue);
            }
          }
        } else if (!this.visible) {
          this.visible = true;
        }
        break;

      case 'Escape':
        event.preventDefault();
        if (this.visible) {
          this.visible = false;
          this._highlightedIndex = -1;
          this.requestUpdate();
        }
        break;

      case 'Tab':
        // Tab 键关闭下拉菜单
        if (this.visible) {
          this.visible = false;
          this._highlightedIndex = -1;
        }
        break;
    }
  }

  /**
   * 滚动到高亮的选项（下拉内容在 Popup 的 slot 中，需从 slot 获取容器）
   * 虚拟滚动时使用 virtualizer 的 element(index).scrollIntoView；非虚拟时使用 DOM 查询
   */
  private _scrollToHighlighted(): void {
    if (this._highlightedIndex < 0) {
      return;
    }
    requestAnimationFrame(() => {
      const popupEl = this.shadowRoot?.querySelector('nv-popup');
      const slot = popupEl?.shadowRoot?.querySelector('slot:not([name])');
      const assigned = (slot as HTMLSlotElement)?.assignedElements?.() ?? [];
      const dropdown = assigned.find((el: Element) =>
        (el as HTMLElement).classList?.contains('nv-select__dropdown')
      ) as HTMLElement;
      if (!dropdown) {
        return;
      }
      if (this._useVirtualScroll) {
        const optionsEl = dropdown.querySelector(`.${ classNamesConfig.elements.options }`) as HTMLElement & { [key: symbol]: { element: (idx: number) => { scrollIntoView: (opts?: ScrollIntoViewOptions) => void } } };
        if (optionsEl && virtualizerRef in optionsEl) {
          optionsEl[virtualizerRef].element(this._highlightedIndex).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      } else {
        const wrapper = dropdown.querySelector(`.${ classNamesConfig.elements.dropdownWrapper }`);
        if (!wrapper) {
          return;
        }
        const options = wrapper.querySelectorAll('.nv-option');
        const highlightedOption = options[this._highlightedIndex] as HTMLElement;
        if (highlightedOption) {
          highlightedOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    });
  }

  /**
   * 处理清除事件
   */
  protected _handleClear(event: Event): void {
    event.stopPropagation();
    if (this.multiple) {
      this.value = [];
    } else {
      this.value = '';
    }

    // 更新表单值
    this._updateFormValue();

    // 触发 clear 事件
    this.dispatchEvent(new CustomEvent('nv-clear', {
      bubbles: true,
      composed: true
    }));

    // 触发 change 事件
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
    this.requestUpdate();
  }

  /**
   * 处理选项点击事件
   */
  protected _handleOptionClick(optionValue: string | number): void {
    if (this.disabled) {
      return;
    }

    if (this.multiple) {
      const currentValue: (string | number)[] = Array.isArray(this.value) ? [...this.value] : [];
      const index = currentValue.findIndex(val => this._compareValues(val, optionValue));
      if (index > -1) {
        currentValue.splice(index, 1);
      } else {
        // 多选上限：已达 max 时不再添加
        if (this.max != null && currentValue.length >= this.max) {
          return;
        }
        currentValue.push(String(optionValue));
      }
      this.value = currentValue.map(v => String(v)) as string[];
    } else {
      this.value = optionValue;
      this.visible = false;
      this._highlightedIndex = -1;
    }

    // 更新表单值
    this._updateFormValue();

    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
    this.requestUpdate();
  }

  /**
   * 处理搜索输入
   */
  protected _handleSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
    this.requestUpdate();
    // 搜索时更新下拉菜单内容（现在由 Lit 模板自动更新）
  }

  /**
   * 处理标签关闭
   */
  protected _handleTagClose(event: Event, tagValue: string | number): void {
    event.stopPropagation();
    if (this.multiple && Array.isArray(this.value)) {
      // 使用统一的比较函数过滤
      const currentValue = Array.isArray(this.value) ? this.value : [];
      const newValue = currentValue.filter(v => !this._compareValues(v, tagValue));
      this.value = newValue as string[] | number[];

      // 更新表单值
      this._updateFormValue();

      this.dispatchEvent(new CustomEvent('nv-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      }));
      this.requestUpdate();
    }
  }

  /**
   * 获取选项的属性值（支持从属性或 getAttribute 读取）
   * 对于 value 属性，统一返回字符串，确保类型一致
   * @param option 选项元素
   * @param prop 属性名
   * @returns 属性值，根据属性类型返回对应类型
   */
  private _getOptionProperty<T = string>(option: Element, prop: string): T | undefined {
    // 优先从 HTML 属性读取（因为 Lit 组件可能还没完全初始化）
    const attr = option.getAttribute(prop);
    if (attr !== null) {
      // 对于 disabled 属性，需要转换为布尔值
      if (prop === 'disabled') {
        return (attr !== null && attr !== 'false') as T;
      }
      // 对于 value 属性，统一返回字符串，确保类型一致
      // 注意：不再转换为数字，因为 value 数组中的值可能是字符串
      if (prop === 'value') {
        return attr as T;
      }
      return attr as T;
    }

    // 然后尝试从属性读取（Lit 组件属性）
    const value = (option as any)[prop];
    // 如果属性值存在（包括空字符串、0、false 等有效值），直接返回
    if (value !== undefined) {
      // 对于 value 属性，统一转换为字符串
      if (prop === 'value') {
        return String(value) as T;
      }
      return value as T;
    }

    return undefined;
  }

  /**
   * 更新选项列表
   * 使用 slotchange 事件监听 slot 变化
   */
  protected _updateOptions(): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement | null;
    if (slot) {
      const assignedNodes = slot.assignedNodes({ flatten: true });
      const newOptions = assignedNodes.filter(node => {
        return node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName.toLowerCase() === 'nv-option';
      }) as Element[];

      // 检查选项列表是否真的发生了变化，避免不必要的更新
      const optionsChanged = newOptions.length !== this._options.length ||
        newOptions.some((opt, index) => opt !== this._options[index]);

      if (optionsChanged) {
        this._options = newOptions;
        // 清除过滤缓存，因为选项列表已更新
        this._filteredOptionsCache = null;
        this._filteredOptionsCacheKey = '';
        this.requestUpdate();
      }
    }
  }

  /**
   * 设置 slot 变化监听器
   * 使用 slotchange 事件即可，不需要 MutationObserver
   */
  private _setupSlotObserver(): void {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement | null;
    if (!slot) {
      return;
    }

    // 直接使用 slotchange 事件，这是最可靠的方式
    // 不需要 MutationObserver，因为 slotchange 已经足够
    slot.addEventListener('slotchange', () => {
      this._updateOptions();
    });
  }

  /**
   * 获取显示的文本
   */
  private _getDisplayText(): string {
    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      return '';
    }
    // 对于单选，只有当 value 有值且不是 null/undefined 时才显示
    if (!this.multiple && this.value !== '' && this.value !== null && this.value !== undefined) {
      const option = this._options.find(opt => {
        const value = this._getOptionProperty(opt, 'value');
        return value === this.value;
      });
      if (option) {
        const label = this._getOptionProperty(option, 'label');
        return label || String(this.value);
      }
      return String(this.value);
    }
    return '';
  }

  /**
   * 获取选中的标签列表（多选时）
   */
  private _getSelectedTags(): Array<{ value: string | number; label: string }> {
    if (!this.multiple || !Array.isArray(this.value)) {
      return [];
    }
    return this.value.map(val => {
      // 使用统一的比较函数查找选项
      const option = this._options.find(opt => {
        const optValue = this._getOptionProperty<string>(opt, 'value');
        if (optValue === undefined) {
          return false;
        }
        // val 可能是 string 或 number，需要统一类型
        const valToCompare: string | number = typeof val === 'string' || typeof val === 'number' ? val : String(val);
        return this._compareValues(optValue, valToCompare);
      });
      if (option) {
        const label = this._getOptionProperty<string>(option, 'label');
        return {
          value: val,
          label: label || String(val)
        };
      }
      return {
        value: val,
        label: String(val)
      };
    });
  }

  /**
   * 虚拟滚动用选项数据（value/label/disabled），由 _getFilteredOptions 派生
   */
  private _getFilteredOptionsData(): Array<{ value: string | number; label: string; disabled: boolean }> {
    const options = this._getFilteredOptions();
    return options.map(option => {
      const value = this._getOptionProperty<string | number>(option, 'value');
      const label = this._getOptionProperty<string>(option, 'label') || String(value ?? '');
      const disabled = this._getOptionProperty<boolean>(option, 'disabled') || false;
      return { value: value ?? '', label, disabled };
    });
  }

  /**
   * 获取过滤后的选项列表
   * 使用缓存优化性能，避免重复计算
   */
  private _getFilteredOptions(): Element[] {
    // 如果不支持过滤或没有搜索关键词，直接返回所有选项
    if (!this.filterable || !this.query) {
      return this._options;
    }

    // 生成缓存键
    const cacheKey = `${ this.query }_${ this._options.length }`;

    // 如果缓存有效，直接返回
    if (this._filteredOptionsCache && this._filteredOptionsCacheKey === cacheKey) {
      return this._filteredOptionsCache;
    }

    // 执行过滤
    const filtered = this._options.filter(option => {
      const label = this._getOptionProperty<string>(option, 'label') || String(this._getOptionProperty<string>(option, 'value') || '');
      return label.toLowerCase().includes(this.query.toLowerCase());
    });

    // 更新缓存
    this._filteredOptionsCache = filtered;
    this._filteredOptionsCacheKey = cacheKey;

    return filtered;
  }

  /**
   * 检查选项是否被选中
   * 使用统一的比较函数确保类型一致性
   * @param optionValue 选项值
   * @returns 是否被选中
   */
  private _isOptionSelected(optionValue: string | number | undefined): boolean {
    // 如果 optionValue 是 undefined 或 null，肯定不选中
    if (optionValue === undefined || optionValue === null) {
      return false;
    }

    // 如果 value 是空字符串或空数组，所有选项都不应该被选中
    if (this.multiple) {
      if (!Array.isArray(this.value) || this.value.length === 0) {
        return false;
      }
      // 对于多选，使用统一的比较函数检查 optionValue 是否在 value 数组中
      return this.value.some(val => this._compareValues(val, optionValue));
    } else {
      // 对于单选，如果 value 是空字符串、null 或 undefined，所有选项都不应该被选中
      if (this.value === '' || this.value === null || this.value === undefined || Array.isArray(this.value)) {
        return false;
      }
      // 使用统一的比较函数（确保 value 是 string 或 number）
      const singleValue: string | number = typeof this.value === 'string' || typeof this.value === 'number'
        ? this.value
        : String(this.value);
      return this._compareValues(singleValue, optionValue);
    }
  }

  /**
   * 虚拟滚动时渲染单条选项（与 repeat 分支样式一致）
   */
  private _renderVirtualOption(
    item: { value: string | number; label: string; disabled: boolean },
    index: number
  ): TemplateResult {
    const isSelected = this._isOptionSelected(item.value);
    const isDisabled = item.disabled || (
      this.multiple &&
      this.max != null &&
      Array.isArray(this.value) &&
      this.value.length >= this.max &&
      !isSelected
    );
    const isHighlighted = index === this._highlightedIndex;
    return html`
      <div
        class=${ `nv-option ${ isSelected ? 'is-selected' : '' } ${ isDisabled ? 'is-disabled' : '' } ${ isHighlighted ? 'is-highlighted' : '' }` }
        role="option"
        aria-selected=${ isSelected ? 'true' : 'false' }
        aria-disabled=${ isDisabled ? 'true' : 'false' }
        @click=${ isDisabled
          ? undefined
          : (e: Event) => {
            e.stopPropagation();
            this._handleOptionClick(item.value);
          } }
      >
        <span class="nv-option__label">${ item.label }</span>
        ${ isSelected
          ? html`
              <nv-icon name="check" class="nv-option__check"></nv-icon>
            `
          : '' }
      </div>
    `;
  }

  /**
   * 渲染下拉菜单内容（返回 Lit 模板）
   * virtual 为 true 时使用 virtualize 指令做虚拟滚动，否则使用 repeat 全量渲染
   */
  protected _renderDropdownContentTemplate(): any {
    const filteredOptions = this._getFilteredOptions();

    if (filteredOptions.length > 0) {
      if (this._useVirtualScroll) {
        const optionData = this._getFilteredOptionsData();
        // 使用 SelectFlowLayout 在构造时同步应用 _itemSize，与 --nv-select-option-height 一致，避免叠加与滚动空白
        const optionHeightPx = 34;
        return html`
          <div class="${ classNamesConfig.elements.options } ${ classNamesConfig.elements.optionsVirtual }">
            ${ virtualize({
              items: optionData,
              renderItem: (item, index) => this._renderVirtualOption(item, index),
              keyFunction: (item) => String(item.value),
              scroller: true,
              layout: {
                type: SelectFlowLayout,
                _itemSize: { width: 100, height: optionHeightPx }
              } as import('@lit-labs/virtualizer/virtualize.js').VirtualizeDirectiveConfig<unknown>['layout']
            }) }
          </div>
        `;
      }
      return html`
        <div class=${ classNamesConfig.elements.options }>
          ${ repeat(
            filteredOptions,
            (option) => this._getOptionProperty(option, 'value') || Math.random(),
            (option) => {
              const optionValue = this._getOptionProperty<string>(option, 'value');
              const optionLabel = this._getOptionProperty<string>(option, 'label') || String(optionValue || '');
              const isSelected = optionValue !== undefined ? this._isOptionSelected(optionValue) : false;
              const optionDisabled = this._getOptionProperty<boolean>(option, 'disabled') || false;
              // 多选且已达 max 时，未选中的选项不可选
              const isDisabled = optionDisabled || (
                this.multiple &&
                this.max != null &&
                Array.isArray(this.value) &&
                this.value.length >= this.max &&
                !isSelected
              );

              const optionIndex = filteredOptions.indexOf(option);
              const isHighlighted = optionIndex === this._highlightedIndex;

              return html`
                <div
                  class=${ `nv-option ${ isSelected ? 'is-selected' : '' } ${ isDisabled ? 'is-disabled' : '' } ${ isHighlighted ? 'is-highlighted' : '' }` }
                  role="option"
                  aria-selected=${ isSelected ? 'true' : 'false' }
                  aria-disabled=${ isDisabled ? 'true' : 'false' }
                  @click=${ isDisabled || optionValue === undefined
                    ? undefined
                    : (e: Event) => {
                      e.stopPropagation();
                      this._handleOptionClick(optionValue);
                    } }
                >
                  <span class="nv-option__label">${ optionLabel }</span>
                  ${ isSelected
                    ? html`
                        <nv-icon name="check" class="nv-option__check"></nv-icon>
                      `
                    : '' }
                </div>
              `;
            }
          ) }
        </div>
      `;
    } else {
      const isEmptyOptions = this._options.length === 0;
      const isNoMatch = this.filterable && this.query && !isEmptyOptions;
      const emptyText = isNoMatch ? this.noMatchText : this.noDataText;
      return html`
        <div class=${ classNamesConfig.elements.empty }>${ emptyText }</div>
      `;
    }
  }

  render() {
    return template.call(this, {
      _handleClick: this._handleClick.bind(this),
      _handleFocus: this._handleFocus.bind(this),
      _handleBlur: this._handleBlur.bind(this),
      _handleClear: this._handleClear.bind(this),
      _handleOptionClick: this._handleOptionClick.bind(this),
      _handleSearchInput: this._handleSearchInput.bind(this),
      _handleTagClose: this._handleTagClose.bind(this),
      _handleKeyDown: this._handleKeyDown.bind(this),
      _handlePopupHide: this._handlePopupHide.bind(this),
      _getDisplayText: this._getDisplayText.bind(this),
      _getSelectedTags: this._getSelectedTags.bind(this),
      _renderDropdownContent: this._renderDropdownContentTemplate.bind(this),
      dropdownContentVisible: this._dropdownContentVisible,
      useVirtualScroll: this._useVirtualScroll,
      dropdownMaxHeight: this.dropdownMaxHeight,
      maxTagCount: this.maxTagCount,
      responsiveVisibleCount: this._responsiveVisibleCount
    });
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // 只在首次更新或选项相关属性变化时更新选项列表
    // 避免在每次更新时都调用，防止无限循环
    if (changedProperties.size === 0 || changedProperties.has('visible') || changedProperties.has('query')) {
      // 不在这里调用 _updateOptions，由 slotchange 事件处理
    }

    // 更新表单值与校验状态
    if (changedProperties.has('value')) {
      this._updateFormValue();
    }
    if (changedProperties.has('required') || changedProperties.has('value')) {
      this._updateValidity();
    }

    // 更新 ARIA 属性
    if (this._internals) {
      this._internals.ariaExpanded = String(this.visible);
      this._internals.ariaDisabled = String(this.disabled);
      this._internals.ariaRequired = String(this.required);
    }

    if (changedProperties.has('visible')) {
      // 触发 visible-change 事件
      this.dispatchEvent(new CustomEvent('nv-visible-change', {
        detail: this.visible,
        bubbles: true,
        composed: true
      }));
      if (this.visible) {
        // 打开：立即显示内容，取消未执行的延迟清空
        if (this._contentHideTimer) {
          clearTimeout(this._contentHideTimer);
          this._contentHideTimer = null;
        }
        // 虚拟滚动时延迟一帧再显示内容，使 options 容器首帧有非零宽度（日志显示首帧 hostRect.w=0），避免首次 layout 在错误 viewport 下运行
        if (this._useVirtualScroll) {
          requestAnimationFrame(() => {
            this._dropdownContentVisible = true;
            this.requestUpdate();
          });
        } else {
          this._dropdownContentVisible = true;
        }
        if (this.filterable) {
          requestAnimationFrame(() => {
            const searchInput = this.shadowRoot?.querySelector('.nv-select__search-input') as HTMLInputElement;
            if (searchInput) {
              searchInput.focus();
            }
          });
        }
      } else {
        // 关闭：延迟清空内容，与 Popup 退场过渡一致，避免内容瞬间消失、高度塌陷
        this._scheduleContentHide();
        this._highlightedIndex = -1;
      }
    }
    if (changedProperties.has('query')) {
      this._filteredOptionsCache = null;
      this._filteredOptionsCacheKey = '';
    }
    if (this.maxTagCount === 'responsive' && this.multiple) {
      if (changedProperties.has('value') || changedProperties.has('maxTagCount')) {
        this._responsiveVisibleCount = undefined;
        this._tagWidths = [];
        this._disconnectTagsResizeObserver();
      }
      if (Array.isArray(this.value) && this.value.length > 0) {
        requestAnimationFrame(() => this._measureResponsiveTags());
      } else {
        this._responsiveVisibleCount = undefined;
        this._tagWidths = [];
      }
    } else {
      this._responsiveVisibleCount = undefined;
      this._disconnectTagsResizeObserver();
    }
  }

  /**
   * responsive 模式下根据容器宽度计算可见 tag 数量
   */
  private _measureResponsiveTags(): void {
    if (!this.multiple || this.maxTagCount !== 'responsive') {
      return;
    }
    const tagsEl = this.shadowRoot?.querySelector('.nv-select__tags') as HTMLElement | null;
    if (!tagsEl) {
      return;
    }
    const containerWidth = tagsEl.clientWidth;
    const children = Array.from(tagsEl.children).filter(
      el => el.hasAttribute('part') && el.getAttribute('part')?.includes('tag') && !el.classList.contains('nv-select__tag-count')
    ) as HTMLElement[];
    const tagCount = this.multiple && Array.isArray(this.value) ? this.value.length : 0;
    if (tagCount === 0) {
      this._responsiveVisibleCount = 0;
      this._tagWidths = [];
      return;
    }
    if (children.length === tagCount) {
      const gap = NvSelect.TAG_GAP;
      const reserve = NvSelect.TAG_COUNT_RESERVE_WIDTH;
      const widths = children.map(el => el.offsetWidth);
      this._tagWidths = widths;
      let sum = 0;
      let count = 0;
      for (let i = 0; i < widths.length; i++) {
        if (i > 0) sum += gap;
        sum += widths[i];
        if (sum + reserve > containerWidth) {
          break;
        }
        count = i + 1;
      }
      const newCount = count;
      if (this._responsiveVisibleCount !== newCount) {
        this._responsiveVisibleCount = newCount;
        this.requestUpdate();
      }
      this._setupTagsResizeObserver();
      return;
    }
    if (this._tagWidths.length > 0 && this._tagWidths.length === tagCount) {
      const gap = NvSelect.TAG_GAP;
      const reserve = NvSelect.TAG_COUNT_RESERVE_WIDTH;
      let sum = 0;
      let count = 0;
      for (let i = 0; i < this._tagWidths.length; i++) {
        if (i > 0) sum += gap;
        sum += this._tagWidths[i];
        if (sum + reserve > containerWidth) {
          break;
        }
        count = i + 1;
      }
      const newCount = count;
      if (this._responsiveVisibleCount !== newCount) {
        this._responsiveVisibleCount = newCount;
        this.requestUpdate();
      }
      return;
    }
    this._responsiveVisibleCount = undefined;
    this._tagWidths = [];
    this.requestUpdate();
  }

  private _setupTagsResizeObserver(): void {
    if (this._tagsResizeObserver || this.maxTagCount !== 'responsive') {
      return;
    }
    const tagsEl = this.shadowRoot?.querySelector('.nv-select__tags') as HTMLElement | null;
    if (!tagsEl) {
      return;
    }
    this._tagsResizeObserver = new ResizeObserver(() => {
      this._measureResponsiveTags();
    });
    this._tagsResizeObserver.observe(tagsEl);
  }

  private _disconnectTagsResizeObserver(): void {
    if (this._tagsResizeObserver) {
      this._tagsResizeObserver.disconnect();
      this._tagsResizeObserver = null;
    }
  }

  protected $mounted(): void {
    this._updateOptions();
    this._setupSlotObserver();
    // 连接后延迟一帧设置校验状态，确保 form 属性已解析、form owner 已关联
    if (this._internals && (this.required || this.name)) {
      requestAnimationFrame(() => this._updateValidity());
    }
  }

  disconnectedCallback(): void {
    if (this._contentHideTimer) {
      clearTimeout(this._contentHideTimer);
      this._contentHideTimer = null;
    }
    this._disconnectTagsResizeObserver();
    super.disconnectedCallback();
  }

  /**
   * 表单集成：更新表单值
   */
  private _updateFormValue(): void {
    if (this._internals) {
      if (this.multiple && Array.isArray(this.value)) {
        // 多选时，将值转换为 FormData 格式
        const formData = new FormData();
        this.value.forEach(val => {
          formData.append(this.name || '', String(val));
        });
        this._internals.setFormValue(formData);
      } else {
        // 单选时，直接设置值（确保是字符串或数字）
        const formValue = typeof this.value === 'string' || typeof this.value === 'number'
          ? String(this.value || '')
          : '';
        this._internals.setFormValue(formValue);
      }
    }
  }

  /**
   * 表单集成：根据 required 与 value 更新 ElementInternals 校验状态
   */
  private _updateValidity(): void {
    if (!this._internals) return;
    const isEmpty = this.multiple
      ? !Array.isArray(this.value) || this.value.length === 0
      : (this.value === '' || this.value === undefined || this.value === null);
    if (this.required && isEmpty) {
      this._internals.setValidity({ valueMissing: true }, '请选择一项');
    } else {
      this._internals.setValidity({});
    }
  }

  /**
   * 表单集成：表单重置时的回调
   */
  formResetCallback(): void {
    this.value = '';
    this._updateFormValue();
    this._updateValidity();
    this.requestUpdate();
  }

  /**
   * 表单集成：表单状态恢复时的回调
   */
  formStateRestoreCallback(state: string, mode: 'restore' | 'autocomplete'): void {
    if (mode === 'restore') {
      this.value = state;
      this._updateFormValue();
      this.requestUpdate();
    }
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-select': NvSelect
  }
}
