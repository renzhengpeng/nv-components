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
  title: 'Components/Transfer',
  component: 'nv-transfer', 
  argTypes: {
    filterable: {
      control: 'boolean',
      description: '是否可搜索'
    },
    filterPlaceholder: {
      control: 'text',
      description: '搜索框占位符'
    },
    titles: {
      control: 'object',
      description: '左侧列表标题'
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
          <h3 class="example-title">带默认值</h3>
          <p class="example-desc">设置默认选中的值</p>
          <div class="example-demo">
            ${ WithValue.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">可搜索</h3>
          <p class="example-desc">设置 filterable 属性可以搜索选项</p>
          <div class="example-demo">
            ${ Filterable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义标题</h3>
          <p class="example-desc">通过 titles 属性自定义列表标题</p>
          <div class="example-demo">
            ${ CustomTitles.render?.({} as any, {} as any) }
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

const defaultData = [
  { key: '1', label: '选项1' },
  { key: '2', label: '选项2' },
  { key: '3', label: '选项3' },
  { key: '4', label: '选项4' },
  { key: '5', label: '选项5' }
];

export const Default: Story = {
  render: (args) => html`
    <nv-transfer
      .data="${ defaultData }"
      .value="${ [] }"
      ?filterable="${ args.filterable }"
      filterPlaceholder="${ args.filterPlaceholder }"
      .titles="${ args.titles }"
      @change="${ (e: CustomEvent) => console.log('Transfer changed:', e.detail) }"
    ></nv-transfer>
  `,
  args: {
    filterable: false,
    filterPlaceholder: '请输入搜索内容',
    titles: ['列表 1', '列表 2']
  }
};

export const WithValue: Story = {
  render: () => html`
    <nv-transfer
      .data="${ defaultData }"
      .value="${ ['1', '3'] }"
    ></nv-transfer>
  `
};

export const Filterable: Story = {
  render: () => html`
    <nv-transfer
      .data="${ defaultData }"
      .value="${ [] }"
      filterable
    ></nv-transfer>
  `
};

export const CustomTitles: Story = {
  render: () => html`
    <nv-transfer
      .data="${ defaultData }"
      .value="${ [] }"
      .titles="${ ['待选', '已选'] }"
    ></nv-transfer>
  `
};

