import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../timeline/index';

const meta: Meta = {
  title: 'Components/TimelineItem',
  component: 'nv-timeline-item', 
  argTypes: {
    timestamp: {
      control: 'text',
      description: '时间戳'
    },
    type: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'error', 'info'],
      description: '节点类型'
    },
    icon: {
      control: 'text',
      description: '图标名称'
    },
    color: {
      control: 'color',
      description: '节点颜色'
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
      description: '时间戳位置'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <nv-timeline>
      <nv-timeline-item
        timestamp="${ args.timestamp }"
        type="${ args.type }"
        icon="${ args.icon }"
        color="${ args.color }"
        placement="${ args.placement }"
      >
        ${ args.children || '活动内容' }
      </nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02">活动内容</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03">活动内容</nv-timeline-item>
    </nv-timeline>
  `,
  args: {
    timestamp: '2024-01-01',
    type: '',
    icon: '',
    color: '',
    placement: 'bottom',
    children: '活动内容'
  }
};

export const Basic: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01 12:00:00">活动开始</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02 12:00:00">活动进行中</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03 12:00:00">活动结束</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithTypes: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" type="primary">主要节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" type="success">成功节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" type="warning">警告节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-04" type="error">错误节点</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-05" type="info">信息节点</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" icon="check">活动开始</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" icon="edit">活动进行中</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" icon="delete">活动结束</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithPlacement: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" placement="top">顶部时间戳</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" placement="bottom">底部时间戳</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03">默认时间戳</nv-timeline-item>
    </nv-timeline>
  `
};

export const WithColor: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01" color="#409eff">自定义颜色</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02" color="#67c23a">自定义颜色</nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03" color="#e6a23c">自定义颜色</nv-timeline-item>
    </nv-timeline>
  `
};

export const Complex: Story = {
  render: () => html`
    <nv-timeline>
      <nv-timeline-item timestamp="2024-01-01 12:00:00" type="primary" icon="check">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动开始</h4>
          <p style="margin: 0; color: #909399;">活动正式开始，所有参与者已就位</p>
        </div>
      </nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-02 12:00:00" type="success" icon="edit">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动进行中</h4>
          <p style="margin: 0; color: #909399;">活动正在顺利进行中</p>
        </div>
      </nv-timeline-item>
      <nv-timeline-item timestamp="2024-01-03 12:00:00" type="warning" icon="warning">
        <div>
          <h4 style="margin: 0 0 8px 0;">活动结束</h4>
          <p style="margin: 0; color: #909399;">活动已圆满结束</p>
        </div>
      </nv-timeline-item>
    </nv-timeline>
  `
};
