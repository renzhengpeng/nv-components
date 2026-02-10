/*
 * @Descripttion: calendar组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-calendar';

const classNames = {
  block: BLOCK,
  elements: {
    header: `${ BLOCK }__header`,
    btn: `${ BLOCK }__btn`,
    title: `${ BLOCK }__title`,
    yearSelect: `${ BLOCK }__year-select`,
    monthSelect: `${ BLOCK }__month-select`,
    todayBtn: `${ BLOCK }__today-btn`,
    body: `${ BLOCK }__body`,
    weekdays: `${ BLOCK }__weekdays`,
    weekday: `${ BLOCK }__weekday`,
    days: `${ BLOCK }__days`,
    day: `${ BLOCK }__day`
  },
  modifiers: {
    selected: 'is-selected',
    today: 'is-today',
    otherMonth: 'is-other-month',
    disabled: 'is-disabled',
    inRange: 'is-in-range',
    rangeEdge: 'is-range-edge'
  }
};

export default classNames;

