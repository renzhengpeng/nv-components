/*
 * @Descripttion: radio-group组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import classNamesConfig from './classNames';
import { NvRadioGroup } from './index.ts';

interface Context {
  _handleSlotChange: () => void;
}

const template = function(this: NvRadioGroup, context: Context) {
  const { _handleSlotChange } = context;

  return html`
    <div part="base" class=${ classNamesConfig.block }>
      <slot @slotchange=${ _handleSlotChange }></slot>
    </div>
  `;
};

export default template;
