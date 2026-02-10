import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Divider',
  component: 'nv-divider', 
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '设置分割线的方向'
    },
    contentPosition: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: '设置分割线文案的位置'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  parameters: {
    docs: { disable: true },
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => {
    return html`
    <div style="padding: 20px; max-width: 1200px;">
      <!-- README 文档 -->
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <!-- 分隔线 -->
      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <!-- 示例区域 -->
      <div class="examples-section">
        <!-- 水平分割线 -->
        <div class="example-item">
          <h3 class="example-title">水平分割线</h3>
          <p class="example-desc">默认为水平分割线</p>
          <div class="example-demo">
            ${ Horizontal.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 垂直分割线 -->
        <div class="example-item">
          <h3 class="example-title">垂直分割线</h3>
          <p class="example-desc">设置 direction="vertical" 可以使用垂直分割线</p>
          <div class="example-demo">
            ${ Vertical.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带文字的分割线 -->
        <div class="example-item">
          <h3 class="example-title">带文字的分割线</h3>
          <p class="example-desc">可以在分割线上显示文字，并设置文字位置</p>
          <div class="example-demo">
            ${ WithText.render?.({} as any, {} as any) }
          </div>
        </div>
      </div>

      <style>
        .readme-content h1 {
          margin-top: 0;
          font-size: 28px;
          font-weight: 600;
          color: #303133;
          padding-bottom: 16px;
          border-bottom: 2px solid #e4e7ed;
        }
        .readme-content h2 {
          color: #303133;
          font-size: 20px;
          font-weight: 600;
          margin: 30px 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #e4e7ed;
        }
        .readme-content h3 {
          color: #303133;
          font-size: 18px;
          font-weight: 600;
          margin: 24px 0 12px 0;
        }
        .readme-content p {
          color: #606266;
          line-height: 1.8;
          font-size: 15px;
          margin: 12px 0;
        }
        .readme-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        .readme-content table thead {
          background: #f5f7fa;
        }
        .readme-content table th {
          padding: 12px;
          text-align: left;
          border-bottom: 2px solid #e4e7ed;
          color: #303133;
          font-weight: 600;
        }
        .readme-content table td {
          padding: 12px;
          border-bottom: 1px solid #e4e7ed;
          color: #606266;
        }
        .readme-content table tbody tr:last-child td {
          border-bottom: none;
        }
        .readme-content code {
          background: #f5f7fa;
          padding: 2px 6px;
          border-radius: 3px;
          color: #e96900;
          font-size: 13px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
        }
        
        /* 示例区域样式 */
        .examples-section {
          background: #fff;
          border-radius: 4px;
          padding: 30px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .example-item {
          margin: 30px 0;
        }

        .example-item:first-child {
          margin-top: 0;
        }

        .example-item:last-child {
          margin-bottom: 0;
        }

        .example-title {
          font-size: 20px;
          font-weight: 600;
          color: #303133;
          margin: 0 0 8px 0;
        }

        .example-desc {
          font-size: 14px;
          color: #909399;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .example-demo {
          padding: 24px;
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-radius: 4px;
        }
      </style>
    </div>
  `;
  }
};

export const Default: Story = {
  render: (args) => html`
    <div>
      <span>文字</span>
      <nv-divider direction="${ args.direction }" contentPosition="${ args.contentPosition }"></nv-divider>
      <span>文字</span>
    </div>
  `,
  args: {
    direction: 'horizontal',
    contentPosition: 'center'
  }
};

export const Horizontal: Story = {
  render: () => html`
    <div>
      <p>这是一段文字</p>
      <nv-divider></nv-divider>
      <p>这是另一段文字</p>
    </div>
  `
};

export const Vertical: Story = {
  render: () => html`
    <div>
      <span>文字</span>
      <nv-divider direction="vertical"></nv-divider>
      <span>文字</span>
      <nv-divider direction="vertical"></nv-divider>
      <span>文字</span>
    </div>
  `
};

export const WithText: Story = {
  render: () => html`
    <div>
      <p>这是一段文字</p>
      <nv-divider contentPosition="left">左侧文字</nv-divider>
      <p>这是另一段文字</p>
      <nv-divider contentPosition="center">中间文字</nv-divider>
      <p>这是第三段文字</p>
      <nv-divider contentPosition="right">右侧文字</nv-divider>
      <p>这是第四段文字</p>
    </div>
  `
};

