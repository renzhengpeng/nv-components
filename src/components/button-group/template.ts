/*
 * @creater: zhengpeng.ren
 * @since: 2024/8/28 11:01
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: html template
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvButtonGroup } from './index.ts';

const template = function(this: NvButtonGroup) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.vertical]: this.vertical
  });

  return html`
      <div part="base" class=${ classMapResult }>
          <slot></slot>
      </div>
  `;
};
export default template;
