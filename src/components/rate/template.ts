/*
 * @Descripttion: rate组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat as litRepeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvRate } from './index.ts';
import '../icon/index';

interface Context {
  _handleMouseEnter: (index: number, isHalf: boolean) => void;
  _handleMouseLeave: () => void;
  _handleClick: (index: number, isHalf: boolean) => void;
  _getDisplayValue: () => number;
  _getText: () => string;
  _getScore: () => string;
  _hoverValue: number;
}

const template = function(this: NvRate, context: Context) {
  const { _handleMouseEnter, _handleMouseLeave, _handleClick, _getDisplayValue, _getText, _getScore } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const displayValue = _getDisplayValue();
  const items = Array.from({ length: this.max }, (_, i) => i);

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="items" class=${ classNamesConfig.elements.items }>
        ${ litRepeat(items, (i) => i, (i) => {
          const itemValue = i + 1;
          const isActive = displayValue >= itemValue;
          const isHalfActive = this.allowHalf && displayValue >= i + 0.5 && displayValue < itemValue;
          
          return html`
            <div part="item" class=${ classNamesConfig.elements.item }>
              ${ this.allowHalf
                ? html`
                    <div class=${ classNamesConfig.elements.full }>
                      <nv-icon
                        part="icon"
                        name="star-off"
                        class=${ classNamesConfig.elements.icon }
                      ></nv-icon>
                      <nv-icon
                        part="icon"
                        name="star-on"
                        class="${ classMap({
                          [classNamesConfig.elements.icon]: true,
                          [classNamesConfig.modifiers.active]: isActive
                        }) }"
                        style="position: absolute; left: 0; top: 0; opacity: ${ isActive ? 1 : 0 };"
                      ></nv-icon>
                    </div>
                    <div class=${ classNamesConfig.elements.half }
                      @mouseenter=${ () => _handleMouseEnter(i, true) }
                      @mouseleave=${ _handleMouseLeave }
                      @click=${ () => _handleClick(i, true) }>
                      <nv-icon
                        part="icon"
                        name="star-on"
                        class="${ classMap({
                          [classNamesConfig.elements.icon]: true,
                          [classNamesConfig.modifiers.active]: isHalfActive
                        }) }"
                        style="opacity: ${ isHalfActive ? 1 : 0 };"
                      ></nv-icon>
                    </div>
                    <div class="${ classNamesConfig.elements.full }-cover"
                      style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; cursor: pointer;"
                      @mouseenter=${ () => _handleMouseEnter(i, false) }
                      @mouseleave=${ _handleMouseLeave }
                      @click=${ () => _handleClick(i, false) }>
                    </div>
                  `
                : html`
                    <nv-icon
                      name="${ isActive ? 'star-on' : 'star-off' }"
                      class="${ classMap({
                        [classNamesConfig.elements.icon]: true,
                        [classNamesConfig.modifiers.active]: isActive
                      }) }"
                      @mouseenter=${ () => _handleMouseEnter(i, false) }
                      @mouseleave=${ _handleMouseLeave }
                      @click=${ () => _handleClick(i, false) }
                    ></nv-icon>
                  ` }
            </div>
          `;
        }) }
      </div>
      ${ this.showText
        ? html`
            <span part="text" class=${ classNamesConfig.elements.text }>${ _getText() }</span>
          `
        : '' }
      ${ this.showScore
        ? html`
            <span part="score" class=${ classNamesConfig.elements.score }>${ _getScore() }</span>
          `
        : '' }
    </div>
  `;
};

export default template;

