import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../message/index';
import { message } from '../message/message';
import readmeMd from './README.md?raw';
import '../radio-group/index';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'nv-radio',
  argTypes: {
    value: {
      control: 'text',
      description: '单选框的值'
    },
    label: {
      control: 'text',
      description: '单选框的标签'
    },
    checked: {
      control: 'boolean',
      description: '是否选中'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    border: {
      control: 'boolean',
      description: '是否显示边框'
    },
    type: {
      control: 'select',
      options: ['', 'button'],
      description: '单选框类型'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '单选框尺寸'
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
      <p>Radio 单选框的基本使用</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>单选框组</h3>
      <p>一组单选框的使用</p>
      ${ RadioGroup.render?.(RadioGroup.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>带边框</h3>
      <p>带边框样式的单选框</p>
      ${ WithBorder.render?.(WithBorder.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>按钮样式</h3>
      <p>按钮样式的单选框</p>
      ${ ButtonStyle.render?.(ButtonStyle.args as any, {} as any) }
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
    <nv-radio
      value="${ args.value }"
      label="${ args.label }"
      ?checked="${ args.checked }"
      ?disabled="${ args.disabled }"
      ?border="${ args.border }"
      type="${ args.type }"
      size="${ args.size }"
    >
      ${ args.children || args.label || '选项' }
    </nv-radio>
  `,
  args: {
    value: 'option1',
    label: '选项1',
    checked: false,
    disabled: false,
    border: false,
    type: '',
    size: 'medium',
    children: '选项1'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <nv-radio value="option1" label="选项1">选项1</nv-radio>
      <nv-radio value="option2" label="option2" checked>选项2</nv-radio>
      <nv-radio value="option3" label="option3" disabled>选项3（禁用）</nv-radio>
    </div>
  `
};

export const RadioGroup: Story = {
  render: () => html`
    <nv-radio-group value="option1">
      <nv-radio value="option1" label="选项1">选项1</nv-radio>
      <nv-radio value="option2" label="选项2">选项2</nv-radio>
      <nv-radio value="option3" label="选项3">选项3</nv-radio>
    </nv-radio-group>
  `
};

export const WithBorder: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <nv-radio value="option1" label="选项1" border>选项1</nv-radio>
      <nv-radio value="option2" label="选项2" border checked>选项2</nv-radio>
      <nv-radio value="option3" label="选项3" border disabled>选项3（禁用）</nv-radio>
    </div>
  `
};

export const ButtonStyle: Story = {
  render: () => html`
    <nv-radio-group value="option1" type="button">
      <nv-radio value="option1" label="选项1">选项1</nv-radio>
      <nv-radio value="option2" label="选项2">选项2</nv-radio>
      <nv-radio value="option3" label="选项3">选项3</nv-radio>
    </nv-radio-group>
  `
};

export const ButtonStyleSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-radio-group value="option1" type="button" size="mini">
        <nv-radio value="option1" label="选项1">选项1</nv-radio>
        <nv-radio value="option2" label="选项2">选项2</nv-radio>
      </nv-radio-group>
      <nv-radio-group value="option1" type="button" size="small">
        <nv-radio value="option1" label="选项1">选项1</nv-radio>
        <nv-radio value="option2" label="选项2">选项2</nv-radio>
      </nv-radio-group>
      <nv-radio-group value="option1" type="button" size="medium">
        <nv-radio value="option1" label="选项1">选项1</nv-radio>
        <nv-radio value="option2" label="选项2">选项2</nv-radio>
      </nv-radio-group>
      <nv-radio-group value="option1" type="button" size="large">
        <nv-radio value="option1" label="选项1">选项1</nv-radio>
        <nv-radio value="option2" label="选项2">选项2</nv-radio>
      </nv-radio-group>
      <nv-radio-group value="option1" type="button" size="huge">
        <nv-radio value="option1" label="选项1">选项1</nv-radio>
        <nv-radio value="option2" label="选项2">选项2</nv-radio>
      </nv-radio-group>
    </div>
  `
};

export const BorderSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 16px;">
        <nv-radio value="option1" label="选项1" border size="mini">选项1</nv-radio>
        <nv-radio value="option2" label="选项2" border size="small">选项2</nv-radio>
        <nv-radio value="option3" label="选项3" border size="medium">选项3</nv-radio>
        <nv-radio value="option4" label="选项4" border size="large">选项4</nv-radio>
        <nv-radio value="option5" label="选项5" border size="huge">选项5</nv-radio>
      </div>
    </div>
  `
};

/** 表单关联：name、form、required，与原生 form 提交、重置、校验一致 */
export const FormAssociated: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <form
        id="radio-form-demo"
        style="display: flex; flex-direction: column; gap: 12px;"
        @submit=${ (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          if (form.reportValidity()) {
            const fd = new FormData(form);
            message.success({ message: '表单校验通过，FormData: ' + JSON.stringify(Object.fromEntries(fd)), showIcon: true });
          } else {
            message.error({ message: '请选择一项', showIcon: true });
          }
        } }
      >
        <label style="font-size: 14px; color: #606266;">性别（必选一项）</label>
        <div style="display: flex; gap: 16px;">
          <nv-radio form="radio-form-demo" name="gender" value="male" required>男</nv-radio>
          <nv-radio form="radio-form-demo" name="gender" value="female">女</nv-radio>
        </div>
        <div style="display: flex; gap: 8px;">
          <button type="submit" style="padding: 6px 16px; cursor: pointer;">提交（会触发校验）</button>
          <button type="reset" style="padding: 6px 16px; cursor: pointer;">重置</button>
        </div>
      </form>
      <p style="font-size: 12px; color: #909399; margin: 0;">同 name 的 radio 选一项提交；required 时未选会校验失败；重置后清空选中。</p>
    </div>
  `
};
