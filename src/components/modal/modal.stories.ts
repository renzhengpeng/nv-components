import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../button/index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'nv-modal',
  argTypes: {
    visible: {
      control: 'boolean',
      description: '是否显示对话框'
    },
    label: {
      control: 'text',
      description: '对话框标题'
    },
    width: {
      control: 'text',
      description: '对话框宽度'
    },
    showClose: {
      control: 'boolean',
      description: '是否显示关闭按钮'
    },
    closeOnClickModal: {
      control: 'boolean',
      description: '是否可以通过点击遮罩层关闭对话框'
    },
    center: {
      control: 'boolean',
      description: '是否居中显示'
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
      <p>Modal 的基本使用</p>
      ${ Default.render?.(Default.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义底部</h3>
      <p>使用 footer 插槽自定义底部内容</p>
      ${ WithFooter.render?.(WithFooter.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义标题</h3>
      <p>使用 header 插槽自定义标题内容</p>
      ${ CustomHeader.render?.(CustomHeader.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => {
    return html`
      <nv-button @click="${ (e: Event) => {
        const button = e.target as HTMLElement;
        const modal = button.nextElementSibling as any;
        if (modal && modal.tagName === 'NV-MODAL') {
          modal.visible = true;
        }
      } }">打开对话框</nv-button>
      <nv-modal
        .visible="${ args.visible }"
        label="${ args.label }"
        width="${ args.width }"
        ?showClose="${ args.showClose }"
        ?closeOnClickModal="${ args.closeOnClickModal }"
        ?center="${ args.center }"
        @nv-close="${ (e: Event) => {
          const modal = e.target as any;
          if (modal) {
            modal.visible = false;
          }
        } }"
      >
        <p>这是一段内容</p>
        <p>这是另一段内容</p>
      </nv-modal>
    `;
  },
  args: {
    visible: false,
    label: '提示',
    width: '50%',
    showClose: true,
    closeOnClickModal: true,
    center: false
  }
};

export const WithFooter: Story = {
  render: () => {
    return html`
      <nv-button @click="${ (e: Event) => {
        const button = e.target as HTMLElement;
        const modal = button.nextElementSibling as any;
        if (modal && modal.tagName === 'NV-MODAL') {
          modal.visible = true;
        }
      } }">打开对话框</nv-button>
      <nv-modal
        .visible="${ false }"
        label="提示"
        @nv-close="${ (e: Event) => {
          const modal = e.target as any;
          if (modal) {
            modal.visible = false;
          }
        } }"
      >
        <p>这是一段内容</p>
        <div slot="footer">
          <nv-button @click="${ (e: Event) => {
            const path = e.composedPath();
            const modal = path.find((el: any) => el.tagName === 'NV-MODAL') as any;
            if (modal) {
              modal.visible = false;
            }
          } }">取消</nv-button>
          <nv-button type="primary" @click="${ (e: Event) => {
            const path = e.composedPath();
            const modal = path.find((el: any) => el.tagName === 'NV-MODAL') as any;
            if (modal) {
              modal.visible = false;
            }
          } }">确定</nv-button>
        </div>
      </nv-modal>
    `;
  }
};

export const CustomHeader: Story = {
  render: () => {
    return html`
      <nv-button @click="${ (e: Event) => {
        const button = e.target as HTMLElement;
        const modal = button.nextElementSibling as any;
        if (modal && modal.tagName === 'NV-MODAL') {
          modal.visible = true;
        }
      } }">打开对话框</nv-button>
      <nv-modal
        .visible="${ false }"
        @nv-close="${ (e: Event) => {
          const modal = e.target as any;
          if (modal) {
            modal.visible = false;
          }
        } }"
      >
        <div slot="header">
          <h2 style="margin: 0;">自定义标题</h2>
        </div>
        <p>这是一段内容</p>
      </nv-modal>
    `;
  }
};
