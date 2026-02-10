/*
 * @Descripttion: 
 * @creater: zhengpeng.ren
 * @since: 2024-06-20 16:04:27
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-06-20 16:07:25
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvIcon } from './index.ts';

export default function(this: NvIcon) {
  const classMapResult = classMap({
    [`${ classNamesConfig.block }-${ this.name }`]: true,
    [`${ classNamesConfig.modifiers.left }`]: this.position === 'left',
    [`${ classNamesConfig.modifiers.right }`]: this.position === 'right'
  });

  const styleText = [
    this.size ? `font-size: ${ this.size }` : '',
    this.color ? `color: ${ this.color }` : ''
  ].filter(Boolean).join('; ');

  return html`
    <i
      part="base"
      class=${ classMapResult }
      style="${ styleText }"
    >
    </i>
  `;
};
