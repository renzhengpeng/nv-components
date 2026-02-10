/*
 * @Descripttion: message组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvMessage } from './index.ts';
import '../icon/index';

interface Context {
  _handleClose: (event: Event) => void;
  _handleMouseEnter: () => void;
  _handleMouseLeave: () => void;
}

const template = function(this: NvMessage, context: Context) {
  const { _handleClose, _handleMouseEnter, _handleMouseLeave } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.success]: this.type === 'success',
    [classNamesConfig.modifiers.warning]: this.type === 'warning',
    [classNamesConfig.modifiers.info]: this.type === 'info',
    [classNamesConfig.modifiers.error]: this.type === 'error',
    [classNamesConfig.modifiers.center]: this.center,
    [classNamesConfig.modifiers.closable]: this.closable
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
            <i part="icon" class=${ classNamesConfig.elements.icon }>
              <nv-icon name=${ iconName }></nv-icon>
            </i>
          `
        : null }
      <p part="content" class=${ classNamesConfig.elements.content }>
        <slot>${ this.message }</slot>
      </p>
      ${ this.closable
        ? html`
            <i
              part="close"
              class=${ classNamesConfig.elements.closeBtn }
              @click=${ _handleClose }
            >
              <nv-icon name="close"></nv-icon>
            </i>
          `
        : null }
    </div>
  `;
};

export default template;
