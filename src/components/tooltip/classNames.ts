/*
 * @Descripttion: tooltip组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-tooltip';

const classNames = {
  block: BLOCK,
  elements: {
    trigger: `${ BLOCK }__trigger`,
    content: `${ BLOCK }__content`
  },
  modifiers: {
    disabled: 'is-disabled'
  }
};

export default classNames;

