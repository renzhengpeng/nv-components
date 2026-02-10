/*
 * @Descripttion: input组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvInput } from './index.ts';

const template = function(this: NvInput, context: any) {
  const { 
    _handleInput, 
    _handleFocus, 
    _handleBlur, 
    _handleClear, 
    _handlePasswordToggle,
    _handleChange 
  } = context;

  const wrapperClassMap = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.focus]: this.isFocused || false,
    [classNamesConfig.modifiers.clearable]: this.clearable,
    [classNamesConfig.modifiers.showPassword]: this.type === 'password' && this.showPassword,
    [classNamesConfig.modifiers.prefix]: !!this.prefixIcon,
    [classNamesConfig.modifiers.suffix]: !!this.suffixIcon || (this.clearable && this.value) || (this.type === 'password' && this.showPassword),
    [classNamesConfig.modifiers.readonly]: this.readonly,
    [this.size]: true,
    'has-prepend-button': this.prependIsButton,
    'has-append-button': this.appendIsButton
  });

  const inputType = this.type === 'password' && this.showPasswordIcon
    ? 'text'
    : this.type;
  const showClearIcon = this.clearable && this.value && !this.disabled;
  const showPasswordIcon = this.type === 'password' && this.showPassword && !this.disabled;

  return html`
    <div part="base" class=${ wrapperClassMap }>
      ${ this.hasPrepend
        ? this.prependIsButton
          ? html`<slot name="prepend" @slotchange=${ this._handlePrependSlotChange }></slot>`
          : html`
            <div part="prepend" class=${ classNamesConfig.elements.prepend }>
              <slot name="prepend" @slotchange=${ this._handlePrependSlotChange }></slot>
            </div>
          `
        : html`<slot name="prepend" @slotchange=${ this._handlePrependSlotChange } style="display:none"></slot>` }
      <div part="wrapper" class=${ classNamesConfig.elements.wrapper }>
        ${ this.prefixIcon
          ? html`
            <span part="prefix" class=${ classNamesConfig.elements.prefix }>
              <nv-icon name=${ this.prefixIcon } class=${ classNamesConfig.elements.icon }></nv-icon>
            </span>
          `
          : '' }
        ${ this.type === 'textarea'
          ? html`
            <textarea
              part="input"
              class=${ classNamesConfig.elements.inner }
              .value=${ this.value }
              placeholder=${ this.placeholder }
              ?disabled=${ this.disabled }
              ?readonly=${ this.readonly }
              ?autofocus=${ this.autofocus }
              name=${ this.name }
              tabindex=${ this.tabindex || '' }
              maxlength=${ this.maxlength || '' }
              rows=${ this.rows }
              @input=${ _handleInput }
              @focus=${ _handleFocus }
              @blur=${ _handleBlur }
              @change=${ _handleChange }
            ></textarea>
          `
          : html`
            <input
              part="input"
              class=${ classNamesConfig.elements.inner }
              type=${ inputType }
              .value=${ this.value }
              placeholder=${ this.placeholder }
              ?disabled=${ this.disabled }
              ?readonly=${ this.readonly }
              ?autofocus=${ this.autofocus }
              name=${ this.name }
              autocomplete=${ this.autocomplete }
              tabindex=${ this.tabindex || '' }
              maxlength=${ this.maxlength || '' }
              max=${ this.type === 'number' && this.max !== undefined ? this.max : '' }
              min=${ this.type === 'number' && this.min !== undefined ? this.min : '' }
              @input=${ _handleInput }
              @focus=${ _handleFocus }
              @blur=${ _handleBlur }
              @change=${ _handleChange }
            />
          ` }
        ${ this.suffixIcon
          ? html`
            <span part="suffix" class=${ classNamesConfig.elements.suffix }>
              <nv-icon name=${ this.suffixIcon } class=${ classNamesConfig.elements.icon }></nv-icon>
            </span>
          `
          : '' }
        ${ showClearIcon
          ? html`
            <span part="clear" class=${ classNamesConfig.elements.clearIcon } @click=${ _handleClear }>
              <nv-icon name="close" class=${ classNamesConfig.elements.icon }></nv-icon>
            </span>
          `
          : '' }
        ${ showPasswordIcon
          ? html`
            <span part="password" class=${ classNamesConfig.elements.passwordIcon } @click=${ _handlePasswordToggle }>
              <nv-icon
                name=${ this.showPasswordIcon
                  ? 'view'
                  : 'close' }
                class=${ classNamesConfig.elements.icon }
              ></nv-icon>
            </span>
          `
          : '' }
      </div>
      ${ this.hasAppend
        ? this.appendIsButton
          ? html`<slot name="append" @slotchange=${ this._handleAppendSlotChange }></slot>`
          : html`
            <div part="append" class=${ classNamesConfig.elements.append }>
              <slot name="append" @slotchange=${ this._handleAppendSlotChange }></slot>
            </div>
          `
        : html`<slot name="append" @slotchange=${ this._handleAppendSlotChange } style="display:none"></slot>` }
      ${ this.showWordLimit && this.maxlength
        ? html`
          <div part="count" class=${ classNamesConfig.elements.count }>
            ${ this.value.length } / ${ this.maxlength }
          </div>
        `
        : '' }
    </div>
  `;
};

export default template;
