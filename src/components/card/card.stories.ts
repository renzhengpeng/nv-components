import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Card',
  component: 'nv-card', 
  argTypes: {
    shadow: {
      control: 'select',
      options: ['always', 'hover', 'never'],
      description: '设置阴影显示时机'
    },
    header: {
      control: 'text',
      description: '卡片标题'
    }
  }
};

export default meta;
type Story = StoryObj;

// 将 README 转换为 HTML
const readmeHtml = marked.parse(readmeMd) as string;

/**
 * Card 组件的完整文档和示例展示
 */
export const Overview: Story = {
  render: () => {
    const commonStyles = `
      .readme-container {
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .readme-container h1 {
        font-size: 32px;
        font-weight: 600;
        margin: 0 0 16px 0;
        padding-bottom: 12px;
        border-bottom: 1px solid #eaecef;
      }
      .readme-container h2 {
        font-size: 24px;
        font-weight: 600;
        margin: 32px 0 16px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid #eaecef;
      }
      .readme-container p {
        margin: 8px 0;
      }
      .readme-container table {
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0;
      }
      .readme-container table th,
      .readme-container table td {
        border: 1px solid #dfe2e5;
        padding: 8px 12px;
        text-align: left;
      }
      .readme-container table th {
        background: #f6f8fa;
        font-weight: 600;
      }
      .story-section {
        margin: 32px 0;
      }
      .story-section h3 {
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 16px 0;
        color: #333;
      }
      .story-section p {
        margin: 0 0 12px 0;
        color: #666;
      }
    `;

    return html`
      <style>${ commonStyles }</style>
      
      <div class="readme-container">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>基础用法</h3>
        <p>包含标题、内容的卡片</p>
        ${ Basic.render?.(Basic.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>带标题的卡片</h3>
        <p>使用 header 属性添加标题</p>
        ${ WithHeader.render?.(WithHeader.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>自定义标题</h3>
        <p>使用 header 插槽自定义标题内容</p>
        ${ WithHeaderSlot.render?.(WithHeaderSlot.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>带底部的卡片</h3>
        <p>使用 footer 插槽添加底部内容</p>
        ${ WithFooter.render?.(WithFooter.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>完整的卡片</h3>
        <p>包含标题、内容和底部的完整卡片</p>
        ${ WithHeaderAndFooter.render?.(WithHeaderAndFooter.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>阴影效果</h3>
        <p>通过 shadow 属性控制卡片阴影显示时机</p>
        ${ ShadowTypes.render?.(ShadowTypes.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>复杂示例</h3>
        <p>实际应用中的卡片示例</p>
        ${ Complex.render?.(Complex.args as any, {} as any) }
      </div>
    `;
  }
};

export const Default: Story = {
  render: (args) => html`
    <nv-card shadow="${ args.shadow }" header="${ args.header }">
      ${ args.children || '卡片内容' }
    </nv-card>
  `,
  args: {
    shadow: 'always',
    header: '',
    children: '卡片内容'
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-card>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
    </nv-card>
  `
};

export const WithHeader: Story = {
  render: () => html`
    <nv-card header="卡片标题">
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
    </nv-card>
  `
};

export const WithHeaderSlot: Story = {
  render: () => html`
    <nv-card>
      <div slot="header">
        <span style="font-weight: bold;">卡片标题</span>
      </div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
    </nv-card>
  `
};

export const WithFooter: Story = {
  render: () => html`
    <nv-card>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div slot="footer">
        <span>底部内容</span>
      </div>
    </nv-card>
  `
};

export const WithHeaderAndFooter: Story = {
  render: () => html`
    <nv-card>
      <div slot="header">
        <span style="font-weight: bold;">卡片标题</span>
      </div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div>这是一段内容</div>
      <div slot="footer">
        <span>底部内容</span>
      </div>
    </nv-card>
  `
};

export const ShadowTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-card shadow="always">
        <div>总是显示阴影</div>
      </nv-card>
      <nv-card shadow="hover">
        <div>悬停时显示阴影</div>
      </nv-card>
      <nv-card shadow="never">
        <div>从不显示阴影</div>
      </nv-card>
    </div>
  `
};

export const Complex: Story = {
  render: () => html`
    <nv-card>
      <div slot="header">
        <span style="font-weight: bold;">卡片标题</span>
      </div>
      <div style="line-height: 1.8;">
        <p>这是一段内容</p>
        <p>这是一段内容</p>
        <p>这是一段内容</p>
      </div>
      <div slot="footer">
        <span style="color: #909399; font-size: 14px;">底部内容</span>
      </div>
    </nv-card>
  `
};
