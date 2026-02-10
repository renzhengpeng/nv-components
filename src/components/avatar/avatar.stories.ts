import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../icon/index';
import '../divider/index';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'nv-avatar', 
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '头像尺寸'
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: '头像形状'
    },
    src: {
      control: 'text',
      description: '图片地址'
    },
    icon: {
      control: 'text',
      description: '图标名称'
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
      <h3>不同尺寸</h3>
      <p>Avatar 提供大、中、小三种尺寸</p>
      ${ Sizes.render?.(Sizes.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>不同形状</h3>
      <p>支持圆形和方形两种形状</p>
      ${ Shapes.render?.(Shapes.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>图片头像</h3>
      <p>使用图片作为头像</p>
      ${ WithImage.render?.(WithImage.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>图标头像</h3>
      <p>使用图标作为头像</p>
      ${ WithIcon.render?.(WithIcon.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义尺寸</h3>
      <p>可以通过数字指定具体的尺寸</p>
      ${ CustomSize.render?.(CustomSize.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义背景色</h3>
      <p>可以通过 backgroundColor 属性自定义头像背景色</p>
      ${ CustomBackground.render?.(CustomBackground.args as any, {} as any) }
    </div>
    <nv-divider></nv-divider>
    <div class="story-section">
      <h3>自定义文字样式</h3>
      <p>当显示文字时，可以通过 fontFamily、fontSize、fontColor、fontWeight 属性自定义文字样式</p>
      ${ CustomTextStyle.render?.(CustomTextStyle.args as any, {} as any) }
    </div>
  `
};

export const Default: Story = {
  render: (args) => html`
    <nv-avatar
      size="${ args.size }"
      shape="${ args.shape }"
      src="${ args.src }"
      icon="${ args.icon }"
    ></nv-avatar>
  `,
  args: {
    size: 'medium',
    shape: 'circle',
    src: '',
    icon: ''
  }
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px;">
      <nv-avatar size="large">大</nv-avatar>
      <nv-avatar size="medium">中</nv-avatar>
      <nv-avatar size="small">小</nv-avatar>
    </div>
  `
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px;">
      <nv-avatar shape="circle">圆</nv-avatar>
      <nv-avatar shape="square">方</nv-avatar>
    </div>
  `
};

export const WithImage: Story = {
  render: () => html`
    <nv-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></nv-avatar>
  `
};

export const WithIcon: Story = {
  render: () => html`
    <nv-avatar icon="user"></nv-avatar>
  `
};

export const CustomSize: Story = {
  render: () => html`
    <nv-avatar size="80">80px</nv-avatar>
  `
};

/**
 * 自定义背景色
 */
export const CustomBackground: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
      <nv-avatar backgroundColor="#409EFF">A</nv-avatar>
      <nv-avatar backgroundColor="#67C23A">B</nv-avatar>
      <nv-avatar backgroundColor="#E6A23C">C</nv-avatar>
      <nv-avatar backgroundColor="#F56C6C">D</nv-avatar>
      <nv-avatar backgroundColor="#909399">E</nv-avatar>
    </div>
  `
};

/**
 * 自定义文字样式
 */
export const CustomTextStyle: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">自定义字体大小和颜色：</p>
        <div style="display: flex; align-items: center; gap: 16px;">
          <nv-avatar backgroundColor="#409EFF" fontSize="16px" fontColor="#fff">A</nv-avatar>
          <nv-avatar backgroundColor="#67C23A" fontSize="20px" fontColor="#fff">B</nv-avatar>
          <nv-avatar backgroundColor="#E6A23C" fontSize="24px" fontColor="#fff">C</nv-avatar>
        </div>
      </div>
      
      <div>
        <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">自定义字体粗细：</p>
        <div style="display: flex; align-items: center; gap: 16px;">
          <nv-avatar backgroundColor="#409EFF" fontWeight="normal">A</nv-avatar>
          <nv-avatar backgroundColor="#67C23A" fontWeight="bold">B</nv-avatar>
          <nv-avatar backgroundColor="#E6A23C" fontWeight="600">C</nv-avatar>
        </div>
      </div>
      
      <div>
        <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">自定义字体类型：</p>
        <div style="display: flex; align-items: center; gap: 16px;">
          <nv-avatar backgroundColor="#409EFF" fontFamily="Arial">A</nv-avatar>
          <nv-avatar backgroundColor="#67C23A" fontFamily="Georgia">B</nv-avatar>
          <nv-avatar backgroundColor="#E6A23C" fontFamily="'Courier New'">C</nv-avatar>
        </div>
      </div>
      
      <div>
        <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">组合使用：</p>
        <div style="display: flex; align-items: center; gap: 16px;">
          <nv-avatar 
            backgroundColor="#409EFF" 
            fontSize="18px" 
            fontColor="#fff" 
            fontWeight="bold"
            fontFamily="Arial"
          >AB</nv-avatar>
          <nv-avatar 
            backgroundColor="#67C23A" 
            fontSize="20px" 
            fontColor="#fff" 
            fontWeight="600"
            fontFamily="Georgia"
          >CD</nv-avatar>
          <nv-avatar 
            backgroundColor="#E6A23C" 
            fontSize="22px" 
            fontColor="#fff" 
            fontWeight="700"
            fontFamily="'Courier New'"
          >EF</nv-avatar>
        </div>
      </div>
    </div>
  `
};

