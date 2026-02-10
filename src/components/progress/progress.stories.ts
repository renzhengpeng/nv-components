import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Progress',
  component: 'nv-progress', 
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '百分比'
    },
    type: {
      control: 'select',
      options: ['line', 'circle', 'dashboard'],
      description: '进度条类型'
    },
    status: {
      control: 'select',
      options: ['', 'success', 'warning', 'error'],
      description: '进度条状态'
    },
    strokeWidth: {
      control: 'number',
      description: '进度条高度'
    },
    textInside: {
      control: 'boolean',
      description: '文字是否内置在进度条内'
    },
    showText: {
      control: 'boolean',
      description: '是否显示文字'
    },
    withoutText: {
      control: 'boolean',
      description: '是否不显示文字'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '进度条尺寸'
    }
  }
};

export default meta;
type Story = StoryObj;

const readmeHtml = marked.parse(readmeMd) as string;
const commonStyles = `
  .readme-container { padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; line-height: 1.6; color: #333; }
  .readme-container h1 { font-size: 32px; font-weight: 600; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 1px solid #eaecef; }
  .readme-container h2 { font-size: 24px; font-weight: 600; margin: 32px 0 16px 0; padding-bottom: 8px; border-bottom: 1px solid #eaecef; }
  .readme-container table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  .readme-container table th, .readme-container table td { border: 1px solid #dfe2e5; padding: 8px 12px; text-align: left; }
  .readme-container table th { background: #f6f8fa; font-weight: 600; }
  .story-section { margin: 32px 0; }
  .story-section h3 { font-size: 20px; font-weight: 600; margin: 0 0 16px 0; color: #333; }
  .story-section p { margin: 0 0 12px 0; color: #666; }
`;

export const Overview: Story = {
  render: () => html`
    <style>${ commonStyles }</style>
    <div class="readme-container">${ unsafeHTML(readmeHtml) }</div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>基础用法</h3>
      <p>Progress 组件基本使用方式</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>进度条状态</h3>
      <p>通过 status 属性设置进度条的状态</p>
      ${ Status.render?.(Status.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>文字内显</h3>
      <p>进度条显示文字内置在进度条内</p>
      ${ TextInside.render?.(TextInside.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>环形进度条</h3>
      <p>Progress 组件可设置为环形进度条</p>
      ${ Circle.render?.(Circle.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>仪表盘形进度条</h3>
      <p>Progress 组件可设置为仪表盘形进度条</p>
      ${ Dashboard.render?.(Dashboard.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-progress
      percentage="${ args.percentage }"
      type="${ args.type }"
      status="${ args.status }"
      stroke-width="${ args.strokeWidth }"
      ?text-inside="${ args.textInside }"
      ?without-text="${ args.withoutText }"
      size="${ args.size }"
    ></nv-progress>
  `,
  args: {
    percentage: 50,
    type: 'line',
    status: '',
    strokeWidth: 6,
    textInside: false,
    withoutText: false,
    size: 'medium'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
      <nv-progress percentage="0"></nv-progress>
      <nv-progress percentage="30"></nv-progress>
      <nv-progress percentage="50"></nv-progress>
      <nv-progress percentage="70"></nv-progress>
      <nv-progress percentage="100"></nv-progress>
    </div>
  `
};

export const Status: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
      <nv-progress percentage="100" status="success"></nv-progress>
      <nv-progress percentage="80" status="warning"></nv-progress>
      <nv-progress percentage="50" status="error"></nv-progress>
    </div>
  `
};

export const TextInside: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
      <nv-progress percentage="30" text-inside></nv-progress>
      <nv-progress percentage="50" text-inside></nv-progress>
      <nv-progress percentage="70" text-inside></nv-progress>
    </div>
  `
};

export const CustomStrokeWidth: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
      <nv-progress percentage="30" stroke-width="8"></nv-progress>
      <nv-progress percentage="50" stroke-width="12"></nv-progress>
      <nv-progress percentage="70" stroke-width="16"></nv-progress>
    </div>
  `
};

export const Circle: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <nv-progress type="circle" percentage="30"></nv-progress>
      <nv-progress type="circle" percentage="50"></nv-progress>
      <nv-progress type="circle" percentage="70"></nv-progress>
      <nv-progress type="circle" percentage="100" status="success"></nv-progress>
    </div>
  `
};

export const Dashboard: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <nv-progress type="dashboard" percentage="30"></nv-progress>
      <nv-progress type="dashboard" percentage="50"></nv-progress>
      <nv-progress type="dashboard" percentage="70"></nv-progress>
      <nv-progress type="dashboard" percentage="100" status="success"></nv-progress>
    </div>
  `
};

export const WithoutText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
      <nv-progress percentage="30" without-text></nv-progress>
      <nv-progress percentage="50" without-text></nv-progress>
      <nv-progress percentage="70" without-text></nv-progress>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">线条型进度条 - 不同尺寸</h4>
        <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
          <div>
            <span style="display: inline-block; width: 80px; color: #666;">迷你:</span>
            <nv-progress percentage="50" size="mini"></nv-progress>
          </div>
          <div>
            <span style="display: inline-block; width: 80px; color: #666;">小型:</span>
            <nv-progress percentage="50" size="small"></nv-progress>
          </div>
          <div>
            <span style="display: inline-block; width: 80px; color: #666;">中等:</span>
            <nv-progress percentage="50" size="medium"></nv-progress>
          </div>
          <div>
            <span style="display: inline-block; width: 80px; color: #666;">大型:</span>
            <nv-progress percentage="50" size="large"></nv-progress>
          </div>
          <div>
            <span style="display: inline-block; width: 80px; color: #666;">巨大:</span>
            <nv-progress percentage="50" size="huge"></nv-progress>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 16px 0; color: #666;">圆形进度条 - 不同尺寸</h4>
        <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: flex-end;">
          <div style="text-align: center;">
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">迷你</div>
            <nv-progress type="circle" percentage="50" size="mini"></nv-progress>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">小型</div>
            <nv-progress type="circle" percentage="50" size="small"></nv-progress>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">中等</div>
            <nv-progress type="circle" percentage="50" size="medium"></nv-progress>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">大型</div>
            <nv-progress type="circle" percentage="50" size="large"></nv-progress>
          </div>
          <div style="text-align: center;">
            <div style="margin-bottom: 8px; color: #666; font-size: 12px;">巨大</div>
            <nv-progress type="circle" percentage="50" size="huge"></nv-progress>
          </div>
        </div>
      </div>
    </div>
  `
};
