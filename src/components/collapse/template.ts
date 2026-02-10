/*
 * @Descripttion: collapse组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvCollapse } from './index.ts';

const template = function(this: NvCollapse) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.accordion]: this.accordion
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <slot></slot>
    </div>
  `;
};

export default template;

