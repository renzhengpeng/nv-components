import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../breadcrumb-item/index';
import '../divider/index';
import readmeMd from './README.md?raw';

const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'nv-breadcrumb',
  argTypes: {
    separator: {
      control: 'text',
      description: '全局分隔符'
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
  render: () => html`
    <div style="padding: 20px; max-width: 1200px;">
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <div class="examples-section">
        <div class="example-item">
          <h3 class="example-title">基础用法</h3>
          <p class="example-desc">默认分隔符为 /，最后一项为当前页文本</p>
          <div class="example-demo">${ Basic.render?.({} as any, {} as any) }</div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义分隔符</h3>
          <p class="example-desc">通过 separator 设置全局分隔符</p>
          <div class="example-demo">${ CustomSeparator.render?.({} as any, {} as any) }</div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义项分隔符</h3>
          <p class="example-desc">通过 breadcrumb-item 的 separator 属性覆盖当前项分隔符</p>
          <div class="example-demo">${ ItemSeparator.render?.({} as any, {} as any) }</div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">分隔符插槽</h3>
          <p class="example-desc">通过 separator 插槽放置图标或复杂内容</p>
          <div class="example-demo">${ SeparatorSlot.render?.({} as any, {} as any) }</div>
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
  `
};

export const Basic: Story = {
  render: () => html`
    <nv-breadcrumb>
      <nv-breadcrumb-item href="/home">首页</nv-breadcrumb-item>
      <nv-breadcrumb-item href="/components">组件</nv-breadcrumb-item>
      <nv-breadcrumb-item>面包屑</nv-breadcrumb-item>
    </nv-breadcrumb>
  `
};

export const CustomSeparator: Story = {
  render: () => html`
    <nv-breadcrumb separator=">">
      <nv-breadcrumb-item href="/home">首页</nv-breadcrumb-item>
      <nv-breadcrumb-item href="/application">应用</nv-breadcrumb-item>
      <nv-breadcrumb-item>详情</nv-breadcrumb-item>
    </nv-breadcrumb>
  `
};

export const ItemSeparator: Story = {
  render: () => html`
    <nv-breadcrumb separator="/">
      <nv-breadcrumb-item href="/home" separator=">">首页</nv-breadcrumb-item>
      <nv-breadcrumb-item href="/list" separator=":">列表</nv-breadcrumb-item>
      <nv-breadcrumb-item>详情</nv-breadcrumb-item>
    </nv-breadcrumb>
  `
};

export const SeparatorSlot: Story = {
  render: () => html`
    <nv-breadcrumb>
      <nv-breadcrumb-item href="/home">
        首页
        <span slot="separator" style="padding: 0 8px; color: #c0c4cc;">/</span>
      </nv-breadcrumb-item>
      <nv-breadcrumb-item href="/docs">
        文档
        <span slot="separator" style="padding: 0 8px; color: #67c23a;">></span>
      </nv-breadcrumb-item>
      <nv-breadcrumb-item>当前页</nv-breadcrumb-item>
    </nv-breadcrumb>
  `
};
