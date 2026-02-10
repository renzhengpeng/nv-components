/*
 * @Descripttion: progress组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvProgress } from './index.ts';

const template = function(this: NvProgress) {
  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.success]: this.status === 'success',
    [classNamesConfig.modifiers.warning]: this.status === 'warning',
    [classNamesConfig.modifiers.error]: this.status === 'error',
    [classNamesConfig.modifiers.textInside]: this.textInside,
    [classNamesConfig.modifiers.circle]: this.type === 'circle',
    [classNamesConfig.modifiers.dashboard]: this.type === 'dashboard',
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const percentage = Math.min(100, Math.max(0, this.percentage));
  const barStyle = `width: ${ percentage }%;`;

  const statusColor =
    this.status === 'success'
      ? '#67c23a'
      : this.status === 'warning'
        ? '#e6a23c'
        : this.status === 'error'
          ? '#f56c6c'
          : this.color || '#409eff';

  const barClassMap = classMap({
    [classNamesConfig.elements.bar]: true,
    [classNamesConfig.elements.inner]: this.textInside // 当文字在内部时，bar 充当 inner
  });

  // 为 line 类型生成内联样式，支持自定义高度
  // 只有当用户显式传入 stroke-width 属性时才覆盖 CSS 的 size 样式
  const lineInnerStyle = this.hasAttribute('stroke-width') && this.type === 'line'
    ? `height: ${ this.strokeWidth }px;`
    : '';

  if (this.type === 'circle' || this.type === 'dashboard') {
    const strokeWidth = 8;
    const radius = 50 - strokeWidth / 2; // 减去描边宽度的一半，防止超出 viewbox
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const strokeDasharray =
      this.type === 'dashboard' ? circumference * 0.75 : circumference;
    const strokeDashoffset =
      this.type === 'dashboard'
        ? circumference - (percentage / 100) * circumference * 0.75
        : offset;

    return html`
      <div part="base" class=${ classMapResult }>
        <svg part="outer" class=${ classNamesConfig.elements.outer } viewBox="0 0 100 100">
          <circle
            part="inner"
            class=${ classNamesConfig.elements.inner }
            cx="50"
            cy="50"
            r="${ radius }"
            fill="none"
            stroke="#e4e7ed"
            stroke-width="8"
            stroke-dasharray="${ strokeDasharray }"
            stroke-dashoffset="0"
          ></circle>
          <circle
            part="bar"
            class=${ classNamesConfig.elements.bar }
            cx="50"
            cy="50"
            r="${ radius }"
            fill="none"
            stroke="${ statusColor }"
            stroke-width="8"
            stroke-dasharray="${ strokeDasharray }"
            stroke-dashoffset="${ strokeDashoffset }"
            stroke-linecap="round"
          ></circle>
        </svg>
        ${ !this.withoutText
          ? html`
              <div part="text" class=${ classNamesConfig.elements.text }>
                ${ this.textInside
                  ? `${ percentage }%`
                  : html`<slot>${ percentage }%</slot>` }
              </div>
            `
          : null }
      </div>
    `;
  }
  
  return html`
    <div part="base" class=${ classMapResult }>
      <div part="outer" class=${ classNamesConfig.elements.outer }>
        <div part="inner" class=${ classNamesConfig.elements.inner } style="${ lineInnerStyle }">
          <div
            part="bar"
            class=${ barClassMap }
            style="${ barStyle } background-color: ${ statusColor };"
          >
            ${ this.textInside && !this.withoutText
              ? html` <div class="nv-progress__text--inside">${ percentage }%</div> `
              : null }
          </div>
        </div>
      </div>
      ${ !this.textInside && !this.withoutText
        ? html`
            <div part="text" class=${ classNamesConfig.elements.text }>
              <slot>${ percentage }%</slot>
            </div>
          `
        : null }
    </div>
  `;
};

export default template;
