/*
 * @Descripttion: tab-pane组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvTabPane } from './index.ts';

const template = function(this: NvTabPane) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.active]: this.active
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <slot></slot>
    </div>
  `;
};

export default template;
