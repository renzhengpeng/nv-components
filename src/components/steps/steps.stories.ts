import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../step/index';
import '../icon/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Steps',
  component: 'nv-steps', 
  argTypes: {
    active: {
      control: 'number',
      description: '设置当前激活步骤'
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '显示方向'
    },
    center: {
      control: 'boolean',
      description: '是否居中'
    },
    simple: {
      control: 'boolean',
      description: '是否简洁风格'
    },
    finishStatus: {
      control: 'select',
      options: ['finish', 'success'],
      description: '完成状态'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '步骤条尺寸'
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
          <h3 class="example-title">Vertical</h3>
          <p class="example-desc">Vertical 示例</p>
          <div class="example-demo">
            ${ Vertical.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Center</h3>
          <p class="example-desc">Center 示例</p>
          <div class="example-demo">
            ${ Center.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Simple</h3>
          <p class="example-desc">Simple 示例</p>
          <div class="example-demo">
            ${ Simple.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Status</h3>
          <p class="example-desc">With Status 示例</p>
          <div class="example-demo">
            ${ WithStatus.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Icons</h3>
          <p class="example-desc">With Icons 示例</p>
          <div class="example-demo">
            ${ WithIcons.render?.({} as any, {} as any) }
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
    <nv-steps
      active="${ args.active }"
      direction="${ args.direction }"
      ?center="${ args.center }"
      ?simple="${ args.simple }"
      finish-status="${ args.finishStatus }"
      size="${ args.size }"
    >
      <nv-step title="步骤1" description="步骤1的描述"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `,
  args: {
    active: 0,
    direction: 'horizontal',
    center: false,
    simple: false,
    finishStatus: 'finish',
    size: 'medium'
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-steps active="1">
      <nv-step title="步骤1" description="步骤1的描述"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const Vertical: Story = {
  args: {
    size: "huge"
  },

  render: () => html`
    <nv-steps active="1" direction="vertical">
      <nv-step title="步骤1" description="步骤1的描述"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const Center: Story = {
  render: () => html`
    <nv-steps active="1" center>
      <nv-step title="步骤1" description="步骤1的描述"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const Simple: Story = {
  render: () => html`
    <nv-steps active="1" simple>
      <nv-step title="步骤1"></nv-step>
      <nv-step title="步骤2"></nv-step>
      <nv-step title="步骤3"></nv-step>
      <nv-step title="步骤4"></nv-step>
    </nv-steps>
  `
};

export const WithStatus: Story = {
  render: () => html`
    <nv-steps active="2" finish-status="success">
      <nv-step title="步骤1" description="步骤1的描述"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述" status="error"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <nv-steps active="1">
      <nv-step title="步骤1" description="步骤1的描述" icon="edit"></nv-step>
      <nv-step title="步骤2" description="步骤2的描述" icon="upload"></nv-step>
      <nv-step title="步骤3" description="步骤3的描述" icon="picture"></nv-step>
      <nv-step title="步骤4" description="步骤4的描述" icon="check"></nv-step>
    </nv-steps>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">水平步骤条 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">迷你尺寸</div>
            <nv-steps active="1" size="mini">
              <nv-step title="步骤1" description="步骤1的描述"></nv-step>
              <nv-step title="步骤2" description="步骤2的描述"></nv-step>
              <nv-step title="步骤3" description="步骤3的描述"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">小型尺寸</div>
            <nv-steps active="1" size="small">
              <nv-step title="步骤1" description="步骤1的描述"></nv-step>
              <nv-step title="步骤2" description="步骤2的描述"></nv-step>
              <nv-step title="步骤3" description="步骤3的描述"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">中等尺寸</div>
            <nv-steps active="1" size="medium">
              <nv-step title="步骤1" description="步骤1的描述"></nv-step>
              <nv-step title="步骤2" description="步骤2的描述"></nv-step>
              <nv-step title="步骤3" description="步骤3的描述"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">大型尺寸</div>
            <nv-steps active="1" size="large">
              <nv-step title="步骤1" description="步骤1的描述"></nv-step>
              <nv-step title="步骤2" description="步骤2的描述"></nv-step>
              <nv-step title="步骤3" description="步骤3的描述"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">巨大尺寸</div>
            <nv-steps active="1" size="huge">
              <nv-step title="步骤1" description="步骤1的描述"></nv-step>
              <nv-step title="步骤2" description="步骤2的描述"></nv-step>
              <nv-step title="步骤3" description="步骤3的描述"></nv-step>
            </nv-steps>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">简洁风格步骤条 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">迷你尺寸</div>
            <nv-steps active="1" simple size="mini">
              <nv-step title="步骤1"></nv-step>
              <nv-step title="步骤2"></nv-step>
              <nv-step title="步骤3"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">小型尺寸</div>
            <nv-steps active="1" simple size="small">
              <nv-step title="步骤1"></nv-step>
              <nv-step title="步骤2"></nv-step>
              <nv-step title="步骤3"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">中等尺寸</div>
            <nv-steps active="1" simple size="medium">
              <nv-step title="步骤1"></nv-step>
              <nv-step title="步骤2"></nv-step>
              <nv-step title="步骤3"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">大型尺寸</div>
            <nv-steps active="1" simple size="large">
              <nv-step title="步骤1"></nv-step>
              <nv-step title="步骤2"></nv-step>
              <nv-step title="步骤3"></nv-step>
            </nv-steps>
          </div>
          <div>
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">巨大尺寸</div>
            <nv-steps active="1" simple size="huge">
              <nv-step title="步骤1"></nv-step>
              <nv-step title="步骤2"></nv-step>
              <nv-step title="步骤3"></nv-step>
            </nv-steps>
          </div>
        </div>
      </div>
    </div>
  `
};
