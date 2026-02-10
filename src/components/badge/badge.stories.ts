import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../button/index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'nv-badge',
  argTypes: {
    value: {
      control: 'number',
      description: '显示值'
    },
    max: {
      control: 'number',
      description: '最大值，超过最大值会显示 "{max}+"'
    },
    isDot: {
      control: 'boolean',
      description: '是否显示为点'
    },
    isFixed: {
      control: 'boolean',
      description: '是否固定在右上角'
    },
    color: {
      control: 'color',
      description: '自定义背景色'
    },
    offsetX: {
      control: 'number',
      description: '水平偏移量（px），正数向右，负数向左'
    },
    offsetY: {
      control: 'number',
      description: '垂直偏移量（px），正数向下，负数向上'
    },
    size: {
      control: 'number',
      description: '圆点半径（px），至少为1，仅当 is-dot 为 true 时有效'
    },
    showZero: {
      control: 'boolean',
      description: '当值为0时是否展示徽标'
    },
    text: {
      control: 'text',
      description: '用来展示非数字的徽标内容'
    },
    status: {
      control: 'select',
      options: ['', 'success', 'error', 'warning', 'processing', 'info'],
      description: '徽标状态'
    }
  }
};

export default meta;
type Story = StoryObj;

const readmeHtml = marked.parse(readmeMd) as string;

export const Overview: Story = {
  parameters: {
    docs: { disable: true },
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => html`
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
      .readme-content h3 {
        color: #303133;
        font-size: 18px;
        font-weight: 600;
        margin: 24px 0 12px 0;
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
      .readme-content pre {
        background: #f6f8fa;
        padding: 16px;
        border-radius: 6px;
        overflow-x: auto;
      }
      .readme-content pre code {
        background: none;
        padding: 0;
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
          <p class="example-desc">展示新消息数量，适用于消息提醒、待办数量等场景</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">最大值</h3>
          <p class="example-desc">可自定义最大值，超过最大值会显示 '{max}+'</p>
          <div class="example-demo">
            ${ Max.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">小红点</h3>
          <p class="example-desc">以红点的形式标注需要关注的内容</p>
          <div class="example-demo">
            ${ Dot.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">自定义颜色</h3>
          <p class="example-desc">通过 color 属性自定义徽标背景颜色</p>
          <div class="example-demo">
            ${ CustomColor.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">状态点</h3>
          <p class="example-desc">通过 status 属性设置徽标状态，用于表示不同的状态</p>
          <div class="example-demo">
            ${ Status.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">偏移量</h3>
          <p class="example-desc">通过 offset-x 和 offset-y 属性调整徽标的位置</p>
          <div class="example-demo">
            ${ Offset.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">圆点大小</h3>
          <p class="example-desc">通过 size 属性自定义圆点半径，仅当 is-dot 为 true 时有效</p>
          <div class="example-demo">
            ${ Size.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">显示零值</h3>
          <p class="example-desc">通过 show-zero 属性控制当值为0时是否展示徽标</p>
          <div class="example-demo">
            ${ ShowZero.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">文本内容</h3>
          <p class="example-desc">通过 text 属性展示非数字的徽标内容</p>
          <div class="example-demo">
            ${ Text.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">带文本</h3>
          <p class="example-desc">徽标可以应用在文本内容上</p>
          <div class="example-demo">
            ${ WithText.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">零值处理</h3>
          <p class="example-desc">默认情况下，值为0时不显示徽标</p>
          <div class="example-demo">
            ${ ZeroValue.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">组合使用</h3>
          <p class="example-desc">组合使用多个属性，实现个性化的徽标效果</p>
          <div class="example-demo">
            ${ Combinations.render?.({} as any, {} as any) }
          </div>
        </div>
      </div>
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-badge
      value="${ args.value }"
      max="${ args.max }"
      ?is-dot="${ args.isDot }"
      ?is-fixed="${ args.isFixed }"
      color="${ args.color }"
      offset-x="${ args.offsetX }"
      offset-y="${ args.offsetY }"
      size="${ args.size }"
      ?show-zero="${ args.showZero }"
      text="${ args.text }"
      status="${ args.status }"
    >
      <nv-button>消息</nv-button>
    </nv-badge>
  `,
  args: {
    value: 12,
    max: undefined,
    isDot: false,
    isFixed: false,
    color: '',
    offsetX: 0,
    offsetY: 0,
    size: undefined,
    showZero: false,
    text: '',
    status: ''
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <nv-badge value="12">
        <nv-button>消息</nv-button>
      </nv-badge>
      <nv-badge value="3">
        <nv-button>回复</nv-button>
      </nv-badge>
      <nv-badge value="1">
        <nv-button>评论</nv-button>
      </nv-badge>
    </div>
  `
};

export const Max: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <nv-badge value="10" max="9">
        <nv-button>消息</nv-button>
      </nv-badge>
      <nv-badge value="100" max="99">
        <nv-button>消息</nv-button>
      </nv-badge>
    </div>
  `
};

export const Dot: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <nv-badge is-dot>
        <nv-button>消息</nv-button>
      </nv-badge>
      <nv-badge is-dot>
        <nv-button>回复</nv-button>
      </nv-badge>
    </div>
  `
};

export const CustomColor: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <nv-badge value="12" color="#409eff">
        <nv-button>消息</nv-button>
      </nv-badge>
      <nv-badge value="3" color="#67c23a">
        <nv-button>回复</nv-button>
      </nv-badge>
      <nv-badge value="1" color="#e6a23c">
        <nv-button>评论</nv-button>
      </nv-badge>
    </div>
  `
};

export const WithText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-badge value="12">
        <span style="font-size: 16px;">消息</span>
      </nv-badge>
      <nv-badge is-dot>
        <span style="font-size: 16px;">新消息</span>
      </nv-badge>
    </div>
  `
};

export const Offset: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge value="12" offset-x="0" offset-y="0">
          <nv-button>默认位置</nv-button>
        </nv-badge>
        <nv-badge value="12" offset-x="10" offset-y="0">
          <nv-button>向右偏移 10px</nv-button>
        </nv-badge>
        <nv-badge value="12" offset-x="-10" offset-y="0">
          <nv-button>向左偏移 10px</nv-button>
        </nv-badge>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge value="12" offset-x="0" offset-y="10">
          <nv-button>向下偏移 10px</nv-button>
        </nv-badge>
        <nv-badge value="12" offset-x="0" offset-y="-10">
          <nv-button>向上偏移 10px</nv-button>
        </nv-badge>
        <nv-badge value="12" offset-x="10" offset-y="10">
          <nv-button>向右下偏移</nv-button>
        </nv-badge>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge is-dot offset-x="5" offset-y="5">
          <nv-button>点状徽章偏移</nv-button>
        </nv-badge>
        <nv-badge value="99" color="#67c23a" offset-x="-5" offset-y="-5">
          <nv-button>自定义颜色偏移</nv-button>
        </nv-badge>
      </div>
    </div>
  `
};

