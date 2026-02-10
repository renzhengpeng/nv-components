import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import { Message } from '../message';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Calendar',
  component: 'nv-calendar',
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值，选中日期的值（单选模式）或日期范围数组（范围选择模式）'
    },
    mode: {
      control: 'select',
      options: ['single', 'range'],
      description: '选择模式：single-单选, range-范围选择'
    },
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1],
      description: '一周的第一天，0-周日，1-周一'
    },
    minDate: {
      control: 'text',
      description: '最小可选日期'
    },
    maxDate: {
      control: 'text',
      description: '最大可选日期'
    },
    showToday: {
      control: 'boolean',
      description: '是否显示"今天"按钮'
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
          <h3 class="example-title">With Value</h3>
          <p class="example-desc">With Value 示例</p>
          <div class="example-demo">
            ${ WithValue.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Range Mode</h3>
          <p class="example-desc">Range Mode 示例</p>
          <div class="example-demo">
            ${ RangeMode.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Monday First</h3>
          <p class="example-desc">Monday First 示例</p>
          <div class="example-demo">
            ${ MondayFirst.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Date Range</h3>
          <p class="example-desc">Date Range 示例</p>
          <div class="example-demo">
            ${ DateRange.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">No Today Button</h3>
          <p class="example-desc">No Today Button 示例</p>
          <div class="example-demo">
            ${ NoTodayButton.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Custom Style</h3>
          <p class="example-desc">Custom Style 示例</p>
          <div class="example-demo">
            ${ CustomStyle.render?.({} as any, {} as any) }
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

/**
 * 默认日历，单选模式
 */
export const Default: Story = {
  render: (args) => html`
    <nv-calendar
      .value=${ args.value }
      .mode=${ args.mode }
      .firstDayOfWeek=${ args.firstDayOfWeek }
      .showToday=${ args.showToday }
      @nv-change=${ (e: CustomEvent) => {
        console.log('Date changed:', e.detail);
        Message.success(`选中日期: ${ e.detail }`);
      } }
    ></nv-calendar>
  `,
  args: {
    value: '',
    mode: 'single',
    firstDayOfWeek: 0,
    showToday: true
  }
};

/**
 * 预设选中值
 */
export const WithValue: Story = {
  render: () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const value = `${ year }-${ month }-${ day }`;

    return html`
      <nv-calendar
        .value=${ value }
        @nv-change=${ (e: CustomEvent) => {
          console.log('Date changed:', e.detail);
          Message.success(`选中日期: ${ e.detail }`);
        } }
      ></nv-calendar>
    `;
  }
};

/**
 * 范围选择模式
 */
export const RangeMode: Story = {
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    return html`
      <div>
        <p style="margin-bottom: 16px; color: #606266;">选择一个日期范围：</p>
        <nv-calendar
          mode="range"
          @nv-change=${ (e: CustomEvent) => {
            console.log('Range changed:', e.detail);
            if (Array.isArray(e.detail)) {
              Message.success(`选择范围: ${ e.detail[0] } 至 ${ e.detail[1] }`);
            }
          } }
        ></nv-calendar>
      </div>
    `;
  }
};

/**
 * 周一作为一周的开始
 */
export const MondayFirst: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">周一作为一周的第一天：</p>
      <nv-calendar
        .firstDayOfWeek=${ 1 }
        @nv-change=${ (e: CustomEvent) => {
          console.log('Date changed:', e.detail);
        } }
      ></nv-calendar>
    </div>
  `
};

/**
 * 日期范围限制
 */
export const DateRange: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() - 7); // 7天前
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 14); // 14天后

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${ year }-${ month }-${ day }`;
    };

    return html`
      <div>
        <p style="margin-bottom: 16px; color: #606266;">
          限制可选日期范围：过去7天到未来14天
        </p>
        <nv-calendar
          .minDate=${ formatDate(minDate) }
          .maxDate=${ formatDate(maxDate) }
          @nv-change=${ (e: CustomEvent) => {
            console.log('Date changed:', e.detail);
            Message.success(`选中日期: ${ e.detail }`);
          } }
        ></nv-calendar>
      </div>
    `;
  }
};

/**
 * 隐藏今天按钮
 */
export const NoTodayButton: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">隐藏"今天"按钮：</p>
      <nv-calendar
        .showToday=${ false }
        @nv-change=${ (e: CustomEvent) => {
          console.log('Date changed:', e.detail);
        } }
      ></nv-calendar>
    </div>
  `
};

/**
 * 自定义样式
 */
export const CustomStyle: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 16px; color: #606266;">自定义主题颜色：</p>
      <nv-calendar
        style="
          --nv-calendar-day-background-color-selected: #67c23a;
          --nv-calendar-day-color-today: #67c23a;
          --nv-calendar-day-background-color-in-range: #e8f5e9;
          --nv-calendar-day-color-in-range: #67c23a;
        "
        mode="range"
        @nv-change=${ (e: CustomEvent) => {
          console.log('Range changed:', e.detail);
        } }
      ></nv-calendar>
    </div>
  `
};
