# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 组件说明

Tooltip 为基于 nv-popup 的语义封装，透传 trigger、open-delay、hide-delay、focus 等能力，支持多种触发方式、位置和主题，可自定义提示内容。

## 属性

| 属性名    | 说明             | 类型    | 可选值                                                                                                    | 默认值 |
| --------- | ---------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| content   | 显示的内容       | string  | —                                                                                                         | —      |
| placement | 提示框出现的位置 | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top    |
| disabled  | 是否禁用         | boolean | —                                                                                                         | false  |
| offset    | 出现位置的偏移量 | number  | —                                                                                                         | 12     |
| trigger   | 触发方式         | string  | hover / click / focus / manual                                                                            | hover  |
| open-delay | 延迟显示（毫秒） | number | — | 100 |
| hide-delay | 延迟隐藏（毫秒） | number | — | 100 |
| visible   | 手动控制显示状态 | boolean | —                                                                                                         | —      |
| arrow     | 是否显示箭头     | boolean | —                                                                                                         | true   |

## 插槽

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| default | 触发 Tooltip 显示的元素 |
| content | 自定义提示内容          |

## CSS 变量

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-tooltip-background-color` | 提示框背景颜色 | #303133 |
| `--nv-tooltip-font-color` | 提示框文本颜色 | #fff |
| `--nv-tooltip-border-radius` | 提示框圆角 | 4px |
| `--nv-tooltip-padding` | 提示框内边距 | 8px 12px |
| `--nv-tooltip-font-size` | 提示框字体大小 | 12px |
| `--nv-tooltip-line-height` | 提示框行高 | 1.5 |
| `--nv-tooltip-max-width` | 提示框最大宽度 | 200px |

## CSS Parts

| Name    | Description         | CSS Selector      |
| ------- | ------------------- | ----------------- |
| base    | 根属性容器（Popup） | `::part(base)`    |
| trigger | 触发器容器          | `::part(trigger)` |
| content | 提示内容容器        | `::part(content)` |
