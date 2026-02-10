/*
 * @Descripttion: submenu组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-submenu';

const classNames = {
  block: BLOCK,
  elements: {
    title: `${BLOCK}__title`,
    titleContent: `${BLOCK}__title-content`,
    icon: `${BLOCK}__icon`,
    arrow: `${BLOCK}__arrow`,
    list: `${BLOCK}__list`
  },
  modifiers: {
    active: 'is-active',
    opened: 'is-opened',
    disabled: 'is-disabled'
  }
};

export default classNames;
