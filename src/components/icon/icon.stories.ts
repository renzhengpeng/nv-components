import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../button/index';
import { Message } from '../message/message';
import readmeMd from './README.md?raw';

const meta: Meta = {
  title: 'Components/Icon',
  component: 'nv-icon', 
  argTypes: {
    name: {
      control: 'text',
      description: '图标名称'
    },
    color: {
      control: 'color',
      description: '图标颜色'
    },
    size: {
      control: 'text',
      description: '图标大小'
    },
    position: {
      control: 'select',
      options: ['', 'left', 'right'],
      description: '图标位置'
    }
  }
};

export default meta;
type Story = StoryObj;

// 将 README 转换为 HTML
const readmeHtml = marked.parse(readmeMd) as string;

/**
 * 生成图标的完整代码字符串
 */
const generateIconCode = (name: string, color?: string, size?: string, position?: string): string => {
  const attrs: string[] = [`name="${ name }"`];
  if (color) attrs.push(`color="${ color }"`);
  if (size) attrs.push(`size="${ size }"`);
  if (position) attrs.push(`position="${ position }"`);
  return `<nv-icon ${ attrs.join(' ') }></nv-icon>`;
};

/**
 * 创建带复制按钮的图标组件
 */
const createIconWithCopy = (name: string, color?: string, size?: string, position?: string) => {
  const iconCode = generateIconCode(name, color, size, position);
  
  return html`
    <div class="icon-item">
      <div class="icon-wrapper">
        <nv-icon 
          name="${ name }" 
          color="${ color || '' }"
          size="${ size || '' }"
          position="${ position || '' }"
        ></nv-icon>
      </div>
      <nv-button 
        class="icon-copy-btn"
        type="text"
        size="mini"
        @click=${ async(e: Event) => {
          e.stopPropagation();
          try {
            await navigator.clipboard.writeText(iconCode);
            Message.success(`已复制: ${ iconCode }`);
          } catch (err) {
            console.error('复制失败:', err);
            Message.error('复制失败');
          }
        } }
        title="复制代码: ${ iconCode }"
      >
        <nv-icon name="copy-document" size="14px"></nv-icon>
      </nv-button>
    </div>
  `;
};

/**
 * Icon 组件的完整文档和示例展示
 */
export const Overview: Story = {
  render: () => {
    return html`
      <style>
        .readme-container {
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .readme-container h1 {
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 16px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #eaecef;
        }
        .readme-container h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 32px 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #eaecef;
        }
        .readme-container p {
          margin: 8px 0;
        }
        .readme-container code {
          background: #f6f8fa;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 0.9em;
        }
        .readme-container pre {
          background: #f6f8fa;
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
        }
        .readme-container pre code {
          background: none;
          padding: 0;
        }
        .readme-container table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }
        .readme-container table th,
        .readme-container table td {
          border: 1px solid #dfe2e5;
          padding: 8px 12px;
          text-align: left;
        }
        .readme-container table th {
          background: #f6f8fa;
          font-weight: 600;
        }
        .readme-container table tr:nth-child(even) {
          background: #f9f9f9;
        }
        .story-section {
          margin: 32px 0;
        }
        .story-section h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: #333;
        }
        .story-section p {
          margin: 0 0 12px 0;
          color: #666;
        }
      </style>
      
      <div class="readme-container">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>常用图标</h3>
        <p>展示组件库中常用的图标集合</p>
        ${ CommonIcons.render?.(CommonIcons.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>图标颜色</h3>
        <p>使用 color 属性自定义图标颜色</p>
        ${ Colors.render?.(Colors.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>图标大小</h3>
        <p>使用 size 属性自定义图标大小</p>
        ${ Sizes.render?.(Sizes.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>图标与文字</h3>
        <p>图标与文字组合使用的示例</p>
        ${ WithText.render?.(WithText.args as any, {} as any) }
      </div>

      <nv-divider></nv-divider>

      <div class="story-section">
        <h3>所有图标</h3>
        <p>查看组件库中所有可用的图标，鼠标移入图标卡片，点击复制按钮可复制图标代码</p>
        ${ AllIcons.render?.(AllIcons.args as any, {} as any) }
      </div>
    `;
  }
};

