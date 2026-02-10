/*
 * @Descripttion: carousel组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat as litRepeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvCarousel } from './index.ts';
import '../icon/index';
import '../carousel-item/index';

interface Context {
  _handleIndicatorClick: (index: number) => void;
  _handleIndicatorHover: (index: number) => void;
  _handlePrev: () => void;
  _handleNext: () => void;
  _itemCount: number;
}

const template = function(this: NvCarousel, context: Context) {
  const { _handleIndicatorClick, _handleIndicatorHover, _handlePrev, _handleNext, _itemCount } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.card]: this.type === 'card',
    [classNamesConfig.modifiers.vertical]: this.direction === 'vertical'
  });

  const indicators = Array.from({ length: _itemCount }, (_, i) => i);
  const style = `
    height: ${ this.height };
    --nv-carousel-indicator-width: ${ this.indicatorSize }px;
    --nv-carousel-indicator-height: ${ this.indicatorSize }px;
    --nv-carousel-item-transition-duration: ${ this.transitionDuration }ms;
  `;

  // 使用 Scroll Snap 实现：滚动到指定的 item
  const items = Array.from(this.querySelectorAll('nv-carousel-item')) as any[];
  
  items.forEach((item, index) => {
    const isActive = index === this.value;
    item.isActive = isActive;
  });

  return html`
    <div part="base" class=${ classMapResult } style="${ style }">
      <div part="container" class=${ classNamesConfig.elements.container } @scrollend=${ this._handleScrollEnd.bind(this) }>
        <div part="track" class="${ classNamesConfig.elements.track }">
          <slot></slot>
        </div>
      </div>
      ${ this.indicator && _itemCount > 0
        ? html`
            <ul part="indicators" class="${ classNamesConfig.elements.indicators } ${ classNamesConfig.modifiers.indicatorPosition }-${ this.indicatorPosition }">
              ${ litRepeat(indicators, (i) => i, (i) => html`
                <li
                  part="indicator"
                  class="${ classMap({
                    [classNamesConfig.elements.indicator]: true,
                    [classNamesConfig.modifiers.active]: i === this.value
                  }) }"
                  @click=${ () => _handleIndicatorClick(i) }
                  @mouseenter=${ () => _handleIndicatorHover(i) }
                ></li>
              `) }
            </ul>
          `
        : '' }
      ${ this.navigation && _itemCount > 1
        ? html`
            <div class="${ classNamesConfig.elements.arrow } ${ classNamesConfig.elements.arrowLeft }" @click=${ _handlePrev }>
              <nv-icon name="back"></nv-icon>
            </div>
            <div class="${ classNamesConfig.elements.arrow } ${ classNamesConfig.elements.arrowRight }" @click=${ _handleNext }>
              <nv-icon name="right"></nv-icon>
            </div>
          `
        : '' }
    </div>
  `;
};

export default template;
