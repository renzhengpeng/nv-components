import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../button/index';
import '../divider/index';

const meta: Meta = {
  title: 'Components/Loading',
  component: 'nv-loading', 
  argTypes: {
    fullscreen: {
      control: 'boolean',
      description: '是否全屏显示'
    },
    block: {
      control: 'boolean',
      description: '是否以块级元素显示（占据整行）'
    },
    icon: {
      control: 'text',
      description: '自定义图标名称（优先级高于spinner）'
    },
    spinner: {
      control: 'select',
      options: ['circular', 'spinner', 'dots', 'bars'],
      description: 'loading图标类型'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: 'loading图标尺寸'
    },
    loading: {
      control: 'boolean',
      description: '是否显示loading图标'
    },
    text: {
      control: 'text',
      description: '显示在加载图标下方的加载文案'
    },
    spinnerColor: {
      control: 'color',
      description: 'spinner图标的颜色'
    },
    textColor: {
      control: 'color',
      description: '文字颜色'
    }
  }
};

export default meta;
type Story = StoryObj;

/**
 * Loading 加载组件
 * 
 * ## 组件概述
 * 
 * Loading加载组件用于在内容加载过程中显示加载状态，提供良好的用户体验反馈。
 * 支持多种spinner类型、尺寸、颜色自定义，可以包裹任意内容或全屏显示。
 * 
 * ## 主要特性
 * 
 * - 🎨 **4种Spinner类型**: circular（圆形）、spinner（多点）、dots（点状）、bars（条形）
 * - 🎭 **自定义图标**: 支持使用任意icon图标替代默认spinner
 * - 📏 **5种尺寸**: mini、small、medium、large、huge
 * - 🌈 **颜色自定义**: 支持自定义spinner和文字颜色
 * - 📦 **灵活包裹**: 可包裹任意内容，自动适应大小
 * - 🖥️ **全屏模式**: 支持全屏加载遮罩
 * - ⚙️ **高度可配置**: 通过属性和CSS变量灵活定制
 * 
 * ## 属性 (Properties)
 * 
 * | 属性名 | 类型 | 默认值 | 说明 |
 * |--------|------|--------|------|
 * | `icon` | `string` | `''` | 自定义图标名称（优先级高于spinner） |
 * | `spinner` | `'circular' \| 'spinner' \| 'dots' \| 'bars'` | `'circular'` | loading图标类型 |
 * | `size` | `'mini' \| 'small' \| 'medium' \| 'large' \| 'huge'` | `'medium'` | loading图标尺寸 |
 * | `loading` | `boolean` | `true` | 是否显示loading状态 |
 * | `text` | `string` | `''` | 显示的加载文案 |
 * | `spinner-color` | `string` | `''` | spinner图标的颜色 |
 * | `text-color` | `string` | `''` | 文字颜色 |
 * | `fullscreen` | `boolean` | `false` | 是否全屏显示 |
 * | `block` | `boolean` | `false` | 是否以块级元素显示 |
 * 
 * ## CSS变量 (CSS Variables)
 * 
 * ### 通用变量
 * 
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-loading-mask-background-color` | `rgba(255, 255, 255, 0.9)` | 遮罩层背景色 |
 * | `--nv-loading-text-font-color` | `var(--nv-primary-color-1)` | 文字颜色 |
 * | `--nv-loading-text-font-size` | `var(--nv-font-size-small)` | 文字大小 |
 * | `--nv-loading-text-margin` | `var(--nv-padding-mini) 0` | 文字边距 |
 * 
 * ### Circular 圆形旋转器
 * 
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-loading-circular-width` | `42px` | 宽度 |
 * | `--nv-loading-circular-height` | `42px` | 高度 |
 * | `--nv-loading-path-stroke-width` | `2` | 线条宽度 |
 * | `--nv-loading-path-stroke-color` | `var(--nv-primary-color-1)` | 线条颜色 |
 * 
 * ### Spinner 多点旋转器
 * 
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-loading-spinner-width` | `42px` | 宽度 |
 * | `--nv-loading-spinner-height` | `42px` | 高度 |
 * | `--nv-loading-spinner-color` | `var(--nv-primary-color-1)` | 颜色 |
 * | `--nv-loading-spinner-blade-width` | `3px` | 叶片宽度 |
 * | `--nv-loading-spinner-blade-height` | `12px` | 叶片高度 |
 * 
 * ### Dots 点状加载
 * 
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-loading-dot-size` | `12px` | 点的大小 |
 * | `--nv-loading-dots-gap` | `8px` | 点之间的间距 |
 * | `--nv-loading-dots-color` | `var(--nv-primary-color-1)` | 点的颜色 |
 * 
 * ### Bars 条形加载
 * 
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-loading-bar-width` | `4px` | 条形宽度 |
 * | `--nv-loading-bar-height` | `30px` | 条形高度 |
 * | `--nv-loading-bars-gap` | `4px` | 条形间距 |
 * | `--nv-loading-bars-color` | `var(--nv-primary-color-1)` | 条形颜色 |
 * 
 * ## 插槽 (Slots)
 * 
 * | 插槽名 | 说明 |
 * |--------|------|
 * | `default` | 默认插槽，用于放置需要加载的内容 |
 * 
 * ## 使用示例
 * 
 * ### 基础用法
 * 
 * ```html
 * <nv-loading>
 *   <div>内容区域</div>
 * </nv-loading>
 * ```
 * 
 * ### 自定义spinner类型和尺寸
 * 
 * ```html
 * <nv-loading spinner="dots" size="large" text="加载中...">
 *   <div>内容区域</div>
 * </nv-loading>
 * ```
 * 
 * ### 自定义图标
 * 
 * ```html
 * <nv-loading icon="loading" size="large" text="加载中...">
 *   <div>内容区域</div>
 * </nv-loading>
 * ```
 * 
 * ### 自定义颜色
 * 
 * ```html
 * <nv-loading 
 *   spinner="circular" 
 *   spinner-color="#67C23A" 
 *   text-color="#67C23A"
 *   text="加载成功"
 * >
 *   <div>内容区域</div>
 * </nv-loading>
 * ```
 * 
 * ### 控制loading状态
 * 
 * ```html
 * <nv-loading .loading="${isLoading}">
 *   <div>内容区域</div>
 * </nv-loading>
 * ```
 * 
 * ### 全屏加载
 * 
 * ```html
 * <nv-loading fullscreen text="加载中...">
 *   <div>页面内容</div>
 * </nv-loading>
 * ```
 * 
 * ## 注意事项
 * 
 * 1. 默认情况下，loading组件为`inline-block`，会根据内容大小自动调整
 * 2. 使用`block`属性可以让loading组件占据整行
 * 3. `spinner-color`和`text-color`属性会覆盖对应的CSS变量
 * 4. 通过`.loading`属性可以动态控制loading的显示/隐藏
 * 5. 不同的`size`会自动调整所有spinner类型的尺寸
 */
