import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../button/index';
import '../message/index';
import { message } from '../message/message';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Upload',
  component: 'nv-upload',
  argTypes: {
    action: {
      control: 'text',
      description: '上传的地址'
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多选文件'
    },
    accept: {
      control: 'text',
      description: '接受上传的文件类型'
    },
    drag: {
      control: 'boolean',
      description: '是否支持拖拽上传'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
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
          <h3 class="example-title">基础用法</h3>
          <p class="example-desc">点击按钮选择文件进行上传</p>
          <div class="example-demo">
            ${ Default.render?.({ action: '/api/upload', multiple: false, accept: '', drag: false, disabled: false } as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">拖拽上传</h3>
          <p class="example-desc">通过 drag 属性启用拖拽上传功能，用户可以将文件拖拽到指定区域进行上传</p>
          <div class="example-demo">
            ${ Drag.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">多选文件</h3>
          <p class="example-desc">通过 multiple 属性支持一次选择多个文件进行上传</p>
          <div class="example-demo">
            ${ Multiple.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">限制文件类型</h3>
          <p class="example-desc">通过 accept 属性限制可上传的文件类型，例如只允许上传图片文件</p>
          <div class="example-demo">
            ${ AcceptImages.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">With Tip</h3>
          <p class="example-desc">通过 tip 插槽添加提示说明文字</p>
          <div class="example-demo">
            ${ WithTip.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">图片缩略图</h3>
          <p class="example-desc">上传图片文件时，会自动显示缩略图预览，上传中会显示遮罩层</p>
          <div class="example-demo">
            ${ ImageThumbnail.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">图片列表</h3>
          <p class="example-desc">拖拽上传多张图片，自动显示缩略图列表</p>
          <div class="example-demo">
            ${ ImageList.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">禁用状态</h3>
          <p class="example-desc">通过 disabled 属性禁用上传功能</p>
          <div class="example-demo">
            ${ Disabled.render?.({} as any, {} as any) }
          </div>
        </div>


        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">文件数量限制</h3>
          <p class="example-desc">通过 limit 属性限制最大上传文件数量，超过限制会触发 nv-exceed 事件</p>
          <div class="example-demo">
            ${ Limit.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">表单关联（auto-upload 为 false）</h3>
          <p class="example-desc">auto-upload 为 false 时仅收集文件，随表单提交；支持 name、form、required</p>
          <div class="example-demo">
            ${ FormAssociated.render?.({} as any, {} as any) }
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

export const Default: Story = {
  render: (args) => html`
    <nv-upload
      action="${ args.action }"
      ?multiple="${ args.multiple }"
      accept="${ args.accept }"
      ?drag="${ args.drag }"
      ?disabled="${ args.disabled }"
      @success="${ (e: CustomEvent) => console.log('Upload success:', e.detail) }"
      @error="${ (e: CustomEvent) => console.log('Upload error:', e.detail) }"
    >
      <nv-button>点击上传</nv-button>
    </nv-upload>
  `,
  args: {
    action: '/api/upload',
    multiple: false,
    accept: '',
    drag: false,
    disabled: false
  }
};

export const Drag: Story = {
  render: () => html`
    <nv-upload action="/api/upload" drag>
      <div style="text-align: center; padding: 40px;">
        <p>将文件拖到此处，或<em>点击上传</em></p>
      </div>
    </nv-upload>
  `
};

export const Multiple: Story = {
  render: () => html`
    <nv-upload action="/api/upload" multiple>
      <nv-button>点击上传（多选）</nv-button>
    </nv-upload>
  `
};

export const AcceptImages: Story = {
  render: () => html`
    <nv-upload action="/api/upload" accept="image/*">
      <nv-button>上传图片</nv-button>
    </nv-upload>
  `
};

export const WithTip: Story = {
  render: () => html`
    <nv-upload action="/api/upload">
      <nv-button>点击上传</nv-button>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </nv-upload>
  `
};

export const ImageThumbnail: Story = {
  render: () => html`
    <nv-upload action="/api/upload" accept="image/*" multiple>
      <nv-button>上传图片</nv-button>
      <div slot="tip">支持上传图片文件，会自动显示缩略图预览</div>
    </nv-upload>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-upload action="/api/upload" disabled>
      <nv-button>禁用状态</nv-button>
    </nv-upload>
  `
};

export const Limit: Story = {
  render: () => html`
    <nv-upload
      action="/api/upload"
      multiple
      limit="3"
      @nv-exceed=${ (e: CustomEvent<{ files: File[]; fileList: unknown[] }>) => {
        const count = e.detail.files.length;
        message.warning({
          message: `最多上传3个文件，已忽略 ${ count } 个超出限制的文件`,
          showIcon: true
        });
      } }
    >
      <nv-button>最多上传3个文件</nv-button>
      <div slot="tip">最多只能上传3个文件，超过限制会触发 nv-exceed 事件并用 message 提示</div>
    </nv-upload>
  `
};

export const ImageList: Story = {
  render: () => html`
    <nv-upload action="/api/upload" accept="image/*" multiple drag>
      <div style="text-align: center; padding: 40px;">
        <p>将图片拖到此处，或<em>点击上传</em></p>
        <p style="font-size: 12px; color: #909399; margin-top: 8px;">支持多张图片上传，自动显示缩略图</p>
      </div>
    </nv-upload>
  `
};

/** 表单关联：auto-upload 为 false 时仅收集文件，随表单提交；支持 name、form、required */
export const FormAssociated: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <form
        id="upload-form-demo"
        style="display: flex; flex-direction: column; gap: 12px;"
        @submit=${ (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          if (form.reportValidity()) {
            const fd = new FormData(form);
            const files = fd.getAll('attachment');
            message.success({ message: '表单校验通过，已选文件数: ' + files.length, showIcon: true });
          } else {
            message.error({ message: '请至少选择一个文件', showIcon: true });
          }
        } }
      >
        <label style="font-size: 14px; color: #606266;">附件（必选，随表单提交）</label>
        <nv-upload
          form="upload-form-demo"
          name="attachment"
          required
          ?auto-upload=${ false }
        >
          <nv-button>选择文件</nv-button>
        </nv-upload>
        <div style="display: flex; gap: 8px;">
          <button type="submit" style="padding: 6px 16px; cursor: pointer;">提交（会触发校验）</button>
          <button type="reset" style="padding: 6px 16px; cursor: pointer;">重置</button>
        </div>
      </form>
      <p style="font-size: 12px; color: #909399; margin: 0;">auto-upload 为 false 时选中的文件会随 FormData 提交；required 时未选文件会校验失败；重置后清空文件列表。</p>
    </div>
  `
};
