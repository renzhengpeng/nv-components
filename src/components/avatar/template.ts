/*
 * @Descripttion: avatar组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvAvatar } from './index.ts';
import '../icon/index';

interface Context {
  _handleImageError: (event: Event) => void;
  _getSizeStyle: () => string;
  _getTextStyle: () => string;
  _getBackgroundStyle: () => string;
  _imageError: boolean;
}

const template = function(this: NvAvatar, context: Context) {
  const { _handleImageError, _getSizeStyle, _getTextStyle, _getBackgroundStyle, _imageError } = context;

  const hasDefaultSlot = this._hasDefaultSlot();
  const sizeClass = typeof this.size === 'string' ? `is-${ this.size }` : '';

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.circle]: this.shape === 'circle',
    [classNamesConfig.modifiers.square]: this.shape === 'square',
    [sizeClass]: typeof this.size === 'string'
  });

  const sizeStyle = _getSizeStyle();
  const textStyle = _getTextStyle();
  const backgroundStyle = _getBackgroundStyle();

  // 合并所有样式
  const allStyles = [sizeStyle, textStyle, backgroundStyle].filter(Boolean).join('; ');

  return html`
    <span part="base" class=${ classMapResult } style="${ allStyles }">
      ${ hasDefaultSlot
        ? html`<slot></slot>`
        : this.src && !_imageError
          ? html`
              <img
                part="image"
                src=${ this.src }
                srcset="${ this.srcSet }"
                alt=${ this.alt }
                @error=${ _handleImageError }
              />
            `
          : this.icon
            ? html`<nv-icon name=${ this.icon }></nv-icon>`
            : html`<slot></slot>` }
    </span>
  `;
};

export default template;
