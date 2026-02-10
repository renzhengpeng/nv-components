import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../button/index';
import '../divider/index';
import '../input/index';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'nv-tooltip',
  argTypes: {
    content: {
      control: 'text',
      description: '显示的内容'
    },
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
      description: '显示的位置'
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: '触发方式'
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头'
    },
    visible: {
      control: 'boolean',
      description: '是否可见（用于manual模式）'
    },
    openDelay: {
      control: 'number',
      description: '延迟显示的时间（毫秒）'
    },
    hideDelay: {
      control: 'number',
      description: '延迟隐藏的时间（毫秒）'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    }
  }
};

export default meta;
type Story = StoryObj;

/**
 * Tooltip 提示组件
 *
 * ## 组件概述
 *
 * Tooltip 提示组件用于在用户悬停、聚焦或点击元素时显示额外的提示信息。
 * 支持多种触发方式、位置、延迟配置，可以显示文本或自定义HTML内容。
 *
 * ## 主要特性
 *
 * - 📍 **12种位置**: 支持 top/bottom/left/right 及其 start/end 变体
 * - 🎯 **4种触发方式**: hover（悬停）、click（点击）、focus（聚焦）、manual（手动）
 * - ⏱️ **延迟控制**: 支持独立的显示和隐藏延迟时间
 * - 🎨 **自定义内容**: 支持文本和HTML内容
 * - ➡️ **箭头显示**: 可控制是否显示指向箭头
 * - 🎛️ **高度可配置**: 通过属性和CSS变量灵活定制
 *
 * ## 属性 (Properties)
 *
 * | 属性名 | 类型 | 默认值 | 说明 |
 * |--------|------|--------|------|
 * | `content` | `string` | `''` | 显示的内容文本 |
 * | `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` | tooltip 显示的位置 |
 * | `trigger` | `'hover' \| 'click' \| 'focus' \| 'manual'` | `'hover'` | 触发方式 |
  * | `arrow` | `boolean` | `true` | 是否显示箭头 |
 * | `visible` | `boolean` | `false` | 是否可见（用于manual模式） |
 * | `openDelay` | `number` | `100` | 延迟显示的时间（毫秒） |
 * | `hideDelay` | `number` | `100` | 延迟隐藏的时间（毫秒） |
 * | `disabled` | `boolean` | `false` | 是否禁用 |
 *
 * ## CSS变量 (CSS Variables)
 *
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-tooltip-background-color` | `#303133` | tooltip 背景色 |
 * | `--nv-tooltip-font-color` | `#fff` | tooltip 文字颜色 |
 * | `--nv-tooltip-border-radius` | `4px` | tooltip 圆角 |
 * | `--nv-tooltip-padding` | `8px 12px` | tooltip 内边距 |
 * | `--nv-tooltip-font-size` | `12px` | tooltip 字体大小 |
 * | `--nv-tooltip-line-height` | `1.5` | tooltip 行高 |
 * | `--nv-tooltip-max-width` | `200px` | tooltip 最大宽度 |
 *
 * ## 插槽 (Slots)
 *
 * | 插槽名 | 说明 |
 * |--------|------|
 * | `default` | 默认插槽，用于放置触发 tooltip 的元素 |
 * | `content` | 内容插槽，用于自定义 tooltip 的内容（优先级高于 content 属性） |
 *
 * ## 使用示例
 *
 * ### 基础用法
 *
 * ```html
 * <nv-tooltip content="这是提示内容">
 *   <nv-button>悬停我</nv-button>
 * </nv-tooltip>
 * ```
 *
 * ### 自定义内容
 *
 * ```html
 * <nv-tooltip>
 *   <nv-button>自定义内容</nv-button>
 *   <div slot="content">
 *     <div style="font-weight: bold;">标题</div>
 *     <div>这是自定义的提示内容</div>
 *   </div>
 * </nv-tooltip>
 * ```
 *
 * ### 不同触发方式
 *
 * ```html
 * <!-- 悬停触发（默认） -->
 * <nv-tooltip content="悬停触发" trigger="hover">
 *   <nv-button>悬停</nv-button>
 * </nv-tooltip>
 *
 * <!-- 点击触发 -->
 * <nv-tooltip content="点击触发" trigger="click">
 *   <nv-button>点击</nv-button>
 * </nv-tooltip>
 *
 * <!-- 聚焦触发 -->
 * <nv-tooltip content="聚焦触发" trigger="focus">
 *   <nv-input placeholder="聚焦我"></nv-input>
 * </nv-tooltip>
 * ```
 *
 * ### 延迟显示/隐藏
 *
 * ```html
 * <nv-tooltip content="延迟显示" openDelay="300" hideDelay="200">
 *   <nv-button>悬停我</nv-button>
 * </nv-tooltip>
 * ```
 *
 * ## 注意事项
 *
 * 1. 延迟与“移入浮层不关”由 popup 的 open-delay / hide-delay / keep-open-on-hover-content 统一处理
 * 2. `content` 属性和 `content` 插槽同时存在时，插槽内容优先级更高
 * 3. tooltip 使用 fixed 定位策略，确保在滚动时位置正确
 * 4. 通过 CSS 变量可以完全自定义 tooltip 的外观
 */
