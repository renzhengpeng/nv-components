import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../message/index';
import { message } from '../message/message';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'nv-switch',
  argTypes: {
    value: {
      control: 'boolean',
      description: '绑定值'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '开关尺寸'
    },
    activeText: {
      control: 'text',
      description: '打开时的文字描述'
    },
    inactiveText: {
      control: 'text',
      description: '关闭时的文字描述'
    },
    activeColor: {
      control: 'color',
      description: '打开时的背景色'
    },
    inactiveColor: {
      control: 'color',
      description: '关闭时的背景色'
    },
    activeIcon: {
      control: 'text',
      description: '打开时的图标'
    },
    inactiveIcon: {
      control: 'text',
      description: '关闭时的图标'
    },
    width: {
      control: 'number',
      description: '自定义宽度（单位为 px）'
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
      <p>Switch 开关的基本使用</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同尺寸</h3>
      <p>Switch 组件提供了不同的尺寸</p>
      ${ Sizes.render?.(Sizes.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>文字描述</h3>
      <p>使用文字描述开关状态</p>
      ${ WithText.render?.(WithText.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>长文字描述</h3>
      <p>文字描述过长时，组件宽度会自动撑开以展示完整内容</p>
      ${ LongText.render?.(LongText.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>固定宽度</h3>
      <p>通过 width 属性设置固定宽度，文字超长时将显示省略号</p>
      ${ FixedWidth.render?.(FixedWidth.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>带图标</h3>
      <p>使用图标表示开关状态</p>
      ${ WithIcons.render?.(WithIcons.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义颜色</h3>
      <p>自定义开关的颜色</p>
      ${ CustomColors.render?.(CustomColors.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>表单关联</h3>
      <p>支持 name、form、required，与原生 form 提交、重置、校验一致</p>
      ${ FormAssociated.render?.(FormAssociated.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-switch
      ?value="${ args.value }"
      ?disabled="${ args.disabled }"
      size="${ args.size }"
      active-text="${ args.activeText }"
      inactive-text="${ args.inactiveText }"
      active-color="${ args.activeColor }"
      inactive-color="${ args.inactiveColor }"
      active-icon="${ args.activeIcon }"
      inactive-icon="${ args.inactiveIcon }"
      .width="${ args.width }"
    ></nv-switch>
  `,
  args: {
    value: false,
    disabled: false,
    size: 'medium',
    activeText: '',
    inactiveText: '',
    activeColor: '',
    inactiveColor: '',
    activeIcon: '',
    inactiveIcon: '',
    width: 0
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-switch></nv-switch>
      <nv-switch value></nv-switch>
      <nv-switch disabled></nv-switch>
      <nv-switch value disabled></nv-switch>
    </div>
  `
};

export const Sizes: Story = {
  args: {
    activeText: "on",
    inactiveText: "off"
  },

  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <nv-switch size="mini"></nv-switch>
      <nv-switch size="small"></nv-switch>
      <nv-switch size="medium"></nv-switch>
      <nv-switch size="large"></nv-switch>
      <nv-switch size="huge"></nv-switch>
    </div>
  `
};

export const WithText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-switch active-text="ON" inactive-text="OFF"></nv-switch>
      <nv-switch active-text="开启" inactive-text="关闭"></nv-switch>
      <nv-switch active-text="是" inactive-text="否"></nv-switch>
    </div>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-switch active-icon="check" inactive-icon="close"></nv-switch>
      <nv-switch active-icon="success" inactive-icon="error"></nv-switch>
    </div>
  `
};

export const CustomColors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-switch active-color="#13ce66" inactive-color="#ff4949"></nv-switch>
      <nv-switch active-color="#409eff" inactive-color="#909399"></nv-switch>
    </div>
  `
};

/** 表单关联：name、form、required，与原生 form 提交、重置、校验一致 */
export const FormAssociated: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <form
        id="switch-form-demo"
        style="display: flex; flex-direction: column; gap: 12px;"
        @submit=${ (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          if (form.reportValidity()) {
            const fd = new FormData(form);
            message.success({ message: '表单校验通过，FormData: ' + JSON.stringify(Object.fromEntries(fd)), showIcon: true });
          } else {
            message.error({ message: '请开启开关（required 时须为开启状态）', showIcon: true });
          }
        } }
      >
        <label style="font-size: 14px; color: #606266;">是否启用（必选为开启）</label>
        <nv-switch
          form="switch-form-demo"
          name="enabled"
          required
          active-value="on"
          inactive-value="off"
        ></nv-switch>
        <div style="display: flex; gap: 8px;">
          <button type="submit" style="padding: 6px 16px; cursor: pointer;">提交（会触发校验）</button>
          <button type="reset" style="padding: 6px 16px; cursor: pointer;">重置</button>
        </div>
      </form>
      <p style="font-size: 12px; color: #909399; margin: 0;">提交值为当前 value 的字符串；required 时未开启会校验失败；重置后恢复为 inactiveValue。</p>
    </div>
  `
};

export const LongText: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <nv-switch active-text="这是非常非常非常非常非常长的开启文字" inactive-text="这是非常非常非常非常非常长的关闭文字"></nv-switch>
      <nv-switch value active-text="这是一段超长的开启描述文字，用来测试文本溢出情况" inactive-text="这是一段超长的关闭描述文字，用来测试文本溢出情况"></nv-switch>
    </div>
  `
};

export const FixedWidth: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-switch .width=${ 100 } active-text="超长文字自动截断展示" inactive-text="超长文字自动截断展示"></nv-switch>
      <nv-switch .width=${ 150 } value active-text="这是一段非常非常长的文字，会被截断" inactive-text="这是一段非常非常长的文字，会被截断"></nv-switch>
    </div>
  `
};

