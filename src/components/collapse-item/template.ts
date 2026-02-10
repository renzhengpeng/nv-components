/*
 * @Descripttion: collapse-item组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvCollapseItem } from './index.ts';
import '../icon/index';

interface Context {
  _handleClick: () => void;
}

const template = function(this: NvCollapseItem, context: Context) {
  const { _handleClick } = context;

  const hasTitleSlot = this._hasTitleSlot();
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.active]: this.isActive,
    [classNamesConfig.modifiers.disabled]: this.disabled
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="header" class=${ classNamesConfig.elements.header } @click=${ _handleClick }>
        <span part="title" class=${ classNamesConfig.elements.title }>
          ${ hasTitleSlot
            ? html`<slot name="title"></slot>`
            : html`${ this.label }` }
        </span>
        <nv-icon
          part="icon"
          name="arrow-right"
          class=${ classNamesConfig.elements.icon }
        ></nv-icon>
      </div>
      <div part="wrapper" class=${ classNamesConfig.elements.wrapper }>
        <div part="content" class=${ classNamesConfig.elements.content }>
          <slot></slot>
        </div>
      </div>
    </div>
  `;
};

export default template;
