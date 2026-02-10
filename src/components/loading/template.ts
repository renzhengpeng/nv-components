/*
 * @Descripttion: loading组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvLoading } from './index.ts';
import '../icon/index';

const template = function(this: NvLoading) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.fullscreen]: this.fullscreen,
    [`${ classNamesConfig.modifiers.spinner }-${ this.spinner }`]: true,
    [`${ classNamesConfig.modifiers.size }-${ this.size }`]: true
  });

  const maskClassMap = classMap({
    [classNamesConfig.elements.mask]: true
  });

  const spinnerWrapperClassMap = classMap({
    [classNamesConfig.elements.spinnerWrapper]: true
  });

  // 渲染不同类型的spinner
  const renderSpinner = () => {
    switch (this.spinner) {
      case 'circular':
        return html`
          <svg class="${ classNamesConfig.elements.circular }" viewBox="0 0 50 50">
            <circle
              class="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke-width="2"
            ></circle>
          </svg>
        `;

      case 'spinner':
        return html`
          <div class="${ classNamesConfig.elements.spinner }">
            ${ Array.from({ length: 12 }, (_, i) => html`
              <div class="spinner-blade" style="--index: ${ i }"></div>
            `) }
          </div>
        `;

      case 'dots':
        return html`
          <div class="${ classNamesConfig.elements.dots }">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        `;

      case 'bars':
        return html`
          <div class="${ classNamesConfig.elements.bars }">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        `;

      default:
        return null;
    }
  };

  // 构建自定义样式
  const customStyle = () => {
    const styles: string[] = [];

    if (this.spinnerColor) {
      // 如果有自定义icon，spinnerColor将作用于icon
      if (this.icon) {
        styles.push(`--nv-loading-custom-icon-color: ${ this.spinnerColor }`);
      } else {
        // 根据spinner类型设置对应的CSS变量
        switch (this.spinner) {
          case 'circular':
            styles.push(`--nv-loading-path-stroke-color: ${ this.spinnerColor }`);
            break;
          case 'spinner':
            styles.push(`--nv-loading-spinner-color: ${ this.spinnerColor }`);
            break;
          case 'dots':
            styles.push(`--nv-loading-dots-color: ${ this.spinnerColor }`);
            break;
          case 'bars':
            styles.push(`--nv-loading-bars-color: ${ this.spinnerColor }`);
            break;
        }
      }
    }

    if (this.textColor) {
      styles.push(`--nv-loading-text-font-color: ${ this.textColor }`);
    }

    return styles.length > 0 ? styles.join('; ') : '';
  };

  const styleAttr = customStyle();

  return html`
    <div part="base" class=${ classMapResult } style=${ styleAttr }>
      <slot></slot>
      ${
        this.loading
          ? html`
            <div part="mask" class=${ maskClassMap }>
              <div part="spinner" class=${ spinnerWrapperClassMap }>
                ${
                  this.icon
                    ? html`<nv-icon name=${ this.icon } class="${ classNamesConfig.elements.customIcon }"></nv-icon>`
                    : renderSpinner()
                }
              </div>
              ${
                this.text
                  ? html`
                    <p part="text" class=${ classNamesConfig.elements.text }>${ this.text }</p>
                  `
                  : null
              }
            </div>
          `
          : null
      }
    </div>
  `;
};

export default template;
