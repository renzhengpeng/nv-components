/*
 * @Descripttion: switch组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvSwitch } from './index.ts';
import '../icon/index';

interface Context {
  _handleChange: (event: Event) => void;
  _handleClick: (event: Event) => void;
}

const template = function(this: NvSwitch, context: Context) {
  const { _handleChange, _handleClick } = context;

  // 判断是否有图标
  const hasIcon = !!(this.activeIcon || this.inactiveIcon);
  // 判断是否有文字（当有图标时，文字失效）
  const hasText = !hasIcon && !!(this.activeText || this.inactiveText);

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.checked]: this.checked,
    [classNamesConfig.modifiers.disabled]: this.disabled,
    [classNamesConfig.modifiers.mini]: this.size === 'mini',
    [classNamesConfig.modifiers.small]: this.size === 'small',
    [classNamesConfig.modifiers.medium]: this.size === 'medium',
    [classNamesConfig.modifiers.large]: this.size === 'large',
    [classNamesConfig.modifiers.huge]: this.size === 'huge'
  });

  const coreClassMap = classMap({
    [classNamesConfig.elements.core]: true
  });

  // 获取当前显示的图标
  const currentIcon = this.checked ? this.activeIcon : this.inactiveIcon;

  // 根据 switch 的 size 计算 icon 的 size
  const getIconSize = (size: string): string => {
    const sizeMap: Record<string, string> = {
      mini: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      huge: '20px'
    };
    return sizeMap[size] || sizeMap.medium;
  };

  const coreStyle = this.width ? `width: ${ this.width }px;` : '';

  return html`
    <div part="base" class=${ classMapResult } role="switch" aria-checked=${ this.checked } @click=${ _handleClick }>
      <span part="core" class=${ coreClassMap } style="${ coreStyle }">
        ${ hasIcon && currentIcon
          ? html`
              <nv-icon
                part="icon"
                name=${ currentIcon }
                size=${ getIconSize(this.size) }
                class="${ classNamesConfig.elements.core }__icon"
              ></nv-icon>
            `
          : hasText
            ? html`
                <span part="inner" class="${ classNamesConfig.elements.core }__inner">
                  ${ this.checked ? this.activeText : this.inactiveText }
                </span>
              `
            : null }
      </span>
      <input
        type="checkbox"
        class="${ classNamesConfig.block }__input"
        ?checked=${ this.checked }
        ?disabled=${ this.disabled }
        @change=${ _handleChange }
      />
    </div>
  `;
};

export default template;
