/*
 * @Descripttion: breadcrumb-item组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2026-02-12
 */
const BLOCK = 'nv-breadcrumb-item';

const classNames = {
  block: BLOCK,
  modifiers: {
    last: 'is-last',
    disabled: 'is-disabled'
  },
  elements: {
    link: `${ BLOCK }__link`,
    text: `${ BLOCK }__text`,
    separator: `${ BLOCK }__separator`
  }
};

export default classNames;
