/*
 * @Descripttion: color-picker组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat as litRepeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvColorPicker } from './index.ts';

interface Context {
  _handleClick: () => void;
  _handleColorChange: (h: number, s: number, v: number, a: number) => void;
  _handlePredefineClick: (color: string) => void;
  _handleSaturationMouseDown: (e: MouseEvent) => void;
  _handleHueMouseDown: (e: MouseEvent) => void;
  _handleAlphaMouseDown: (e: MouseEvent) => void;
  _toggleFormat: () => void;
  _handleColorInput: (e: Event) => void;
  _handleEyeDropper: () => Promise<void>;
  _getColorString: () => string;
  _visible: boolean;
  _color: { h: number; s: number; v: number; a: number };
  _displayFormat: 'hex' | 'rgb' | 'hsl' | 'hsv';
  _supportsEyeDropper: boolean;
}

const template = function(this: NvColorPicker, context: Context) {
  const { _handleClick, _handlePredefineClick, _handleSaturationMouseDown, _handleHueMouseDown, _handleAlphaMouseDown, _toggleFormat, _handleColorInput, _handleEyeDropper, _getColorString, _visible, _color, _displayFormat, _supportsEyeDropper } = context;

  const sizeClass = `size-${ this.size }` as keyof typeof classNamesConfig.modifiers;
  const shapeClass = `shape-${ this.shape }` as keyof typeof classNamesConfig.modifiers;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.bordered]: this.bordered,
    [classNamesConfig.modifiers[sizeClass]]: true,
    [classNamesConfig.modifiers[shapeClass]]: true
  });

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="trigger" class=${ classNamesConfig.elements.trigger } @click=${ _handleClick }>
        <div class=${ classNamesConfig.elements.color } style="background-color: ${ this.value };"></div>
      </div>
      ${ _visible
        ? html`
            <div part="panel" class=${ classNamesConfig.elements.panel } @click=${ (e: Event) => e.stopPropagation() }>
              <div class=${ classNamesConfig.elements.picker }>
                <div 
                  part="saturation"
                  class=${ classNamesConfig.elements.saturation } 
                  style="background: linear-gradient(to right, #fff, hsl(${ _color.h }, 100%, 50%))"
                  @mousedown=${ _handleSaturationMouseDown }
                >
                  <div class=${ classNamesConfig.elements.saturationWhite }></div>
                  <div class=${ classNamesConfig.elements.saturationBlack }></div>
                  <div
                    class=${ classNamesConfig.elements.saturationPointer }
                    style="left: ${ _color.s }%; top: ${ 100 - _color.v }%;"
                  ></div>
                </div>
                <div 
                  part="hue"
                  class=${ classNamesConfig.elements.hue }
                  @mousedown=${ _handleHueMouseDown }
                >
                  <div
                    class=${ classNamesConfig.elements.huePointer }
                    style="left: ${ (_color.h / 360) * 100 }%;"
                  ></div>
                </div>
                ${ this.showAlpha
                  ? html`
                      <div 
                        part="alpha"
                        class=${ classNamesConfig.elements.alpha }
                        @mousedown=${ _handleAlphaMouseDown }
                      >
                        <div
                          class=${ classNamesConfig.elements.alphaPointer }
                          style="left: ${ _color.a * 100 }%;"
                        ></div>
                      </div>
                    `
                  : '' }
              </div>
              <div class=${ classNamesConfig.elements.input }>
                <nv-input 
                  class=${ classNamesConfig.elements.inputField }
                  .value=${ _getColorString() }
                  @input=${ _handleColorInput }
                  @change=${ _handleColorInput }
                ></nv-input>
                <div class=${ classNamesConfig.elements.controls }>
                  <nv-button-group>
                    <nv-button 
                      @click=${ _toggleFormat }
                      title="切换颜色格式"
                    >
                      ${ _displayFormat.toUpperCase() }
                    </nv-button>
                    ${ this.eyeDropper && _supportsEyeDropper
                      ? html`
                          <nv-button 
                            @click=${ _handleEyeDropper }
                            title="取色器"
                            aria-label="取色器"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16" part="svg">
                              <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
                            </svg>
                          </nv-button>
                        `
                      : '' }
                  </nv-button-group>
                </div>
              </div>
              ${ this.predefine && this.predefine.length > 0
                ? html`
                    <div part="predefine" class=${ classNamesConfig.elements.predefine }>
                      ${ litRepeat(this.predefine, (color) => color, (color) => html`
                        <div
                          part="predefine-color"
                          class=${ classNamesConfig.elements.predefineColor }
                          style="background-color: ${ color };"
                          @click=${ () => _handlePredefineClick(color) }
                        ></div>
                      `) }
                    </div>
                  `
                : '' }
            </div>
          `
        : '' }
    </div>
  `;
};

export default template;
