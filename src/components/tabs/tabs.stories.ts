import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import { sourceCode } from '../../utils/story-helpers';
import './index';
import '../tab-pane/index';
import { Message } from '../message/message';
import readmeMd from './README.md?raw';
import '../divider/index';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Tabs',
  component: 'nv-tabs', 
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值，选中选项卡的 name'
    },
    type: {
      control: 'select',
      options: ['', 'card', 'border-card'],
      description: '风格类型'
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: '选项卡位置'
    },
    closable: {
      control: 'boolean',
      description: '标签是否可关闭'
    },
    addable: {
      control: 'boolean',
      description: '标签是否可添加'
    },
    editable: {
      control: 'boolean',
      description: '标签是否可编辑'
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
      <!-- README 文档 -->
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <!-- 分隔线 -->
      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <!-- 示例区域 -->
      <div class="examples-section">
        <!-- 基础用法 -->
        <div class="example-item">
          <h3 class="example-title">基础用法</h3>
          <p class="example-desc">基础的、简洁的标签页</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 卡片风格 -->
        <div class="example-item">
          <h3 class="example-title">卡片风格</h3>
          <p class="example-desc">使用 type="card" 设置卡片风格的标签页</p>
          <div class="example-demo">
            ${ CardType.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带边框卡片 -->
        <div class="example-item">
          <h3 class="example-title">带边框卡片</h3>
          <p class="example-desc">使用 type="border-card" 设置带边框的卡片风格</p>
          <div class="example-demo">
            ${ BorderCardType.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 标签位置 -->
        <div class="example-item">
          <h3 class="example-title">标签位置</h3>
          <p class="example-desc">可以通过 position 设置标签的位置</p>
          <div class="example-demo">
            ${ TabPositions.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 禁用状态 -->
        <div class="example-item">
          <h3 class="example-title">禁用状态</h3>
          <p class="example-desc">标签页可以设置为禁用状态</p>
          <div class="example-demo">
            ${ Disabled.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可关闭 -->
        <div class="example-item">
          <h3 class="example-title">可关闭标签</h3>
          <p class="example-desc">设置 closable 属性使标签可关闭</p>
          <div class="example-demo">
            ${ Closable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可增加 -->
        <div class="example-item">
          <h3 class="example-title">可增加标签</h3>
          <p class="example-desc">设置 addable 属性可以动态增加标签</p>
          <div class="example-demo">
            ${ Addable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可编辑 -->
        <div class="example-item">
          <h3 class="example-title">可编辑标签</h3>
          <p class="example-desc">双击标签可以编辑标签名称</p>
          <div class="example-demo">
            ${ Editable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可关闭和编辑 -->
        <div class="example-item">
          <h3 class="example-title">可关闭和编辑</h3>
          <p class="example-desc">结合 closable 和 editable 属性</p>
          <div class="example-demo">
            ${ ClosableAndEditable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 全部功能 -->
        <div class="example-item">
          <h3 class="example-title">全部功能</h3>
          <p class="example-desc">展示所有功能的综合示例</p>
          <div class="example-demo">
            ${ AllFeatures.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带边框卡片不同位置 -->
        <div class="example-item">
          <h3 class="example-title">带边框卡片不同位置</h3>
          <p class="example-desc">border-card 类型支持不同的标签位置</p>
          <div class="example-demo">
            ${ BorderCardPositions.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带边框卡片可关闭 -->
        <div class="example-item">
          <h3 class="example-title">带边框卡片可关闭</h3>
          <p class="example-desc">border-card 类型支持可关闭标签</p>
          <div class="example-demo">
            ${ BorderCardClosable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 带边框卡片可增加 -->
        <div class="example-item">
          <h3 class="example-title">带边框卡片可增加</h3>
          <p class="example-desc">border-card 类型支持动态增加标签</p>
          <div class="example-demo">
            ${ BorderCardWithAddable.render?.({} as any, {} as any) }
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
        .readme-content h3 {
          color: #303133;
          font-size: 18px;
          font-weight: 600;
          margin: 24px 0 12px 0;
        }
        .readme-content h4 {
          color: #606266;
          font-size: 16px;
          font-weight: 600;
          margin: 20px 0 8px 0;
        }
        .readme-content p {
          color: #606266;
          line-height: 1.8;
          font-size: 15px;
          margin: 12px 0;
        }
        .readme-content ul,
        .readme-content ol {
          margin: 12px 0;
          padding-left: 24px;
          color: #606266;
          line-height: 1.8;
        }
        .readme-content li {
          margin: 6px 0;
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
          background: #f5f7fa;
          padding: 16px;
          border-radius: 4px;
          overflow-x: auto;
          margin: 16px 0;
          border-left: 4px solid #409EFF;
        }
        .readme-content pre code {
          background: transparent;
          padding: 0;
          color: #303133;
          font-size: 14px;
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
        .readme-content table code {
          background: #f5f7fa;
          padding: 2px 6px;
          border-radius: 3px;
          color: #e96900;
        }
        .readme-content blockquote {
          margin: 16px 0;
          padding: 12px 16px;
          background: #ecf5ff;
          border-left: 4px solid #409EFF;
          border-radius: 4px;
          color: #606266;
        }
        .readme-content hr {
          margin: 24px 0;
          border: none;
          border-top: 1px solid #e4e7ed;
        }
        
        /* 示例区域样式 */
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
    <nv-tabs
      value="${ args.value }"
      type="${ args.type }"
      position="${ args.position }"
    >
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `,
  args: {
    value: 'first',
    type: '',
    position: 'top'
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-tabs value="first">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const CardType: Story = {
  render: () => html`
    <nv-tabs value="first" type="card">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const BorderCardType: Story = {
  render: () => html`
    <nv-tabs value="first" type="border-card">
      <nv-tab-pane name="first" label="用户管理">
        <p>用户管理内容</p>
        <p>border-card 类型适合需要包含内容的场景，整个组件有边框和阴影效果。</p>
      </nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">
        <p>配置管理内容</p>
        <p>标签栏有灰色背景，激活的标签与内容区域背景融为一体。</p>
      </nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">
        <p>角色管理内容</p>
        <p>内容区域自动添加了内边距。</p>
      </nv-tab-pane>
    </nv-tabs>
  `
};

export const TabPositions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>顶部</h4>
        <nv-tabs value="first" position="top">
          <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>右侧</h4>
        <nv-tabs value="first" position="right" style="height: 200px;">
          <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>底部</h4>
        <nv-tabs value="first" position="bottom">
          <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>左侧</h4>
        <nv-tabs value="first" position="left" style="height: 200px;">
          <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-tabs value="first">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理" disabled>配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const Closable: Story = {
  render: () => html`
    <nv-tabs value="first" closable>
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const Addable: Story = {
  render: () => {
    let tabCount = 3;
    return html`
      <nv-tabs
        id="addable-tabs"
        value="first"
        addable
        @nv-tab-add="${ () => {
          const tabsElement = document.getElementById('addable-tabs') as any;
          if (!tabsElement) return;

          tabCount++;
          const newName = `tab${ tabCount }`;
          const newLabel = `新标签 ${ tabCount }`;

          // 创建新的 tab-pane 元素
          const newTabPane = document.createElement('nv-tab-pane');
          newTabPane.setAttribute('name', newName);
          newTabPane.setAttribute('label', newLabel);
          newTabPane.textContent = `${ newLabel }内容`;

          // 添加到 tabs 元素中
          tabsElement.appendChild(newTabPane);

          // 切换到新添加的标签
          tabsElement.value = newName;

          // 触发 tabs 组件更新
          if (tabsElement._updateTabs) {
            tabsElement._updateTabs();
          }

          Message.success(`添加了标签: ${ newLabel }`);
        } }"
      >
        <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
        <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
      </nv-tabs>
      <p style="margin-top: 16px; color: #666;">点击右侧的 + 按钮可以添加新标签</p>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode`
<nv-tabs
  id="addable-tabs"
  value="first"
  addable
>
  <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
  <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
  <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
</nv-tabs>

<script>
  // 监听添加事件
  const tabs = document.getElementById('addable-tabs');
  let tabCount = 3;

  tabs.addEventListener('nv-tab-add', () => {
    tabCount++;
    const newName = \`tab\${tabCount}\`;
    const newLabel = \`新标签 \${tabCount}\`;

    // 创建新的 tab-pane 元素
    const newTabPane = document.createElement('nv-tab-pane');
    newTabPane.setAttribute('name', newName);
    newTabPane.setAttribute('label', newLabel);
    newTabPane.textContent = \`\${newLabel}内容\`;

    // 添加到 tabs 元素中
    tabs.appendChild(newTabPane);

    // 切换到新添加的标签
    tabs.value = newName;
  });
</script>`
      }
    }
  }
};

export const Editable: Story = {
  render: () => html`
    <nv-tabs value="first" editable>
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
    <p style="margin-top: 16px; color: #666;">双击标签可以编辑标签名称</p>
  `
};

export const ClosableAndEditable: Story = {
  render: () => html`
    <nv-tabs value="first" closable editable>
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
    <p style="margin-top: 16px; color: #666;">标签可关闭，双击可编辑</p>
  `
};

export const AllFeatures: Story = {
  render: () => {
    let tabCount = 3;

    return html`
      <nv-tabs
        id="all-features-tabs"
        value="first"
        closable
        addable
        editable
        @nv-tab-click="${ (e: CustomEvent) => {
          Message.info(`点击了标签: ${ e.detail.name }`);
        } }"
        @nv-tab-remove="${ (e: CustomEvent) => {
          Message.success(`移除了标签: ${ e.detail.name }`);
        } }"
        @nv-tab-add="${ () => {
          const tabsElement = document.getElementById('all-features-tabs') as any;
          if (!tabsElement) return;

          tabCount++;
          const newName = `tab${ tabCount }`;
          const newLabel = `新标签 ${ tabCount }`;

          // 创建新的 tab-pane 元素
          const newTabPane = document.createElement('nv-tab-pane');
          newTabPane.setAttribute('name', newName);
          newTabPane.setAttribute('label', newLabel);
          newTabPane.textContent = `${ newLabel }内容`;

          // 添加到 tabs 元素中
          tabsElement.appendChild(newTabPane);

          // 切换到新添加的标签
          tabsElement.value = newName;

          // 触发 tabs 组件更新
          if (tabsElement._updateTabs) {
            tabsElement._updateTabs();
          }

          Message.success(`添加了标签: ${ newLabel }`);
        } }"
      >
        <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
        <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
      </nv-tabs>
      <p style="margin-top: 16px; color: #666;">
        功能说明：<br>
        1. 点击标签触发 nv-tab-click 事件<br>
        2. 点击 × 按钮关闭标签，触发 nv-tab-remove 事件<br>
        3. 点击 + 按钮触发 nv-tab-add 事件并实际创建新标签<br>
        4. 双击标签可以编辑标签名称，触发 nv-tab-edit-start 和 nv-tab-edit-end 事件
      </p>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode`
<nv-tabs
  id="all-features-tabs"
  value="first"
  closable
  addable
  editable
>
  <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
  <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
  <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
</nv-tabs>

<script>
  const tabs = document.getElementById('all-features-tabs');
  let tabCount = 3;

  // 监听标签点击
  tabs.addEventListener('nv-tab-click', (e) => {
    console.log('点击了标签:', e.detail.name);
  });

  // 监听标签移除
  tabs.addEventListener('nv-tab-remove', (e) => {
    console.log('移除了标签:', e.detail.name);
  });

  // 监听标签添加
  tabs.addEventListener('nv-tab-add', () => {
    tabCount++;
    const newName = \`tab\${tabCount}\`;
    const newLabel = \`新标签 \${tabCount}\`;

    const newTabPane = document.createElement('nv-tab-pane');
    newTabPane.setAttribute('name', newName);
    newTabPane.setAttribute('label', newLabel);
    newTabPane.textContent = \`\${newLabel}内容\`;

    tabs.appendChild(newTabPane);
    tabs.value = newName;
  });

  // 监听标签编辑
  tabs.addEventListener('nv-tab-edit-end', (e) => {
    console.log('编辑了标签:', e.detail);
  });
</script>`
      }
    }
  }
};

export const BorderCardPositions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>顶部 (Top)</h4>
        <nv-tabs value="first" type="border-card" position="top">
          <nv-tab-pane name="first" label="用户管理">
            <p>用户管理内容</p>
            <p>标签在顶部，这是最常用的布局方式。</p>
          </nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
          <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>右侧 (Right)</h4>
        <nv-tabs value="first" type="border-card" position="right" style="height: 200px;">
          <nv-tab-pane name="first" label="用户管理">
            <p>用户管理内容</p>
            <p>标签在右侧。</p>
          </nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
          <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>底部 (Bottom)</h4>
        <nv-tabs value="first" type="border-card" position="bottom">
          <nv-tab-pane name="first" label="用户管理">
            <p>用户管理内容</p>
            <p>标签在底部。</p>
          </nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
          <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
      <div>
        <h4>左侧 (Left)</h4>
        <nv-tabs value="first" type="border-card" position="left" style="height: 200px;">
          <nv-tab-pane name="first" label="用户管理">
            <p>用户管理内容</p>
            <p>标签在左侧。</p>
          </nv-tab-pane>
          <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
          <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
        </nv-tabs>
      </div>
    </div>
  `
};

export const BorderCardClosable: Story = {
  render: () => html`
    <nv-tabs value="first" type="border-card" closable>
      <nv-tab-pane name="first" label="用户管理">
        <p>用户管理内容</p>
        <p>border-card 类型支持可关闭标签。</p>
      </nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
      <nv-tab-pane name="fourth" label="定时任务">定时任务内容</nv-tab-pane>
    </nv-tabs>
    <p style="margin-top: 16px; color: #666;">点击 × 按钮可以关闭标签</p>
  `
};

export const BorderCardWithAddable: Story = {
  render: () => {
    let tabCount = 3;
    return html`
      <nv-tabs
        id="border-card-addable-tabs"
        value="first"
        type="border-card"
        addable
        @nv-tab-add="${ () => {
          const tabsElement = document.getElementById('border-card-addable-tabs') as any;
          if (!tabsElement) return;

          tabCount++;
          const newName = `tab${ tabCount }`;
          const newLabel = `新标签 ${ tabCount }`;

          const newTabPane = document.createElement('nv-tab-pane');
          newTabPane.setAttribute('name', newName);
          newTabPane.setAttribute('label', newLabel);
          newTabPane.innerHTML = `<p>${ newLabel }内容</p><p>这是动态添加的标签页。</p>`;

          tabsElement.appendChild(newTabPane);
          tabsElement.value = newName;

          if (tabsElement._updateTabs) {
            tabsElement._updateTabs();
          }

          Message.success(`添加了标签: ${ newLabel }`);
        } }"
      >
        <nv-tab-pane name="first" label="用户管理">
          <p>用户管理内容</p>
          <p>border-card 类型支持可添加标签。</p>
        </nv-tab-pane>
        <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
        <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
      </nv-tabs>
      <p style="margin-top: 16px; color: #666;">点击 + 按钮可以添加新标签</p>
    `;
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode`
<nv-tabs
  id="border-card-addable-tabs"
  value="first"
  type="border-card"
  addable
>
  <nv-tab-pane name="first" label="用户管理">
    <p>用户管理内容</p>
    <p>border-card 类型支持可添加标签。</p>
  </nv-tab-pane>
  <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
  <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
</nv-tabs>

<script>
  // 监听添加事件
  const tabs = document.getElementById('border-card-addable-tabs');
  let tabCount = 3;

  tabs.addEventListener('tab-add', () => {
    tabCount++;
    const newName = \`tab\${tabCount}\`;
    const newLabel = \`新标签 \${tabCount}\`;

    // 创建新的 tab-pane
    const newTabPane = document.createElement('nv-tab-pane');
    newTabPane.setAttribute('name', newName);
    newTabPane.setAttribute('label', newLabel);
    newTabPane.innerHTML = \`<p>\${newLabel}内容</p><p>这是动态添加的标签页。</p>\`;

    // 添加到 tabs 中
    tabs.appendChild(newTabPane);
    tabs.value = newName;
  });
</script>`
      }
    }
  }
};
