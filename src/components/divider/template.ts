/*
 * @Descripttion: divider组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvDivider } from './index.ts';

const template = function(this: NvDivider) {
  const hasContent = this._hasSlotContent();
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.vertical]: this.isVertical,
    [classNamesConfig.modifiers.horizontal]: !this.isVertical,
    [`${ classNamesConfig.modifiers.contentPosition }-${ this.contentPosition }`]: !this.isVertical && hasContent
  });

  return html`
    <div part="base" class=${ classMapResult } role="separator">
      ${ !this.isVertical && hasContent
        ? html`
            <span part="text" class=${ classNamesConfig.elements.text }>
              <slot></slot>
            </span>
          `
        : !this.isVertical
          ? html`<slot></slot>`
          : '' }
    </div>
  `;
};

export default template;

