import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../button/index';
import '../divider/index';
import { Notification } from './notification';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Notification',
  component: 'nv-notification',
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'error'],
      description: '通知类型'
    },
    label: {
      control: 'text',
      description: '标题'
    },
    message: {
      control: 'text',
      description: '消息内容'
    },
    duration: {
      control: 'number',
      description: '显示时间，毫秒。设为 0 则不会自动关闭'
    },
    showClose: {
      control: 'boolean',
      description: '是否显示关闭按钮'
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标'
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
          <h3 class="example-title">不同类型</h3>
          <p class="example-desc">提供成功、信息、警告、错误四种类型</p>
          <div class="example-demo">
            ${ Types.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">带图标</h3>
          <p class="example-desc">设置 showIcon 属性可以显示图标</p>
          <div class="example-demo">
            ${ WithIcon.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">无标题</h3>
          <p class="example-desc">可以不设置标题</p>
          <div class="example-demo">
            ${ WithoutTitle.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义显示时长</h3>
          <p class="example-desc">通过 duration 属性设置显示时长</p>
          <div class="example-demo">
            ${ Duration.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">完整示例</h3>
          <p class="example-desc">展示所有功能的综合示例</p>
          <div class="example-demo">
            ${ Complex.render?.({} as any, {} as any) }
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
    <div>
      <nv-button
        @click="${ () => {
          Notification({
            type: args.type,
            title: args.title,
            message: args.message,
            duration: args.duration,
            closable: args.showClose,
            showIcon: args.showIcon
          });
        } }"
      >
        显示通知
      </nv-button>
    </div>
  `,
  args: {
    type: 'info',
    label: '通知标题',
    message: '这是一条通知消息',
    duration: 4500,
    showClose: true,
    showIcon: false
  }
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click="${ () => Notification.success({ title: '成功', message: '这是一条成功通知' }) }"
      >
        成功
      </nv-button>
      <nv-button
        @click="${ () => Notification.info({ title: '信息', message: '这是一条信息通知' }) }"
      >
        信息
      </nv-button>
      <nv-button
        @click="${ () => Notification.warning({ title: '警告', message: '这是一条警告通知' }) }"
      >
        警告
      </nv-button>
      <nv-button
        @click="${ () => Notification.error({ title: '错误', message: '这是一条错误通知' }) }"
      >
        错误
      </nv-button>
    </div>
  `
};

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click="${ () => Notification({ type: 'success', title: '成功', message: '这是一条成功通知', showIcon: true }) }"
      >
        成功（带图标）
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'info', title: '信息', message: '这是一条信息通知', showIcon: true }) }"
      >
        信息（带图标）
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'warning', title: '警告', message: '这是一条警告通知', showIcon: true }) }"
      >
        警告（带图标）
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'error', title: '错误', message: '这是一条错误通知', showIcon: true }) }"
      >
        错误（带图标）
      </nv-button>
    </div>
  `
};

export const WithoutTitle: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click="${ () => Notification({ type: 'info', message: '这是一条没有标题的通知' }) }"
      >
        无标题
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'info', message: '这是一条没有标题的通知（带图标）', showIcon: true }) }"
      >
        无标题（带图标）
      </nv-button>
    </div>
  `
};

export const Duration: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click="${ () => Notification({ type: 'info', title: '通知', message: '3秒后关闭', duration: 3000 }) }"
      >
        3秒关闭
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'info', title: '通知', message: '5秒后关闭', duration: 5000 }) }"
      >
        5秒关闭
      </nv-button>
      <nv-button
        @click="${ () => Notification({ type: 'info', title: '通知', message: '不会自动关闭', duration: 0 }) }"
      >
        不自动关闭
      </nv-button>
    </div>
  `
};

export const Complex: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click="${ () => Notification({
          type: 'success',
          title: '成功',
          message: '这是一条成功通知，包含详细的信息内容',
          showIcon: true,
          closable: true,
          duration: 4500
        }) }"
      >
        完整示例
      </nv-button>
    </div>
  `
};
