/*
 * @Descripttion: statistic组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import classNamesConfig from './classNames';
import { NvStatistic } from './index.ts';

const template = function(this: NvStatistic) {
  const hasPrefixSlot = this._hasPrefixSlot();
  const hasSuffixSlot = this._hasSuffixSlot();

  return html`
    <div part="base" class=${ classNamesConfig.block }>
      ${ this.label
        ? html`
            <div part="title" class=${ classNamesConfig.elements.title }>${ this.label }</div>
          `
        : '' }
      <div part="content" class=${ classNamesConfig.elements.content }>
        ${ hasPrefixSlot || this.prefix
          ? html`
              <span part="prefix" class=${ classNamesConfig.elements.prefix }>
                ${ hasPrefixSlot
                  ? html`<slot name="prefix"></slot>`
                  : html`${ this.prefix }` }
              </span>
            `
          : '' }
        <span part="value" class=${ classNamesConfig.elements.value } style="${ this.valueStyle }">
          ${ this._formatValue() }
        </span>
        ${ hasSuffixSlot || this.suffix
          ? html`
              <span part="suffix" class=${ classNamesConfig.elements.suffix }>
                ${ hasSuffixSlot
                  ? html`<slot name="suffix"></slot>`
                  : html`${ this.suffix }` }
              </span>
            `
          : '' }
      </div>
    </div>
  `;
};

export default template;
