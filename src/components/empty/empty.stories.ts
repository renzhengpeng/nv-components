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
  title: 'Components/Empty',
  component: 'nv-empty',
  argTypes: {
    image: {
      control: 'text',
      description: '图片地址'
    },
    imageSize: {
      control: 'number',
      description: '图片大小'
    },
    description: {
      control: 'text',
      description: '描述文字'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '尺寸'
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
          <h3 class="example-title">不同尺寸</h3>
          <p class="example-desc">通过 size 属性设置空状态的尺寸，支持 mini、small、medium、large、huge 五种尺寸</p>
          <div class="example-demo">
            ${ Sizes.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义图片</h3>
          <p class="example-desc">通过 image 属性自定义图片地址</p>
          <div class="example-demo">
            ${ CustomImage.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义描述</h3>
          <p class="example-desc">通过 description 属性自定义描述文字</p>
          <div class="example-demo">
            ${ CustomDescription.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">使用插槽</h3>
          <p class="example-desc">通过 slot 自定义空状态内容</p>
          <div class="example-demo">
            ${ WithSlot.render?.({} as any, {} as any) }
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
    <nv-empty
      image="${ args.image }"
      imageSize="${ args.imageSize }"
      description="${ args.description }"
      size="${ args.size }"
    ></nv-empty>
  `,
  args: {
    image: '',
    imageSize: 0,
    description: '暂无数据',
    size: 'medium'
  }
};

/**
 * 不同尺寸 - 展示所有可用尺寸的空状态
 */
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">迷你尺寸 (mini)</h4>
        <div style="border: 1px dashed #d9d9d9; border-radius: 4px;">
          <nv-empty size="mini" description="这是迷你尺寸"></nv-empty>
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">小型尺寸 (small)</h4>
        <div style="border: 1px dashed #d9d9d9; border-radius: 4px;">
          <nv-empty size="small" description="这是小型尺寸"></nv-empty>
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">中等尺寸 (medium - 默认)</h4>
        <div style="border: 1px dashed #d9d9d9; border-radius: 4px;">
          <nv-empty size="medium" description="这是中等尺寸"></nv-empty>
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">大型尺寸 (large)</h4>
        <div style="border: 1px dashed #d9d9d9; border-radius: 4px;">
          <nv-empty size="large" description="这是大型尺寸"></nv-empty>
        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">巨大尺寸 (huge)</h4>
        <div style="border: 1px dashed #d9d9d9; border-radius: 4px;">
          <nv-empty size="huge" description="这是巨大尺寸"></nv-empty>
        </div>
      </div>

      <div style="margin-top: 16px;">
        <h4 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 500;">尺寸对比</h4>
        <div style="display: flex; gap: 24px; align-items: flex-end; justify-content: center; border: 1px dashed #d9d9d9; border-radius: 4px; padding: 40px 20px;">
          <div style="text-align: center;">
            <nv-empty size="mini"></nv-empty>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #909399;">mini</p>
          </div>
          <div style="text-align: center;">
            <nv-empty size="small"></nv-empty>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #909399;">small</p>
          </div>
          <div style="text-align: center;">
            <nv-empty size="medium"></nv-empty>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #909399;">medium</p>
          </div>
          <div style="text-align: center;">
            <nv-empty size="large"></nv-empty>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #909399;">large</p>
          </div>
          <div style="text-align: center;">
            <nv-empty size="huge"></nv-empty>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #909399;">huge</p>
          </div>
        </div>
      </div>
    </div>
  `
};

export const CustomImage: Story = {
  render: () => html`
    <nv-empty image="https://via.placeholder.com/150" description="自定义图片"></nv-empty>
  `
};

export const CustomDescription: Story = {
  render: () => html`
    <nv-empty description="这里什么都没有"></nv-empty>
  `
};

export const WithSlot: Story = {
  render: () => html`
    <nv-empty>
      <p>这是自定义内容</p>
      <button>刷新</button>
    </nv-empty>
  `
};
