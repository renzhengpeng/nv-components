/*
 * @Descripttion: alert组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-alert';

const classNames = {
  block: BLOCK,
  modifiers: {
    success: `${ BLOCK }--success`,
    warning: `${ BLOCK }--warning`,
    info: `${ BLOCK }--info`,
    error: `${ BLOCK }--error`,
    closable: 'is-closable',
    center: 'is-center',
    'show-icon': 'is-show-icon',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  },
  elements: {
    content: `${ BLOCK }__content`,
    title: `${ BLOCK }__title`,
    description: `${ BLOCK }__description`,
    closebtn: `${ BLOCK }__closebtn`,
    icon: `${ BLOCK }__icon`
  }
};

export default classNames;
