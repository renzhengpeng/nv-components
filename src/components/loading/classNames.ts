/*
 * @Descripttion: loading组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-loading';

const classNames = {
  block: BLOCK,
  modifiers: {
    fullscreen: 'is-fullscreen',
    spinner: 'spinner',
    size: 'size'
  },
  elements: {
    mask: `${ BLOCK }__mask`,
    spinnerWrapper: `${ BLOCK }__spinner-wrapper`,
    circular: `${ BLOCK }__circular`,
    spinner: `${ BLOCK }__spinner`,
    dots: `${ BLOCK }__dots`,
    bars: `${ BLOCK }__bars`,
    customIcon: `${ BLOCK }__custom-icon`,
    text: `${ BLOCK }__text`
  }
};

export default classNames;
