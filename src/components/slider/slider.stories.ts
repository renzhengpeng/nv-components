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
  title: 'Components/Slider',
  component: 'nv-slider', 
  argTypes: {
    value: {
      control: 'number',
      description: '当前值'
    },
    min: {
      control: 'number',
      description: '最小值'
    },
    max: {
      control: 'number',
      description: '最大值'
    },
    step: {
      control: 'number',
      description: '步长'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    showInput: {
      control: 'boolean',
      description: '是否显示输入框'
    },
    vertical: {
      control: 'boolean',
      description: '是否垂直显示'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '滑块尺寸'
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
          <h3 class="example-title">With Input</h3>
          <p class="example-desc">With Input 示例</p>
          <div class="example-demo">
            ${ WithInput.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Steps</h3>
          <p class="example-desc">With Steps 示例</p>
          <div class="example-demo">
            ${ WithSteps.render?.({} as any, {} as any) }
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
          <h3 class="example-title">Vertical</h3>
          <p class="example-desc">Vertical 示例</p>
          <div class="example-demo">
            ${ Vertical.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Custom Range</h3>
          <p class="example-desc">Custom Range 示例</p>
          <div class="example-demo">
            ${ CustomRange.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Sizes</h3>
          <p class="example-desc">Sizes 示例</p>
          <div class="example-demo">
            ${ Sizes.render?.({} as any, {} as any) }
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
    <nv-slider
      value="${ args.value }"
      min="${ args.min }"
      max="${ args.max }"
      step="${ args.step }"
      ?disabled="${ args.disabled }"
      ?show-input="${ args.showInput }"
      ?vertical="${ args.vertical }"
      size="${ args.size }"
    ></nv-slider>
  `,
  args: {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showInput: false,
    vertical: false,
    size: 'medium'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="width: 400px; padding: 20px;">
      <nv-slider value="30"></nv-slider>
    </div>
  `
};

export const WithInput: Story = {
  render: () => html`
    <div style="width: 400px; padding: 20px;">
      <nv-slider value="30" show-input></nv-slider>
    </div>
  `
};

export const WithSteps: Story = {
  render: () => html`
    <div style="width: 400px; padding: 20px;">
      <nv-slider value="30" step="10" show-stops></nv-slider>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <div style="width: 400px; padding: 20px;">
      <nv-slider value="30" disabled></nv-slider>
    </div>
  `
};

export const Vertical: Story = {
  render: () => html`
    <div style="height: 300px; padding: 20px;">
      <nv-slider value="30" vertical></nv-slider>
    </div>
  `
};

export const CustomRange: Story = {
  render: () => html`
    <div style="width: 400px; padding: 20px;">
      <nv-slider value="30" min="10" max="90" step="5"></nv-slider>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; width: 500px; padding: 20px;">
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">水平滑块 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">迷你尺寸</div>
            <nv-slider value="30" size="mini"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">小型尺寸</div>
            <nv-slider value="30" size="small"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">中等尺寸</div>
            <nv-slider value="30" size="medium"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">大型尺寸</div>
            <nv-slider value="30" size="large"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">巨大尺寸</div>
            <nv-slider value="30" size="huge"></nv-slider>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">带间断点的滑块 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">迷你尺寸</div>
            <nv-slider value="30" step="10" show-stops size="mini"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">小型尺寸</div>
            <nv-slider value="30" step="10" show-stops size="small"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">中等尺寸</div>
            <nv-slider value="30" step="10" show-stops size="medium"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">大型尺寸</div>
            <nv-slider value="30" step="10" show-stops size="large"></nv-slider>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">巨大尺寸</div>
            <nv-slider value="30" step="10" show-stops size="huge"></nv-slider>
          </div>
        </div>
      </div>
    </div>
  `
};
