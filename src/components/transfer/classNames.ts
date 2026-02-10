/*
 * @Descripttion: transfer组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-transfer';

const classNames = {
  block: BLOCK,
  elements: {
    panel: `${ BLOCK }__panel`,
    header: `${ BLOCK }__header`,
    title: `${ BLOCK }__title`,
    count: `${ BLOCK }__count`,
    search: `${ BLOCK }__search`,
    searchInput: `${ BLOCK }__search-input`,
    body: `${ BLOCK }__body`,
    item: `${ BLOCK }__item`,
    itemLabel: `${ BLOCK }__item-label`,
    buttons: `${ BLOCK }__buttons`,
    button: `${ BLOCK }__button`
  },
  modifiers: {
    itemSelected: `${ BLOCK }__item--selected`
  }
};

export default classNames;