export const Overview: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => html`
    <div style="padding: 20px; max-width: 1200px;">
      <h2 style="margin-top: 0;">Loading 加载组件</h2>
      <p style="color: #606266; line-height: 1.6; font-size: 15px;">
        用于在内容加载过程中显示加载状态，提供良好的用户体验反馈。支持多种spinner类型、尺寸、颜色自定义，可以包裹任意内容或全屏显示。
      </p>

      <!-- 主要特性 -->
      <div style="margin-top: 24px; padding: 16px; background: #ecf5ff; border-left: 4px solid #409EFF; border-radius: 4px;">
        <h3 style="margin: 0 0 12px 0; color: #409EFF;">✨ 主要特性</h3>
        <ul style="margin: 0; padding-left: 20px; color: #606266; line-height: 1.8;">
          <li>🎨 <strong>4种Spinner类型</strong>：circular（圆形）、spinner（多点）、dots（点状）、bars（条形）</li>
          <li>🎭 <strong>自定义图标</strong>：支持使用任意icon图标替代默认spinner</li>
          <li>📏 <strong>5种尺寸</strong>：mini、small、medium、large、huge</li>
          <li>🌈 <strong>颜色自定义</strong>：支持自定义spinner和文字颜色</li>
          <li>📦 <strong>灵活包裹</strong>：可包裹任意内容，自动适应大小</li>
          <li>🖥️ <strong>全屏模式</strong>：支持全屏加载遮罩</li>
        </ul>
      </div>
      
      <!-- 组件属性 -->
      <div style="margin-top: 40px;">
        <h3 style="margin: 0 0 8px 0; color: #303133;">
          📋 组件属性 (Properties)
        </h3>
        <nv-divider></nv-divider>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">属性名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">类型</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">icon</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">string</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">''</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">自定义图标名称（优先级高于spinner）</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">spinner</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">'circular' | 'spinner' | 'dots' | 'bars'</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">'circular'</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">loading图标类型</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">size</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">'mini' | 'small' | 'medium' | 'large' | 'huge'</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">'medium'</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">loading图标尺寸</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">loading</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">boolean</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">true</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">是否显示loading状态</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">text</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">string</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">''</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">显示的加载文案</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">spinner-color</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">string</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">''</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">spinner图标的颜色</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">text-color</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">string</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">''</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">文字颜色</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">fullscreen</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 13px;">boolean</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #67C23A;">false</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">是否全屏显示</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">block</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 13px;">boolean</code></td>
              <td style="padding: 12px;"><code style="color: #67C23A;">false</code></td>
              <td style="padding: 12px; color: #606266;">是否以块级元素显示</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 插槽 -->
      <div style="margin-top: 40px;">
        <h3 style="margin: 0 0 8px 0; color: #303133;">
          🎰 插槽 (Slots)
        </h3>
        <nv-divider></nv-divider>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600; width: 200px;">插槽名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900;">default</code></td>
              <td style="padding: 12px; color: #606266;">默认插槽，用于放置需要加载的内容</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CSS变量 -->
      <div style="margin-top: 40px;">
        <h3 style="margin: 0 0 8px 0; color: #303133;">
          🎨 CSS变量 (CSS Variables)
        </h3>
        <nv-divider></nv-divider>
        
        <!-- 通用变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">通用变量</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-mask-background-color</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">rgba(255, 255, 255, 0.9)</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">遮罩层背景色</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-text-font-color</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">文字颜色</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-text-font-size</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">var(--nv-font-size-small)</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">文字大小</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-text-margin</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">var(--nv-padding-mini) 0</code></td>
              <td style="padding: 12px; color: #606266;">文字边距</td>
            </tr>
          </tbody>
        </table>

        <!-- Circular变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">Circular 圆形旋转器</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-circular-width</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">42px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">宽度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-circular-height</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">42px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">高度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-path-stroke-width</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">2</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">线条宽度</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-path-stroke-color</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; color: #606266;">线条颜色</td>
            </tr>
          </tbody>
        </table>

        <!-- Spinner变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">Spinner 多点旋转器</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-spinner-width</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">42px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">宽度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-spinner-height</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">42px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">高度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-spinner-color</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">颜色</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-spinner-blade-width</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">3px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">叶片宽度</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-spinner-blade-height</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">12px</code></td>
              <td style="padding: 12px; color: #606266;">叶片高度</td>
            </tr>
          </tbody>
        </table>

        <!-- Dots变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">Dots 点状加载</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-dot-size</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">12px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">点的大小</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-dots-gap</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">8px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">点之间的间距</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-dots-color</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; color: #606266;">点的颜色</td>
            </tr>
          </tbody>
        </table>

        <!-- Bars变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">Bars 条形加载</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-bar-width</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">4px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">条形宽度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-bar-height</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">30px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">条形高度</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-bars-gap</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">4px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">条形间距</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-bars-color</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; color: #606266;">条形颜色</td>
            </tr>
          </tbody>
        </table>

        <!-- Custom Icon变量 -->
        <h4 style="margin: 24px 0 12px 0; color: #606266;">Custom Icon 自定义图标</h4>
        <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,0.1); border-radius: 4px; overflow: hidden;">
          <thead>
            <tr style="background: #f5f7fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">变量名</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">默认值</th>
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e4e7ed; color: #303133; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-custom-icon-size</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed;"><code style="color: #909399; font-size: 12px;">42px</code></td>
              <td style="padding: 12px; border-bottom: 1px solid #e4e7ed; color: #606266;">自定义图标大小</td>
            </tr>
            <tr>
              <td style="padding: 12px;"><code style="background: #f5f7fa; padding: 2px 6px; border-radius: 3px; color: #e96900; font-size: 12px;">--nv-loading-custom-icon-color</code></td>
              <td style="padding: 12px;"><code style="color: #909399; font-size: 12px;">var(--nv-primary-color-1)</code></td>
              <td style="padding: 12px; color: #606266;">自定义图标颜色</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 快速开始 -->
      <div style="margin-top: 40px;">
        <h3 style="margin: 0 0 8px 0; color: #303133;">
          🚀 快速开始
        </h3>
        <nv-divider></nv-divider>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px;">
          <div>
            <h4 style="margin: 0 0 12px 0; color: #303133;">基础用法</h4>
            <nv-loading text="加载中...">
              <div style="height: 150px; background: #f5f7fa; padding: 20px; border-radius: 4px;">
                <p style="margin: 0; color: #606266;">包裹需要加载的内容</p>
              </div>
            </nv-loading>
          </div>
          
          <div>
            <h4 style="margin: 0 0 12px 0; color: #303133;">不同spinner类型</h4>
            <div style="display: flex; gap: 12px;">
              <nv-loading spinner="circular" size="small">
                <div style="width: 80px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
              </nv-loading>
              <nv-loading spinner="spinner" size="small">
                <div style="width: 80px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
              </nv-loading>
              <nv-loading spinner="dots" size="small">
                <div style="width: 80px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
              </nv-loading>
              <nv-loading spinner="bars" size="small">
                <div style="width: 80px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
              </nv-loading>
            </div>
          </div>
        </div>

        <div style="margin-top: 32px;">
          <h4 style="margin: 0 0 12px 0; color: #303133;">不同尺寸</h4>
          <div style="display: flex; gap: 16px; align-items: center;">
            <nv-loading spinner="circular" size="mini" text="mini">
              <div style="width: 100px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading spinner="circular" size="small" text="small">
              <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading spinner="circular" size="medium" text="medium">
              <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading spinner="circular" size="large" text="large">
              <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
          </div>
        </div>

        <div style="margin-top: 32px;">
          <h4 style="margin: 0 0 12px 0; color: #303133;">自定义图标</h4>
          <div style="display: flex; gap: 16px;">
            <nv-loading icon="loading" text="loading">
              <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading icon="refresh" text="refresh">
              <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading icon="sync" text="sync">
              <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
            </nv-loading>
          </div>
        </div>

        <div style="margin-top: 32px;">
          <h4 style="margin: 0 0 12px 0; color: #303133;">自定义颜色</h4>
          <div style="display: flex; gap: 16px;">
            <nv-loading spinner="circular" spinner-color="#67C23A" text-color="#67C23A" text="成功">
              <div style="width: 140px; height: 120px; background: #f0f9ff; border: 2px solid #67C23A; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading spinner="spinner" spinner-color="#E6A23C" text-color="#E6A23C" text="警告">
              <div style="width: 140px; height: 120px; background: #fdf6ec; border: 2px solid #E6A23C; border-radius: 4px;"></div>
            </nv-loading>
            <nv-loading spinner="dots" spinner-color="#F56C6C" text-color="#F56C6C" text="错误">
              <div style="width: 140px; height: 120px; background: #fef0f0; border: 2px solid #F56C6C; border-radius: 4px;"></div>
            </nv-loading>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 40px; padding: 20px; background: #f5f7fa; border-radius: 4px;">
        <h3 style="margin-top: 0;">💡 提示</h3>
        <ul style="margin: 0; padding-left: 20px; color: #606266; line-height: 1.8;">
          <li>查看下方各个示例了解更多用法</li>
          <li>通过Controls面板可以实时调整组件属性</li>
          <li>所有示例代码都可以直接复制使用</li>
          <li>支持通过CSS变量进行深度定制</li>
        </ul>
      </div>
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-loading
      ?fullscreen=${ args.fullscreen }
      ?block=${ args.block }
      ?loading=${ args.loading }
      icon=${ args.icon }
      spinner=${ args.spinner }
      size=${ args.size }
      text=${ args.text }
      spinner-color=${ args.spinnerColor }
      text-color=${ args.textColor }
    >
      <div style="width: 400px; height: 200px; background: #f5f7fa; padding: 20px;">
        <p>这是一段内容</p>
        <p>这是一段内容</p>
        <p>这是一段内容</p>
      </div>
    </nv-loading>
  `,
  args: {
    fullscreen: false,
    block: false,
    loading: true,
    icon: '',
    spinner: 'circular',
    size: 'medium',
    text: '',
    spinnerColor: '',
    textColor: ''
  }
};

