/*
 * @creater: zhengpeng.ren
 * @since: 2024/8/28 10:59
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: button-group
 */
import { unsafeCSS, css, customElement, property, Component } from '../../based-on/index.ts';
import { PropertyValues } from 'lit';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * button组件
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('nv-button-group')
export class NvButtonGroup extends Component {
  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 按钮组尺寸，会传递给内部所有按钮
   */
  @property({ type: String })
  size: 'mini' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * 当前激活的按钮的 key（通过 data-key 属性标识）
   */
  @property({ type: String, attribute: 'active-key' })
  activeKey: string = '';

  /**
   * 是否垂直排列
   */
  @property({ type: Boolean, reflect: true })
  vertical: boolean = false;

  /**
   * 按钮宽度（水平和垂直模式都支持）
   * - 垂直模式：不设置时会自动计算最宽按钮的宽度并应用到所有按钮
   * - 水平模式：不设置时按钮保持自然宽度
   */
  @property({ type: String, attribute: 'button-width' })
  buttonWidth: string = '';

  render() {
    return template.call(this);
  }

  protected $mounted() {
    this._updateButtonsDisabled();
    this._updateButtonsSize();
    this._updateButtonsActive();
    this._attachButtonClickListeners();
    this._updateButtonsWidth();

    // 监听 slot 变化，确保动态添加的按钮也能正确设置属性
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      slot.addEventListener('slotchange', () => {
        this._updateButtonsDisabled();
        this._updateButtonsSize();
        this._updateButtonsActive();
        this._attachButtonClickListeners();
        this._updateButtonsWidth();
      });
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('disabled')) {
      this._updateButtonsDisabled();
    }
    if (changedProperties.has('size')) {
      this._updateButtonsSize();
    }
    if (changedProperties.has('activeKey')) {
      this._updateButtonsActive();
    }
    if (changedProperties.has('vertical') || changedProperties.has('buttonWidth')) {
      this._updateButtonsWidth();
    }
  }

  /**
   * 更新子按钮的 disabled 状态
   */
  private _updateButtonsDisabled(): void {
    // 使用 querySelectorAll 查找所有子按钮（包括通过 slot 分配的）
    const buttons = Array.from(this.querySelectorAll('nv-button')) as HTMLElement[];
    buttons.forEach(button => {
      if (this.disabled) {
        button.setAttribute('disabled', '');
      } else {
        button.removeAttribute('disabled');
      }
    });
  }

  /**
   * 更新子按钮的 size 属性
   */
  private _updateButtonsSize(): void {
    // 使用 querySelectorAll 查找所有子按钮（包括通过 slot 分配的）
    const buttons = Array.from(this.querySelectorAll('nv-button')) as HTMLElement[];
    buttons.forEach(button => {
      button.setAttribute('size', this.size);
    });
  }

  /**
   * 更新子按钮的 active 状态（基于 activeKey）
   */
  private _updateButtonsActive(): void {
    // 使用 querySelectorAll 查找所有子按钮（包括通过 slot 分配的）
    const buttons = Array.from(this.querySelectorAll('nv-button')) as HTMLElement[];
    buttons.forEach(button => {
      const buttonKey = button.getAttribute('data-key');
      if (buttonKey && buttonKey === this.activeKey) {
        button.setAttribute('active', '');
      } else {
        button.removeAttribute('active');
      }
    });
  }

  /**
   * 为子按钮添加点击事件监听器
   */
  private _attachButtonClickListeners(): void {
    const buttons = Array.from(this.querySelectorAll('nv-button')) as HTMLElement[];
    buttons.forEach(button => {
      // 移除旧的监听器，避免重复绑定
      button.removeEventListener('click', this._handleButtonClick);
      // 添加新的监听器
      button.addEventListener('click', this._handleButtonClick);
    });
  }

  /**
   * 更新子按钮的宽度
   * - 水平模式：只有手动设置 buttonWidth 时才应用宽度，否则保持按钮自然宽度
   * - 垂直模式：如果设置了 buttonWidth 则应用，否则自动计算最宽按钮的宽度并应用到所有按钮
   */
  private _updateButtonsWidth(): void {
    const buttons = Array.from(this.querySelectorAll('nv-button')) as HTMLElement[];

    if (this.buttonWidth) {
      // 如果设置了 buttonWidth，直接应用（水平和垂直模式都支持）
      buttons.forEach(button => {
        button.style.width = this.buttonWidth;
      });
    } else if (this.vertical) {
      // 垂直模式下，如果没有设置 buttonWidth，自动计算最大宽度
      // 先移除所有宽度设置，让按钮恢复自然宽度
      buttons.forEach(button => {
        button.style.removeProperty('width');
      });

      // 等待下一帧，确保 DOM 已更新
      requestAnimationFrame(() => {
        // 计算所有按钮的最大宽度
        let maxWidth = 0;
        buttons.forEach(button => {
          const width = button.offsetWidth;
          if (width > maxWidth) {
            maxWidth = width;
          }
        });

        // 应用最大宽度到所有按钮
        if (maxWidth > 0) {
          buttons.forEach(button => {
            button.style.width = `${ maxWidth }px`;
          });
        }
      });
    } else {
      // 水平模式下，如果没有设置 buttonWidth，移除宽度设置，保持按钮自然宽度
      buttons.forEach(button => {
        button.style.removeProperty('width');
      });
    }
  }

  /**
   * 处理按钮点击事件
   */
  private _handleButtonClick = (event: Event): void => {
    const button = event.currentTarget as HTMLElement;
    const buttonKey = button.getAttribute('data-key');

    if (buttonKey && buttonKey !== this.activeKey) {
      const oldKey = this.activeKey;
      this.activeKey = buttonKey;

      // 触发 active-change 事件
      this.dispatchEvent(new CustomEvent('nv-active-change', {
        detail: {
          activeKey: buttonKey,
          oldKey
        },
        bubbles: true,
        composed: true
      }));
    }
  };

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-button-group': NvButtonGroup
  }
}
