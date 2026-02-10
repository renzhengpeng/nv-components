/*
 * @Descripttion: steps组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvSteps } from './index.ts';

const template = function(this: NvSteps) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.simple]: this.simple,
    [classNamesConfig.modifiers.horizontal]: this.direction === 'horizontal',
    [classNamesConfig.modifiers.vertical]: this.direction === 'vertical',
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <slot></slot>
    </div>
  `;
};

export default template;
