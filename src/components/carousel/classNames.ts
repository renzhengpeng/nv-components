/*
 * @Descripttion: carousel组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-carousel';

const classNames = {
  block: BLOCK,
  elements: {
    container: `${ BLOCK }__container`,
    track: `${ BLOCK }__track`,
    indicators: `${ BLOCK }__indicators`,
    indicator: `${ BLOCK }__indicator`,
    arrow: `${ BLOCK }__arrow`,
    arrowLeft: `${ BLOCK }__arrow-left`,
    arrowRight: `${ BLOCK }__arrow-right`
  },
  modifiers: {
    card: 'is-card',
    vertical: 'is-vertical',
    indicatorPosition: 'indicator-position',
    active: 'is-active'
  }
};

export default classNames;

