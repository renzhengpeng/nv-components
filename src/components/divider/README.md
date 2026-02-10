# Divider 分割线

区隔内容的分割线。

## 组件说明

Divider 分割线组件用于分隔不同的内容区域。支持水平和垂直两种方向，可以设置文案位置。

## 属性

| 属性名           | 说明                 | 类型   | 可选值                | 默认值     |
| ---------------- | -------------------- | ------ | --------------------- | ---------- |
| direction        | 设置分割线方向       | string | horizontal / vertical | horizontal |
| content-position | 设置分割线文案的位置 | string | left / right / center | center     |

## 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 设置分割线文案的内容 |

## CSS 变量

| 变量名                    | 说明           | 默认值 |
| ------------------------- | -------------- | ------ |
| --nv-divider-border-color | 分割线颜色     | —      |
| --nv-divider-text-color   | 分割线文字颜色 | —      |

## CSS Parts

| Name | Description    | CSS Selector   |
| ---- | -------------- | -------------- |
| base | 根容器元素     | `::part(base)` |
| text | 分割线文案元素 | `::part(text)` |
