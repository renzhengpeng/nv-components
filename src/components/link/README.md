# Link 文字链接

文字超链接。

## 组件说明

Link 文字链接组件用于在文字中创建超链接。支持多种类型、下划线和禁用状态。

## 属性

| 属性名    | 说明           | 类型   | 可选值                                          | 默认值  |
| --------- | -------------- | ------ | ----------------------------------------------- | ------- |
| type      | 类型           | string | primary / success / warning / error / info      | primary |
| underline | 下划线显示方式 | string | always / hover / none                           | hover   |
| disabled  | 是否禁用状态   | boolean | —                                              | false   |
| href      | 原生 href 属性 | string | —                                               | —       |
| target    | 原生 target 属性 | string | _self /_blank / _parent /_top               | _self   |
| icon      | 图标类名       | string | —                                               | —       |
| size      | 链接尺寸       | string | mini / small / medium / large / huge            | medium  |

## 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| icon    | 自定义图标 |

## CSS 变量

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-link-font-size-{size}` | 各尺寸字体大小 |
| `--nv-link-icon-margin-right` | 图标右外边距 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-link-font-color` | 默认文本颜色 |
| `--nv-link-font-color-disabled` | 禁用状态文本颜色 |
| `--nv-link-font-color-primary` | primary类型文本颜色 |
| `--nv-link-font-color-primary-hover` | primary类型hover状态文本颜色 |
| `--nv-link-font-color-primary-active` | primary类型active状态文本颜色 |
| `--nv-link-font-color-primary-disabled` | primary类型禁用状态文本颜色 |
| `--nv-link-font-color-success` | success类型文本颜色 |
| `--nv-link-font-color-success-hover` | success类型hover状态文本颜色 |
| `--nv-link-font-color-success-active` | success类型active状态文本颜色 |
| `--nv-link-font-color-success-disabled` | success类型禁用状态文本颜色 |
| `--nv-link-font-color-warning` | warning类型文本颜色 |
| `--nv-link-font-color-warning-hover` | warning类型hover状态文本颜色 |
| `--nv-link-font-color-warning-active` | warning类型active状态文本颜色 |
| `--nv-link-font-color-warning-disabled` | warning类型禁用状态文本颜色 |
| `--nv-link-font-color-error` | error类型文本颜色 |
| `--nv-link-font-color-error-hover` | error类型hover状态文本颜色 |
| `--nv-link-font-color-error-active` | error类型active状态文本颜色 |
| `--nv-link-font-color-error-disabled` | error类型禁用状态文本颜色 |
| `--nv-link-font-color-info` | info类型文本颜色 |
| `--nv-link-font-color-info-hover` | info类型hover状态文本颜色 |
| `--nv-link-font-color-info-active` | info类型active状态文本颜色 |
| `--nv-link-font-color-info-disabled` | info类型禁用状态文本颜色 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根链接元素  | `::part(base)` |