export const Overview: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => html`
    <div style="padding: 20px; max-width: 1200px; margin: 0 auto;">
      <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600;">Tooltip 提示组件</h1>
      <p style="margin: 0 0 30px 0; color: #606266; line-height: 1.8;">
        Tooltip 提示组件用于在用户悬停、聚焦或点击元素时显示额外的提示信息。
        支持多种触发方式、位置、延迟配置，可以显示文本或自定义HTML内容。
      </p>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">主要特性</h2>
      <ul style="margin: 0 0 30px 0; padding-left: 20px; color: #606266; line-height: 2;">
        <li>📍 <strong>12种位置</strong>: 支持 top/bottom/left/right 及其 start/end 变体</li>
        <li>🎯 <strong>4种触发方式</strong>: hover（悬停）、click（点击）、focus（聚焦）、manual（手动）</li>
        <li>⏱️ <strong>延迟控制</strong>: 支持独立的显示和隐藏延迟时间</li>
        <li>🎨 <strong>自定义内容</strong>: 支持文本和HTML内容</li>
        <li>➡️ <strong>箭头显示</strong>: 可控制是否显示指向箭头</li>
        <li>🎛️ <strong>高度可配置</strong>: 通过属性和CSS变量灵活定制</li>
      </ul>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">属性 (Properties)</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <thead>
          <tr style="background-color: #f5f7fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">属性名</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">类型</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">默认值</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>content</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>string</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>''</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">显示的内容文本</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>placement</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>'top'</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 显示的位置</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>trigger</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>'hover' \| 'click' \| 'focus' \| 'manual'</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>'hover'</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">触发方式</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>arrow</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>boolean</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>true</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">是否显示箭头</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>visible</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>boolean</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>false</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">是否可见（用于manual模式）</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>openDelay</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>number</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>0</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">延迟显示的时间（毫秒）</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>hideDelay</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>number</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>0</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">延迟隐藏的时间（毫秒）</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>disabled</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>boolean</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>false</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">是否禁用</td>
          </tr>
        </tbody>
      </table>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">CSS变量 (CSS Variables)</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <thead>
          <tr style="background-color: #f5f7fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">变量名</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">默认值</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-background-color</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>#303133</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 背景色</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-font-color</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>#fff</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 文字颜色</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-border-radius</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>4px</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 圆角</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-padding</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>8px 12px</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 内边距</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-font-size</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>12px</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 字体大小</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-line-height</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>1.5</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 行高</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>--nv-tooltip-max-width</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>200px</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">tooltip 最大宽度</td>
          </tr>
        </tbody>
      </table>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">插槽 (Slots)</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <thead>
          <tr style="background-color: #f5f7fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">插槽名</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ebeef5; font-weight: 600;">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>default</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">默认插槽，用于放置触发 tooltip 的元素</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 12px; border: 1px solid #ebeef5;"><code>content</code></td>
            <td style="padding: 12px; border: 1px solid #ebeef5;">内容插槽，用于自定义 tooltip 的内容（优先级高于 content 属性）</td>
          </tr>
        </tbody>
      </table>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">基础用法</h2>
      <div style="padding: 40px; text-align: center; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-tooltip content="这是提示内容">
          <nv-button>悬停我</nv-button>
        </nv-tooltip>
      </div>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">不同位置</h2>
      <div style="padding: 60px; display: flex; flex-direction: column; gap: 30px; align-items: center; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-tooltip content="顶部提示" placement="top">
          <nv-button>顶部</nv-button>
        </nv-tooltip>
        <div style="display: flex; gap: 30px;">
          <nv-tooltip content="左侧提示" placement="left">
            <nv-button>左侧</nv-button>
          </nv-tooltip>
          <nv-tooltip content="右侧提示" placement="right">
            <nv-button>右侧</nv-button>
          </nv-tooltip>
        </div>
        <nv-tooltip content="底部提示" placement="bottom">
          <nv-button>底部</nv-button>
        </nv-tooltip>
      </div>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">不同触发方式</h2>
      <div style="padding: 40px; display: flex; gap: 20px; justify-content: center; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-tooltip content="悬停触发" trigger="hover">
          <nv-button>悬停</nv-button>
        </nv-tooltip>
        <nv-tooltip content="点击触发" trigger="click">
          <nv-button>点击</nv-button>
        </nv-tooltip>
        <nv-tooltip content="聚焦触发" trigger="focus">
          <nv-input placeholder="聚焦我" style="width: 150px;"></nv-input>
        </nv-tooltip>
      </div>
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <div style="padding: 100px; text-align: center;">
      <nv-tooltip
        content="${ args.content }"
        placement="${ args.placement }"
        trigger="${ args.trigger }"
        ?arrow=${ args.arrow }
        ?visible=${ args.visible }
        openDelay=${ args.openDelay }
        hideDelay=${ args.hideDelay }
        ?disabled=${ args.disabled }
      >
        <nv-button>悬停我</nv-button>
      </nv-tooltip>
    </div>
  `,
  args: {
    content: '这是提示内容',
    placement: 'top',
    trigger: 'hover',
    arrow: true,
    visible: false,
    openDelay: 100,
    hideDelay: 100,
    disabled: false
  }
};

