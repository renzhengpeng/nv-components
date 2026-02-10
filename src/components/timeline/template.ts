/*
 * @Descripttion: timeline组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvTimeline } from './index.ts';

const template = function(this: NvTimeline) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true
  });

  return html`
    <ul part="base" class=${ classMapResult }>
      <slot></slot>
    </ul>
  `;
};

export default template;