export const Default: Story = {
  render: (args) => html`
    <style>
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fff;
        transition: all 0.3s;
        position: relative;
        min-width: 100px;
      }
      .icon-item:hover {
        border-color: #409eff;
        background: #ecf5ff;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
      }
      .icon-item .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .icon-item .icon-copy-btn {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .icon-item:hover .icon-copy-btn {
        opacity: 1;
      }
    </style>
    ${ createIconWithCopy(
      args.name || 's-home',
      args.color || undefined,
      args.size || undefined,
      args.position || undefined
    ) }
  `,
  args: {
    name: 's-home',
    color: '',
    size: '',
    position: ''
  }
};

export const CommonIcons: Story = {
  render: () => html`
    <style>
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fff;
        transition: all 0.3s;
        position: relative;
        min-width: 100px;
      }
      .icon-item:hover {
        border-color: #409eff;
        background: #ecf5ff;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
      }
      .icon-item .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .icon-item .icon-copy-btn {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .icon-item:hover .icon-copy-btn {
        opacity: 1;
      }
    </style>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      ${ createIconWithCopy('s-home') }
      ${ createIconWithCopy('user') }
      ${ createIconWithCopy('setting') }
      ${ createIconWithCopy('search') }
      ${ createIconWithCopy('close') }
      ${ createIconWithCopy('check') }
      ${ createIconWithCopy('success') }
      ${ createIconWithCopy('error') }
      ${ createIconWithCopy('warning') }
      ${ createIconWithCopy('info') }
    </div>
  `
};

export const Colors: Story = {
  render: () => html`
    <style>
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fff;
        transition: all 0.3s;
        position: relative;
        min-width: 100px;
      }
      .icon-item:hover {
        border-color: #409eff;
        background: #ecf5ff;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
      }
      .icon-item .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .icon-item .icon-copy-btn {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .icon-item:hover .icon-copy-btn {
        opacity: 1;
      }
    </style>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      ${ createIconWithCopy('s-home', '#409eff') }
      ${ createIconWithCopy('s-home', '#67c23a') }
      ${ createIconWithCopy('s-home', '#e6a23c') }
      ${ createIconWithCopy('s-home', '#f56c6c') }
      ${ createIconWithCopy('s-home', '#909399') }
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <style>
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fff;
        transition: all 0.3s;
        position: relative;
        min-width: 100px;
      }
      .icon-item:hover {
        border-color: #409eff;
        background: #ecf5ff;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
      }
      .icon-item .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .icon-item .icon-copy-btn {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .icon-item:hover .icon-copy-btn {
        opacity: 1;
      }
    </style>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      ${ createIconWithCopy('s-home', undefined, '16px') }
      ${ createIconWithCopy('s-home', undefined, '20px') }
      ${ createIconWithCopy('s-home', undefined, '24px') }
      ${ createIconWithCopy('s-home', undefined, '32px') }
      ${ createIconWithCopy('s-home', undefined, '40px') }
    </div>
  `
};

