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
  title: 'Components/BackTop',
  component: 'nv-back-top',
  argTypes: {
    visibilityHeight: {
      control: 'number',
      description: '触发显示回到顶部按钮的滚动高度'
    },
    right: {
      control: 'text',
      description: '回到顶部按钮距离页面右侧的位置'
    },
    bottom: {
      control: 'text',
      description: '回到顶部按钮距离页面底部的位置'
    },
    icon: {
      control: 'text',
      description: '图标名称'
    },
    target: {
      control: 'text',
      description: '滚动容器的选择器，如果不设置则监听 window'
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
          <h3 class="example-title">基础用法</h3>
          <p class="example-desc">向下滚动页面，当滚动高度超过设定值时，会显示回到顶部按钮</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义位置</h3>
          <p class="example-desc">通过 right 和 bottom 属性自定义按钮的位置</p>
          <div class="example-demo">
            ${ CustomPosition.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义图标</h3>
          <p class="example-desc">通过 icon 属性自定义按钮的图标</p>
          <div class="example-demo">
            ${ CustomIcon.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义触发高度</h3>
          <p class="example-desc">通过 visibility-height 属性设置触发显示按钮的滚动高度</p>
          <div class="example-demo">
            ${ CustomVisibilityHeight.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">指定滚动容器</h3>
          <p class="example-desc">通过 target 属性指定滚动容器的选择器</p>
          <div class="example-demo">
            ${ CustomTarget.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>
          <p class="example-desc">通过默认插槽自定义按钮内容</p>
          <div class="example-demo">
            ${ CustomContent.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">组合使用</h3>
          <p class="example-desc">组合使用多个属性，实现个性化的回到顶部按钮</p>
          <div class="example-demo">
            ${ Combinations.render?.({} as any, {} as any) }
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
    <div style="height: 2000px; padding: 20px;">
      <p>向下滚动页面，当滚动高度超过 ${ args.visibilityHeight }px 时，会显示回到顶部按钮</p>
      <nv-back-top
        visibilityHeight="${ args.visibilityHeight }"
        right="${ args.right }"
        bottom="${ args.bottom }"
      ></nv-back-top>
    </div>
  `,
  args: {
    visibilityHeight: 400,
    right: '40px',
    bottom: '40px'
  }
};


/**
 * 基础用法
 */
export const Basic: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8;">向下滚动页面，当滚动高度超过 400px 时，会显示回到顶部按钮</p>
      <nv-back-top></nv-back-top>
    </div>
  `
};

/**
 * 自定义位置
 */
export const CustomPosition: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8;">自定义位置的回到顶部按钮（距离右侧和底部各 80px）</p>
      <nv-back-top right="80px" bottom="80px"></nv-back-top>
    </div>
  `
};

/**
 * 自定义图标
 */
export const CustomIcon: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8; margin-bottom: 16px;">使用不同的图标：</p>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">向上箭头 (caret-top):</p>
          <nv-back-top icon="caret-top" right="40px" bottom="120px"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">顶部 (top):</p>
          <nv-back-top icon="top" right="40px" bottom="200px"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">向上 (arrow-up):</p>
          <nv-back-top icon="arrow-up" right="40px" bottom="280px"></nv-back-top>
        </div>
      </div>
    </div>
  `
};

/**
 * 自定义触发高度
 */
export const CustomVisibilityHeight: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8; margin-bottom: 16px;">设置不同的触发高度：</p>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">触发高度 200px:</p>
          <nv-back-top visibility-height="200" right="40px" bottom="120px"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">触发高度 400px (默认):</p>
          <nv-back-top visibility-height="400" right="40px" bottom="200px"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">触发高度 800px:</p>
          <nv-back-top visibility-height="800" right="40px" bottom="280px"></nv-back-top>
        </div>
      </div>
    </div>
  `
};

/**
 * 指定滚动容器
 */
export const CustomTarget: Story = {
  render: () => html`
    <div style="height: 400px; padding: 20px; position: relative;">
      <p style="color: #606266; line-height: 1.8; margin-bottom: 16px;">
        在下面的容器中滚动（容器 ID 为 <code>scroll-container</code>）：
      </p>
      <div
        id="scroll-container"
        style="height: 300px; overflow-y: scroll; border: 1px solid #ebebeb; background: #fff; padding: 20px;"
      >
        <div style="height: 1000px;">
          <p>向下滚动这个容器...</p>
          <p style="margin-top: 500px;">当这个容器滚动高度超过 100px 时，右下角会出现回到顶部按钮</p>
          <nv-back-top
            target="#scroll-container"
            visibility-height="100"
            right="40px"
            bottom="40px"
          ></nv-back-top>
        </div>
      </div>
    </div>
  `
};

/**
 * 自定义内容
 */
export const CustomContent: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8;">通过默认插槽自定义按钮内容</p>
      <nv-back-top>
        <div style="font-size: 12px; text-align: center; color: #409EFF; font-weight: 500;">TOP</div>
      </nv-back-top>
    </div>
  `
};

/**
 * 组合使用
 */
export const Combinations: Story = {
  render: () => html`
    <div style="height: 2000px; padding: 20px;">
      <p style="color: #606266; line-height: 1.8; margin-bottom: 16px;">组合使用多个属性：</p>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">自定义图标和位置:</p>
          <nv-back-top icon="top" right="40px" bottom="120px"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">自定义位置和触发高度:</p>
          <nv-back-top right="100px" bottom="100px" visibility-height="300"></nv-back-top>
        </div>
        <div>
          <p style="margin: 0 0 8px 0; color: #909399; font-size: 14px;">完整自定义:</p>
          <nv-back-top
            icon="arrow-up"
            right="60px"
            bottom="60px"
            visibility-height="500"
          ></nv-back-top>
        </div>
      </div>
    </div>
  `
};
