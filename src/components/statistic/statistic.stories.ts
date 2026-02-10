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
  title: 'Components/Statistic',
  component: 'nv-statistic',
  argTypes: {
    value: {
      control: 'number',
      description: '数值'
    },
    precision: {
      control: 'number',
      description: '数值的精度'
    },
    prefix: {
      control: 'text',
      description: '数值的前缀'
    },
    suffix: {
      control: 'text',
      description: '数值的后缀'
    },
    label: {
      control: 'text',
      description: '数值的标题'
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
          <h3 class="example-title">With Prefix</h3>
          <p class="example-desc">With Prefix 示例</p>
          <div class="example-demo">
            ${ WithPrefix.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Suffix</h3>
          <p class="example-desc">With Suffix 示例</p>
          <div class="example-demo">
            ${ WithSuffix.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Precision</h3>
          <p class="example-desc">With Precision 示例</p>
          <div class="example-demo">
            ${ WithPrecision.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Custom Style</h3>
          <p class="example-desc">Custom Style 示例</p>
          <div class="example-demo">
            ${ CustomStyle.render?.({} as any, {} as any) }
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
    <nv-statistic
      value="${ args.value }"
      precision="${ args.precision }"
      prefix="${ args.prefix }"
      suffix="${ args.suffix }"
      label="${ args.title }"
    ></nv-statistic>
  `,
  args: {
    value: 1128,
    precision: 0,
    prefix: '',
    suffix: '',
    label: '总销售额'
  }
};

export const WithPrefix: Story = {
  render: () => html`
    <nv-statistic value="1128" prefix="¥" label="总销售额"></nv-statistic>
  `
};

export const WithSuffix: Story = {
  render: () => html`
    <nv-statistic value="1128" suffix="元" label="总销售额"></nv-statistic>
  `
};

export const WithPrecision: Story = {
  render: () => html`
    <nv-statistic value="1128.88" precision="2" prefix="¥" label="总销售额"></nv-statistic>
  `
};

export const CustomStyle: Story = {
  render: () => html`
    <nv-statistic
      value="1128"
      prefix="¥"
      label="总销售额"
      valueStyle="color: #409EFF;"
    ></nv-statistic>
  `
};
