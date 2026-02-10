/*
 * @Descripttion: select组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvSelect } from './index.ts';

interface Context {
  _handleClick: () => void;
  _handleFocus: () => void;
  _handleBlur: () => void;
  _handleClear: (event: Event) => void;
  _handleOptionClick: (value: string | number) => void;
  _handleSearchInput: (event: Event) => void;
  _handleTagClose: (event: Event, value: string | number) => void;
  _handleKeyDown: (event: KeyboardEvent) => void;
  _handlePopupHide: () => void;
  _getDisplayText: () => string;
  _getSelectedTags: () => Array<{ value: string | number; label: string }>;
  _renderDropdownContent: () => any;
  /** 浮层内容是否渲染（退场时延迟清空，与 Popup 退场过渡一致） */
  dropdownContentVisible: boolean;
  /** 当前是否实际使用虚拟滚动（virtual 为 true 且选项数 >= virtualThreshold） */
  useVirtualScroll: boolean;
  /** 下拉浮层最大高度（如 "300px"、"50vh"），空则使用 CSS 变量默认值 */
  dropdownMaxHeight?: string;
  /** 多选时最多展示的 tag 数量，超出折叠为 +N；可为 'responsive' */
  maxTagCount?: number | 'responsive';
  /** maxTagCount 为 responsive 时由测量得到的可见数量 */
  responsiveVisibleCount?: number;
}

const template = function(this: NvSelect, context: Context) {
  const {
    _handleClick,
    _handleFocus,
    _handleBlur,
    _handleClear,
    _handleSearchInput,
    _handleTagClose,
    _handleKeyDown,
    _handlePopupHide,
    _getDisplayText,
    _getSelectedTags,
    _renderDropdownContent,
    dropdownContentVisible,
    useVirtualScroll,
    dropdownMaxHeight,
    maxTagCount,
    responsiveVisibleCount
  } = context;

  const wrapperClassMap = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.focus]: this.isFocused || this.visible,
    [classNamesConfig.modifiers.multiple]: this.multiple,
    [classNamesConfig.modifiers.filterable]: this.filterable,
    [classNamesConfig.modifiers.clearable]: this.clearable,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const displayText = _getDisplayText();
  const selectedTags = _getSelectedTags();
  const visibleTags = maxTagCount === 'responsive'
    ? selectedTags.slice(0, responsiveVisibleCount ?? selectedTags.length)
    : (typeof maxTagCount === 'number' && selectedTags.length > maxTagCount
      ? selectedTags.slice(0, maxTagCount)
      : selectedTags);
  const hiddenTagCount = selectedTags.length - visibleTags.length;
  const showClearIcon = this.clearable && !this.disabled && (
    (this.multiple && Array.isArray(this.value) && this.value.length > 0) ||
    (!this.multiple && this.value !== '')
  );

  return html`
    <nv-popup
      part="base"
      .placement=${ this.placement }
      .distance=${ this.distance }
      .strategy=${ this.strategy }
      ?auto-adjust=${ this.autoAdjust }
      .sync=${ this.sync }
      trigger="manual"
      ?active=${ this.visible }
      .closeOnClickOutside=${ true }
      @nv-hide=${ _handlePopupHide }
      style="--nv-popup-padding: 0;"
    >
      <div
        part="trigger"
        slot="anchor"
        class=${ wrapperClassMap }
        @click=${ _handleClick }
        @keydown=${ _handleKeyDown }
        role="combobox"
        aria-expanded=${ this.visible ? 'true' : 'false' }
        aria-haspopup="listbox"
        aria-controls=${ this._dropdownId }
        aria-disabled=${ this.disabled ? 'true' : 'false' }
        tabindex=${ this.disabled ? '-1' : '0' }
      >
        <div part="wrapper" class=${ classNamesConfig.elements.wrapper }>
          ${ this.multiple
            ? html`
              ${ selectedTags.length > 0
                ? html`
                  <div part="tags" class=${ classNamesConfig.elements.tags }>
                    ${ repeat(
                      visibleTags,
                      (tag) => tag.value,
                      (tag) => html`
                        <span part="tag" class=${ classNamesConfig.elements.tag }>
                          <span class=${ classNamesConfig.elements.tagLabel }>${ tag.label }</span>
                          <nv-icon
                            name="close"
                            class=${ classNamesConfig.elements.tagClose }
                            @click=${ (e: Event) => _handleTagClose(e, tag.value) }
                          ></nv-icon>
                        </span>
                      `
                    ) }
                    ${ hiddenTagCount > 0
                      ? html`
                        <span part="tag-count" class=${ classNamesConfig.elements.tagCount }>
                          +${ hiddenTagCount }
                        </span>
                      `
                      : '' }
                  </div>
                `
                : this.filterable && this.visible
                  ? html`
                    <input
                      part="input"
                      class=${ classNamesConfig.elements.searchInput }
                      type="text"
                      .value=${ this.query }
                      placeholder=${ this.placeholder }
                      @input=${ _handleSearchInput }
                      @focus=${ _handleFocus }
                      @blur=${ _handleBlur }
                    />
                  `
                  : html`
                    <div part="input" class=${ classNamesConfig.elements.input }>
                      <span class=${ classNamesConfig.elements.placeholder }>${ this.placeholder }</span>
                    </div>
                  ` }
            `
            : html`
              ${ this.filterable && this.visible
                ? html`
                  <input
                    part="input"
                    class=${ classNamesConfig.elements.searchInput }
                    type="text"
                    .value=${ this.query }
                    placeholder=${ displayText || this.placeholder }
                    @input=${ _handleSearchInput }
                    @focus=${ _handleFocus }
                    @blur=${ _handleBlur }
                  />
                `
                : html`
                  <div part="input" class=${ classNamesConfig.elements.input }>
                    ${ displayText
                      ? html`<span class=${ classNamesConfig.elements.selected }>${ displayText }</span>`
                      : html`<span class=${ classNamesConfig.elements.placeholder }>${ this.placeholder }</span>` }
                  </div>
                ` }
            ` }
          <div part="suffix" class=${ classNamesConfig.elements.suffix }>
            ${ showClearIcon
              ? html`
                <nv-icon
                  name="close"
                  class=${ classNamesConfig.elements.clearIcon }
                  part="clear"
                  @click=${ _handleClear }
                ></nv-icon>
              `
              : '' }
            <nv-icon
              name="arrow-down"
              part="arrow"
              class=${ classNamesConfig.elements.suffixIcon }
            ></nv-icon>
          </div>
        </div>
      </div>
      <div
        part="dropdown"
        class=${ classNamesConfig.elements.dropdown }
        id=${ this._dropdownId }
        role="listbox"
        aria-label="选项列表"
      >
        <div part="dropdown-content" class=${ useVirtualScroll ? `${ classNamesConfig.elements.dropdownWrapper } ${ classNamesConfig.elements.dropdownWrapperVirtual }` : classNamesConfig.elements.dropdownWrapper } style=${ dropdownMaxHeight ? `--nv-select-dropdown-max-height: ${ dropdownMaxHeight }` : '' }>
          ${ dropdownContentVisible ? _renderDropdownContent() : '' }
        </div>
      </div>
    </nv-popup>
    <slot class="nv-select__options-slot" @slotchange=${ () => { this._updateOptions(); } }></slot>
  `;
};

export default template;
