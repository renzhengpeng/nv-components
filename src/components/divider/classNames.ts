/*
 * @Descripttion: divider组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-divider';

const classNames = {
  block: BLOCK,
  elements: {
    text: `${ BLOCK }__text`
  },
  modifiers: {
    vertical: 'is-vertical',
    horizontal: 'is-horizontal',
    contentPosition: 'content-position'
  }
};

export default classNames;

