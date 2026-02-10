/*
 * @Descripttion: radio-group组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * radio-group组件
 * 
 * @slot - 默认插槽，用于放置 Radio 组件
 */
@customElement('nv-radio-group')
export class NvRadioGroup extends Component {
  /**
   * 绑定值，当前选中的 Radio 的 value
   */
  @property({ type: String })
  value: string = '';

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
   * 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 按钮形式的 Radio 激活时的文本颜色
   */
  @property({ type: String })
  textColor: string = '';

  /**
   * 按钮形式的 Radio 激活时的填充色和边框色
   */
  @property({ type: String })
  fill: string = '';

  /**
   * 子元素列表
   */
  private _radioChildren: Element[] = [];

  render() {
    return template.call(this, { _handleSlotChange: this._handleSlotChange.bind(this) });
  }

  $mounted(): void {
    this._updateRadios();
    this._updateRadioSpacing();
  }

  /**
   * 处理 radio 变化
   */
  _handleRadioChange(value: string): void {
    if (this.value === value) {
      return;
    }

    this.value = value;

    // 更新所有 radio 的选中状态
    this._updateRadios();

    // 触发 change 事件
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: value,
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * 更新所有 radio 子元素
   */
  private _updateRadios(): void {
    setTimeout(() => {
      const children = Array.from(this.children);
      this._radioChildren = children.filter(
        (node) => node.tagName?.toLowerCase() === 'nv-radio'
      );

      // 更新每个 radio
      this._radioChildren.forEach((radio, index) => {
        const radioElement = radio as any;
        const radioEl = radio as HTMLElement;
        
        // 设置 name
        if (this.name) {
          radioElement.name = this.name;
        }

        // 设置 disabled
        if (this.disabled) {
          radioElement.disabled = this.disabled;
        }

        // 设置 size
        if (this.size) {
          radioElement.size = this.size;
        }

        // 设置 checked 状态
        radioElement.checked = radioElement.value === this.value;

        // 设置间距和按钮样式
        if (radioElement.type === 'button') {
          // button 类型不需要间距，按钮应该连在一起
          radioEl.style.marginRight = '0';
          radioEl.style.marginLeft = '0';
          
          // 移除之前的按钮位置类
          radioElement.classList.remove('is-button-first', 'is-button-middle', 'is-button-last');
          
          // 设置按钮的圆角和边框（相邻按钮之间共享边框）
          if (index === 0) {
            // 第一个按钮：左边有圆角，右边没有圆角，保留所有边框
            radioElement.classList.add('is-button-first');
            // 不设置 borderRight，保留默认边框
          } else if (index === this._radioChildren.length - 1) {
            // 最后一个按钮：右边有圆角，左边没有圆角，移除左边框
            radioElement.classList.add('is-button-last');
            radioEl.style.borderLeft = 'none';
          } else {
            // 中间的按钮：没有圆角，移除左边框（与前一个按钮共享边框）
            radioElement.classList.add('is-button-middle');
            radioEl.style.borderLeft = 'none';
          }
          
          // 触发重新渲染，使模板中的类生效
          radioElement.requestUpdate();
        } else {
          // radio 类型需要间距
          if (index < this._radioChildren.length - 1) {
            radioEl.style.marginRight = '30px';
          } else {
            radioEl.style.marginRight = '0';
          }
        }

        // 触发更新
        radioElement.requestUpdate();
      });
    }, 0);
  }

  /**
   * 处理 slot 变化
   */
  private _handleSlotChange(): void {
    this._updateRadioSpacing();
  }

  /**
   * 更新 radio 间距
   */
  private _updateRadioSpacing(): void {
    setTimeout(() => {
      const children = Array.from(this.children);
      const radioChildren = children.filter(
        (node) => node.tagName?.toLowerCase() === 'nv-radio'
      ) as any[];

      radioChildren.forEach((radio, index) => {
        const radioEl = radio as HTMLElement;
        
        // button 类型的 radio 不需要间距（它们应该连在一起）
        if (radio.type === 'button') {
          radioEl.style.marginRight = '0';
          radioEl.style.marginLeft = '0';
          
          // 移除之前的按钮位置类
          radio.classList.remove('is-button-first', 'is-button-middle', 'is-button-last');
          
          // 设置按钮的圆角和边框（相邻按钮之间共享边框）
          if (index === 0) {
            // 第一个按钮：左边有圆角，右边没有圆角，保留所有边框
            radio.classList.add('is-button-first');
            // 不设置 borderRight，保留默认边框
          } else if (index === radioChildren.length - 1) {
            // 最后一个按钮：右边有圆角，左边没有圆角，移除左边框
            radio.classList.add('is-button-last');
            radioEl.style.borderLeft = 'none';
          } else {
            // 中间的按钮：没有圆角，移除左边框（与前一个按钮共享边框）
            radio.classList.add('is-button-middle');
            radioEl.style.borderLeft = 'none';
          }
          
          // 触发重新渲染，使模板中的类生效
          (radio as any).requestUpdate();
        } else {
          // radio 类型需要间距
          if (index < radioChildren.length - 1) {
            radioEl.style.marginRight = '30px';
          } else {
            radioEl.style.marginRight = '0';
          }
        }
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
        changedProperties.has('disabled') ||
        changedProperties.has('size')) {
      this._updateRadios();
    }

    // 监听子元素变化，更新间距
    this._updateRadioSpacing();
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-radio-group': NvRadioGroup
  }
}
