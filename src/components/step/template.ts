/*
 * @Descripttion: step组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvStep } from './index.ts';
import '../icon/index';

const template = function(this: NvStep) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.horizontal]: this.direction === 'horizontal',
    [classNamesConfig.modifiers.vertical]: this.direction === 'vertical',
    [classNamesConfig.modifiers.center]: this.center,
    [classNamesConfig.modifiers.simple]: this.simple,
    [classNamesConfig.modifiers.process]: this.status === 'process',
    [classNamesConfig.modifiers.finish]: this.status === 'finish',
    [classNamesConfig.modifiers.success]: this.status === 'success',
    [classNamesConfig.modifiers.error]: this.status === 'error',
    [classNamesConfig.modifiers.wait]: this.status === 'wait',
    [classNamesConfig.modifiers.last]: this.isLast,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const headClassMap = classMap({
    [classNamesConfig.elements.head]: true
  });

  const iconClassMap = classMap({
    [classNamesConfig.elements.icon]: true
  });

  const titleClassMap = classMap({
    [classNamesConfig.elements.title]: true
  });

  const descriptionClassMap = classMap({
    [classNamesConfig.elements.description]: true
  });

  // 根据 status 自动选择图标
  const autoIconName =
    this.status === 'success'
      ? 'success'
      : this.status === 'error'
        ? 'error'
        : null;

  const displayIcon = this.icon || autoIconName;

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="head" class=${ headClassMap }>
        <div part="icon" class=${ iconClassMap }>
          ${ displayIcon
            ? html`<nv-icon name=${ displayIcon }></nv-icon>`
            : html`<div class="${ classNamesConfig.elements.icon }__inner">
                ${ this.index + 1 }
              </div>` }
        </div>
        <div part="line" class=${ classNamesConfig.elements.line }>
          <div part="line-inner" class=${ classNamesConfig.elements['line-inner'] }></div>
        </div>
      </div>
      <div part="main" class=${ classNamesConfig.elements.main }>
        <div part="title" class=${ titleClassMap }>
          <slot name="title">${ this.label }</slot>
        </div>
        <div part="description" class=${ descriptionClassMap }>
          <slot name="description">${ this.description }</slot>
        </div>
      </div>
    </div>
  `;
};

export default template;
