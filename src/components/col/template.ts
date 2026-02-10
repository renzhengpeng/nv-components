/*
 * @Descripttion: col组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import { NvCol } from './index.ts';

const template = function(this: NvCol) {
  // 样式应用到 :host，直接使用 slot
  return html`
    <slot></slot>
  `;
};

export default template;
