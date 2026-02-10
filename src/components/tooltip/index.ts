/*
 * @Descripttion: tooltip组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, query } from '../../based-on/index.ts';
import cssText from './style.scss?inline';
import template from './template.ts';
import { PropertyValues } from 'lit';
import '../popup/index';

/**
 * tooltip组件（基于 nv-popup 的语义封装，透传 trigger / openDelay / hideDelay / focus 等）
 *
 * @slot - 触发元素
 * @slot content - tooltip内容
 */
@customElement('nv-tooltip')
export class NvTooltip extends Component {
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  content: string = '';

  @property({ type: String })
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' = 'top';

  @property({ type: String })
  trigger: 'hover' | 'click' | 'focus' | 'manual' = 'hover';

  @property({ type: Boolean, reflect: true })
  arrow: boolean = true;

  @property({ type: Boolean })
  visible: boolean = false;

  /* 不指定 attribute，使用默认 opendelay/hidedelay，以便 story/HTML 中 openDelay="300" 能生效 */
  @property({ type: Number })
  openDelay: number = 100;

  @property({ type: Number })
  hideDelay: number = 100;

  @query('nv-popup')
  private _popupElement?: HTMLElement & { active: boolean; disabled?: boolean };

  protected _hasContentSlot(): boolean {
    const slot = this.shadowRoot?.querySelector('slot[name="content"]') as HTMLSlotElement | null;
    if (!slot) return false;
    return slot.assignedNodes({ flatten: true }).length > 0;
  }

  render() {
    return template.call(this);
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('visible') && this._popupElement) {
      this._popupElement.active = this.visible;
    }
    if (changedProperties.has('disabled') && this._popupElement && 'disabled' in this._popupElement) {
      (this._popupElement as any).disabled = this.disabled;
    }
  }

  protected $mounted(): void {
    if (this._popupElement) {
      this._popupElement.active = this.visible;
      if ('disabled' in this._popupElement) {
        (this._popupElement as any).disabled = this.disabled;
      }
    }
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-tooltip': NvTooltip
  }
}
