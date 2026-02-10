import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../checkbox/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/CheckboxGroup',
  component: 'nv-checkbox-group', 
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值（数组）'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '复选框组尺寸'
    },
    min: {
      control: 'number',
      description: '可被勾选的 checkbox 的最小数量'
    },
    max: {
      control: 'number',
      description: '可被勾选的 checkbox 的最大数量'
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
          <h3 class="example-title">With Border</h3>
          <p class="example-desc">With Border 示例</p>
          <div class="example-demo">
            ${ WithBorder.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Border Sizes</h3>
          <p class="example-desc">Border Sizes 示例</p>
          <div class="example-demo">
            ${ BorderSizes.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Disabled</h3>
          <p class="example-desc">Disabled 示例</p>
          <div class="example-demo">
            ${ Disabled.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Min</h3>
          <p class="example-desc">With Min 示例</p>
          <div class="example-demo">
            ${ WithMin.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Max</h3>
          <p class="example-desc">With Max 示例</p>
          <div class="example-demo">
            ${ WithMax.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Min And Max</h3>
          <p class="example-desc">With Min And Max 示例</p>
          <div class="example-demo">
            ${ WithMinAndMax.render?.({} as any, {} as any) }
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
    <nv-checkbox-group
      value='${ JSON.stringify(args.value) }'
      ?disabled="${ args.disabled }"
      size="${ args.size }"
      min="${ args.min }"
      max="${ args.max }"
    >
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `,
  args: {
    value: ['option1'],
    disabled: false,
    size: 'medium',
    min: undefined,
    max: undefined
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1", "option2"]'>
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const WithBorder: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1"]' size="medium">
      <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3" border>选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const BorderSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-checkbox-group value='["option1"]' size="mini">
        <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
        <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      </nv-checkbox-group>
      <nv-checkbox-group value='["option1"]' size="small">
        <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
        <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      </nv-checkbox-group>
      <nv-checkbox-group value='["option1"]' size="medium">
        <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
        <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      </nv-checkbox-group>
      <nv-checkbox-group value='["option1"]' size="large">
        <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
        <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      </nv-checkbox-group>
      <nv-checkbox-group value='["option1"]' size="huge">
        <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
        <nv-checkbox value="option2" label="选项2" border>选项2</nv-checkbox>
      </nv-checkbox-group>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1"]' disabled>
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const WithMin: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1", "option2"]' min="2">
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const WithMax: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1"]' max="2">
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const WithMinAndMax: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1", "option2"]' min="1" max="2">
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};
