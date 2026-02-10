# Modal 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 组件说明

Modal 模态对话框组件用于在页面上弹出一个对话框，展示信息或进行交互。支持自定义标题、内容和底部区域，可以控制是否显示遮罩层、关闭按钮，以及通过点击遮罩或按 ESC 键关闭对话框等功能。

## 属性

| 属性名                | 说明                               | 类型    | 可选值 | 默认值 |
| --------------------- | ---------------------------------- | ------- | ------ | ------ |
| visible               | 是否显示对话框                     | boolean | —      | false  |
| label                 | 对话框标题                         | string  | —      | —      |
| width                 | 对话框宽度                         | string  | —      | 50%    |
| show-close            | 是否显示关闭按钮                   | boolean | —      | true   |
| close-on-click-modal  | 是否可以通过点击遮罩层关闭         | boolean | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭          | boolean | —      | true   |
| lock-scroll           | 是否在对话框出现时将 body 滚动锁定 | boolean | —      | true   |
| modal                 | 是否显示遮罩层               | boolean | —      | true   |
| append-to-body        | 遮罩层是否插入至 body 元素上 | boolean | —      | true   |
| custom-class          | 自定义类名                   | string  | —      | —      |
| center                | 是否让对话框水平垂直居中     | boolean | —      | false  |

## 事件

| 事件名        | 说明                           | 回调参数 |
| ------------- | ------------------------------ | -------- |
| nv-show       | 模态框弹出时触发               | —        |
| nv-after-show | 模态框弹出且过渡效果完成后触发 | —        |
| nv-hide       | 模态框隐藏时触发               | —        |
| nv-after-hide | 模态框隐藏且过渡效果完成后触发 | —        |
| nv-close      | 模态框关闭时触发               | —        |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 对话框的内容   |
| header  | 对话框头部内容 |
| footer  | 对话框底部内容 |

## CSS 变量

### 布局相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-z-index` | 层级 | 2000 |
| `--nv-modal-wrapper-padding` | 包装层内边距 | 20px |
| `--nv-modal-dialog-border-radius` | 对话框圆角 | 4px |
| `--nv-modal-dialog-box-shadow` | 对话框阴影 | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |
| `--nv-modal-dialog-max-height` | 对话框最大高度 | calc(100vh - 40px) |
| `--nv-modal-transition-duration` | 过渡动画时长 | 0.3s |

### 头部相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-header-padding` | 头部内边距 | 20px 20px 10px |
| `--nv-modal-header-border-bottom` | 头部底部边框 | 1px solid #e4e7ed |
| `--nv-modal-header-font-size` | 头部字体大小 | 18px |
| `--nv-modal-header-font-weight` | 头部字重 | 500 |
| `--nv-modal-header-color` | 头部文本颜色 | #303133 |

### 关闭按钮相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-close-color` | 关闭按钮颜色 | #909399 |
| `--nv-modal-close-font-size` | 关闭按钮字体大小 | 16px |
| `--nv-modal-close-transition-duration` | 关闭按钮过渡时长 | 0.3s |
| `--nv-modal-close-color-hover` | hover状态关闭按钮颜色 | #303133 |

### 主体相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-body-padding` | 主体内边距 | 30px 20px |
| `--nv-modal-body-color` | 主体文本颜色 | #606266 |
| `--nv-modal-body-font-size` | 主体字体大小 | 14px |
| `--nv-modal-body-line-height` | 主体行高 | 1.5 |

### 底部相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-footer-padding` | 底部内边距 | 10px 20px 20px |
| `--nv-modal-footer-border-top` | 底部顶部边框 | 1px solid #e4e7ed |
| `--nv-modal-footer-text-align` | 底部文本对齐 | right |

### 颜色相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-modal-background-color` | 遮罩层背景颜色 | rgba(0, 0, 0, 0.5) |
| `--nv-modal-dialog-background-color` | 对话框背景颜色 | #fff |

## CSS Parts

| Name   | Description          | CSS Selector     |
| ------ | -------------------- | ---------------- |
| base   | 根属性容器（遮罩层） | `::part(base)`   |
| mask   | 遮罩层               | `::part(mask)`   |
| panel  | 对话框面板           | `::part(panel)`  |
| header | 头部区域             | `::part(header)` |
| close  | 关闭按钮             | `::part(close)`  |
| body   | 主体内容区域         | `::part(body)`   |
| footer | 底部区域             | `::part(footer)` |
