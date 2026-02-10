/*
 * @Descripttion: tooltip组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import type { NvTooltip } from './index.ts';

const template = function(this: NvTooltip) {
  const triggerClassMap = classMap({
    [classNamesConfig.elements.trigger]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled
  });

  const distance = 8;
  // 总是认为有内容，让 popup 显示。实际内容由 slot 或 content 属性控制
  const hasContent = true;

  return html`
    <nv-popup
      part="base"
      placement=${ this.placement }
      ?arrow=${ this.arrow }
      distance=${ distance }
      trigger=${ this.trigger }
      open-delay=${ this.openDelay }
      hide-delay=${ this.hideDelay }
      closeOnClickOutside=${ this.trigger === 'click' }
      strategy="fixed"
      ?disabled=${ this.disabled }
      ?active=${ this.visible && hasContent }
    >
      <div
        part="trigger"
        slot="anchor"
        class=${ triggerClassMap }
        tabindex=${ this.trigger === 'focus' ? 0 : -1 }
      >
        <slot></slot>
      </div>
      <div
        part="content"
        class=${ classNamesConfig.elements.content }
        style="color: var(--nv-tooltip-font-color, #fff); font-size: var(--nv-tooltip-font-size, 12px); line-height: var(--nv-tooltip-line-height, 1.5); max-width: var(--nv-tooltip-max-width, 200px); word-wrap: break-word;"
      >
        ${ this.content
          ? html`${ this.content }`
          : html`<slot name="content"></slot>` }
      </div>
    </nv-popup>
  `;
};

export default template;
