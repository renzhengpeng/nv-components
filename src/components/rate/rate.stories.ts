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
  title: 'Components/Rate',
  component: 'nv-rate', 
  argTypes: {
    value: {
      control: 'number',
      description: '当前评分值'
    },
    max: {
      control: 'number',
      description: '最大分值'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    allowHalf: {
      control: 'boolean',
      description: '是否允许半选'
    },
    showText: {
      control: 'boolean',
      description: '是否显示辅助文字'
    },
    showScore: {
      control: 'boolean',
      description: '是否显示当前分数'
    },
    scoreTemplate: {
      control: 'text',
      description: '分数模板，{value} 会被替换为当前分数'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '评分尺寸'
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
          <h3 class="example-title">With Text</h3>
          <p class="example-desc">With Text 示例</p>
          <div class="example-demo">
            ${ WithText.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Allow Half</h3>
          <p class="example-desc">Allow Half 示例</p>
          <div class="example-demo">
            ${ AllowHalf.render?.({} as any, {} as any) }
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
          <h3 class="example-title">Custom Max</h3>
          <p class="example-desc">Custom Max 示例</p>
          <div class="example-demo">
            ${ CustomMax.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Score</h3>
          <p class="example-desc">With Score 示例</p>
          <div class="example-demo">
            ${ WithScore.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Score Template</h3>
          <p class="example-desc">With Score Template 示例</p>
          <div class="example-demo">
            ${ WithScoreTemplate.render?.({} as any, {} as any) }
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
    <nv-rate
      .value=${ args.value }
      .max=${ args.max }
      .disabled=${ args.disabled }
      .allowHalf=${ args.allowHalf }
      .showText=${ args.showText }
      .showScore=${ args.showScore }
      .scoreTemplate=${ args.scoreTemplate }
      size="${ args.size }"
      @change=${ (e: CustomEvent) => console.log('Rate changed:', e.detail) }
    ></nv-rate>
  `,
  args: {
    value: 0,
    max: 5,
    disabled: false,
    allowHalf: false,
    showText: false,
    showScore: false,
    scoreTemplate: '{value}',
    size: 'medium'
  }
};

export const WithText: Story = {
  render: () => html`
    <nv-rate .value=${ 3 } .showText=${ true }></nv-rate>
  `
};

export const AllowHalf: Story = {
  render: () => html`
    <nv-rate .value=${ 2.5 } .allowHalf=${ true }></nv-rate>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-rate .value=${ 3 } .disabled=${ true }></nv-rate>
  `
};

export const CustomMax: Story = {
  render: () => html`
    <nv-rate .value=${ 7 } .max=${ 10 } .showText=${ true }></nv-rate>
  `
};

export const WithScore: Story = {
  render: () => html`
    <nv-rate .value=${ 3.5 } .allowHalf=${ true } .showScore=${ true }></nv-rate>
  `
};

export const WithScoreTemplate: Story = {
  render: () => html`
    <nv-rate .value=${ 4 } .showScore=${ true } .scoreTemplate=${ '{value} 分' }></nv-rate>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">不同尺寸的评分</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">迷你:</span>
            <nv-rate .value=${ 3 } size="mini"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">小型:</span>
            <nv-rate .value=${ 3 } size="small"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">中等:</span>
            <nv-rate .value=${ 3 } size="medium"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">大型:</span>
            <nv-rate .value=${ 3 } size="large"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">巨大:</span>
            <nv-rate .value=${ 3 } size="huge"></nv-rate>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">带文字的评分 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">迷你:</span>
            <nv-rate .value=${ 3 } .showText=${ true } size="mini"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">小型:</span>
            <nv-rate .value=${ 3 } .showText=${ true } size="small"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">中等:</span>
            <nv-rate .value=${ 3 } .showText=${ true } size="medium"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">大型:</span>
            <nv-rate .value=${ 3 } .showText=${ true } size="large"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">巨大:</span>
            <nv-rate .value=${ 3 } .showText=${ true } size="huge"></nv-rate>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">半选评分 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">迷你:</span>
            <nv-rate .value=${ 2.5 } .allowHalf=${ true } size="mini"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">小型:</span>
            <nv-rate .value=${ 2.5 } .allowHalf=${ true } size="small"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">中等:</span>
            <nv-rate .value=${ 2.5 } .allowHalf=${ true } size="medium"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">大型:</span>
            <nv-rate .value=${ 2.5 } .allowHalf=${ true } size="large"></nv-rate>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; color: #666;">巨大:</span>
            <nv-rate .value=${ 2.5 } .allowHalf=${ true } size="huge"></nv-rate>
          </div>
        </div>
      </div>
    </div>
  `
};

