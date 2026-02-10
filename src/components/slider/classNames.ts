/*
 * @Descripttion: slider组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-slider';

const classNames = {
  block: BLOCK,
  modifiers: {
    disabled: 'is-disabled',
    vertical: 'is-vertical',
    'show-input': 'is-show-input',
    'show-stops': 'is-show-stops',
    'show-tooltip': 'is-show-tooltip',
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  },
  elements: {
    runway: `${ BLOCK }__runway`,
    bar: `${ BLOCK }__bar`,
    button: `${ BLOCK }__button`,
    buttonWrapper: `${ BLOCK }__button-wrapper`,
    stop: `${ BLOCK }__stop`,
    input: `${ BLOCK }__input`
  }
};

export default classNames;
