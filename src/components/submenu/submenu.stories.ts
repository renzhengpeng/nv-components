import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../menu-item/index';
import '../icon/index';

const meta: Meta = {
  title: 'Components/Submenu',
  component: 'nv-submenu',
  argTypes: {
    index: {
      control: 'text',
      description: '唯一标识符'
    },
    label: {
      control: 'text',
      description: '标题'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    opened: {
      control: 'boolean',
      description: '是否展开'
    },
    icon: {
      control: 'text',
      description: '图标'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <nv-submenu
      index="${args.index}"
      label="${args.label}"
      ?disabled="${args.disabled}"
      ?opened="${args.opened}"
      icon="${args.icon}"
    >
      <nv-menu-item index="1-1">选项1</nv-menu-item>
      <nv-menu-item index="1-2">选项2</nv-menu-item>
      <nv-menu-item index="1-3">选项3</nv-menu-item>
    </nv-submenu>
  `,
  args: {
    index: '1',
    label: '导航菜单',
    disabled: false,
    opened: false,
    icon: ''
  }
};

export const WithIcon: Story = {
  render: () => html`
    <nv-submenu index="1" label="导航菜单">
      <nv-icon slot="icon" name="setting"></nv-icon>
      <nv-menu-item index="1-1">选项1</nv-menu-item>
      <nv-menu-item index="1-2">选项2</nv-menu-item>
      <nv-menu-item index="1-3">选项3</nv-menu-item>
    </nv-submenu>
  `
};

export const Opened: Story = {
  render: () => html`
    <nv-submenu index="1" label="导航菜单" opened>
      <nv-icon slot="icon" name="location"></nv-icon>
      <nv-menu-item index="1-1">选项1</nv-menu-item>
      <nv-menu-item index="1-2">选项2</nv-menu-item>
      <nv-menu-item index="1-3">选项3</nv-menu-item>
    </nv-submenu>
  `
};

export const Disabled: Story = {
  render: () => html`
    <nv-submenu index="1" label="导航菜单（禁用）" disabled>
      <nv-icon slot="icon" name="setting"></nv-icon>
      <nv-menu-item index="1-1">选项1</nv-menu-item>
      <nv-menu-item index="1-2">选项2</nv-menu-item>
      <nv-menu-item index="1-3">选项3</nv-menu-item>
    </nv-submenu>
  `
};

export const Nested: Story = {
  render: () => html`
    <nv-submenu index="1" label="一级菜单" opened>
      <nv-icon slot="icon" name="location"></nv-icon>
      <nv-submenu index="1-1" label="二级菜单" opened>
        <nv-menu-item index="1-1-1">三级选项1</nv-menu-item>
        <nv-menu-item index="1-1-2">三级选项2</nv-menu-item>
      </nv-submenu>
      <nv-menu-item index="1-2">二级选项</nv-menu-item>
    </nv-submenu>
  `
};
