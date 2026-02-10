/*
 * @Descripttion: card组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-card';

const classNames = {
  block: BLOCK,
  modifiers: {
    'always-shadow': 'is-always-shadow',
    'never-shadow': 'is-never-shadow',
    'hover-shadow': 'is-hover-shadow'
  },
  elements: {
    header: `${ BLOCK }__header`,
    body: `${ BLOCK }__body`,
    footer: `${ BLOCK }__footer`
  }
};

export default classNames;
