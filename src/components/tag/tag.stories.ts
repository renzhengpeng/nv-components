import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Tag',
  component: 'nv-tag', 
  argTypes: {
    type: {
      control: 'select',
      options: ['', 'success', 'info', 'warning', 'error'],
      description: '标签类型'
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭'
    },
    hit: {
      control: 'boolean',
      description: '是否有边框描边'
    },
    color: {
      control: 'color',
      description: '背景色'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '标签尺寸'
    }
  }
};

export default meta;
type Story = StoryObj;

const readmeHtml = marked.parse(readmeMd) as string;
const commonStyles = `
  .readme-container { padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; line-height: 1.6; color: #333; }
  .readme-container h1 { font-size: 32px; font-weight: 600; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 1px solid #eaecef; }
  .readme-container h2 { font-size: 24px; font-weight: 600; margin: 32px 0 16px 0; padding-bottom: 8px; border-bottom: 1px solid #eaecef; }
  .readme-container table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  .readme-container table th, .readme-container table td { border: 1px solid #dfe2e5; padding: 8px 12px; text-align: left; }
  .readme-container table th { background: #f6f8fa; font-weight: 600; }
  .story-section { margin: 32px 0; }
  .story-section h3 { font-size: 20px; font-weight: 600; margin: 0 0 16px 0; color: #333; }
  .story-section p { margin: 0 0 12px 0; color: #666; }
`;

export const Overview: Story = {
  render: () => html`
    <style>${ commonStyles }</style>
    <div class="readme-container">${ unsafeHTML(readmeHtml) }</div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>基础用法</h3>
      <p>基础的标签用法</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同类型</h3>
      <p>Tag 组件提供了不同的类型</p>
      ${ Types.render?.(Types.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>可关闭标签</h3>
      <p>设置 closable 属性可以定义一个标签是否可移除</p>
      ${ Closable.render?.(Closable.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同尺寸</h3>
      <p>Tag 组件提供了不同的尺寸</p>
      ${ Sizes.render?.(Sizes.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义颜色</h3>
      <p>可以自定义标签的背景颜色</p>
      ${ CustomColor.render?.(CustomColor.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-tag
      type="${ args.type }"
      ?closable="${ args.closable }"
      ?hit="${ args.hit }"
      color="${ args.color }"
      size="${ args.size }"
    >
      ${ args.children || '标签' }
    </nv-tag>
  `,
  args: {
    type: '',
    closable: false,
    hit: false,
    color: '',
    size: 'medium',
    children: '标签'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-tag>标签一</nv-tag>
      <nv-tag>标签二</nv-tag>
      <nv-tag>标签三</nv-tag>
      <nv-tag>标签四</nv-tag>
    </div>
  `
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-tag type="success">成功标签</nv-tag>
      <nv-tag type="info">信息标签</nv-tag>
      <nv-tag type="warning">警告标签</nv-tag>
      <nv-tag type="error">危险标签</nv-tag>
    </div>
  `
};

export const Closable: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-tag closable>可关闭标签</nv-tag>
      <nv-tag type="success" closable>可关闭标签</nv-tag>
      <nv-tag type="info" closable>可关闭标签</nv-tag>
      <nv-tag type="warning" closable>可关闭标签</nv-tag>
      <nv-tag type="error" closable>可关闭标签</nv-tag>
    </div>
  `
};

export const WithBorder: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-tag hit>有边框</nv-tag>
      <nv-tag type="success" hit>有边框</nv-tag>
      <nv-tag type="info" hit>有边框</nv-tag>
      <nv-tag type="warning" hit>有边框</nv-tag>
      <nv-tag type="error" hit>有边框</nv-tag>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
      <nv-tag size="mini">迷你标签</nv-tag>
      <nv-tag size="small">小型标签</nv-tag>
      <nv-tag size="medium">中等标签</nv-tag>
      <nv-tag size="large">大型标签</nv-tag>
      <nv-tag size="huge">巨大标签</nv-tag>
    </div>
  `
};

export const CustomColor: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-tag color="#409eff">自定义颜色</nv-tag>
      <nv-tag color="#67c23a">自定义颜色</nv-tag>
      <nv-tag color="#e6a23c">自定义颜色</nv-tag>
      <nv-tag color="#f56c6c">自定义颜色</nv-tag>
    </div>
  `
};
