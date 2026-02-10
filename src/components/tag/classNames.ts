/*
 * @Descripttion: tag组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-tag';

const classNames = {
  block: BLOCK,
  modifiers: {
    success: `${ BLOCK }--success`,
    info: `${ BLOCK }--info`,
    warning: `${ BLOCK }--warning`,
    error: `${ BLOCK }--error`,
    closable: 'is-closable',
    hit: 'is-hit',
    dark: 'is-dark',
    light: 'is-light',
    plain: 'is-plain',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;