export const Positions: Story = {
  render: () => html`
    <div style="padding: 100px; display: flex; flex-direction: column; gap: 20px; align-items: center;">
      <nv-tooltip content="顶部提示" placement="top">
        <nv-button>顶部</nv-button>
      </nv-tooltip>
      <div style="display: flex; gap: 20px;">
        <nv-tooltip content="左侧提示" placement="left">
          <nv-button>左侧</nv-button>
        </nv-tooltip>
        <nv-tooltip content="右侧提示" placement="right">
          <nv-button>右侧</nv-button>
        </nv-tooltip>
      </div>
      <nv-tooltip content="底部提示" placement="bottom">
        <nv-button>底部</nv-button>
      </nv-tooltip>
    </div>
  `
};

export const AllPlacements: Story = {
  render: () => html`
    <div style="padding: 150px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; align-items: center; justify-items: center;">
      <nv-tooltip content="top-start" placement="top-start">
        <nv-button>top-start</nv-button>
      </nv-tooltip>
      <nv-tooltip content="top" placement="top">
        <nv-button>top</nv-button>
      </nv-tooltip>
      <nv-tooltip content="top-end" placement="top-end">
        <nv-button>top-end</nv-button>
      </nv-tooltip>

      <nv-tooltip content="left-start" placement="left-start">
        <nv-button>left-start</nv-button>
      </nv-tooltip>
      <div></div>
      <nv-tooltip content="right-start" placement="right-start">
        <nv-button>right-start</nv-button>
      </nv-tooltip>

      <nv-tooltip content="left" placement="left">
        <nv-button>left</nv-button>
      </nv-tooltip>
      <div></div>
      <nv-tooltip content="right" placement="right">
        <nv-button>right</nv-button>
      </nv-tooltip>

      <nv-tooltip content="left-end" placement="left-end">
        <nv-button>left-end</nv-button>
      </nv-tooltip>
      <div></div>
      <nv-tooltip content="right-end" placement="right-end">
        <nv-button>right-end</nv-button>
      </nv-tooltip>

      <nv-tooltip content="bottom-start" placement="bottom-start">
        <nv-button>bottom-start</nv-button>
      </nv-tooltip>
      <nv-tooltip content="bottom" placement="bottom">
        <nv-button>bottom</nv-button>
      </nv-tooltip>
      <nv-tooltip content="bottom-end" placement="bottom-end">
        <nv-button>bottom-end</nv-button>
      </nv-tooltip>
    </div>
  `
};

