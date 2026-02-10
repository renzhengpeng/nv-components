/*
 * @Descripttion: switch组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-switch';

const classNames = {
  block: BLOCK,
  modifiers: {
    checked: 'is-checked',
    disabled: 'is-disabled',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  },
  elements: {
    core: `${ BLOCK }__core`,
    label: `${ BLOCK }__label`,
    'label-left': `${ BLOCK }__label--left`,
    'label-right': `${ BLOCK }__label--right`
  }
};

export default classNames;
