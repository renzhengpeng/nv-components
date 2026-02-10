/*
 * @Descripttion: tag组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvTag } from './index.ts';
import '../icon/index';

interface Context {
  _handleClose: (event: Event) => void;
}

const template = function(this: NvTag, context: Context) {
  const { _handleClose } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.success]: this.type === 'success',
    [classNamesConfig.modifiers.info]: this.type === 'info',
    [classNamesConfig.modifiers.warning]: this.type === 'warning',
    [classNamesConfig.modifiers.error]: this.type === 'error',
    [classNamesConfig.modifiers.closable]: this.closable,
    [classNamesConfig.modifiers.hit]: this.hit,
    [classNamesConfig.modifiers.dark]: this.effect === 'dark',
    [classNamesConfig.modifiers.light]: this.effect === 'light',
    [classNamesConfig.modifiers.plain]: this.effect === 'plain',
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const style = this.color
    ? `background-color: ${ this.color }; border-color: ${ this.color };`
    : '';

  return html`
    <span part="base" class=${ classMapResult } style="${ style }">
      <slot></slot>
      ${ this.closable
        ? html`
            <nv-icon
              part="close"
              name="close"
              class="${ classNamesConfig.block }__close"
              @click=${ _handleClose }
            ></nv-icon>
          `
        : null }
    </span>
  `;
};

export default template;