export const TriggerTypes: Story = {
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 20px; justify-content: center;">
      <nv-tooltip content="悬停触发" trigger="hover">
        <nv-button>悬停</nv-button>
      </nv-tooltip>
      <nv-tooltip content="点击触发" trigger="click">
        <nv-button>点击</nv-button>
      </nv-tooltip>
      <nv-tooltip content="聚焦触发" trigger="focus">
        <nv-input placeholder="聚焦我" style="width: 150px;"></nv-input>
      </nv-tooltip>
    </div>
  `
};

export const CustomContent: Story = {
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-tooltip>
        <nv-button>自定义内容</nv-button>
        <div slot="content">
          <div style="padding: 8px;">
            <div style="font-weight: bold; margin-bottom: 4px;">标题</div>
            <div>这是自定义的提示内容</div>
          </div>
        </div>
      </nv-tooltip>
    </div>
  `
};

export const Delays: Story = {
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 20px; justify-content: center;">
      <nv-tooltip content="无延迟" openDelay="0" hideDelay="0">
        <nv-button>无延迟</nv-button>
      </nv-tooltip>
      <nv-tooltip content="延迟300ms显示" openDelay="300" hideDelay="0">
        <nv-button>延迟显示</nv-button>
      </nv-tooltip>
      <nv-tooltip content="延迟200ms隐藏" openDelay="0" hideDelay="200">
        <nv-button>延迟隐藏</nv-button>
      </nv-tooltip>
      <nv-tooltip content="延迟300ms显示，200ms隐藏" openDelay="300" hideDelay="200">
        <nv-button>不同延迟</nv-button>
      </nv-tooltip>
    </div>
  `
};

export const WithoutArrow: Story = {
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-tooltip content="无箭头提示" .arrow=${ false }>
        <nv-button>无箭头</nv-button>
      </nv-tooltip>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-tooltip content="这是提示内容" disabled>
        <nv-button>禁用状态</nv-button>
      </nv-tooltip>
    </div>
  `
};

export const ManualControl: Story = {
  render: () => {
    let tooltip: any;
    return html`
      <div style="padding: 100px; text-align: center;">
        <nv-tooltip
          content="手动控制的提示"
          trigger="manual"
          .visible=${ false }
          @ref=${ (el: any) => { tooltip = el; } }
        >
          <nv-button>手动控制</nv-button>
        </nv-tooltip>
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
          <nv-button @click=${ () => { if (tooltip) tooltip.visible = true; } }>显示</nv-button>
          <nv-button @click=${ () => { if (tooltip) tooltip.visible = false; } }>隐藏</nv-button>
        </div>
      </div>
    `;
  }
};

export const LongContent: Story = {
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-tooltip content="这是一段很长的提示内容，用来测试 tooltip 的最大宽度限制和文本换行效果。当内容超过最大宽度时，会自动换行显示。">
        <nv-button>长文本提示</nv-button>
      </nv-tooltip>
    </div>
  `
};