/**
 * 基础用法：包裹块级内容
 */
export const Basic: Story = {
  render: () => html`
    <nv-loading>
      <div style="width: 400px; height: 200px; background: #f5f7fa; padding: 20px;">
        <p>这是一段内容</p>
        <p>这是一段内容</p>
        <p>这是一段内容</p>
      </div>
    </nv-loading>
  `
};

/**
 * 不同类型的spinner
 */
export const SpinnerTypes: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 20px; color: #606266;">
        支持4种不同类型的loading图标：
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <nv-loading spinner="circular" text="circular（圆形）">
          <div style="height: 200px; background: #f5f7fa; padding: 20px;">
            <h3 style="margin: 0 0 12px 0;">圆形旋转器</h3>
            <p style="margin: 0; color: #606266;">默认样式，适合大多数场景</p>
          </div>
        </nv-loading>
        
        <nv-loading spinner="spinner" text="spinner（多点旋转）">
          <div style="height: 200px; background: #f5f7fa; padding: 20px;">
            <h3 style="margin: 0 0 12px 0;">多点旋转器</h3>
            <p style="margin: 0; color: #606266;">12个旋转点组成的加载动画</p>
          </div>
        </nv-loading>
        
        <nv-loading spinner="dots" text="dots（点状）">
          <div style="height: 200px; background: #f5f7fa; padding: 20px;">
            <h3 style="margin: 0 0 12px 0;">点状加载</h3>
            <p style="margin: 0; color: #606266;">3个点的弹跳动画</p>
          </div>
        </nv-loading>
        
        <nv-loading spinner="bars" text="bars（条形）">
          <div style="height: 200px; background: #f5f7fa; padding: 20px;">
            <h3 style="margin: 0 0 12px 0;">条形加载</h3>
            <p style="margin: 0; color: #606266;">5个条形的波动动画</p>
          </div>
        </nv-loading>
      </div>
    </div>
  `
};

/**
 * 不同尺寸
 */
export const Sizes: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 20px; color: #606266;">
        支持5种不同尺寸：mini、small、medium（默认）、large、huge
      </p>
      
      <h4 style="margin: 24px 0 12px 0; color: #303133;">circular 圆形旋转器</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <nv-loading spinner="circular" size="mini" text="mini">
          <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="circular" size="small" text="small">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="circular" size="medium" text="medium">
          <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="circular" size="large" text="large">
          <div style="width: 180px; height: 160px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="circular" size="huge" text="huge">
          <div style="width: 200px; height: 180px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 24px 0 12px 0; color: #303133;">spinner 多点旋转器</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <nv-loading spinner="spinner" size="mini" text="mini">
          <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" size="small" text="small">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" size="medium" text="medium">
          <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" size="large" text="large">
          <div style="width: 180px; height: 160px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" size="huge" text="huge">
          <div style="width: 200px; height: 180px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 24px 0 12px 0; color: #303133;">dots 点状加载</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <nv-loading spinner="dots" size="mini" text="mini">
          <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" size="small" text="small">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" size="medium" text="medium">
          <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" size="large" text="large">
          <div style="width: 180px; height: 160px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" size="huge" text="huge">
          <div style="width: 200px; height: 180px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 24px 0 12px 0; color: #303133;">bars 条形加载</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <nv-loading spinner="bars" size="mini" text="mini">
          <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" size="small" text="small">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" size="medium" text="medium">
          <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" size="large" text="large">
          <div style="width: 180px; height: 160px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" size="huge" text="huge">
          <div style="width: 200px; height: 180px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>
    </div>
  `
};

