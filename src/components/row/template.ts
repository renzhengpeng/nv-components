/*
 * @Descripttion: row组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvRow } from './index.ts';

interface Context {
  _getRowStyle: () => string;
}

const template = function(this: NvRow, context: Context) {
  const { _getRowStyle } = context;
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.flex]: this.type === 'flex'
  });

  return html`
    <div
      part="base"
      class=${ classMapResult }
      style="${ _getRowStyle() }"
    >
      <slot></slot>
    </div>
  `;
};

export default template;
