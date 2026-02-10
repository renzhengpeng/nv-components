/*
 * @Descripttion: step组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-step';

const classNames = {
  block: BLOCK,
  modifiers: {
    horizontal: 'is-horizontal',
    vertical: 'is-vertical',
    center: 'is-center',
    simple: 'is-simple',
    process: 'is-process',
    finish: 'is-finish',
    success: 'is-success',
    error: 'is-error',
    wait: 'is-wait',
    last: 'is-last',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  },
  elements: {
    head: `${ BLOCK }__head`,
    line: `${ BLOCK }__line`,
    'line-inner': `${ BLOCK }__line-inner`,
    icon: `${ BLOCK }__icon`,
    title: `${ BLOCK }__title`,
    description: `${ BLOCK }__description`,
    main: `${ BLOCK }__main`
  }
};

export default classNames;
