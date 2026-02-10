# Rate 评分

评分组件。

## 组件说明

Rate 评分组件用于对事物进行快速的评级操作，或对评价进行展示。

## 属性

| 属性名         | 说明             | 类型    | 可选值                               | 默认值                           |
| -------------- | ---------------- | ------- | ------------------------------------ | -------------------------------- |
| value          | 绑定值           | number  | —                                    | 0                                |
| max            | 最大分值         | number  | —                                    | 5                                |
| disabled       | 是否为只读       | boolean | —                                    | false                            |
| allow-half     | 是否允许半选     | boolean | —                                    | false                            |
| show-text      | 是否显示辅助文字 | boolean | —                                    | false                            |
| show-score     | 是否显示当前分数 | boolean | —                                    | false                            |
| texts          | 辅助文字数组     | array   | —                                    | ['极差', '差', '一般', '好', '极好'] |
| size           | 评分尺寸         | string  | mini / small / medium / large / huge | medium                           |
| score-template | 分数显示模板     | string  | —                                    | {value}                          |

## 事件

| 事件名    | 说明           | 回调参数   |
| --------- | -------------- | ---------- |
| nv-change | 分值改变时触发 | 改变后的值 |

## CSS 变量

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-rate-icon-size-{size}` | 各尺寸图标大小 |
| `--nv-rate-text-font-size-{size}` | 各尺寸辅助文字字体大小 |
| `--nv-rate-score-font-size-{size}` | 各尺寸分数字体大小 |
| `--nv-rate-gap` | 评分项与文字/分数之间的间距 |
| `--nv-rate-item-gap` | 评分项之间的间距 |
| `--nv-rate-text-margin-left` | 辅助文字左外边距 |
| `--nv-rate-score-margin-left` | 分数左外边距 |

### 动画相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-rate-item-transition-duration` | 评分项过渡动画时长 | 0.2s |
| `--nv-rate-item-hover-scale` | hover状态评分项缩放比例 | 1.1 |
| `--nv-rate-icon-transition-duration` | 图标过渡动画时长 | 0.2s |

### 颜色相关

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-rate-icon-color` | 未选中图标颜色 | #c0c4cc |
| `--nv-rate-icon-color-active` | 选中图标颜色 | #f7ba2a |
| `--nv-rate-text-color` | 辅助文字颜色 | #606266 |
| `--nv-rate-score-color` | 分数颜色 | #606266 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name  | Description          | CSS Selector    |
| ----- | -------------------- | --------------- |
| base  | 根容器元素           | `::part(base)`  |
| items | 评分项容器           | `::part(items)` |
| item  | 单个评分项           | `::part(item)`  |
| icon  | 评分图标 (Icon 组件) | `::part(icon)`  |
| text  | 辅助文字元素         | `::part(text)`  |
| score | 分数显示元素         | `::part(score)` |