export const WithText: Story = {
  render: () => {
    const createIconWithText = (name: string, text: string, position: 'left' | 'right') => {
      const iconCode = generateIconCode(name, undefined, undefined, position);
      
      return html`
        <div class="icon-item">
          <div class="icon-text-wrapper" style="flex-direction: ${ position === 'left' ? 'row' : 'row-reverse' };">
            <nv-icon 
              name="${ name }" 
              position="${ position }"
            ></nv-icon>
            <span class="icon-text">${ text }</span>
          </div>
          <nv-button 
            class="icon-copy-btn"
            type="text"
            size="mini"
            @click=${ async(e: Event) => {
              e.stopPropagation();
              try {
                await navigator.clipboard.writeText(iconCode);
                Message.success(`已复制: ${ iconCode }`);
              } catch (err) {
                console.error('复制失败:', err);
                Message.error('复制失败');
              }
            } }
            title="复制代码: ${ iconCode }"
          >
            <nv-icon name="copy-document" size="14px"></nv-icon>
          </nv-button>
        </div>
      `;
    };
    
    return html`
      <style>
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          border: 1px solid #e4e7ed;
          border-radius: 4px;
          background: #fff;
          transition: all 0.3s;
          position: relative;
          min-width: 100px;
        }
        .icon-item:hover {
          border-color: #409eff;
          background: #ecf5ff;
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
        }
        .icon-item .icon-text-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .icon-item .icon-text {
          font-size: 14px;
          color: #606266;
        }
        .icon-item .icon-copy-btn {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .icon-item:hover .icon-copy-btn {
          opacity: 1;
        }
      </style>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        ${ createIconWithText('s-home', '首页', 'left') }
        ${ createIconWithText('setting', '设置', 'right') }
      </div>
    `;
  }
};

// 所有图标列表（从 style.scss 中提取）
const allIcons = [
  'ice-cream-round', 'ice-cream-square', 'lollipop', 'potato-strips', 'milk-tea',
  'ice-drink', 'ice-tea', 'coffee', 'orange', 'pear', 'apple', 'cherry', 'watermelon',
  'grape', 'refrigerator', 'goblet-square-full', 'goblet-square', 'goblet-full', 'goblet',
  'cold-drink', 'coffee-cup', 'water-cup', 'hot-water', 'ice-cream', 'dessert', 'sugar',
  'tableware', 'burger', 'knife-fork', 'fork-spoon', 'chicken', 'food', 'dish-1', 'dish',
  'moon-night', 'moon', 'cloudy-and-sunny', 'partly-cloudy', 'cloudy', 'sunny', 'sunset',
  'sunrise-1', 'sunrise', 'heavy-rain', 'lightning', 'light-rain', 'wind-power',
  'baseball', 'soccer', 'football', 'basketball', 'ship', 'truck', 'bicycle',
  'mobile-phone', 'service', 'key', 'unlock', 'lock', 'watch', 'watch-1', 'timer',
  'alarm-clock', 'map-location', 'delete-location', 'add-location', 'location-information',
  'location-outline', 'location', 'place', 'discover', 'first-aid-kit', 'trophy-1', 'trophy',
  'medal', 'medal-1', 'stopwatch', 'mic', 'copy-document', 'full-screen', 'switch-button',
  'aim', 'crop', 'odometer', 'time', 'bangzhu', 'close-notification', 'microphone',
  'turn-off-microphone', 'position', 'postcard', 'message', 'chat-line-square',
  'chat-dot-square', 'chat-dot-round', 'chat-square', 'chat-line-round', 'chat-round',
  'set-up', 'turn-off', 'open', 'connection', 'link', 'cpu', 'thumb', 'female', 'male',
  'guide', 'news', 'price-tag', 'discount', 'wallet', 'coin', 'money', 'bank-card',
  'box', 'present', 'sell', 'sold-out', 'shopping-bag-2', 'shopping-bag-1',
  'shopping-cart-2', 'shopping-cart-1', 'shopping-cart-full', 'smoking', 'no-smoking',
  'house', 'table-lamp', 'school', 'office-building', 'toilet-paper', 'notebook-2',
  'notebook-1', 'files', 'collection', 'receiving', 'suitcase-1', 'suitcase', 'film',
  'collection-tag', 'data-analysis', 'pie-chart', 'data-board', 'data-line', 'reading',
  'magic-stick', 'coordinate', 'mouse', 'brush', 'headset', 'umbrella', 'scissors',
  'mobile', 'attract', 'monitor', 'search', 'takeaway-box', 'paperclip', 'printer',
  'document-add', 'document', 'document-checked', 'document-copy', 'document-delete',
  'document-remove', 'tickets', 'folder-checked', 'folder-delete', 'folder-remove',
  'folder-add', 'folder-opened', 'folder', 'edit-outline', 'edit', 'date',
  'c-scale-to-original', 'view', 'loading', 'rank', 'sort-down', 'sort-up', 'sort',
  'finished', 'refresh-left', 'refresh-right', 'refresh', 'video-play', 'video-pause',
  'd-arrow-right', 'd-arrow-left', 'arrow-up', 'arrow-down', 'arrow-right', 'arrow-left',
  'top-right', 'top-left', 'top', 'bottom', 'right', 'back', 'bottom-right', 'bottom-left',
  'caret-top', 'caret-bottom', 'caret-right', 'caret-left', 'd-caret', 'share', 'menu',
  's-grid', 's-check', 's-data', 's-opportunity', 's-custom', 's-claim', 's-finance',
  's-comment', 's-flag', 's-marketing', 's-shop', 's-open', 's-management', 's-ticket',
  's-release', 's-home', 's-promotion', 's-operation', 's-unfold', 's-fold', 's-platform',
  's-order', 's-cooperation', 'bell', 'message-solid', 'video-camera', 'video-camera-solid',
  'camera', 'camera-solid', 'download', 'upload2', 'upload', 'picture-outline-round',
  'picture-outline', 'picture', 'close', 'check', 'plus', 'minus', 'help', 's-help',
  'circle-close', 'circle-check', 'circle-plus-outline', 'remove-outline', 'zoom-out',
  'zoom-in', 'error', 'success', 'circle-plus', 'remove', 'info', 'question',
  'warning-outline', 'warning', 'goods', 's-goods', 'star-off', 'star-on', 'more-outline',
  'more', 'phone-outline', 'phone', 'user', 'user-solid', 'setting', 's-tools', 'delete',
  'delete-solid', 'eleme', 'platform-eleme'
];

