import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'nv-skeleton', 
  argTypes: {
    animated: {
      control: 'boolean',
      description: '是否显示动画效果'
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载完成后的内容'
    },
    rows: {
      control: 'number',
      description: '渲染骨架屏的行数'
    },
    title: {
      control: 'boolean',
      description: '是否显示标题'
    },
    avatar: {
      control: 'boolean',
      description: '是否显示头像'
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
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <div class="examples-section">
        <div class="example-item">
          <h3 class="example-title">Basic</h3>
          <p class="example-desc">Basic 示例</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Avatar</h3>
          <p class="example-desc">With Avatar 示例</p>
          <div class="example-demo">
            ${ WithAvatar.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Multiple Rows</h3>
          <p class="example-desc">Multiple Rows 示例</p>
          <div class="example-demo">
            ${ MultipleRows.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Animated</h3>
          <p class="example-desc">Animated 示例</p>
          <div class="example-demo">
            ${ Animated.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Custom</h3>
          <p class="example-desc">Custom 示例</p>
          <div class="example-demo">
            ${ Custom.render?.({} as any, {} as any) }
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
    <nv-skeleton
      ?animated="${ args.animated }"
      ?loading="${ args.loading }"
      rows="${ args.rows }"
      ?title="${ args.title }"
      ?avatar="${ args.avatar }"
    >
      <div>加载完成后的内容</div>
    </nv-skeleton>
  `,
  args: {
    animated: false,
    loading: true,
    rows: 1,
    title: true,
    avatar: false
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-skeleton></nv-skeleton>
  `
};

export const WithAvatar: Story = {
  render: () => html`
    <nv-skeleton avatar avatarSize="large" avatarShape="circle"></nv-skeleton>
  `
};

export const MultipleRows: Story = {
  render: () => html`
    <nv-skeleton rows="3"></nv-skeleton>
  `
};

export const Animated: Story = {
  render: () => html`
    <nv-skeleton animated rows="3"></nv-skeleton>
  `
};

export const Custom: Story = {
  render: () => html`
    <nv-skeleton
      animated
      avatar
      avatarSize="medium"
      avatarShape="circle"
      rows="4"
      width="100%"
    ></nv-skeleton>
  `
};

