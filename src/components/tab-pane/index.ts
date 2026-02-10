/*
 * @Descripttion: tab-pane组件
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

/**
 * tab-pane组件
 *
 * @slot - 默认插槽，用于放置标签页内容
 */
@customElement('nv-tab-pane')
export class NvTabPane extends Component {
  /**
   * 与选项卡绑定值 value 对应的标识符，表示选项卡别名
   */
  @property({ type: String })
  name: string = '';

  /**
   * 选项卡标题
   */
  @property({ type: String })
  label: string = '';

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  /**
   * 是否激活
   */
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  render() {
    return template.call(this);
  }

  $mounted(): void {
    // 初始化完成
  }

  static styles = css`
    ${ unsafeCSS(cssText) }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-tab-pane': NvTabPane;
  }
}
