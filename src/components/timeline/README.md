# Timeline 时间线

可视化地呈现时间流信息。

## 组件说明

Timeline 时间线组件用于垂直展示一系列事件的时间流信息。

## CSS 变量

| 变量名                   | 说明           | 默认值 |
| ------------------------ | -------------- | ------ |
| --nv-timeline-node-color | 时间线节点颜色 | —      |
| --nv-timeline-line-color | 时间线颜色     | —      |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |

## Timeline-Item CSS Parts

| Name      | Description | CSS Selector        |
| --------- | ----------- | ------------------- |
| base      | 根容器元素  | `::part(base)`      |
| tail      | 连线        | `::part(tail)`      |
| node      | 节点容器    | `::part(node)`      |
| wrapper   | 内容包装器  | `::part(wrapper)`   |
| content   | 内容区域    | `::part(content)`   |
| timestamp | 时间戳区域  | `::part(timestamp)` |
