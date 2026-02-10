/*
 * @creater: zhengpeng.ren
 * @since: 2024/8/30 15:12
 * @LastAuthor: zhengpeng.ren
 * @Descripttion: dropdown html template
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvDropdown } from './index.ts';

const template = function(this: NvDropdown, context: any) {
  const { _handleClick, _handleMouseEnter, _handleMouseLeave, _handleMenuItemClick, _handleContextMenu } = context;

  // 检测是否有trigger slot内容（在light DOM中查找）
  const hasTriggerSlot = Array.from(this.children).some(
    child => child.getAttribute('slot') === 'trigger'
  );

  const triggerClassMap = classMap({
    [classNamesConfig.elements.trigger]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.active]: this.active,
    'has-trigger-slot': hasTriggerSlot // 标记是否有trigger slot内容
  });

  const menuClassMap = classMap({
    [classNamesConfig.elements.menu]: true,
    [classNamesConfig.modifiers.active]: this.active
  });

  return html`
    <nv-popup
      part="base"
      .placement=${ this.placement }
      .sync=${ this.align ? 'width' : undefined }
      ?arrow=${ this.arrow }
      .distance=${ this.distance }
      .strategy=${ this.strategy }
      ?autoAdjust=${ this.autoAdjust }
      trigger="manual"
      ?active=${ this.active }
      .closeOnClickOutside=${ false }
      style="--nv-popup-padding: 0;"
    >
      <div
        part="trigger"
        slot="anchor"
        class=${ triggerClassMap }
        @click=${ _handleClick }
        @mouseenter=${ _handleMouseEnter }
        @mouseleave=${ _handleMouseLeave }
        @contextmenu=${ _handleContextMenu }
      >
        ${
          hasTriggerSlot
            ? html`
                <!-- 有trigger slot内容时，直接显示slot，不包裹额外的结构 -->
                <slot name="trigger"></slot>
              `
            : html`
                <!-- 没有trigger slot内容时，显示placeholder和箭头 -->
                <div class=${ classNamesConfig.elements.triggerContent }>
                  <span class=${ classNamesConfig.elements.triggerText }>
                    ${ this.placeholder }
                  </span>
                  ${
                    this.arrow
                      ? html`
                          <span class=${ classNamesConfig.elements.arrow }>
                            <nv-icon name="arrow-down" class=${ classNamesConfig.elements.arrowIcon }></nv-icon>
                          </span>
                        `
                      : ''
                  }
                </div>
              `
        }
      </div>
      <div part="menu" class=${ menuClassMap } @click=${ _handleMenuItemClick }>
        <slot name="menu"></slot>
      </div>
    </nv-popup>
  `;
};
export default template;
