# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 组件说明

Progress 进度条组件用于展示操作的当前进度。支持线性和环形两种展示方式，可以自定义进度条颜色和文字。

## 属性

| 属性名       | 说明                     | 类型    | 可选值                               | 默认值 |
| ------------ | ------------------------ | ------- | ------------------------------------ | ------ |
| percentage   | 百分比                   | number  | 0-100                                | 0      |
| type         | 进度条类型               | string  | line / circle / dashboard            | line   |
| status       | 进度条当前状态           | string  | success / warning / error            | —      |
| stroke-width | 进度条的宽度             | number  | —                                    | 6      |
| text-inside  | 进度条显示文字内置在内   | boolean | —                                    | false  |
| without-text | 是否不显示进度条文字内容 | boolean | —                                    | false  |
| color        | 进度条背景色             | string  | —                                    | —      |
| size         | 进度条尺寸               | string  | mini / small / medium / large / huge | medium |

## CSS 变量

### 布局相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-progress-border-radius` | 进度条圆角 |
| `--nv-progress-inner-margin` | 内部进度条外边距 |
| `--nv-progress-text-margin-left` | 文本左外边距 |
| `--nv-progress-text-min-width` | 文本最小宽度 |

### 尺寸相关 - 线型进度条

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-progress-inner-height-{size}` | 各尺寸内部进度条高度 |
| `--nv-progress-inner-font-size-{size}` | 各尺寸内部文字字体大小 |
| `--nv-progress-text-font-size-{size}` | 各尺寸外部文字字体大小 |
| `--nv-progress-text-inside-font-size-{size}` | 各尺寸内置文字字体大小 |

### 尺寸相关 - 环形进度条

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-progress-circle-width-{size}` | 各尺寸环形进度条宽度 |
| `--nv-progress-circle-height-{size}` | 各尺寸环形进度条高度 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-progress-inner-background-color` | 进度条轨道背景颜色 |
| `--nv-progress-inner-font-color` | 进度条内部文字颜色 |
| `--nv-progress-text-font-color` | 进度条外部文字颜色 |
| `--nv-progress-text-inside-font-color` | 进度条内置文字颜色 |
| `--nv-progress-bar-background-color-success` | success状态进度条背景颜色 |
| `--nv-progress-bar-background-color-warning` | warning状态进度条背景颜色 |
| `--nv-progress-bar-background-color-error` | error状态进度条背景颜色 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name  | Description | CSS Selector    |
| ----- | ----------- | --------------- |
| base  | 根容器元素  | `::part(base)`  |
| outer | 外部容器    | `::part(outer)` |
| inner | 轨道容器    | `::part(inner)` |
| bar   | 进度条      | `::part(bar)`   |
| text  | 文本容器    | `::part(text)`  |
