import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Link',
  component: 'nv-link', 
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'info', 'warning', 'error'],
      description: '链接类型'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      description: '下划线样式'
    },
    href: {
      control: 'text',
      description: '链接地址'
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: '链接打开方式'
    },
    icon: {
      control: 'text',
      description: '图标名称'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '链接尺寸'
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
      <h3>不同类型</h3>
      <p>Link 组件提供了不同的类型</p>
      ${ Types.render?.(Types.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>下划线</h3>
      <p>可以控制链接下划线的显示</p>
      ${ Underline.render?.(Underline.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>禁用状态</h3>
      <p>链接的禁用状态</p>
      ${ Disabled.render?.(Disabled.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>带图标</h3>
      <p>链接可以添加图标</p>
      ${ WithIcon.render?.(WithIcon.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同尺寸</h3>
      <p>Link 组件提供了不同的尺寸</p>
      ${ Sizes.render?.(Sizes.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-link
      type="${ args.type }"
      ?disabled="${ args.disabled }"
      underline="${ args.underline }"
      href="${ args.href }"
      target="${ args.target }"
      icon="${ args.icon }"
      size="${ args.size }"
    >
      ${ args.children || '链接' }
    </nv-link>
  `,
  args: {
    type: 'primary',
    disabled: false,
    underline: 'hover',
    href: '',
    target: '_self',
    icon: '',
    size: 'medium',
    children: '链接'
  }
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <nv-link type="primary">主要链接</nv-link>
      <nv-link type="success">成功链接</nv-link>
      <nv-link type="info">信息链接</nv-link>
      <nv-link type="warning">警告链接</nv-link>
      <nv-link type="error">危险链接</nv-link>
    </div>
  `
};

export const Underline: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-link underline="always">总是显示下划线</nv-link>
      <nv-link underline="hover">悬停时显示下划线</nv-link>
      <nv-link underline="none">不显示下划线</nv-link>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-link disabled>禁用链接</nv-link>
  `
};

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <nv-link icon="s-home">首页</nv-link>
      <nv-link icon="user">用户</nv-link>
      <nv-link icon="setting">设置</nv-link>
    </div>
  `
};

export const ExternalLink: Story = {
  render: () => html`
    <nv-link href="https://www.example.com" target="_blank" icon="link">
      外部链接
    </nv-link>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <span style="width: 80px; color: #666;">迷你:</span>
        <nv-link type="primary" size="mini">迷你链接</nv-link>
        <nv-link type="success" size="mini" icon="check">迷你链接</nv-link>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <span style="width: 80px; color: #666;">小型:</span>
        <nv-link type="primary" size="small">小型链接</nv-link>
        <nv-link type="success" size="small" icon="check">小型链接</nv-link>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <span style="width: 80px; color: #666;">中等:</span>
        <nv-link type="primary" size="medium">中等链接</nv-link>
        <nv-link type="success" size="medium" icon="check">中等链接</nv-link>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <span style="width: 80px; color: #666;">大型:</span>
        <nv-link type="primary" size="large">大型链接</nv-link>
        <nv-link type="success" size="large" icon="check">大型链接</nv-link>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <span style="width: 80px; color: #666;">巨大:</span>
        <nv-link type="primary" size="huge">巨大链接</nv-link>
        <nv-link type="success" size="huge" icon="check">巨大链接</nv-link>
      </div>
    </div>
  `
};
