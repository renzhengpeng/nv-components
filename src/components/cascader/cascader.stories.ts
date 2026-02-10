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
  title: 'Components/Cascader',
  component: 'nv-cascader', 
  argTypes: {
    value: {
      control: 'object',
      description: '选中项绑定值'
    },
    placeholder: {
      control: 'text',
      description: '输入框占位符'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '级联选择器尺寸'
    },
    separator: {
      control: 'text',
      description: '选项分隔符'
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
          <h3 class="example-title">带默认值</h3>
          <p class="example-desc">设置默认选中的值</p>
          <div class="example-demo">
            ${ WithValue.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">可清空</h3>
          <p class="example-desc">设置 clearable 属性可以清空选项</p>
          <div class="example-demo">
            ${ Clearable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">禁用状态</h3>
          <p class="example-desc">级联选择器可以设置为禁用状态</p>
          <div class="example-demo">
            ${ Disabled.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">不同尺寸</h3>
          <p class="example-desc">提供 mini、small、medium、large、huge 五种尺寸</p>
          <div class="example-demo">
            ${ Sizes.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义分隔符</h3>
          <p class="example-desc">通过 separator 属性设置选项分隔符</p>
          <div class="example-demo">
            ${ Separator.render?.({} as any, {} as any) }
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

const defaultOptions = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          { value: 'yizhi', label: '一致' },
          { value: 'fankui', label: '反馈' },
          { value: 'xiaolu', label: '效率' }
        ]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [
          { value: 'cexiangdaohang', label: '侧向导航' },
          { value: 'dingbudaohang', label: '顶部导航' }
        ]
      }
    ]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          { value: 'layout', label: 'Layout 布局' },
          { value: 'color', label: 'Color 色彩' }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          { value: 'radio', label: 'Radio 单选框' },
          { value: 'checkbox', label: 'Checkbox 多选框' }
        ]
      }
    ]
  }
];

export const Default: Story = {
  render: (args) => html`
    <nv-cascader
      .options="${ defaultOptions }"
      .value="${ args.value }"
      placeholder="${ args.placeholder }"
      ?disabled="${ args.disabled }"
      ?clearable="${ args.clearable }"
      size="${ args.size }"
      separator="${ args.separator }"
      @change="${ (e: CustomEvent) => console.log('Cascader changed:', e.detail) }"
    ></nv-cascader>
  `,
  args: {
    value: [],
    placeholder: '请选择',
    disabled: false,
    clearable: false,
    size: 'medium',
    separator: ' / '
  }
};

export const WithValue: Story = {
  render: () => html`
    <nv-cascader
      .options="${ defaultOptions }"
      .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
    ></nv-cascader>
  `
};

export const Clearable: Story = {
  render: () => html`
    <nv-cascader
      .options="${ defaultOptions }"
      .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
      clearable
    ></nv-cascader>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-cascader
      .options="${ defaultOptions }"
      .value="${ [] }"
      disabled
    ></nv-cascader>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 300px;">
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">迷你尺寸</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          placeholder="请选择"
          size="mini"
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">小型尺寸</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          placeholder="请选择"
          size="small"
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">中等尺寸</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          placeholder="请选择"
          size="medium"
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">大型尺寸</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          placeholder="请选择"
          size="large"
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">巨大尺寸</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          placeholder="请选择"
          size="huge"
        ></nv-cascader>
      </div>
    </div>
  `
};

export const Separator: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 300px;">
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">默认分隔符 ( / )</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
          separator=" / "
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">箭头分隔符 ( > )</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
          separator=" > "
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">横线分隔符 ( - )</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
          separator=" - "
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">竖线分隔符 ( | )</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
          separator=" | "
        ></nv-cascader>
      </div>
      <div>
        <h4 style="margin: 0 0 12px 0; color: #666;">无空格分隔符 (/)</h4>
        <nv-cascader
          .options="${ defaultOptions }"
          .value="${ ['zhinan', 'shejiyuanze', 'yizhi'] }"
          separator="/"
        ></nv-cascader>
      </div>
    </div>
  `
};