/**
 * 带文字
 */
export const WithText: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <nv-loading spinner="circular" text="加载中...">
        <div style="width: 250px; height: 200px; background: #f5f7fa; padding: 20px;">
          <p>圆形加载器</p>
        </div>
      </nv-loading>
      <nv-loading spinner="dots" text="请稍候...">
        <div style="width: 250px; height: 200px; background: #f5f7fa; padding: 20px;">
          <p>点状加载器</p>
        </div>
      </nv-loading>
      <nv-loading spinner="bars" text="处理中...">
        <div style="width: 250px; height: 200px; background: #f5f7fa; padding: 20px;">
          <p>条形加载器</p>
        </div>
      </nv-loading>
    </div>
  `
};

/**
 * 自定义图标
 */
export const CustomIcon: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">
        使用 icon 属性自定义loading图标（优先级高于spinner）：
      </p>
      
      <h4 style="margin: 24px 0 12px 0; color: #303133;">常见图标</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 32px;">
        <nv-loading icon="loading" text="loading">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="refresh" text="refresh">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="sync" text="sync">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="setting" text="setting">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 24px 0 12px 0; color: #303133;">不同尺寸</h4>
      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 32px;">
        <nv-loading icon="loading" size="mini" text="mini">
          <div style="width: 100px; height: 80px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="loading" size="small" text="small">
          <div style="width: 120px; height: 100px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="loading" size="medium" text="medium">
          <div style="width: 140px; height: 120px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="loading" size="large" text="large">
          <div style="width: 160px; height: 140px; background: #f5f7fa; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 24px 0 12px 0; color: #303133;">自定义颜色</h4>
      <div style="display: flex; gap: 16px;">
        <nv-loading icon="loading" spinner-color="#67C23A" text-color="#67C23A" text="成功">
          <div style="width: 140px; height: 120px; background: #f0f9ff; border: 2px solid #67C23A; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="refresh" spinner-color="#E6A23C" text-color="#E6A23C" text="警告">
          <div style="width: 140px; height: 120px; background: #fdf6ec; border: 2px solid #E6A23C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading icon="sync" spinner-color="#F56C6C" text-color="#F56C6C" text="错误">
          <div style="width: 140px; height: 120px; background: #fef0f0; border: 2px solid #F56C6C; border-radius: 4px;"></div>
        </nv-loading>
      </div>
    </div>
  `
};

