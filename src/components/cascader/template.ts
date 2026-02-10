/*
 * @Descripttion: cascader组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvCascader } from './index.ts';
import type { CascaderOption } from './index.ts';
import '../icon/index';

const template = function(this: NvCascader) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.focus]: this._visible,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const displayText = this._getDisplayText();

  // 获取所有需要显示的面板数据
  const getPanelsData = () => {
    const panels: CascaderOption[][] = [];
    
    // 第一级面板：显示根选项
    panels.push(this.options);
    
    // 根据选中的路径，显示后续层级的面板
    for (let i = 0; i < this._selectedPath.length; i++) {
      const selectedOption = this._selectedPath[i];
      if (selectedOption.children && selectedOption.children.length > 0) {
        panels.push(selectedOption.children);
      }
    }
    
    return panels;
  };

  const panelsData = getPanelsData();

  return html`
    <div part="base" class=${ classMapResult }>
      <div part="input" class=${ classNamesConfig.elements.input } @click=${ this._handleClick }>
        <span part="input-inner" class=${ classNamesConfig.elements.inputInner }>${ displayText }</span>
        ${ this.clearable && this.value.length > 0
          ? html`
              <span part="clear" class=${ classNamesConfig.elements.clear } @click=${ this._handleClear }>
                <nv-icon name="close"></nv-icon>
              </span>
            `
          : html`
              <span part="suffix" class=${ classNamesConfig.elements.suffix }>
                <nv-icon name="arrow-down"></nv-icon>
              </span>
            ` }
      </div>
      <div class="${ classMap({
        [classNamesConfig.elements.panelsWrapper]: true,
        'is-visible': this._visible
      }) }" part="panels">
        ${ repeat(panelsData, (panelOptions) => panelOptions, (panelOptions, index) => {
            return html`
              <div part="panel" class=${ classNamesConfig.elements.panel }>
                <div part="menu" class=${ classNamesConfig.elements.menu }>
                  ${ repeat(panelOptions, (option) => option.value, (option) => {
                      const isSelected = index < this._selectedPath.length && 
                                        this._selectedPath[index]?.value === option.value;
                      return html`
                        <div
                          class="${ classMap({
                            [classNamesConfig.elements.menuItem]: true,
                            [classNamesConfig.modifiers.selected]: isSelected,
                            [classNamesConfig.modifiers.disabled]: !!option.disabled
                          }) }"
                          part="item"
                          @click=${ () => this._handleOptionClick(option, index) }
                        >
                          <span part="item-label" class=${ classNamesConfig.elements.menuItemLabel }>${ option.label }</span>
                          ${ option.children && option.children.length > 0
                            ? html`
                                <nv-icon part="item-icon" name="arrow-right" class=${ classNamesConfig.elements.menuItemIcon }></nv-icon>
                              `
                            : '' }
                        </div>
                      `;
                    }) }
                </div>
              </div>
            `;
          }) }
      </div>
    </div>
  `;
};

export default template;
