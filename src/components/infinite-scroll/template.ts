/*
 * @Descripttion: infinite-scroll组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html } from '../../based-on';
import classNamesConfig from './classNames';
import { NvInfiniteScroll } from './index.ts';

interface Context {
  _loading: boolean;
}

const template = function(this: NvInfiniteScroll, context: Context) {
  const { _loading } = context;

  return html`
    <div part="base" class=${ classNamesConfig.block }>
      <slot></slot>
      ${ _loading
        ? html`
            <div part="loader" class=${ classNamesConfig.elements.loader }>
              <div part="text" class=${ classNamesConfig.elements.loaderText }>加载中...</div>
            </div>
          `
        : '' }
    </div>
  `;
};

export default template;

