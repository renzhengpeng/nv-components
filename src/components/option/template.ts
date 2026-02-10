/*
 * @Descripttion: option组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import { NvOption } from './index.ts';

const template = function(this: NvOption) {
  return html`
    <div part="base">
      <slot>${ this.label || String(this.value) }</slot>
    </div>
  `;
};

export default template;