/**
 * 全屏加载
 */
export const Fullscreen: Story = {
  render: () => html`
    <nv-loading fullscreen text="加载中...">
      <div style="width: 100%; height: 100vh; background: #f5f7fa; padding: 20px;">
        <p>这是一段内容</p>
        <p>这是一段内容</p>
        <p>这是一段内容</p>
      </div>
    </nv-loading>
  `
};

/**
 * 包裹按钮：内联模式，loading会根据按钮大小自动调整
 */
export const OnButton: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">
        不同spinner类型在按钮上的效果：
      </p>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 32px;">
        <nv-loading spinner="circular" size="small">
          <nv-button>circular</nv-button>
        </nv-loading>
        <nv-loading spinner="spinner" size="small">
          <nv-button type="primary">spinner</nv-button>
        </nv-loading>
        <nv-loading spinner="dots" size="small">
          <nv-button type="success">dots</nv-button>
        </nv-loading>
        <nv-loading spinner="bars" size="small">
          <nv-button type="warning">bars</nv-button>
        </nv-loading>
      </div>

      <p style="margin-bottom: 16px; color: #606266;">
        按钮上使用不同尺寸：
      </p>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <nv-loading spinner="circular" size="mini">
          <nv-button>mini</nv-button>
        </nv-loading>
        <nv-loading spinner="circular" size="small">
          <nv-button>small</nv-button>
        </nv-loading>
        <nv-loading spinner="circular" size="medium">
          <nv-button>medium</nv-button>
        </nv-loading>
        <nv-loading spinner="circular" size="large">
          <nv-button size="large">large</nv-button>
        </nv-loading>
      </div>
    </div>
  `
};

/**
 * 块级模式：使用block属性让loading占据整行
 */
export const BlockMode: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <p style="margin-bottom: 16px; color: #606266;">
        使用 block 属性让 loading 占据整行：
      </p>
      <nv-loading block text="加载中...">
        <div style="height: 150px; background: #f5f7fa; padding: 20px;">
          <p>块级内容</p>
        </div>
      </nv-loading>
    </div>
  `
};

