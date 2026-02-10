# Loading 加载

加载数据时显示动效。

## 组件说明

Loading 加载组件用于在数据加载时向用户展示一个加载动画，提供良好的用户体验。支持全屏loading和区域loading两种模式。

## 属性

| 属性名        | 说明                         | 类型    | 可选值                               | 默认值   |
| ------------- | ---------------------------- | ------- | ------------------------------------ | -------- |
| fullscreen    | 是否全屏显示                 | boolean | —                                    | false    |
| block         | 是否块级显示                 | boolean | —                                    | false    |
| icon          | 自定义图标                   | string  | —                                    | —        |
| spinner       | 加载动画类型                 | string  | circular / spinner / dots / bars     | circular |
| size          | 加载动画尺寸                 | string  | mini / small / medium / large / huge | medium   |
| loading       | 是否显示 loading             | boolean | —                                    | true     |
| text          | 显示在加载图标下方的加载文案 | string  | —                                    | —        |
| spinner-color | 加载动画颜色                 | string  | —                                    | —        |
| text-color    | 文字颜色                     | string  | —                                    | —        |

## CSS 变量

### 文本相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-text-font-size` | 文本字体大小 |
| `--nv-loading-text-margin` | 文本外边距 |

### Circular加载器

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-circular-width` | circular加载器宽度 |
| `--nv-loading-circular-height` | circular加载器高度 |
| `--nv-loading-path-stroke-width` | circular路径描边宽度 |

### Spinner加载器

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-spinner-width` | spinner加载器宽度 |
| `--nv-loading-spinner-height` | spinner加载器高度 |
| `--nv-loading-spinner-blade-width` | spinner叶片宽度 |
| `--nv-loading-spinner-blade-height` | spinner叶片高度 |
| `--nv-loading-spinner-blade-radius` | spinner叶片圆角 |

### Dots加载器

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-dot-size` | 单个点大小 |
| `--nv-loading-dots-gap` | 点之间间距 |

### Bars加载器

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-bar-width` | 单个条宽度 |
| `--nv-loading-bar-height` | 单个条高度 |
| `--nv-loading-bar-radius` | 单个条圆角 |
| `--nv-loading-bars-gap` | 条之间间距 |

### 自定义图标

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-custom-icon-size` | 自定义图标大小 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-loading-mask-background-color` | 遮罩层背景颜色 |
| `--nv-loading-text-font-color` | 文本颜色 |
| `--nv-loading-path-stroke-color` | circular路径描边颜色 |
| `--nv-loading-spinner-color` | spinner颜色 |
| `--nv-loading-dots-color` | dots颜色 |
| `--nv-loading-bars-color` | bars颜色 |
| `--nv-loading-custom-icon-color` | 自定义图标颜色 |

## CSS Parts

| Name    | Description  | CSS Selector      |
| ------- | ------------ | ----------------- |
| base    | 根属性容器   | `::part(base)`    |
| mask    | 遮罩层元素   | `::part(mask)`    |
| spinner | 加载图标容器 | `::part(spinner)` |
| text    | 加载文本元素 | `::part(text)`    |
