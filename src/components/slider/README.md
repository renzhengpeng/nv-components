# Slider 滑块

通过拖动滑块在一个固定区间内进行选择。

## 组件说明

Slider 滑块组件用于在连续或离散的区间内通过拖动选择值。支持范围选择和步进设置。

## 属性

| 属性名       | 说明           | 类型    | 可选值                               | 默认值 |
| ------------ | -------------- | ------- | ------------------------------------ | ------ |
| value        | 绑定值         | number  | —                                    | 0      |
| min          | 最小值         | number  | —                                    | 0      |
| max          | 最大值         | number  | —                                    | 100    |
| step         | 步长           | number  | —                                    | 1      |
| disabled     | 是否禁用       | boolean | —                                    | false  |
| vertical     | 是否竖向模式   | boolean | —                                    | false  |
| size         | 滑块尺寸       | string  | mini / small / medium / large / huge | medium |
| show-input   | 是否显示输入框 | boolean | —                                    | false  |
| show-stops   | 是否显示间断点 | boolean | —                                    | false  |
| show-tooltip | 是否显示提示   | boolean | —                                    | true   |

## 事件

| 事件名    | 说明           | 回调参数   |
| --------- | -------------- | ---------- |
| nv-change | 值改变时触发   | 改变后的值 |
| nv-input  | 数据改变时触发 | 改变后的值 |

## CSS 变量

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-slider-height` | 水平滑块高度 |
| `--nv-slider-vertical-height` | 垂直滑块高度 |
| `--nv-slider-vertical-width` | 垂直滑块宽度 |
| `--nv-slider-runway-border-radius` | 滑道圆角 |
| `--nv-slider-bar-border-radius` | 进度条圆角 |
| `--nv-slider-button-border-radius` | 滑块圆角 |
| `--nv-slider-runway-height-{size}` | 各尺寸滑道高度 |
| `--nv-slider-bar-height-{size}` | 各尺寸进度条高度 |
| `--nv-slider-vertical-runway-width` | 垂直滑道宽度 |
| `--nv-slider-vertical-bar-width` | 垂直进度条宽度 |
| `--nv-slider-button-width-{size}` | 各尺寸滑块宽度 |
| `--nv-slider-button-height-{size}` | 各尺寸滑块高度 |
| `--nv-slider-button-border-width` | 滑块边框宽度 |
| `--nv-slider-stop-width-{size}` | 各尺寸断点宽度 |
| `--nv-slider-stop-height-{size}` | 各尺寸断点高度 |
| `--nv-slider-stop-border-radius` | 断点圆角 |
| `--nv-slider-input-width` | 输入框宽度 |
| `--nv-slider-input-margin-left` | 输入框左外边距 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-slider-runway-background-color` | 滑道背景颜色 |
| `--nv-slider-bar-background-color` | 进度条背景颜色 |
| `--nv-slider-button-border-color` | 滑块边框颜色 |
| `--nv-slider-button-background-color` | 滑块背景颜色 |
| `--nv-slider-stop-background-color` | 断点背景颜色 |
| `--nv-slider-disabled-bar-background-color` | 禁用状态进度条背景颜色 |
| `--nv-slider-disabled-button-border-color` | 禁用状态滑块边框颜色 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name           | Description    | CSS Selector             |
| -------------- | -------------- | ------------------------ |
| base           | 根容器元素     | `::part(base)`           |
| runway         | 滑块轨道背景   | `::part(runway)`         |
| bar            | 已选进度条     | `::part(bar)`            |
| handle-wrapper | 滑块按钮包装层 | `::part(handle-wrapper)` |
| handle         | 滑块按钮       | `::part(handle)`         |
| stop           | 间断点元素     | `::part(stop)`           |
| input          | 数字输入框容器 | `::part(input)`          |
