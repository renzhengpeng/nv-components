# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 组件说明

Switch 开关组件用于切换两种状态，提供直观的开关效果。支持禁用状态和自定义文字描述。

## 属性

| 属性名         | 说明                        | 类型                      | 可选值                               | 默认值 |
| -------------- | --------------------------- | ------------------------- | ------------------------------------ | ------ |
| value          | 绑定值                      | boolean / string / number | —                                    | false  |
| name           | 原生 name 属性（用于表单提交） | string                    | —                                    | —      |
| form           | 关联的表单 id               | string                    | —                                    | —      |
| required       | 是否必填                    | boolean                   | —                                    | false  |
| disabled       | 是否禁用                    | boolean                   | —                                    | false  |
| active-text    | switch 打开时的文字描述     | string                    | —                                    | —      |
| inactive-text  | switch 关闭时的文字描述     | string                    | —                                    | —      |
| active-value   | switch 打开时的值           | boolean / string / number | —                                    | true   |
| inactive-value | switch 关闭时的值           | boolean / string / number | —                                    | false  |
| active-color   | switch 打开时的背景色       | string                    | —                                    | —      |
| inactive-color | switch 关闭时的背景色       | string                    | —                                    | —      |
| active-icon    | switch 打开时显示的图标     | string                    | —                                    | —      |
| inactive-icon  | switch 关闭时显示的图标     | string                    | —                                    | —      |
| width          | switch 的宽度（像素）       | number                    | —                                    | 0      |
| size           | switch 的大小               | string                    | mini / small / medium / large / huge | medium |

## 事件

| 事件名    | 说明                            | 回调参数   |
| --------- | ------------------------------- | ---------- |
| nv-change | switch 状态发生变化时的回调函数 | 新状态的值 |

## CSS 变量

Switch组件提供了非常丰富的CSS变量，支持各种尺寸和状态的精细控制。

### 尺寸相关 - 字体

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-font-size-{size}` | 各尺寸字体大小 |
| `--nv-switch-inner-font-size-{size}` | 各尺寸内部文字字体大小 |
| `--nv-switch-icon-font-size` | 图标字体大小 |
| `--nv-switch-icon-font-size-{size}` | 各尺寸图标字体大小 |
| `--nv-switch-label-font-size-{size}` | 各尺寸标签字体大小 |

### 尺寸相关 - 高度和行高

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-height-{size}` | 各尺寸高度 |
| `--nv-switch-line-height-{size}` | 各尺寸行高 |

### 尺寸相关 - 宽度

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-core-min-width-{size}` | 各尺寸核心最小宽度 |
| `--nv-switch-toggle-width-{size}` | 各尺寸滑块宽度 |
| `--nv-switch-toggle-height-{size}` | 各尺寸滑块高度 |

### 尺寸相关 - 圆角

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-core-border-radius-{size}` | 各尺寸核心圆角 |
| `--nv-switch-toggle-border-radius` | 滑块圆角 |

### 尺寸相关 - 内边距

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-core-padding-{size}` | 各尺寸核心内边距 |
| `--nv-switch-inner-padding-{size}` | 各尺寸内部文字内边距 |
| `--nv-switch-inner-padding-right-checked-{size}` | 各尺寸选中状态内部文字右内边距 |
| `--nv-switch-inner-padding-left-unchecked-{size}` | 各尺寸未选中状态内部文字左内边距 |

### 尺寸相关 - 位置

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-toggle-top` | 滑块上偏移 |
| `--nv-switch-toggle-left` | 滑块左偏移 |
| `--nv-switch-toggle-left-checked-{size}` | 各尺寸选中状态滑块左偏移 |
| `--nv-switch-icon-left-checked` | 选中状态图标左偏移 |
| `--nv-switch-icon-left-unchecked` | 未选中状态图标左偏移 |
| `--nv-switch-inner-left-checked-{size}` | 各尺寸选中状态内部文字左偏移 |
| `--nv-switch-inner-left-unchecked-{size}` | 各尺寸未选中状态内部文字左偏移 |
| `--nv-switch-label-margin` | 标签外边距 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-switch-core-border-color-unchecked` | 未选中状态边框颜色 |
| `--nv-switch-core-background-color-unchecked` | 未选中状态背景颜色 |
| `--nv-switch-core-border-color-checked` | 选中状态边框颜色 |
| `--nv-switch-core-background-color-checked` | 选中状态背景颜色 |
| `--nv-switch-toggle-background-color` | 滑块背景颜色 |
| `--nv-switch-inner-font-color` | 内部文字颜色 |
| `--nv-switch-icon-color` | 图标颜色 |
| `--nv-switch-label-font-color-default` | 标签默认文本颜色 |
| `--nv-switch-label-font-color-active` | 标签激活文本颜色 |
| `--nv-switch-disabled-opacity` | 禁用状态透明度 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸
| --nv-switch-width     | switch 宽度        | —      |
| --nv-switch-height    | switch 高度        | —      |

## CSS Parts

| Name  | Description  | CSS Selector    |
| ----- | ------------ | --------------- |
| base  | 根容器元素   | `::part(base)`  |
| core  | 开关主体容器 | `::part(core)`  |
| icon  | 状态图标元素 | `::part(icon)`  |
| inner | 状态文字容器 | `::part(inner)` |