/**
 * 包裹卡片
 */
export const OnCard: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
      <nv-loading spinner="circular" text="加载中...">
        <div style="padding: 20px; background: #fff; border: 1px solid #e4e7ed; border-radius: 4px; height: 150px;">
          <h3 style="margin: 0 0 12px 0;">circular</h3>
          <p style="margin: 0; color: #606266;">圆形旋转器</p>
        </div>
      </nv-loading>
      <nv-loading spinner="spinner" text="加载中...">
        <div style="padding: 20px; background: #fff; border: 1px solid #e4e7ed; border-radius: 4px; height: 150px;">
          <h3 style="margin: 0 0 12px 0;">spinner</h3>
          <p style="margin: 0; color: #606266;">多点旋转器</p>
        </div>
      </nv-loading>
      <nv-loading spinner="dots" text="加载中...">
        <div style="padding: 20px; background: #fff; border: 1px solid #e4e7ed; border-radius: 4px; height: 150px;">
          <h3 style="margin: 0 0 12px 0;">dots</h3>
          <p style="margin: 0; color: #606266;">点状加载</p>
        </div>
      </nv-loading>
      <nv-loading spinner="bars" text="加载中...">
        <div style="padding: 20px; background: #fff; border: 1px solid #e4e7ed; border-radius: 4px; height: 150px;">
          <h3 style="margin: 0 0 12px 0;">bars</h3>
          <p style="margin: 0; color: #606266;">条形加载</p>
        </div>
      </nv-loading>
    </div>
  `
};

/**
 * 自定义文字
 */
export const CustomText: Story = {
  render: () => html`
    <nv-loading text="拼命加载中...">
      <div style="width: 400px; height: 200px; background: #f5f7fa; padding: 20px;">
        <p>这是一段内容</p>
        <p>这是一段内容</p>
        <p>这是一段内容</p>
      </div>
    </nv-loading>
  `
};

/**
 * 小尺寸内容
 */
export const SmallContent: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <nv-loading spinner="circular">
        <div style="width: 100px; height: 100px; background: #409EFF; border-radius: 4px;"></div>
      </nv-loading>
      <nv-loading spinner="dots">
        <div style="width: 80px; height: 80px; background: #67C23A; border-radius: 50%;"></div>
      </nv-loading>
      <nv-loading spinner="bars">
        <div style="padding: 12px 24px; background: #E6A23C; color: #fff; border-radius: 4px;">
          小内容
        </div>
      </nv-loading>
    </div>
  `
};

