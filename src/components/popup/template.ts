/*
 * @creater: zhengpeng.ren
 * @since: 2024/11/25
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: popup html template
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvPopup } from './index.ts';

const template = function(this: NvPopup) {
  const containerClassMap = classMap({
    [classNamesConfig.block]: true,
    [`${ classNamesConfig.block }--active`]: this.active,
    [`${ classNamesConfig.block }--arrow`]: this.arrow,
    // 使用实际的 placement（经过自动调整后）来设置箭头位置
    [`${ classNamesConfig.block }--${ this._actualPlacement || this.placement }`]: true
  });

  const anchorClassMap = classMap({
    [classNamesConfig.elements.anchor]: true
  });

  const popupClassMap = classMap({
    [classNamesConfig.elements.popup]: true
  });

  return html`
    <div part="base" class=${ containerClassMap }>
      <div part="anchor" class=${ anchorClassMap }>
        <slot name="anchor"></slot>
      </div>
      <div class=${ popupClassMap } part="popup">
        <div class=${ classNamesConfig.elements.content } part="content">
          <slot></slot>
        </div>
      </div>
    </div>
  `;
};

export default template;
