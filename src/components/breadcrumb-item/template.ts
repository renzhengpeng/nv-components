/*
 * @Descripttion: breadcrumb-item组件html模板
 * @creater: zhengpeng.ren
 * @since: 2026-02-12
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvBreadcrumbItem } from './index.ts';

interface Context {
  _handleClick: (event: Event) => void;
}

const template = function(this: NvBreadcrumbItem, context: Context) {
  const { _handleClick } = context;
  const displaySeparator = this.separator || this.parentSeparator;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.last]: this.isLast,
    [classNamesConfig.modifiers.disabled]: this.disabled
  });

  const content = this.href && !this.isLast
    ? html`
      <a
        part="link"
        class=${ classNamesConfig.elements.link }
        href=${ this.disabled ? '' : this.href }
        target=${ this.target }
        @click=${ _handleClick }
      >
        <slot></slot>
      </a>
    `
    : html`
      <span part="text" class=${ classNamesConfig.elements.text }>
        <slot></slot>
      </span>
    `;

  return html`
    <span part="base" class=${ classMapResult }>
      ${ content }
      ${
        this.isLast
          ? null
          : html`
            <span part="separator" class=${ classNamesConfig.elements.separator }>
              <slot name="separator">${ displaySeparator }</slot>
            </span>
          `
      }
    </span>
  `;
};

export default template;