/**
 * 控制loading状态
 */
export const ControlLoading: Story = {
  render: () => {
    // 创建一个包装类来管理状态
    class LoadingController {
      private isLoading = true;
      private container: HTMLDivElement;
      
      constructor() {
        this.container = document.createElement('div');
        this.render();
      }
      
      private toggleLoading() {
        this.isLoading = !this.isLoading;
        this.render();
      }
      
      private render() {
        const content = html`
          <div>
            <p style="margin-bottom: 16px; color: #606266;">
              通过 loading 属性控制是否显示loading状态：
            </p>
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <nv-button @click=${ () => this.toggleLoading() }>
                ${ this.isLoading ? '停止加载' : '开始加载' }
              </nv-button>
              <span style="line-height: 32px; color: ${ this.isLoading ? '#409EFF' : '#67C23A' }; font-weight: 500;">
                状态: ${ this.isLoading ? '加载中...' : '已完成' }
              </span>
            </div>
            <nv-loading .loading=${ this.isLoading } spinner="circular" text="加载中...">
              <div 
                style="width: 400px; height: 200px; background: #f5f7fa; padding: 20px; border: 2px solid ${ this.isLoading ? '#409EFF' : '#67C23A' }; border-radius: 4px; transition: border-color 0.3s;"
              >
                <h3 style="margin: 0 0 12px 0;">内容区域</h3>
                <p style="margin: 0; color: #606266;">
                  ${ this.isLoading ? '正在加载数据...' : '数据加载完成！现在可以查看内容了。' }
                </p>
              </div>
            </nv-loading>
          </div>
        `;
        
        import('lit').then(({ render: litRender }) => {
          litRender(content, this.container);
        });
      }
      
      getElement() {
        return this.container;
      }
    }
    
    const controller = new LoadingController();
    return controller.getElement();
  }
};

/**
 * 模拟数据加载
 */
export const SimulateDataLoading: Story = {
  render: () => {
    class DataLoader {
      private isLoading = false;
      private data: string[] = [];
      private container: HTMLDivElement;
      
      constructor() {
        this.container = document.createElement('div');
        this.render();
      }
      
      private async loadData() {
        this.isLoading = true;
        this.render();
        
        // 模拟网络请求
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        this.data = [
          '数据项 1 - 用户信息',
          '数据项 2 - 订单列表',
          '数据项 3 - 统计数据',
          '数据项 4 - 系统配置'
        ];
        
        this.isLoading = false;
        this.render();
      }
      
      private render() {
        const content = html`
          <div>
            <p style="margin-bottom: 16px; color: #606266;">
              模拟真实的数据加载场景：
            </p>
            <nv-button 
              @click=${ () => this.loadData() }
              ?disabled=${ this.isLoading }
              style="margin-bottom: 16px;"
            >
              ${ this.isLoading ? '加载中...' : '加载数据' }
            </nv-button>
            
            <nv-loading .loading=${ this.isLoading } spinner="circular" text="正在加载数据...">
              <div style="width: 400px; min-height: 200px; background: #fff; padding: 20px; border: 1px solid #e4e7ed; border-radius: 4px;">
                <h3 style="margin: 0 0 16px 0;">数据列表</h3>
                ${ 
                  this.data.length > 0
                    ? html`
                      <ul style="margin: 0; padding-left: 20px; list-style: disc;">
                        ${ this.data.map(item => html`
                          <li style="margin-bottom: 8px; color: #606266;">${ item }</li>
                        `) }
                      </ul>
                    `
                    : html`
                      <p style="margin: 0; color: #909399; text-align: center;">
                        暂无数据，点击上方按钮加载
                      </p>
                    `
                }
              </div>
            </nv-loading>
          </div>
        `;
        
        import('lit').then(({ render: litRender }) => {
          litRender(content, this.container);
        });
      }
      
      getElement() {
        return this.container;
      }
    }
    
    const loader = new DataLoader();
    return loader.getElement();
  }
};

/**
 * 自定义颜色
 */