/**
 * 展示所有图标
 */
export const AllIcons: Story = {
  render: () => html`
    <style>
      .icons-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 16px;
        padding: 20px;
        max-width: 100%;
      }
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background: #fff;
        transition: all 0.3s;
      }
      .icon-item:hover {
        border-color: #409eff;
        background: #ecf5ff;
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
      }
      .icon-item .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
      .icon-item .icon-name {
        font-size: 12px;
        color: #606266;
        text-align: center;
        word-break: break-all;
        line-height: 1.4;
        margin-bottom: 8px;
      }
      .icon-item .icon-copy-btn {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .icon-item:hover .icon-copy-btn {
        opacity: 1;
      }
      .icons-header {
        padding: 20px;
        background: #f5f7fa;
        border-bottom: 1px solid #e4e7ed;
      }
      .icons-header h3 {
        margin: 0 0 8px 0;
        font-size: 18px;
        font-weight: 600;
        color: #303133;
      }
      .icons-header p {
        margin: 0;
        font-size: 14px;
        color: #909399;
      }
      .icons-count {
        margin-top: 8px;
        font-size: 14px;
        color: #606266;
      }
    </style>
    <div class="icons-header">
      <h3>所有图标 (${ allIcons.length } 个)</h3>
      <p>鼠标移入图标卡片，点击复制按钮可复制图标代码</p>
      <div class="icons-count">共 ${ allIcons.length } 个图标</div>
    </div>
    <div class="icons-container">
      ${ allIcons.map(iconName => {
        const iconCode = generateIconCode(iconName);
        return html`
          <div class="icon-item">
            <div class="icon-wrapper">
              <nv-icon name="${ iconName }" size="24px"></nv-icon>
            </div>
            <div class="icon-name">${ iconName }</div>
            <nv-button 
              class="icon-copy-btn"
              type="text"
              size="mini"
              @click=${ async(e: Event) => {
                e.stopPropagation();
                try {
                  await navigator.clipboard.writeText(iconCode);
                  Message.success(`已复制: ${ iconCode }`);
                } catch (err) {
                  console.error('复制失败:', err);
                  Message.error('复制失败');
                }
              } }
              title="复制代码: ${ iconCode }"
            >
              <nv-icon name="copy-document" size="14px"></nv-icon>
            </nv-button>
          </div>
        `;
      }) }
    </div>
  `
};
