import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'nv-alert',
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'error'],
      description: '主题'
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭'
    },
    center: {
      control: 'boolean',
      description: '文字是否居中'
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标'
    },
    label: {
      control: 'text',
      description: '标题'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '警告框尺寸'
    }
  }
};

export default meta;
type Story = StoryObj;

// 将 README 转换为 HTML
const readmeHtml = marked.parse(readmeMd) as string;

/**
 * Alert 组件的完整文档和示例展示
 */
export const Overview: Story = {
  render: () => {
    return html`
      <style>
        .readme-container {
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .readme-container h1 {
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 16px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #eaecef;
        }
        .readme-container h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 32px 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #eaecef;
        }
        .readme-container h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 24px 0 12px 0;
        }
        .readme-container p {
          margin: 8px 0;
        }
        .readme-container code {
          background: #f6f8fa;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 0.9em;
        }
        .readme-container pre {
          background: #f6f8fa;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
        }
        .readme-container pre code {
          background: none;
          padding: 0;
        }
        .readme-container table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }
        .readme-container table th,
        .readme-container table td {
          border: 1px solid #dfe2e5;
          padding: 8px 12px;
          text-align: left;
        }
        .readme-container table th {
          background: #f6f8fa;
          font-weight: 600;
        }
        .readme-container table tr:nth-child(even) {
          background: #f9f9f9;
        }
        .story-section {
          margin: 32px 0;
        }
        .story-section h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: #333;
        }
        .story-section p {
          margin: 0 0 12px 0;
          color: #666;
        }
      </style>

      <div class="readme-container">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>不同类型</h3>
        <p>Alert 组件提供四种主题类型。</p>
        ${ Types.render?.(Types.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>带图标</h3>
        <p>通过 show-icon 属性显示图标，增强警告的可读性。</p>
        ${ WithIcon.render?.(WithIcon.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>可关闭</h3>
        <p>使用 closable 属性让警告可以被关闭。</p>
        ${ Closable.render?.(Closable.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>带标题</h3>
        <p>使用 title 属性来为警告添加标题。</p>
        ${ WithTitle.render?.(WithTitle.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>文字居中</h3>
        <p>使用 center 属性让文字水平居中。</p>
        ${ Center.render?.(Center.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>带标题和图标</h3>
        <p>同时使用标题、图标和关闭按钮。</p>
        ${ WithTitleAndIcon.render?.(WithTitleAndIcon.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>不同尺寸</h3>
        <p>提供五种不同尺寸的警告框。</p>
        ${ Sizes.render?.(Sizes.args as any, {} as any) }
      </div>
    `;
  }
};

export const Default: Story = {
  render: (args) => html`
    <nv-alert
      type="${ args.type }"
      ?closable="${ args.closable }"
      ?center="${ args.center }"
      ?show-icon="${ args.showIcon }"
      label="${ args.title }"
      size="${ args.size }"
    >
      ${ args.children || '这是一条提示信息' }
    </nv-alert>
  `,
  args: {
    type: 'info',
    closable: false,
    center: false,
    showIcon: false,
    label: '',
    size: 'medium',
    children: '这是一条提示信息'
  }
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="success">成功提示的文案</nv-alert>
      <nv-alert type="info">消息提示的文案</nv-alert>
      <nv-alert type="warning">警告提示的文案</nv-alert>
      <nv-alert type="error">错误提示的文案</nv-alert>
    </div>
  `
};

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="success" show-icon>成功提示的文案</nv-alert>
      <nv-alert type="info" show-icon>消息提示的文案</nv-alert>
      <nv-alert type="warning" show-icon>警告提示的文案</nv-alert>
      <nv-alert type="error" show-icon>错误提示的文案</nv-alert>
    </div>
  `
};

export const Closable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="info" closable>这是一条可关闭的提示</nv-alert>
      <nv-alert type="success" closable show-icon>这是一条可关闭的提示</nv-alert>
    </div>
  `
};

export const WithTitle: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="success" label="成功提示的标题">
        成功提示的文案
      </nv-alert>
      <nv-alert type="info" label="消息提示的标题">
        消息提示的文案
      </nv-alert>
      <nv-alert type="warning" label="警告提示的标题">
        警告提示的文案
      </nv-alert>
      <nv-alert type="error" label="错误提示的标题">
        错误提示的文案
      </nv-alert>
    </div>
  `
};

export const Center: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="info" center>文字居中</nv-alert>
      <nv-alert type="success" center show-icon>文字居中</nv-alert>
    </div>
  `
};

export const WithTitleAndIcon: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-alert type="success" label="成功提示的标题" show-icon closable>
        成功提示的文案
      </nv-alert>
      <nv-alert type="info" label="消息提示的标题" show-icon closable>
        消息提示的文案
      </nv-alert>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">不同尺寸的警告框</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <nv-alert type="info" size="mini">迷你尺寸的提示信息</nv-alert>
          <nv-alert type="info" size="small">小型尺寸的提示信息</nv-alert>
          <nv-alert type="info" size="medium">中等尺寸的提示信息</nv-alert>
          <nv-alert type="info" size="large">大型尺寸的提示信息</nv-alert>
          <nv-alert type="info" size="huge">巨大尺寸的提示信息</nv-alert>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">带图标的警告框 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <nv-alert type="success" show-icon size="mini">迷你尺寸的成功提示</nv-alert>
          <nv-alert type="success" show-icon size="small">小型尺寸的成功提示</nv-alert>
          <nv-alert type="success" show-icon size="medium">中等尺寸的成功提示</nv-alert>
          <nv-alert type="success" show-icon size="large">大型尺寸的成功提示</nv-alert>
          <nv-alert type="success" show-icon size="huge">巨大尺寸的成功提示</nv-alert>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">带标题的警告框 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <nv-alert type="warning" label="警告标题" size="mini">迷你尺寸的警告信息</nv-alert>
          <nv-alert type="warning" label="警告标题" size="small">小型尺寸的警告信息</nv-alert>
          <nv-alert type="warning" label="警告标题" size="medium">中等尺寸的警告信息</nv-alert>
          <nv-alert type="warning" label="警告标题" size="large">大型尺寸的警告信息</nv-alert>
          <nv-alert type="warning" label="警告标题" size="huge">巨大尺寸的警告信息</nv-alert>
        </div>
      </div>
    </div>
  `
};
