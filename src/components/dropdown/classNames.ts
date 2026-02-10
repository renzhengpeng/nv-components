/*
 * @creater: zhengpeng.ren
 * @since: 2024/8/30 15:12
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: dropdown class config
 */
const BLOCK = 'nv-dropdown';

const classNames = {
  block: BLOCK,
  elements: {
    trigger: `${ BLOCK }__trigger`,
    triggerContent: `${ BLOCK }__trigger-content`,
    triggerText: `${ BLOCK }__trigger-text`,
    arrow: `${ BLOCK }__arrow`,
    arrowIcon: `${ BLOCK }__arrow-icon`,
    menu: `${ BLOCK }__menu`,
    menuItem: `${ BLOCK }__menu-item`,
    menuItemDisabled: `${ BLOCK }__menu-item--disabled`,
    menuDivider: `${ BLOCK }__menu-divider`
  },
  modifiers: {
    disabled: 'is-disabled',
    active: 'is-active'
  }
};

export default classNames;
