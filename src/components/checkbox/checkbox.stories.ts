import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../message/index';
import { message } from '../message/message';
import readmeMd from './README.md?raw';
import '../checkbox-group/index';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'nv-checkbox',
  argTypes: {
    value: {
      control: 'text',
      description: '复选框的值'
    },
    label: {
      control: 'text',
      description: '复选框的标签'
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
    indeterminate: {
      control: 'boolean',
      description: '是否半选状态'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '复选框尺寸，仅对带有边框的复选框有效'
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
      <p>Checkbox 多选框的基本使用</p>
      ${ Basic.render?.(Basic.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>多选框组</h3>
      <p>一组多选框的使用</p>
      ${ CheckboxGroup.render?.(CheckboxGroup.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>带边框</h3>
      <p>带边框样式的多选框</p>
      ${ WithBorder.render?.(WithBorder.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同尺寸</h3>
      <p>提供多种尺寸的多选框</p>
      ${ Sizes.render?.(Sizes.args as any, {} as any) }
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
    <nv-checkbox
      value="${ args.value }"
      label="${ args.label }"
      ?checked="${ args.checked }"
      ?disabled="${ args.disabled }"
      ?border="${ args.border }"
      ?indeterminate="${ args.indeterminate }"
    >
      ${ args.children || args.label || '选项' }
    </nv-checkbox>
  `,
  args: {
    value: 'option1',
    label: '选项1',
    checked: false,
    disabled: false,
    border: false,
    indeterminate: false,
    size: 'medium',
    children: '选项1'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="option2" checked>选项2</nv-checkbox>
      <nv-checkbox value="option3" label="option3" disabled>选项3（禁用）</nv-checkbox>
    </div>
  `
};

export const CheckboxGroup: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1", "option2"]'>
      <nv-checkbox value="option1" label="选项1">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">选项3</nv-checkbox>
    </nv-checkbox-group>
  `
};

export const WithBorder: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <nv-checkbox value="option1" label="选项1" border>选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2" border checked>选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3" border disabled>选项3（禁用）</nv-checkbox>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 16px; align-items: center;">
        <nv-checkbox value="option1" label="迷你尺寸" border size="mini">迷你尺寸</nv-checkbox>
        <nv-checkbox value="option2" label="小型尺寸" border size="small">小型尺寸</nv-checkbox>
        <nv-checkbox value="option3" label="中等尺寸" border size="medium">中等尺寸</nv-checkbox>
        <nv-checkbox value="option4" label="大型尺寸" border size="large">大型尺寸</nv-checkbox>
        <nv-checkbox value="option5" label="巨大尺寸" border size="huge">巨大尺寸</nv-checkbox>
      </div>
      <div style="display: flex; gap: 16px; align-items: center;">
        <nv-checkbox value="option1" label="迷你尺寸" border size="mini" checked>迷你尺寸</nv-checkbox>
        <nv-checkbox value="option2" label="小型尺寸" border size="small" checked>小型尺寸</nv-checkbox>
        <nv-checkbox value="option3" label="中等尺寸" border size="medium" checked>中等尺寸</nv-checkbox>
        <nv-checkbox value="option4" label="大型尺寸" border size="large" checked>大型尺寸</nv-checkbox>
        <nv-checkbox value="option5" label="巨大尺寸" border size="huge" checked>巨大尺寸</nv-checkbox>
      </div>
    </div>
  `
};

export const Indeterminate: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <nv-checkbox value="option1" label="选项1" indeterminate>半选状态</nv-checkbox>
      <nv-checkbox value="option2" label="选项2" checked>选中状态</nv-checkbox>
      <nv-checkbox value="option3" label="选项3">未选中状态</nv-checkbox>
    </div>
  `
};

export const BorderSizes: Story = {
  render: () => html`
    <nv-checkbox-group value='["option1"]' size="medium">
      <nv-checkbox value="option1" label="选项1" border size="mini">选项1</nv-checkbox>
      <nv-checkbox value="option2" label="选项2" border size="small">选项2</nv-checkbox>
      <nv-checkbox value="option3" label="选项3" border size="medium">选项3</nv-checkbox>
      <nv-checkbox value="option4" label="选项4" border size="large">选项4</nv-checkbox>
      <nv-checkbox value="option5" label="选项5" border size="huge">选项5</nv-checkbox>
    </nv-checkbox-group>
  `
};

/** 表单关联：name、form、required，与原生 form 提交、重置、校验一致 */
export const FormAssociated: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <form
        id="checkbox-form-demo"
        style="display: flex; flex-direction: column; gap: 12px;"
        @submit=${ (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          if (form.reportValidity()) {
            const fd = new FormData(form);
            message.success({ message: '表单校验通过，FormData: ' + JSON.stringify(Object.fromEntries(fd)), showIcon: true });
          } else {
            message.error({ message: '请勾选必选项', showIcon: true });
          }
        } }
      >
        <label style="font-size: 14px; color: #606266;">请勾选同意（必选）</label>
        <nv-checkbox
          form="checkbox-form-demo"
          name="agree"
          value="yes"
          required
        >同意协议</nv-checkbox>
        <nv-checkbox form="checkbox-form-demo" name="hobby" value="read">阅读</nv-checkbox>
        <nv-checkbox form="checkbox-form-demo" name="hobby" value="sport">运动</nv-checkbox>
        <div style="display: flex; gap: 8px;">
          <button type="submit" style="padding: 6px 16px; cursor: pointer;">提交（会触发校验）</button>
          <button type="reset" style="padding: 6px 16px; cursor: pointer;">重置</button>
        </div>
      </form>
      <p style="font-size: 12px; color: #909399; margin: 0;">勾选时提交 name=value，未勾选不提交；required 时未勾选会校验失败；重置后恢复未勾选。</p>
    </div>
  `
};
