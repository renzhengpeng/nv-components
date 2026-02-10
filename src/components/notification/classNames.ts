/*
 * @Descripttion: notification组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-notification';

const classNames = {
  block: BLOCK,
  modifiers: {
    success: `${ BLOCK }--success`,
    warning: `${ BLOCK }--warning`,
    info: `${ BLOCK }--info`,
    error: `${ BLOCK }--error`,
    right: 'is-right',
    left: 'is-left'
  },
  elements: {
    group: `${ BLOCK }__group`,
    title: `${ BLOCK }__title`,
    content: `${ BLOCK }__content`,
    icon: `${ BLOCK }__icon`,
    closeBtn: `${ BLOCK }__closeBtn`,
    main: `${ BLOCK }__main`
  }
};

export default classNames;
