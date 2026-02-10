/*
 * @Descripttion: badge组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvBadge } from './index.ts';

const template = function(this: NvBadge) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.dot]: this.isDot,
    [classNamesConfig.modifiers.fixed]: this.isFixed
  });

  const contentClassMap = classMap({
    [classNamesConfig.elements.content]: true,
    [classNamesConfig.modifiers.success]: this.status === 'success',
    [classNamesConfig.modifiers.error]: this.status === 'error',
    [classNamesConfig.modifiers.warning]: this.status === 'warning',
    [classNamesConfig.modifiers.processing]: this.status === 'processing',
    [classNamesConfig.modifiers.info]: this.status === 'info'
  });

  // 确定显示内容
  let displayValue = '';
  if (this.isDot) {
    displayValue = '';
  } else if (this.text) {
    displayValue = this.text;
  } else if (this.value !== undefined && this.value !== null) {
    const value = this.value;
    const max = this.max;
    displayValue = max && Number(value) > Number(max) ? `${ max }+` : String(value);
  }

  // 判断是否显示徽标
  const shouldShow = this.isDot ||
    (this.text && this.text.trim() !== '') ||
    (this.value !== undefined && this.value !== null && (this.showZero || this.value !== 0));

  // 构建样式字符串
  const styleParts: string[] = [];
  if (this.color) {
    styleParts.push(`background-color: ${ this.color };`);
  }
  // size: 仅当 is-dot 为 true 时有效，设置圆点半径
  if (this.isDot && this.size !== undefined && this.size >= 1) {
    const size = Math.max(1, this.size);
    styleParts.push(`width: ${ size * 2 }px;`);
    styleParts.push(`height: ${ size * 2 }px;`);
    styleParts.push(`min-width: ${ size * 2 }px;`);
  }
  // offset-x: 正数向右，负数向左
  // offset-y: 正数向下，负数向上
  // 如果设置了 offset，需要覆盖默认的 transform
  if (this.offsetX !== 0 || this.offsetY !== 0) {
    const transformX = `translateX(calc(50% + ${ this.offsetX }px))`;
    const transformY = `translateY(calc(-50% + ${ this.offsetY }px))`;
    styleParts.push(`transform: ${ transformY } ${ transformX } !important;`);
  }
  const style = styleParts.join(' ');

  return html`
    <div part="base" class=${ classMapResult }>
      <slot></slot>
      ${ shouldShow
        ? html`
            <sup part="content" class=${ contentClassMap } style="${ style }">
              ${ displayValue }
            </sup>
          `
        : null }
    </div>
  `;
};

export default template;
