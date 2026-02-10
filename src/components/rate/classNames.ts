/*
 * @Descripttion: rate组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-rate';

const classNames = {
  block: BLOCK,
  elements: {
    items: `${ BLOCK }__items`,
    item: `${ BLOCK }__item`,
    half: `${ BLOCK }__half`,
    full: `${ BLOCK }__full`,
    icon: `${ BLOCK }__icon`,
    text: `${ BLOCK }__text`,
    score: `${ BLOCK }__score`
  },
  modifiers: {
    disabled: 'is-disabled',
    active: 'is-active',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;

