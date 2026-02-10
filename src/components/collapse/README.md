# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 组件说明

Collapse 折叠面板组件用于将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收起其内容。

## 属性

| 属性名    | 说明           | 类型           | 可选值 | 默认值 |
| --------- | -------------- | -------------- | ------ | ------ |
| value     | 当前激活的面板 | string / array | —      | —      |
| accordion | 是否手风琴模式 | boolean        | —      | false  |

## 事件

| 事件名    | 说明                   | 回调参数                    |
| --------- | ---------------------- | --------------------------- |
| nv-change | 当前激活面板改变时触发 | activeNames: array / string |

## CSS 变量

| 变量名                           | 说明             | 默认值 |
| -------------------------------- | ---------------- | ------ |
| --nv-collapse-header-background  | 面板标题背景颜色 | —      |
| --nv-collapse-content-background | 面板内容背景颜色 | —      |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |

## Collapse-Item CSS Parts

| Name    | Description | CSS Selector      |
| ------- | ----------- | ----------------- |
| base    | 根容器元素  | `::part(base)`    |
| header  | 头部区域    | `::part(header)`  |
| title   | 标题内容    | `::part(title)`   |
| icon    | 展开图标    | `::part(icon)`    |
| wrapper | 内容包装器  | `::part(wrapper)` |
| content | 内容区域    | `::part(content)` |
