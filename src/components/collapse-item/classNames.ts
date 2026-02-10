/*
 * @Descripttion: collapse-item组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-collapse-item';

const classNames = {
  block: BLOCK,
  elements: {
    header: `${ BLOCK }__header`,
    title: `${ BLOCK }__title`,
    icon: `${ BLOCK }__icon`,
    wrapper: `${ BLOCK }__wrapper`,
    content: `${ BLOCK }__content`
  },
  modifiers: {
    active: 'is-active',
    disabled: 'is-disabled'
  }
};

export default classNames;

