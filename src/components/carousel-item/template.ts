/*
 * @Descripttion: carousel-item组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import classNamesConfig from './classNames';
import { NvCarouselItem } from './index.ts';

const template = function(this: NvCarouselItem) {
  return html`
    <div part="base" class=${ classNamesConfig.block }>
      <slot></slot>
    </div>
  `;
};

export default template;

