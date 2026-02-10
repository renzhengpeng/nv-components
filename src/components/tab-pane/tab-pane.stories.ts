import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../tabs/index';

const meta: Meta = {
  title: 'Components/TabPane',
  component: 'nv-tab-pane', 
  argTypes: {
    name: {
      control: 'text',
      description: '选项卡的 name'
    },
    label: {
      control: 'text',
      description: '选项卡的标签'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <nv-tabs value="${ args.name }">
      <nv-tab-pane
        name="${ args.name }"
        label="${ args.label }"
        ?disabled="${ args.disabled }"
      >
        ${ args.children || '选项卡内容' }
      </nv-tab-pane>
      <nv-tab-pane name="second" label="选项卡2">选项卡2内容</nv-tab-pane>
      <nv-tab-pane name="third" label="选项卡3">选项卡3内容</nv-tab-pane>
    </nv-tabs>
  `,
  args: {
    name: 'first',
    label: '选项卡1',
    disabled: false,
    children: '选项卡内容'
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

export const Disabled: Story = {
  render: () => html`
    <nv-tabs value="first">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理" disabled>配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const WithCardType: Story = {
  render: () => html`
    <nv-tabs value="first" type="card">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const WithBorderCardType: Story = {
  render: () => html`
    <nv-tabs value="first" type="border-card">
      <nv-tab-pane name="first" label="用户管理">用户管理内容</nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">配置管理内容</nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">角色管理内容</nv-tab-pane>
    </nv-tabs>
  `
};

export const Complex: Story = {
  render: () => html`
    <nv-tabs value="first">
      <nv-tab-pane name="first" label="用户管理">
        <div style="padding: 20px;">
          <h3>用户管理</h3>
          <p>这是用户管理的内容</p>
        </div>
      </nv-tab-pane>
      <nv-tab-pane name="second" label="配置管理">
        <div style="padding: 20px;">
          <h3>配置管理</h3>
          <p>这是配置管理的内容</p>
        </div>
      </nv-tab-pane>
      <nv-tab-pane name="third" label="角色管理">
        <div style="padding: 20px;">
          <h3>角色管理</h3>
          <p>这是角色管理的内容</p>
        </div>
      </nv-tab-pane>
    </nv-tabs>
  `
};
