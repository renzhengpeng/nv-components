/*
 * @Descripttion: alert组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvAlert } from './index.ts';
import '../icon/index';

interface Context {
  _handleClose: (event: Event) => void;
}

const template = function(this: NvAlert, context: Context) {
  const { _handleClose } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.success]: this.type === 'success',
    [classNamesConfig.modifiers.warning]: this.type === 'warning',
    [classNamesConfig.modifiers.info]: this.type === 'info',
    [classNamesConfig.modifiers.error]: this.type === 'error',
    [classNamesConfig.modifiers.closable]: this.closable,
    [classNamesConfig.modifiers.center]: this.center,
    [classNamesConfig.modifiers['show-icon']]: this.showIcon,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
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
    <div part="base" class=${ classMapResult } role="alert">
      ${ this.showIcon
        ? html`
            <i part="icon" class=${ classNamesConfig.elements.icon }>
              <nv-icon name=${ iconName }></nv-icon>
            </i>
          `
        : null }
      <div part="content" class=${ classNamesConfig.elements.content }>
        ${ this.label
          ? html`
              <p part="title" class=${ classNamesConfig.elements.title }>
                <slot name="title">${ this.label }</slot>
              </p>
            `
          : html`<slot name="title"></slot>` }
        ${ this.description || this.$slots?.length
          ? html`
              <p part="description" class=${ classNamesConfig.elements.description }>
                <slot>${ this.description }</slot>
              </p>
            `
          : html`<slot></slot>` }
      </div>
      ${ this.closable
        ? html`
            <i
              part="close"
              class=${ classNamesConfig.elements.closebtn }
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
