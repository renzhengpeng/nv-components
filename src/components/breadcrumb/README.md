# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并可向上返回。

## 组件说明

`Breadcrumb` 用于展示页面路径导航，参考 antd 5.x 的常见交互：前面的路径可点击跳转，最后一项通常为当前页并以普通文本展示。

## 属性

| 属性名    | 说明     | 类型   | 可选值 | 默认值 |
| --------- | -------- | ------ | ------ | ------ |
| separator | 全局分隔符 | string | —      | /      |

## 插槽

| 插槽名  | 说明 |
| ------- | ---- |
| default | 面包屑项内容，建议使用 `nv-breadcrumb-item` |

## CSS 变量

| 变量名                         | 说明           | 默认值 |
| ------------------------------ | -------------- | ------ |
| --nv-breadcrumb-font-size      | 面包屑字体大小 | 14px   |
| --nv-breadcrumb-line-height    | 面包屑行高     | 22px   |
| --nv-breadcrumb-color          | 面包屑文字颜色 | var(--nv-neutral-color-font-2) |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
