/*
 * @Descripttion: cascader组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-cascader';

const classNames = {
  block: BLOCK,
  elements: {
    input: `${ BLOCK }__input`,
    inputInner: `${ BLOCK }__input-inner`,
    clear: `${ BLOCK }__clear`,
    suffix: `${ BLOCK }__suffix`,
    panelsWrapper: `${ BLOCK }__panels-wrapper`,
    panel: `${ BLOCK }__panel`,
    menu: `${ BLOCK }__menu`,
    menuItem: `${ BLOCK }__menu-item`,
    menuItemLabel: `${ BLOCK }__menu-item-label`,
    menuItemIcon: `${ BLOCK }__menu-item-icon`
  },
  modifiers: {
    disabled: 'is-disabled',
    focus: 'is-focus',
    selected: 'is-selected',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;

