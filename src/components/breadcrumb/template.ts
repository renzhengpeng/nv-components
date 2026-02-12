/*
 * @Descripttion: breadcrumb组件html模板
 * @creater: zhengpeng.ren
 * @since: 2026-02-12
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvBreadcrumb } from './index.ts';

interface Context {
  _handleSlotChange: () => void;
}

const template = function(this: NvBreadcrumb, context: Context) {
  const { _handleSlotChange } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true
  });

  return html`
    <nav part="base" class=${ classMapResult } aria-label="Breadcrumb">
      <slot @slotchange=${ _handleSlotChange }></slot>
    </nav>
  `;
};

export default template;
