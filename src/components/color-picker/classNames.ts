/*
 * @Descripttion: color-picker组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-color-picker';

const classNames = {
  block: BLOCK,
  elements: {
    trigger: `${ BLOCK }__trigger`,
    color: `${ BLOCK }__color`,
    panel: `${ BLOCK }__panel`,
    picker: `${ BLOCK }__picker`,
    saturation: `${ BLOCK }__saturation`,
    saturationWhite: `${ BLOCK }__saturation-white`,
    saturationBlack: `${ BLOCK }__saturation-black`,
    saturationPointer: `${ BLOCK }__saturation-pointer`,
    hue: `${ BLOCK }__hue`,
    huePointer: `${ BLOCK }__hue-pointer`,
    alpha: `${ BLOCK }__alpha`,
    alphaPointer: `${ BLOCK }__alpha-pointer`,
    input: `${ BLOCK }__input`,
    inputField: `${ BLOCK }__input-field`,
    controls: `${ BLOCK }__controls`,
    eyeDropperButton: `${ BLOCK }__eye-dropper-button`,
    formatToggle: `${ BLOCK }__format-toggle`,
    predefine: `${ BLOCK }__predefine`,
    predefineColor: `${ BLOCK }__predefine-color`
  },
  modifiers: {
    disabled: 'is-disabled',
    bordered: 'is-bordered',
    'size-mini': `${ BLOCK }--mini`,
    'size-small': `${ BLOCK }--small`,
    'size-medium': `${ BLOCK }--medium`,
    'size-large': `${ BLOCK }--large`,
    'size-huge': `${ BLOCK }--huge`,
    'shape-circle': `${ BLOCK }--circle`,
    'shape-square': `${ BLOCK }--square`,
    'shape-rectangle': `${ BLOCK }--rectangle`
  }
};

export default classNames;

