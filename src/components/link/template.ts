/*
 * @Descripttion: link组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvLink } from './index.ts';
import '../icon/index';

interface Context {
  _handleClick: (event: Event) => void;
}

const template = function(this: NvLink, context: Context) {
  const { _handleClick } = context;

  const underlineClass = this.underline === 'always'
    ? classNamesConfig.modifiers['underline-always']
    : this.underline === 'hover'
    ? classNamesConfig.modifiers['underline-hover']
    : this.underline === 'none'
    ? classNamesConfig.modifiers['underline-none']
    : classNamesConfig.modifiers.underline;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.primary]: this.type === 'primary',
    [classNamesConfig.modifiers.success]: this.type === 'success',
    [classNamesConfig.modifiers.warning]: this.type === 'warning',
    [classNamesConfig.modifiers.error]: this.type === 'error',
    [classNamesConfig.modifiers.info]: this.type === 'info',
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [underlineClass]: true,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const href = this.disabled ? '' : (this.href || '');

  return html`
    <a
      part="base"
      class=${ classMapResult }
      href=${ href }
      target="${ this.target }"
      @click=${ _handleClick }
    >
      ${ this.icon
        ? html`<nv-icon name=${ this.icon }></nv-icon>`
        : null
      }
      <slot></slot>
    </a>
  `;
};

export default template;
