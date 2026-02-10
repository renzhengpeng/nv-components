import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import { message } from './message';
import '../button/index';
import '../divider/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Message',
  component: 'nv-message', 
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'info', 'error'],
      description: '消息类型'
    },
    message: {
      control: 'text',
      description: '消息内容'
    },
    duration: {
      control: 'number',
      description: '显示时间，毫秒。设为 0 则不会自动关闭'
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮'
    },
    showIcon: {
      control: 'boolean',
      description: '是否显示图标'
    },
    center: {
      control: 'boolean',
      description: '是否居中'
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
        <!-- 不同类型 -->
        <div class="example-item">
          <h3 class="example-title">不同类型</h3>
          <p class="example-desc">提供成功、信息、警告、错误四种类型</p>
          <div class="example-demo">
            ${ Types.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带图标 -->
        <div class="example-item">
          <h3 class="example-title">带图标</h3>
          <p class="example-desc">设置 showIcon 属性可以显示图标</p>
          <div class="example-demo">
            ${ WithIcon.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可关闭 -->
        <div class="example-item">
          <h3 class="example-title">可关闭</h3>
          <p class="example-desc">设置 closable 属性可以手动关闭消息</p>
          <div class="example-demo">
            ${ Closable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 自定义显示时长 -->
        <div class="example-item">
          <h3 class="example-title">自定义显示时长</h3>
          <p class="example-desc">通过 duration 属性设置显示时长</p>
          <div class="example-demo">
            ${ Duration.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 消息堆叠 -->
        <div class="example-item">
          <h3 class="example-title">消息堆叠</h3>
          <p class="example-desc">多条消息会自动堆叠显示</p>
          <div class="example-demo">
            ${ Stack.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带回调函数 -->
        <div class="example-item">
          <h3 class="example-title">带回调函数</h3>
          <p class="example-desc">可以设置关闭时的回调函数</p>
          <div class="example-demo">
            ${ WithCallback.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 简洁调用 -->
        <div class="example-item">
          <h3 class="example-title">简洁调用</h3>
          <p class="example-desc">可以直接传入字符串作为消息内容</p>
          <div class="example-demo">
            ${ SimpleUsage.render?.({} as any, {} as any) }
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

/**
 * 基础用法：使用全局API调用
 */
export const Default: Story = {
  render: (args) => html`
    <div>
      <nv-button
        @click=${ () => {
          const method = message[args.type as 'success' | 'warning' | 'info' | 'error'];
          method({
            message: args.message,
            duration: args.duration,
            closable: args.closable,
            showIcon: args.showIcon,
            center: args.center
          });
        } }
      >
        显示消息
      </nv-button>
    </div>
  `,
  args: {
    type: 'info',
    message: '这是一条消息提示',
    duration: 3000,
    closable: false,
    showIcon: true,
    center: false
  }
};

/**
 * 不同类型的消息
 */
export const Types: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button @click=${ () => message.success('这是一条成功消息') }>
        成功
      </nv-button>
      <nv-button @click=${ () => message.info('这是一条信息消息') }>
        信息
      </nv-button>
      <nv-button @click=${ () => message.warning('这是一条警告消息') }>
        警告
      </nv-button>
      <nv-button @click=${ () => message.error('这是一条错误消息') }>
        错误
      </nv-button>
    </div>
  `
};

/**
 * 带图标的消息
 */
export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click=${ () => message.success({ message: '操作成功！', showIcon: true }) }
      >
        成功（带图标）
      </nv-button>
      <nv-button
        @click=${ () => message.info({ message: '这是一条提示信息', showIcon: true }) }
      >
        信息（带图标）
      </nv-button>
      <nv-button
        @click=${ () => message.warning({ message: '请注意！', showIcon: true }) }
      >
        警告（带图标）
      </nv-button>
      <nv-button
        @click=${ () => message.error({ message: '操作失败！', showIcon: true }) }
      >
        错误（带图标）
      </nv-button>
    </div>
  `
};

/**
 * 可关闭的消息
 */
export const Closable: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click=${ () => message.info({ 
          message: '这是一条可手动关闭的消息', 
          closable: true 
        }) }
      >
        可关闭
      </nv-button>
      <nv-button
        @click=${ () => message.info({ 
          message: '这条消息不会自动关闭，请手动关闭', 
          closable: true, 
          showIcon: true, 
          duration: 0 
        }) }
      >
        可关闭（不自动关闭）
      </nv-button>
    </div>
  `
};

/**
 * 自定义显示时长
 */
export const Duration: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click=${ () => message.info({ message: '1秒后关闭', duration: 1000 }) }
      >
        1秒关闭
      </nv-button>
      <nv-button
        @click=${ () => message.info({ message: '3秒后关闭', duration: 3000 }) }
      >
        3秒关闭
      </nv-button>
      <nv-button
        @click=${ () => message.info({ message: '5秒后关闭', duration: 5000 }) }
      >
        5秒关闭
      </nv-button>
      <nv-button
        @click=${ () => message.info({ 
          message: '不会自动关闭（duration: 0）', 
          duration: 0,
          closable: true 
        }) }
      >
        不自动关闭
      </nv-button>
    </div>
  `
};

/**
 * 消息堆叠显示
 */
export const Stack: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click=${ () => {
          message.success({ message: '成功消息 1', showIcon: true });
          message.info({ message: '信息消息 2', showIcon: true });
          message.warning({ message: '警告消息 3', showIcon: true });
        } }
      >
        显示多条消息
      </nv-button>
      <nv-button
        @click=${ () => {
          for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
              message.info({ 
                message: `消息 ${ i }`,
                showIcon: true
              });
            }, (i - 1) * 200);
          }
        } }
      >
        连续显示5条
      </nv-button>
      <nv-button
        @click=${ () => message.closeAll() }
        type="danger"
      >
        关闭所有消息
      </nv-button>
    </div>
  `
};

/**
 * 带回调函数
 */
export const WithCallback: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <nv-button
        @click=${ () => {
          message.success({
            message: '保存成功，3秒后关闭',
            showIcon: true,
            duration: 3000,
            onClose: () => {
              console.log('消息已关闭');
              message.info('消息已关闭（查看控制台）');
            }
          });
        } }
      >
        带关闭回调
      </nv-button>
    </div>
  `
};

/**
 * 简洁调用方式
 */
export const SimpleUsage: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">
        可以直接传入字符串作为消息内容：
      </p>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <nv-button @click=${ () => message('这是一条普通消息') }>
          普通消息
        </nv-button>
        <nv-button @click=${ () => message.success('操作成功！') }>
          成功
        </nv-button>
        <nv-button @click=${ () => message.warning('请注意！') }>
          警告
        </nv-button>
        <nv-button @click=${ () => message.error('出错了！') }>
          错误
        </nv-button>
      </div>
    </div>
  `
};
