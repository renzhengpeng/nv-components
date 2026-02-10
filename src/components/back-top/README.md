# BackTop 回到顶部

返回页面顶部的操作按钮。

## 组件说明

BackTop 回到顶部组件用于快速返回页面顶部，适用于内容较长的页面。

## 属性

| 属性名            | 说明                             | 类型   | 可选值 | 默认值    |
| ----------------- | -------------------------------- | ------ | ------ | --------- |
| target            | 触发滚动的对象                   | string | —      | —         |
| visibility-height | 滚动高度达到此参数值才出现       | number | —      | 400       |
| right             | 控制其显示位置，距离页面右边距   | string | —      | 40px      |
| bottom            | 控制其显示位置，距离页面底部距离 | string | —      | 40px      |
| icon              | 图标名称                         | string | —      | caret-top |

## 事件

| 事件名   | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| nv-click | 点击按钮触发的事件 | —        |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## CSS 变量

| 变量名                            | 说明             | 默认值                          |
| --------------------------------- | ---------------- | ------------------------------- |
| --nv-back-top-right               | 距离页面右边距   | 40px                            |
| --nv-back-top-bottom              | 距离页面底部距离 | 40px                            |
| --nv-back-top-width               | 按钮宽度         | 40px                            |
| --nv-back-top-height              | 按钮高度         | 40px                            |
| --nv-back-top-box-shadow          | 按钮阴影         | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |
| --nv-back-top-z-index             | 层级             | 1000                            |
| --nv-back-top-transition-duration | 过渡动画时长     | 0.3s                            |

## CSS Parts

| Name   | Description  | CSS Selector     |
| ------ | ------------ | ---------------- |
| base   | 根容器元素   | `::part(base)`   |
| button | 回到顶部按钮 | `::part(button)` |
