# Row 行

通过基础的 24 分栏，迅速简便地创建布局。

## 组件说明

Row 行组件是栅格布局系统的容器组件，需配合 Col 列组件使用。通过 Row 和 Col 的组合可以快速创建响应式布局。

## 属性

| 属性名  | 说明                      | 类型   | 可选值                                                             | 默认值 |
| ------- | ------------------------- | ------ | ------------------------------------------------------------------ | ------ |
| gutter  | 栅格间隔                  | number | —                                                                  | 0      |
| justify | flex 布局下的水平排列方式 | string | start / end / center / space-around / space-between / space-evenly | start  |
| align   | flex 布局下的垂直排列方式 | string | top / middle / bottom                                              | top    |
| tag     | 自定义元素标签            | string | —                                                                  | div    |

## CSS 变量

| 变量名          | 说明     | 默认值 |
| --------------- | -------- | ------ |
| --nv-row-gutter | 栅格间隔 | —      |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
