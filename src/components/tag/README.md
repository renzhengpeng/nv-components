# Tag 标签

用于标记和选择。

## 组件说明

Tag 标签组件用于标记和分类。支持多种类型和主题，可以动态添加和删除。

## 属性

| 属性名   | 说明           | 类型    | 可选值                               | 默认值 |
| -------- | -------------- | ------- | ------------------------------------ | ------ |
| type     | 类型           | string  | success / info / warning / error     | —      |
| closable | 是否可关闭     | boolean | —                                    | false  |
| hit      | 是否有边框描边 | boolean | —                                    | false  |
| color    | 背景色         | string  | —                                    | —      |
| size     | 尺寸           | string  | mini / small / medium / large / huge | medium |
| effect   | 主题           | string  | dark / light / plain                 | light  |

## 事件

| 事件名   | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| nv-close | 关闭 Tag 时触发的事件 | —        |

## 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

## CSS 变量

Tag组件提供了丰富的CSS变量，支持不同尺寸、类型和效果。

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-border-radius` | 标签圆角 |
| `--nv-tag-close-border-radius` | 关闭按钮圆角 |
| `--nv-tag-padding-{size}` | 各尺寸内边距 |
| `--nv-tag-font-size-{size}` | 各尺寸字体大小 |
| `--nv-tag-close-font-size` | 关闭按钮字体大小 |
| `--nv-tag-height-{size}` | 各尺寸高度 |
| `--nv-tag-line-height-{size}` | 各尺寸行高 |
| `--nv-tag-close-width` | 关闭按钮宽度 |
| `--nv-tag-close-height` | 关闭按钮高度 |
| `--nv-tag-close-line-height` | 关闭按钮行高 |
| `--nv-tag-close-top` | 关闭按钮上偏移 |
| `--nv-tag-close-right` | 关闭按钮右偏移 |
| `--nv-tag-close-scale-{size}` | 小尺寸关闭按钮缩放比例 |

### 颜色相关 - 默认

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-background-color-default` | 默认背景颜色 |
| `--nv-tag-border-color-default` | 默认边框颜色 |
| `--nv-tag-font-color-default` | 默认文本颜色 |
| `--nv-tag-close-color` | 关闭按钮颜色 |
| `--nv-tag-close-color-hover` | hover状态关闭按钮颜色 |

### 颜色相关 - Success

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-background-color-success-light` | success light效果背景颜色 |
| `--nv-tag-border-color-success-light` | success light效果边框颜色 |
| `--nv-tag-font-color-success` | success文本颜色 |
| `--nv-tag-background-color-success-dark` | success dark效果背景颜色 |
| `--nv-tag-border-color-success-dark` | success dark效果边框颜色 |
| `--nv-tag-font-color-success-dark` | success dark效果文本颜色 |
| `--nv-tag-background-color-success-plain` | success plain效果背景颜色 |
| `--nv-tag-border-color-success-plain` | success plain效果边框颜色 |

### 颜色相关 - Info

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-background-color-info-light` | info light效果背景颜色 |
| `--nv-tag-border-color-info-light` | info light效果边框颜色 |
| `--nv-tag-font-color-info` | info文本颜色 |
| `--nv-tag-background-color-info-dark` | info dark效果背景颜色 |
| `--nv-tag-border-color-info-dark` | info dark效果边框颜色 |
| `--nv-tag-font-color-info-dark` | info dark效果文本颜色 |
| `--nv-tag-background-color-info-plain` | info plain效果背景颜色 |
| `--nv-tag-border-color-info-plain` | info plain效果边框颜色 |

### 颜色相关 - Warning

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-background-color-warning-light` | warning light效果背景颜色 |
| `--nv-tag-border-color-warning-light` | warning light效果边框颜色 |
| `--nv-tag-font-color-warning` | warning文本颜色 |
| `--nv-tag-background-color-warning-dark` | warning dark效果背景颜色 |
| `--nv-tag-border-color-warning-dark` | warning dark效果边框颜色 |
| `--nv-tag-font-color-warning-dark` | warning dark效果文本颜色 |
| `--nv-tag-background-color-warning-plain` | warning plain效果背景颜色 |
| `--nv-tag-border-color-warning-plain` | warning plain效果边框颜色 |

### 颜色相关 - Error

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-background-color-error-light` | error light效果背景颜色 |
| `--nv-tag-border-color-error-light` | error light效果边框颜色 |
| `--nv-tag-font-color-error` | error文本颜色 |
| `--nv-tag-background-color-error-dark` | error dark效果背景颜色 |
| `--nv-tag-border-color-error-dark` | error dark效果边框颜色 |
| `--nv-tag-font-color-error-dark` | error dark效果文本颜色 |
| `--nv-tag-background-color-error-plain` | error plain效果背景颜色 |
| `--nv-tag-border-color-error-plain` | error plain效果边框颜色 |

### 其他

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-tag-hit-border-color` | hit状态边框颜色 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name  | Description  | CSS Selector    |
| ----- | ------------ | --------------- |
| base  | 根标签元素   | `::part(base)`  |
| close | 关闭图标元素 | `::part(close)` |
