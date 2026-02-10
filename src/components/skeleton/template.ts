/*
 * @Descripttion: skeleton组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvSkeleton } from './index.ts';

const template = function(this: NvSkeleton) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.animated]: this.animated
  });

  if (!this.loading) {
    return html`<slot></slot>`;
  }

  const rows = Array.from({ length: this.rows }, (_, i) => i);
  const widthStyle = this.width ? `width: ${ this.width };` : '';

  return html`
    <div part="base" class=${ classMapResult }>
      ${ this.avatar
        ? html`
            <div part="avatar" class="${ classNamesConfig.elements.avatar } ${ classNamesConfig.modifiers.avatar }-${ this.avatarSize } ${ classNamesConfig.modifiers.avatar }-${ this.avatarShape }"></div>
          `
        : '' }
      <div part="content" class=${ classNamesConfig.elements.content } style="${ widthStyle }">
        ${ this.showTitle
          ? html`
              <div part="title" class=${ classNamesConfig.elements.title }></div>
            `
          : '' }
        ${ repeat(rows, (i) => i, () => html`
          <div part="paragraph" class=${ classNamesConfig.elements.paragraph }>
            <div part="text" class=${ classNamesConfig.elements.text }></div>
          </div>
        `) }
      </div>
    </div>
  `;
};

export default template;