export const CustomColor: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">
        通过 spinner-color 和 text-color 属性自定义loading的颜色：
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <nv-loading 
          spinner="circular" 
          text="绿色主题"
          spinner-color="#67C23A"
          text-color="#67C23A"
        >
          <div style="height: 150px; background: #f0f9ff; padding: 20px; border: 1px solid #67C23A; border-radius: 4px;">
            <h3 style="margin: 0; color: #67C23A;">成功状态</h3>
          </div>
        </nv-loading>

        <nv-loading 
          spinner="spinner" 
          text="橙色主题"
          spinner-color="#E6A23C"
          text-color="#E6A23C"
        >
          <div style="height: 150px; background: #fdf6ec; padding: 20px; border: 1px solid #E6A23C; border-radius: 4px;">
            <h3 style="margin: 0; color: #E6A23C;">警告状态</h3>
          </div>
        </nv-loading>

        <nv-loading 
          spinner="dots" 
          text="红色主题"
          spinner-color="#F56C6C"
          text-color="#F56C6C"
        >
          <div style="height: 150px; background: #fef0f0; padding: 20px; border: 1px solid #F56C6C; border-radius: 4px;">
            <h3 style="margin: 0; color: #F56C6C;">错误状态</h3>
          </div>
        </nv-loading>

        <nv-loading 
          spinner="bars" 
          text="灰色主题"
          spinner-color="#909399"
          text-color="#909399"
        >
          <div style="height: 150px; background: #f4f4f5; padding: 20px; border: 1px solid #909399; border-radius: 4px;">
            <h3 style="margin: 0; color: #909399;">信息状态</h3>
          </div>
        </nv-loading>
      </div>
    </div>
  `
};

/**
 * 不同主题色示例
 */
export const ThemeColors: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">
        展示不同主题色在各种spinner类型上的效果：
      </p>
      
      <h4 style="margin: 20px 0 12px 0; color: #303133;">成功主题（绿色）</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <nv-loading spinner="circular" text="circular" spinner-color="#67C23A" text-color="#67C23A">
          <div style="width: 150px; height: 120px; background: #f0f9ff; border: 1px solid #67C23A; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" text="spinner" spinner-color="#67C23A" text-color="#67C23A">
          <div style="width: 150px; height: 120px; background: #f0f9ff; border: 1px solid #67C23A; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" text="dots" spinner-color="#67C23A" text-color="#67C23A">
          <div style="width: 150px; height: 120px; background: #f0f9ff; border: 1px solid #67C23A; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" text="bars" spinner-color="#67C23A" text-color="#67C23A">
          <div style="width: 150px; height: 120px; background: #f0f9ff; border: 1px solid #67C23A; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 20px 0 12px 0; color: #303133;">警告主题（橙色）</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <nv-loading spinner="circular" text="circular" spinner-color="#E6A23C" text-color="#E6A23C">
          <div style="width: 150px; height: 120px; background: #fdf6ec; border: 1px solid #E6A23C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" text="spinner" spinner-color="#E6A23C" text-color="#E6A23C">
          <div style="width: 150px; height: 120px; background: #fdf6ec; border: 1px solid #E6A23C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" text="dots" spinner-color="#E6A23C" text-color="#E6A23C">
          <div style="width: 150px; height: 120px; background: #fdf6ec; border: 1px solid #E6A23C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" text="bars" spinner-color="#E6A23C" text-color="#E6A23C">
          <div style="width: 150px; height: 120px; background: #fdf6ec; border: 1px solid #E6A23C; border-radius: 4px;"></div>
        </nv-loading>
      </div>

      <h4 style="margin: 20px 0 12px 0; color: #303133;">危险主题（红色）</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <nv-loading spinner="circular" text="circular" spinner-color="#F56C6C" text-color="#F56C6C">
          <div style="width: 150px; height: 120px; background: #fef0f0; border: 1px solid #F56C6C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="spinner" text="spinner" spinner-color="#F56C6C" text-color="#F56C6C">
          <div style="width: 150px; height: 120px; background: #fef0f0; border: 1px solid #F56C6C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="dots" text="dots" spinner-color="#F56C6C" text-color="#F56C6C">
          <div style="width: 150px; height: 120px; background: #fef0f0; border: 1px solid #F56C6C; border-radius: 4px;"></div>
        </nv-loading>
        <nv-loading spinner="bars" text="bars" spinner-color="#F56C6C" text-color="#F56C6C">
          <div style="width: 150px; height: 120px; background: #fef0f0; border: 1px solid #F56C6C; border-radius: 4px;"></div>
        </nv-loading>
      </div>
    </div>
  `
};
