/*
 * @Descripttion: select组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-select';

const classNames = {
  block: BLOCK,
  elements: {
    wrapper: `${ BLOCK }__wrapper`,
    input: `${ BLOCK }__input`,
    inputInner: `${ BLOCK }__input-inner`,
    placeholder: `${ BLOCK }__placeholder`,
    selected: `${ BLOCK }__selected`,
    tags: `${ BLOCK }__tags`,
    tag: `${ BLOCK }__tag`,
    tagLabel: `${ BLOCK }__tag-label`,
    tagClose: `${ BLOCK }__tag-close`,
    tagCount: `${ BLOCK }__tag-count`,
    suffix: `${ BLOCK }__suffix`,
    suffixIcon: `${ BLOCK }__suffix-icon`,
    clearIcon: `${ BLOCK }__clear`,
    dropdown: `${ BLOCK }__dropdown`,
    dropdownWrapper: `${ BLOCK }__dropdown-wrapper`,
    /** 虚拟滚动时包装器不滚动，由选项容器作为滚动容器 */
    dropdownWrapperVirtual: `${ BLOCK }__dropdown-wrapper--virtual`,
    searchInput: `${ BLOCK }__search-input`,
    options: `${ BLOCK }__options`,
    /** 虚拟滚动时选项容器作为滚动容器，需限制最大高度 */
    optionsVirtual: `${ BLOCK }__options--virtual`,
    optionsSlot: `${ BLOCK }__options-slot`,
    empty: `${ BLOCK }__empty`
  },
  modifiers: {
    disabled: 'is-disabled',
    focus: 'is-focus',
    multiple: 'is-multiple',
    filterable: 'is-filterable',
    clearable: 'is-clearable',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;
