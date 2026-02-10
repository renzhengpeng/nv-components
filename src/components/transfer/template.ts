/*
 * @Descripttion: transfer组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat as litRepeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvTransfer } from './index.ts';
import '../icon/index';

const template = function(this: NvTransfer) {
  const leftData = this._getLeftData();
  const rightData = this._getRightData();
  const leftSelectedCount = this._leftSelectedKeysForTemplate.filter(k => leftData.some(d => d.key === k)).length;
  const rightSelectedCount = this._rightSelectedKeysForTemplate.filter(k => rightData.some(d => d.key === k)).length;

  return html`
    <div part="base" class=${ classNamesConfig.block }>
      <div part="panel" class=${ classNamesConfig.elements.panel }>
        <div part="header" class=${ classNamesConfig.elements.header }>
          <span part="title" class=${ classNamesConfig.elements.title }>${ this.titles[0] }</span>
          <span part="count" class=${ classNamesConfig.elements.count }>${ leftData.length }</span>
        </div>
        ${ this.filterable
          ? html`
              <div part="search" class=${ classNamesConfig.elements.search }>
                <input
                  part="input"
                  type="text"
                  class=${ classNamesConfig.elements.searchInput }
                  placeholder=${ this.filterPlaceholder }
                  @input=${ this._handleLeftQueryChange }
                />
              </div>
            `
          : '' }
        <div part="body" class=${ classNamesConfig.elements.body }>
          ${ litRepeat(leftData, (item) => item.key, (item) => html`
            <div
              part="item"
              class=${ classMap({
                [classNamesConfig.elements.item]: true,
                [classNamesConfig.modifiers.itemSelected]: this._leftSelectedKeysForTemplate.includes(item.key)
              }) }
              data-key=${ item.key }
              @click=${ () => this._handleLeftItemClick(item.key, item.disabled) }
            >
              <span part="item-label" class=${ classNamesConfig.elements.itemLabel }>${ item.label }</span>
            </div>
          `) }
        </div>
      </div>
      <div part="buttons" class=${ classNamesConfig.elements.buttons }>
        <button
          part="button"
          class=${ classNamesConfig.elements.button }
          ?disabled=${ leftSelectedCount === 0 }
          @click=${ this._handleMoveToRight }
        >
          <nv-icon name="arrow-right"></nv-icon>
        </button>
        <button
          class=${ classNamesConfig.elements.button }
          ?disabled=${ rightSelectedCount === 0 }
          @click=${ this._handleMoveToLeft }
        >
          <nv-icon name="arrow-left"></nv-icon>
        </button>
      </div>
      <div part="panel" class=${ classNamesConfig.elements.panel }>
        <div part="header" class=${ classNamesConfig.elements.header }>
          <span part="title" class=${ classNamesConfig.elements.title }>${ this.titles[1] }</span>
          <span part="count" class=${ classNamesConfig.elements.count }>${ rightData.length }</span>
        </div>
        ${ this.filterable
          ? html`
              <div part="search" class=${ classNamesConfig.elements.search }>
                <input
                  type="text"
                  class=${ classNamesConfig.elements.searchInput }
                  placeholder=${ this.filterPlaceholder }
                  @input=${ this._handleRightQueryChange }
                />
              </div>
            `
          : '' }
        <div part="body" class=${ classNamesConfig.elements.body }>
          ${ litRepeat(rightData, (item) => item.key, (item) => html`
            <div
              part="item"
              class=${ classMap({
                [classNamesConfig.elements.item]: true,
                [classNamesConfig.modifiers.itemSelected]: this._rightSelectedKeysForTemplate.includes(item.key)
              }) }
              data-key=${ item.key }
              @click=${ () => this._handleRightItemClick(item.key, item.disabled) }
            >
              <span part="item-label" class=${ classNamesConfig.elements.itemLabel }>${ item.label }</span>
            </div>
          `) }
        </div>
      </div>
    </div>
  `;
};

export default template;
