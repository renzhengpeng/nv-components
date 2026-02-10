/*
 * @Descripttion: notification组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvNotification } from './index.ts';
import '../icon/index';

interface Context {
  _handleClose: (event: Event) => void;
  _handleMouseEnter: () => void;
  _handleMouseLeave: () => void;
}

const template = function(this: NvNotification, context: Context) {
  const { _handleClose, _handleMouseEnter, _handleMouseLeave } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.success]: this.type === 'success',
    [classNamesConfig.modifiers.warning]: this.type === 'warning',
    [classNamesConfig.modifiers.info]: this.type === 'info',
    [classNamesConfig.modifiers.error]: this.type === 'error',
    [classNamesConfig.modifiers.right]:
      this.position === 'top-right' || this.position === 'bottom-right',
    [classNamesConfig.modifiers.left]:
      this.position === 'top-left' || this.position === 'bottom-left'
  });

  const iconName =
    this.type === 'success'
      ? 'success'
      : this.type === 'warning'
        ? 'warning'
        : this.type === 'info'
          ? 'info'
          : this.type === 'error'
            ? 'error'
            : 'info';

  return html`
    <div
      part="base"
      class=${ classMapResult }
      @mouseenter=${ _handleMouseEnter }
      @mouseleave=${ _handleMouseLeave }
    >
      ${ this.showIcon
        ? html`
            <div part="icon" class=${ classNamesConfig.elements.icon }>
              <nv-icon name=${ iconName }></nv-icon>
            </div>
          `
        : null }
      <div part="group" class=${ classNamesConfig.elements.group }>
        <div part="main" class=${ classNamesConfig.elements.main }>
          ${ this.label
            ? html`
                <div part="title" class=${ classNamesConfig.elements.title }>
                  <slot name="title">${ this.label }</slot>
                </div>
              `
            : html`<slot name="title"></slot>` }
          <div part="content" class=${ classNamesConfig.elements.content }>
            <slot>${ this.message }</slot>
          </div>
        </div>
        ${ this.closable
          ? html`
              <div
                part="close"
                class=${ classNamesConfig.elements.closeBtn }
                @click=${ _handleClose }
              >
                <nv-icon name="close"></nv-icon>
              </div>
            `
          : null }
      </div>
    </div>
  `;
};

export default template;
