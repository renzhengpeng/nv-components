/*
 * @Descripttion: card组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvCard } from './index.ts';

interface Context {
  _handleHeaderSlotChange: () => void;
  _handleFooterSlotChange: () => void;
}

const template = function(this: NvCard, context: Context) {
  const { _handleHeaderSlotChange, _handleFooterSlotChange } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers['always-shadow']]: this.shadow === 'always',
    [classNamesConfig.modifiers['never-shadow']]: this.shadow === 'never',
    [classNamesConfig.modifiers['hover-shadow']]: this.shadow === 'hover'
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="header" class=${ classNamesConfig.elements.header }>
        <slot name="header" @slotchange=${ _handleHeaderSlotChange }>${ this.header }</slot>
      </div>
      <div part="body" class=${ classNamesConfig.elements.body }>
        <slot></slot>
      </div>
      <div part="footer" class=${ classNamesConfig.elements.footer }>
        <slot name="footer" @slotchange=${ _handleFooterSlotChange }></slot>
      </div>
    </div>
  `;
};

export default template;
