# Card 卡片

将信息聚合在卡片容器中展示。

## 组件说明

Card 卡片组件用于承载信息，可以包含标题、内容和底部区域。支持三种阴影显示时机（always/hover/never），可以通过插槽灵活定制卡片的各个部分。

## 属性

| 属性名 | 说明         | 类型   | 可选值                 | 默认值 |
| ------ | ------------ | ------ | ---------------------- | ------ |
| header | 卡片标题     | string | —                      | —      |
| shadow | 阴影显示时机 | string | always / hover / never | always |

## 插槽

| 插槽名  | 说明                                   |
| ------- | -------------------------------------- |
| default | 卡片内容                               |
| header  | 卡片头部内容（当不使用 header 属性时） |
| footer  | 卡片底部内容                           |

## CSS 变量

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-card-border-radius` | 卡片圆角 |
| `--nv-card-header-padding` | 头部内边距 |
| `--nv-card-body-padding` | 主体内边距 |
| `--nv-card-footer-padding` | 底部内边距 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-card-border-color` | 卡片边框颜色 |
| `--nv-card-header-border-color` | 头部边框颜色 |
| `--nv-card-footer-border-color` | 底部边框颜色 |
| `--nv-card-background-color` | 卡片背景颜色 |
| `--nv-card-font-color` | 卡片文本颜色 |
| `--nv-card-shadow` | 卡片阴影 |

## CSS Parts

| Name   | Description  | CSS Selector     |
| ------ | ------------ | ---------------- |
| base   | 根容器元素   | `::part(base)`   |
| header | 头部容器元素 | `::part(header)` |
| body   | 内容容器元素 | `::part(body)`   |
| footer | 底部容器元素 | `::part(footer)` |
