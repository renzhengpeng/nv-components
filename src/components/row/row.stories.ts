import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../col/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Row',
  component: 'nv-row',
  argTypes: {
    gutter: {
      control: 'number',
      description: '栅格间距'
    },
    type: {
      control: 'select',
      options: ['', 'flex'],
      description: '布局模式'
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-around', 'space-between'],
      description: 'flex 布局下的水平排列方式'
    },
    align: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      description: 'flex 布局下的垂直对齐方式'
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
          <h3 class="example-title">With Gutter</h3>
          <p class="example-desc">With Gutter 示例</p>
          <div class="example-demo">
            ${ WithGutter.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Flex Layout</h3>
          <p class="example-desc">Flex Layout 示例</p>
          <div class="example-demo">
            ${ FlexLayout.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Align</h3>
          <p class="example-desc">Align 示例</p>
          <div class="example-demo">
            ${ Align.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Offset</h3>
          <p class="example-desc">With Offset 示例</p>
          <div class="example-demo">
            ${ WithOffset.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Responsive</h3>
          <p class="example-desc">Responsive 示例</p>
          <div class="example-demo">
            ${ Responsive.render?.({} as any, {} as any) }
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
    <nv-row
      gutter="${ args.gutter }"
      type="${ args.type }"
      justify="${ args.justify }"
      align="${ args.align }"
    >
      <nv-col span="6">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
    </nv-row>
  `,
  args: {
    gutter: 0,
    type: '',
    justify: 'start',
    align: 'top'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-row>
        <nv-col span="24">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-24</div>
        </nv-col>
      </nv-row>
      <nv-row>
        <nv-col span="12">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-12</div>
        </nv-col>
        <nv-col span="12">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-12</div>
        </nv-col>
      </nv-row>
      <nv-row>
        <nv-col span="8">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-8</div>
        </nv-col>
        <nv-col span="8">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-8</div>
        </nv-col>
        <nv-col span="8">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-8</div>
        </nv-col>
      </nv-row>
    </div>
  `
};

export const WithGutter: Story = {
  render: () => html`
    <nv-row gutter="20">
      <nv-col span="6">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
      <nv-col span="6">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
      </nv-col>
    </nv-row>
  `
};

export const FlexLayout: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-row type="flex" justify="start">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" justify="center">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" justify="end">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" justify="space-between">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" justify="space-around">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-6</div>
        </nv-col>
      </nv-row>
    </div>
  `
};

export const Align: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-row type="flex" align="top">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 60px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333; height: 100px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 80px;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" align="middle">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 60px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333; height: 100px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 80px;">col-6</div>
        </nv-col>
      </nv-row>
      <nv-row type="flex" align="bottom">
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 60px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333; height: 100px;">col-6</div>
        </nv-col>
        <nv-col span="6">
          <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333; height: 80px;">col-6</div>
        </nv-col>
      </nv-row>
    </div>
  `
};

export const WithOffset: Story = {
  render: () => html`
    <nv-row>
      <nv-col span="8">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">col-8</div>
      </nv-col>
      <nv-col span="8" offset="8">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">col-8 offset-8</div>
      </nv-col>
    </nv-row>
  `
};

export const Responsive: Story = {
  render: () => html`
    <nv-row gutter="20">
      <nv-col xs="24" sm="12" md="8" lg="6" xl="4">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">响应式</div>
      </nv-col>
      <nv-col xs="24" sm="12" md="8" lg="6" xl="4">
        <div style="background: #e5e9f2; padding: 20px; text-align: center; color: #333;">响应式</div>
      </nv-col>
      <nv-col xs="24" sm="12" md="8" lg="6" xl="4">
        <div style="background: #d3dce6; padding: 20px; text-align: center; color: #333;">响应式</div>
      </nv-col>
    </nv-row>
  `
};