export const ZeroValue: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <nv-badge value="0">
        <nv-button>消息</nv-button>
      </nv-badge>
      <nv-badge value="0" max="99">
        <nv-button>消息</nv-button>
      </nv-badge>
    </div>
  `
};

export const Combinations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge value="12" max="99" color="#409eff">
          <nv-button>最大值限制</nv-button>
        </nv-badge>
        <nv-badge value="100" max="99" color="#67c23a">
          <nv-button>超过最大值</nv-button>
        </nv-badge>
        <nv-badge is-dot color="#e6a23c">
          <nv-button>点状徽章</nv-button>
        </nv-badge>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge value="5" color="#f56c6c" offset-x="5" offset-y="-5">
          <nv-button>组合使用 1</nv-button>
        </nv-badge>
        <nv-badge value="99" max="99" color="#409eff" offset-x="-5" offset-y="5">
          <nv-button>组合使用 2</nv-button>
        </nv-badge>
        <nv-badge is-dot color="#67c23a" offset-x="10" offset-y="10">
          <nv-button>组合使用 3</nv-button>
        </nv-badge>
      </div>
    </div>
  `
};

export const Size: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center; padding: 20px;">
      <nv-badge is-dot size="4">
        <nv-button>半径 4px</nv-button>
      </nv-badge>
      <nv-badge is-dot size="6">
        <nv-button>半径 6px</nv-button>
      </nv-badge>
      <nv-badge is-dot size="8">
        <nv-button>半径 8px</nv-button>
      </nv-badge>
      <nv-badge is-dot size="10">
        <nv-button>半径 10px</nv-button>
      </nv-badge>
    </div>
  `
};

export const ShowZero: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center; padding: 20px;">
      <nv-badge value="0">
        <nv-button>不显示 0（默认）</nv-button>
      </nv-badge>
      <nv-badge value="0" show-zero>
        <nv-button>显示 0</nv-button>
      </nv-badge>
      <nv-badge value="0" show-zero status="success">
        <nv-button>显示 0（成功状态）</nv-button>
      </nv-badge>
    </div>
  `
};

export const Text: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge text="NEW">
          <nv-button>新功能</nv-button>
        </nv-badge>
        <nv-badge text="HOT">
          <nv-button>热门</nv-button>
        </nv-badge>
        <nv-badge text="SALE">
          <nv-button>促销</nv-button>
        </nv-badge>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge text="NEW" status="success">
          <nv-button>新功能（成功）</nv-button>
        </nv-badge>
        <nv-badge text="HOT" status="error">
          <nv-button>热门（错误）</nv-button>
        </nv-badge>
        <nv-badge text="SALE" status="warning">
          <nv-button>促销（警告）</nv-button>
        </nv-badge>
      </div>
    </div>
  `
};

export const Status: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px;">
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge value="12" status="success">
          <nv-button>成功</nv-button>
        </nv-badge>
        <nv-badge value="5" status="error">
          <nv-button>错误</nv-button>
        </nv-badge>
        <nv-badge value="8" status="warning">
          <nv-button>警告</nv-button>
        </nv-badge>
        <nv-badge value="3" status="processing">
          <nv-button>处理中</nv-button>
        </nv-badge>
        <nv-badge value="99" status="info">
          <nv-button>信息</nv-button>
        </nv-badge>
      </div>
      <div style="display: flex; gap: 24px; align-items: center;">
        <nv-badge is-dot status="success">
          <nv-button>成功（点）</nv-button>
        </nv-badge>
        <nv-badge is-dot status="error">
          <nv-button>错误（点）</nv-button>
        </nv-badge>
        <nv-badge is-dot status="warning">
          <nv-button>警告（点）</nv-button>
        </nv-badge>
        <nv-badge is-dot status="processing">
          <nv-button>处理中（点）</nv-button>
        </nv-badge>
        <nv-badge is-dot status="info">
          <nv-button>信息（点）</nv-button>
        </nv-badge>
      </div>
    </div>
  `
};
