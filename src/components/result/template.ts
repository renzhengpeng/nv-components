/*
 * @Descripttion: result组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvResult } from './index.ts';
import '../icon/index';

const template = function(this: NvResult) {
  const hasIconSlot = this._hasIconSlot();
  const hasTitleSlot = this._hasTitleSlot();
  const hasSubTitleSlot = this._hasSubTitleSlot();
  const hasExtraSlot = this._hasExtraSlot();

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [`${ classNamesConfig.modifiers.type }-${ this.type }`]: true
  });

  // 根据类型获取默认图标
  const getDefaultIcon = () => {
    switch (this.type) {
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'close-circle';
      default:
        return 'info';
    }
  };

  return html`
    <div part="base" class=${ classMapResult }>
      ${ hasIconSlot || this.icon
        ? html`
            <div part="icon" class=${ classNamesConfig.elements.icon }>
              ${ hasIconSlot
                ? html`<slot name="icon"></slot>`
                : html`<nv-icon name=${ this.icon || getDefaultIcon() }></nv-icon>` }
            </div>
          `
        : '' }
      ${ hasTitleSlot || this.label
        ? html`
            <div part="title" class=${ classNamesConfig.elements.title }>
              ${ hasTitleSlot
                ? html`<slot name="title"></slot>`
                : html`${ this.label }` }
            </div>
          `
        : '' }
      ${ hasSubTitleSlot || this.subTitle
        ? html`
            <div part="subtitle" class=${ classNamesConfig.elements.subTitle }>
              ${ hasSubTitleSlot
                ? html`<slot name="subTitle"></slot>`
                : html`${ this.subTitle }` }
            </div>
          `
        : '' }
      <div part="content" class=${ classNamesConfig.elements.content }>
        <slot></slot>
      </div>
      ${ hasExtraSlot
        ? html`
            <div part="extra" class=${ classNamesConfig.elements.extra }>
              <slot name="extra"></slot>
            </div>
          `
        : '' }
    </div>
  `;
};

export default template;
