/*
 * @Descripttion: empty组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvEmpty } from './index.ts';

const template = function(this: NvEmpty) {
  const hasDefaultSlot = this._hasDefaultSlot();
  const hasImageSlot = this._hasImageSlot();
  const hasDescriptionSlot = this._hasDescriptionSlot();

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers[this.size]]: true
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="image" class=${ classNamesConfig.elements.image }>
        ${ hasImageSlot
          ? html`<slot name="image"></slot>`
          : this.image
            ? html`<img src=${ this.image } alt="empty" style="${ this.imageSize ? `width: ${ this.imageSize };` : '' }" />`
            : html`
                <svg class=${ classNamesConfig.elements.imageSvg } width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                    <ellipse class=${ classNamesConfig.elements.imageSvgEllipse } cx="32" cy="33" rx="32" ry="7"></ellipse>
                    <g class=${ classNamesConfig.elements.imageSvgG } fill-rule="nonzero">
                      <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                      <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class=${ classNamesConfig.elements.imageSvgPath }></path>
                    </g>
                  </g>
                </svg>
              ` }
      </div>
      ${ hasDefaultSlot
        ? html`<slot></slot>`
        : html`
            <div part="description" class=${ classNamesConfig.elements.description }>
              ${ hasDescriptionSlot
                ? html`<slot name="description"></slot>`
                : html`<p>${ this.description }</p>` }
            </div>
          ` }
    </div>
  `;
};

export default template;
