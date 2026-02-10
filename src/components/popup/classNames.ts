/*
 * @creater: zhengpeng.ren
 * @since: 2024/11/25
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: popup class config
 */
const BLOCK = 'nv-popup';

const classNames = {
  block: BLOCK,
  elements: {
    anchor: `${ BLOCK }__anchor`,
    popup: `${ BLOCK }__popup`,
    content: `${ BLOCK }__content`,
    arrow: `${ BLOCK }__arrow`
  },
  modifiers: {
    active: `${ BLOCK }--active`
  }
};

export default classNames;

