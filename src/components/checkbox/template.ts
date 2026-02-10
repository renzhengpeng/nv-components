/*
 * @Descripttion: checkbox组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvCheckbox } from './index.ts';

interface Context {
  _handleChange: (event: Event) => void;
  _handleFocus: (event: Event) => void;
  _handleBlur: (event: Event) => void;
  _handleLabelClick: (event: Event) => void;
}

const template = function(this: NvCheckbox, context: Context) {
  const { _handleChange, _handleFocus, _handleBlur, _handleLabelClick } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.checked]: this.checked,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.border]: this.border,
    [classNamesConfig.modifiers.indeterminate]: this.indeterminate,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  return html`
    <label part="base" class=${ classMapResult } @click=${ _handleLabelClick }>
      <input
        type="checkbox"
        class="${ classNamesConfig.block }__original"
        name=${ this.name }
        value=${ this.value }
        ?checked=${ this.checked }
        ?disabled=${ this.disabled }
        @change=${ _handleChange }
        @focus=${ _handleFocus }
        @blur=${ _handleBlur }
      />
      <span part="input" class="${ classNamesConfig.block }__input"></span>
      <span part="label" class="${ classNamesConfig.block }__label">
        <slot></slot>
        ${ this.label ? html`${ this.label }` : null }
      </span>
    </label>
  `;
};

export default template;
