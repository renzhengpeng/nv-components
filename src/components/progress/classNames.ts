/*
 * @Descripttion: progress组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-progress';

const classNames = {
  block: BLOCK,
  modifiers: {
    success: `${ BLOCK }--success`,
    warning: `${ BLOCK }--warning`,
    error: `${ BLOCK }--error`,
    textInside: 'is-text-inside',
    circle: 'is-circle',
    dashboard: 'is-dashboard',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  },
  elements: {
    bar: `${ BLOCK }__bar`,
    inner: `${ BLOCK }__inner`,
    outer: `${ BLOCK }__outer`,
    text: `${ BLOCK }__text`
  }
};

export default classNames;
