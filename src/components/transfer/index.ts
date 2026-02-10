/*
 * @Descripttion: transfer组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

interface TransferItem {
  key: string;
  label: string;
  disabled?: boolean;
}

/**
 * transfer组件
 */
@customElement('nv-transfer')
export class NvTransfer extends Component {
  /**
   * 数据源
   */
  @property({ type: Array })
  data: TransferItem[] = [];

  /**
   * 已选中的值
   */
  @property({ type: Array })
  value: string[] = [];

  /**
   * 是否可搜索
   */
  @property({ type: Boolean })
  filterable: boolean = false;

  /**
   * 搜索框占位符
   */
  @property({ type: String })
  filterPlaceholder: string = '请输入搜索内容';

  /**
   * 左侧列表标题
   */
  @property({ type: String })
  titles: string[] = ['列表 1', '列表 2'];

  /**
   * 按钮文案
   */
  @property({ type: Array })
  buttonTexts: string[] = [];

  /**
   * 左侧搜索关键词
   */
  @state()
  private _leftQuery: string = '';

  /**
   * 右侧搜索关键词
   */
  @state()
  private _rightQuery: string = '';

  /**
   * 左侧面板中用户勾选的 key（用于“移动到右侧”时只移这些项）
   */
  @state()
  private _leftSelectedKeys: string[] = [];

  /**
   * 右侧面板中用户勾选的 key（用于“移动到左侧”时只移这些项）
   */
  @state()
  private _rightSelectedKeys: string[] = [];

  /** 供 template 使用（避免跨文件访问 private） */
  get _leftSelectedKeysForTemplate(): string[] {
    return this._leftSelectedKeys;
  }

  /** 供 template 使用（避免跨文件访问 private） */
  get _rightSelectedKeysForTemplate(): string[] {
    return this._rightSelectedKeys;
  }

  /**
   * 获取左侧数据
   */
  protected _getLeftData(): TransferItem[] {
    let data = this.data.filter(item => !this.value.includes(item.key));
    if (this.filterable && this._leftQuery) {
      data = data.filter(item => item.label.includes(this._leftQuery));
    }
    return data;
  }

  /**
   * 获取右侧数据
   */
  protected _getRightData(): TransferItem[] {
    let data = this.data.filter(item => this.value.includes(item.key));
    if (this.filterable && this._rightQuery) {
      data = data.filter(item => item.label.includes(this._rightQuery));
    }
    return data;
  }

  /**
   * 处理移动到右侧（仅移动用户勾选的左侧项）
   */
  protected _handleMoveToRight(): void {
    const leftData = this._getLeftData();
    const selectedKeys = this._leftSelectedKeys.filter(key =>
      leftData.some(item => item.key === key && !item.disabled)
    );
    this.value = [...this.value, ...selectedKeys];
    this._leftSelectedKeys = [];
    this._emitChange();
  }

  /**
   * 处理移动到左侧（仅移动用户勾选的右侧项）
   */
  protected _handleMoveToLeft(): void {
    const rightData = this._getRightData();
    const selectedKeys = this._rightSelectedKeys.filter(key =>
      rightData.some(item => item.key === key && !item.disabled)
    );
    this.value = this.value.filter(key => !selectedKeys.includes(key));
    this._rightSelectedKeys = [];
    this._emitChange();
  }

  /**
   * 处理全选移动到右侧
   */
  protected _handleMoveAllToRight(): void {
    const leftData = this._getLeftData();
    const keys = leftData.filter(item => !item.disabled).map(item => item.key);
    this.value = [...this.value, ...keys];
    this._emitChange();
  }

  /**
   * 处理全选移动到左侧
   */
  protected _handleMoveAllToLeft(): void {
    const rightData = this._getRightData();
    const keys = rightData.filter(item => !item.disabled).map(item => item.key);
    this.value = this.value.filter(key => !keys.includes(key));
    this._emitChange();
  }

  /**
   * 触发change事件
   */
  private _emitChange(): void {
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 左侧条目点击：切换该项在“待移右侧”的勾选状态
   */
  protected _handleLeftItemClick(key: string, disabled?: boolean): void {
    if (disabled) return;
    const idx = this._leftSelectedKeys.indexOf(key);
    if (idx === -1) {
      this._leftSelectedKeys = [...this._leftSelectedKeys, key];
    } else {
      this._leftSelectedKeys = this._leftSelectedKeys.filter(k => k !== key);
    }
  }

  /**
   * 右侧条目点击：切换该项在“待移左侧”的勾选状态
   */
  protected _handleRightItemClick(key: string, disabled?: boolean): void {
    if (disabled) return;
    const idx = this._rightSelectedKeys.indexOf(key);
    if (idx === -1) {
      this._rightSelectedKeys = [...this._rightSelectedKeys, key];
    } else {
      this._rightSelectedKeys = this._rightSelectedKeys.filter(k => k !== key);
    }
  }

  /**
   * 处理左侧搜索
   */
  protected _handleLeftQueryChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._leftQuery = input.value;
  }

  /**
   * 处理右侧搜索
   */
  protected _handleRightQueryChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._rightQuery = input.value;
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-transfer': NvTransfer
  }
}
