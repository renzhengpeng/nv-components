/*
 * @Descripttion: result组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-result';

const classNames = {
  block: BLOCK,
  elements: {
    icon: `${ BLOCK }__icon`,
    title: `${ BLOCK }__title`,
    subTitle: `${ BLOCK }__sub-title`,
    content: `${ BLOCK }__content`,
    extra: `${ BLOCK }__extra`
  },
  modifiers: {
    type: 'is'
  }
};

export default classNames;

