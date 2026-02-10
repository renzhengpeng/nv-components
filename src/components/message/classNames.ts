/*
 * @Descripttion: message组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-message';

const classNames = {
  block: BLOCK,
  modifiers: {
    success: `${ BLOCK }--success`,
    warning: `${ BLOCK }--warning`,
    info: `${ BLOCK }--info`,
    error: `${ BLOCK }--error`,
    center: 'is-center',
    closable: 'is-closable'
  },
  elements: {
    icon: `${ BLOCK }__icon`,
    content: `${ BLOCK }__content`,
    closeBtn: `${ BLOCK }__closeBtn`
  }
};

export default classNames;
