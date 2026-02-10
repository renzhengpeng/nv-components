import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../timeline-item/index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Timeline',
  component: 'nv-timeline'
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
      <p>Timeline 时间线的基本使用</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同类型</h3>
      <p>Timeline 提供了不同类型的节点</p>
      ${ WithTypes.render?.(WithTypes.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义图标</h3>
      <p>可以为时间线节点自定义图标</p>
      ${ WithIcons.render?.(WithIcons.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义颜色</h3>
      <p>可以自定义时间线节点的颜色</p>
      ${ WithColor.render?.(WithColor.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>复杂示例</h3>
      <p>时间线的复杂使用示例</p>
      ${ Complex.render?.(Complex.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01">活动开始</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02">活动进行中</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03">活动结束</nv-timeline-item>
    </nv-timeline>
  `
};

export const Basic: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01 12:00:00">活动开始</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02 12:00:00">活动进行中</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03 12:00:00">活动结束</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithTypes: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" type="primary">主要节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" type="success">成功节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" type="warning">警告节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-04" type="error">错误节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-05" type="info">信息节点</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" icon="check">活动开始</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" icon="edit">活动进行中</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" icon="delete">活动结束</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithPlacement: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" placement="top">顶部时间戳</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" placement="bottom">底部时间戳</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03">默认时间戳</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithColor: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" color="#409eff">自定义颜色</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" color="#67c23a">自定义颜色</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" color="#e6a23c">自定义颜色</nv-timeline-item>
    </nv-timeline>
  `
};

export const Complex: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01 12:00:00" type="primary" icon="check">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动开始</h4>
          <p style="margin: 0; color: #909399;">活动正式开始，所有参与者已就位</p>
        </div>
      </nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02 12:00:00" type="success" icon="edit">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动进行中</h4>
          <p style="margin: 0; color: #909399;">活动正在顺利进行中</p>
        </div>
      </nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03 12:00:00" type="warning" icon="warning">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动结束</h4>
          <p style="margin: 0; color: #909399;">活动已圆满结束</p>
        </div>
      </nv-timeline-item>
    </nv-timeline>
  `
};
