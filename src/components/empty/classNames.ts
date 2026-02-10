/*
 * @Descripttion: empty组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-empty';

const classNames = {
  block: BLOCK,
  elements: {
    image: `${ BLOCK }__image`,
    imageSvg: `${ BLOCK }__image-svg`,
    imageSvgEllipse: `${ BLOCK }__image-svg-ellipse`,
    imageSvgG: `${ BLOCK }__image-svg-g`,
    imageSvgPath: `${ BLOCK }__image-svg-path`,
    description: `${ BLOCK }__description`
  },
  modifiers: {
    mini: 'is-mini',
    small: 'is-small',
    medium: 'is-medium',
    large: 'is-large',
    huge: 'is-huge'
  }
};

export default classNames;
