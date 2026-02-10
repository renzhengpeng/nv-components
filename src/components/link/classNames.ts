/*
 * @Descripttion: link组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-link';

const classNames = {
  block: BLOCK,
  modifiers: {
    primary: `${ BLOCK }--primary`,
    success: `${ BLOCK }--success`,
    warning: `${ BLOCK }--warning`,
    error: `${ BLOCK }--error`,
    info: `${ BLOCK }--info`,
    disabled: 'is-disabled',
    underline: 'is-underline',
    'underline-always': 'is-underline-always',
    'underline-hover': 'is-underline-hover',
    'underline-none': 'is-underline-none',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;
