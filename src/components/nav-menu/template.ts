/*
 * @Descripttion: nav-menu组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvNavMenu } from './index.ts';

const template = function(this: NvNavMenu) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.horizontal]: this.mode === 'horizontal',
    [classNamesConfig.modifiers.vertical]: this.mode === 'vertical',
    [classNamesConfig.modifiers.collapse]: this.collapse,
    [this.size]: true
  });

  return html`
    <ul part="base" class=${ classMapResult } role="menubar">
      <slot></slot>
    </ul>
  `;
};

export default template;
