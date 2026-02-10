/*
 * @Descripttion: cascader组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

export interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}

/**
 * cascader组件
 */
@customElement('nv-cascader')
export class NvCascader extends Component {
  /**
   * 数据源
   */
  @property({ type: Array })
  options: CascaderOption[] = [];

  /**
   * 选中项绑定值
   */
  @property({ type: Array })
  value: string[] = [];

  /**
   * 输入框占位符
   */
  @property({ type: String })
  placeholder: string = '请选择';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否可清空
   */
  @property({ type: Boolean })
  clearable: boolean = false;

  /**
   * 尺寸.default: medium. options: mini/small/medium/large/huge
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 选项分隔符，默认 ' / '
   */
  @property({ type: String })
  separator: string = ' / ';

  /**
   * 是否显示下拉面板
   */
  @state()
  protected _visible: boolean = false;


  /**
   * 当前选中的路径
   */
  @state()
  protected _selectedPath: CascaderOption[] = [];

  /**
   * 文档点击事件处理器（用于点击外部关闭）
   */
  private _documentClickHandler: ((evt: MouseEvent) => void) | null = null;

  /**
   * 获取显示文本
   */
  protected _getDisplayText(): string {
    if (this.value.length === 0) {
      return this.placeholder;
    }
    return this._selectedPath.map(item => item.label).join(this.separator);
  }

  /**
   * 根据value查找路径
   */
  private _findPathByValue(options: CascaderOption[], value: string[], path: CascaderOption[] = []): CascaderOption[] | null {
    for (const option of options) {
      const currentPath = [...path, option];
      if (option.value === value[0]) {
        if (value.length === 1) {
          return currentPath;
        }
        if (option.children) {
          return this._findPathByValue(option.children, value.slice(1), currentPath);
        }
      }
    }
    return null;
  }

  /**
   * 处理点击
   */
  protected _handleClick(): void {
    if (this.disabled) {
      return;
    }
    this._visible = !this._visible;
    if (this._visible && this.value.length > 0) {
      const path = this._findPathByValue(this.options, this.value);
      if (path) {
        this._selectedPath = path;
      }
    }
    this._updateDocumentClickHandler();
  }

  /**
   * 处理选项点击
   */
  protected _handleOptionClick(option: CascaderOption, level: number): void {
    if (option.disabled) {
      return;
    }

    const newPath = this._selectedPath.slice(0, level);
    newPath.push(option);
    this._selectedPath = newPath;

    if (option.children && option.children.length > 0) {
      // 有子选项，显示下一级（通过_selectedPath自动显示）
    } else {
      // 没有子选项，选中该项
      this.value = newPath.map(item => item.value);
      this._visible = false;
      this.dispatchEvent(new CustomEvent('nv-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      }));
    }
  }

  /**
   * 处理清空
   */
  protected _handleClear(event: Event): void {
    event.stopPropagation();
    this.value = [];
    this._selectedPath = [];
    this._visible = false;
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: [],
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 获取当前层级的面板数据
   */
  protected _getCurrentLevelOptions(): CascaderOption[] {
    if (this._selectedPath.length === 0) {
      return this.options;
    }
    const lastSelected = this._selectedPath[this._selectedPath.length - 1];
    return lastSelected.children || [];
  }

  protected updated(): void {
    if (this.value.length > 0 && this._selectedPath.length === 0) {
      const path = this._findPathByValue(this.options, this.value);
      if (path) {
        this._selectedPath = path;
      }
    }
    this._updateDocumentClickHandler();
  }

  /**
   * 更新文档点击事件处理器
   * @protected
   */
  protected _updateDocumentClickHandler(): void {
    this._removeDocumentClickHandler();
    
    if (this._visible) {
      this._documentClickHandler = (evt: MouseEvent) => {
        const target = evt.target as Node;
        // 如果点击的是组件内部，不关闭
        if (this.contains(target) || this.shadowRoot?.contains(target)) {
          return;
        }
        // 如果点击的是弹出层内部，不关闭
        const panelsWrapper = this.shadowRoot?.querySelector('.nv-cascader__panels-wrapper');
        if (panelsWrapper && panelsWrapper.contains(target)) {
          return;
        }
        
        // 点击外部，关闭弹出层
        this._visible = false;
        this._removeDocumentClickHandler();
      };
      
      // 使用捕获阶段，确保能够捕获到点击事件
      setTimeout(() => {
        document.addEventListener('click', this._documentClickHandler!, true);
      }, 0);
    }
  }

  /**
   * 移除文档点击事件处理器
   * @protected
   */
  protected _removeDocumentClickHandler(): void {
    if (this._documentClickHandler) {
      document.removeEventListener('click', this._documentClickHandler, true);
      this._documentClickHandler = null;
    }
  }

  protected $mounted(): void {
    if (this.value.length > 0) {
      const path = this._findPathByValue(this.options, this.value);
      if (path) {
        this._selectedPath = path;
      }
    }
  }

  disconnectedCallback(): void {
    this._removeDocumentClickHandler();
    super.disconnectedCallback();
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-cascader': NvCascader
  }
}
