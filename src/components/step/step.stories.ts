import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../steps/index';

const meta: Meta = {
  title: 'Components/Step',
  component: 'nv-step',
  argTypes: {
    label: {
      control: 'text',
      description: '标题'
    },
    description: {
      control: 'text',
      description: '描述'
    },
    icon: {
      control: 'text',
      description: '图标名称'
    },
    status: {
      control: 'select',
      options: ['', 'wait', 'process', 'finish', 'success', 'error'],
      description: '步骤状态'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <nv-steps active="1">
      <nv-step
        label="${ args.title }"
        description="${ args.description }"
        icon="${ args.icon }"
        status="${ args.status }"
      ></nv-step>
      <nv-step label="步骤2" description="步骤2的描述"></nv-step>
      <nv-step label="步骤3" description="步骤3的描述"></nv-step>
    </nv-steps>
  `,
  args: {
    label: '步骤1',
    description: '步骤1的描述',
    icon: '',
    status: ''
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-steps active="1">
      <nv-step label="步骤1" description="步骤1的描述"></nv-step>
      <nv-step label="步骤2" description="步骤2的描述"></nv-step>
      <nv-step label="步骤3" description="步骤3的描述"></nv-step>
      <nv-step label="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <nv-steps active="1">
      <nv-step label="步骤1" description="步骤1的描述" icon="edit"></nv-step>
      <nv-step label="步骤2" description="步骤2的描述" icon="upload"></nv-step>
      <nv-step label="步骤3" description="步骤3的描述" icon="picture"></nv-step>
      <nv-step label="步骤4" description="步骤4的描述" icon="check"></nv-step>
    </nv-steps>
  `
};

export const WithStatus: Story = {
  render: () => html`
    <nv-steps active="2" finish-status="success">
      <nv-step label="步骤1" description="步骤1的描述" status="finish"></nv-step>
      <nv-step label="步骤2" description="步骤2的描述" status="process"></nv-step>
      <nv-step label="步骤3" description="步骤3的描述" status="error"></nv-step>
      <nv-step label="步骤4" description="步骤4的描述" status="wait"></nv-step>
    </nv-steps>
  `
};

export const Vertical: Story = {
  render: () => html`
    <nv-steps active="1" direction="vertical">
      <nv-step label="步骤1" description="步骤1的描述"></nv-step>
      <nv-step label="步骤2" description="步骤2的描述"></nv-step>
      <nv-step label="步骤3" description="步骤3的描述"></nv-step>
      <nv-step label="步骤4" description="步骤4的描述"></nv-step>
    </nv-steps>
  `
};

export const Simple: Story = {
  render: () => html`
    <nv-steps active="1" simple>
      <nv-step label="步骤1"></nv-step>
      <nv-step label="步骤2"></nv-step>
      <nv-step label="步骤3"></nv-step>
      <nv-step label="步骤4"></nv-step>
    </nv-steps>
  `
};
