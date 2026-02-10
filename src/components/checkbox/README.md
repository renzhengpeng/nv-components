# Checkbox 多选框

一组备选项中进行多选。

## 组件说明

Checkbox 多选框组件用于在一组选项中进行多项选择。可以单独使用，也可以配合 CheckboxGroup 组件使用。

## 属性

| 属性名        | 说明                                    | 类型    | 可选值                               | 默认值 |
| ------------- | --------------------------------------- | ------- | ------------------------------------ | ------ |
| value         | 绑定值                                  | string  | —                                    | —      |
| label         | 选中状态的值                            | string  | —                                    | —      |
| name          | 原生 name 属性（用于表单提交）          | string  | —                                    | —      |
| form          | 关联的表单 id                           | string  | —                                    | —      |
| required      | 是否必填                                | boolean | —                                    | false  |
| checked       | 当前是否勾选                            | boolean | —                                    | false  |
| disabled      | 是否禁用                                | boolean | —                                    | false  |
| border        | 是否显示边框                            | boolean | —                                    | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | —                                    | false  |
| size          | 多选框的尺寸                            | string  | mini / small / medium / large / huge | medium |

## 事件

| 事件名    | 说明                     | 回调参数   |
| --------- | ------------------------ | ---------- |
| nv-change | 当绑定值变化时触发的事件 | 更新后的值 |
| nv-focus  | 获得焦点时触发           | —          |
| nv-blur   | 失去焦点时触发           | —          |

## 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 多选框的文本内容 |

## CSS 变量

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-checkbox-input-width` | 复选框宽度 |
| `--nv-checkbox-input-height` | 复选框高度 |
| `--nv-checkbox-input-border-radius` | 复选框圆角 |
| `--nv-checkbox-after-height` | 勾选标记高度 |
| `--nv-checkbox-after-left` | 勾选标记左偏移 |
| `--nv-checkbox-after-top` | 勾选标记上偏移 |
| `--nv-checkbox-after-width` | 勾选标记宽度 |
| `--nv-checkbox-indeterminate-left` | indeterminate标记左偏移 |
| `--nv-checkbox-indeterminate-top` | indeterminate标记上偏移 |
| `--nv-checkbox-indeterminate-width` | indeterminate标记宽度 |
| `--nv-checkbox-indeterminate-height` | indeterminate标记高度 |
| `--nv-checkbox-label-padding-left` | 标签左内边距 |
| `--nv-checkbox-bordered-padding` | 带边框时的内边距 |
| `--nv-checkbox-bordered-height` | 带边框时的高度 |
| `--nv-checkbox-bordered-height-{size}` | 各尺寸带边框时高度 |
| `--nv-checkbox-bordered-padding-{size}` | 各尺寸带边框时内边距 |
| `--nv-checkbox-label-font-size-{size}` | 各尺寸标签字体大小 |
| `--nv-checkbox-focus-outline-width` | 聚焦轮廓宽度 |
| `--nv-checkbox-focus-outline-offset` | 聚焦轮廓偏移 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-checkbox-input-border-color` | 边框颜色 |
| `--nv-checkbox-input-background-color` | 背景颜色 |
| `--nv-checkbox-input-border-color-checked` | 选中状态边框颜色 |
| `--nv-checkbox-input-background-color-checked` | 选中状态背景颜色 |
| `--nv-checkbox-input-border-color-disabled` | 禁用状态边框颜色 |
| `--nv-checkbox-input-background-color-disabled` | 禁用状态背景颜色 |
| `--nv-checkbox-input-background-color-disabled-checked` | 禁用选中状态背景颜色 |
| `--nv-checkbox-input-background-color-disabled-indeterminate` | 禁用indeterminate状态背景颜色 |
| `--nv-checkbox-after-border-color` | 勾选标记颜色 |
| `--nv-checkbox-after-border-color-disabled` | 禁用状态勾选标记颜色 |
| `--nv-checkbox-after-border-color-disabled-checked` | 禁用选中状态勾选标记颜色 |
| `--nv-checkbox-indeterminate-background-color` | indeterminate标记背景颜色 |
| `--nv-checkbox-indeterminate-background-color-disabled` | 禁用indeterminate标记背景颜色 |
| `--nv-checkbox-label-font-color` | 标签文本颜色 |
| `--nv-checkbox-label-font-color-checked` | 选中状态标签文本颜色 |
| `--nv-checkbox-label-font-color-disabled` | 禁用状态标签文本颜色 |
| `--nv-checkbox-bordered-border-color` | 带边框时边框颜色 |
| `--nv-checkbox-bordered-border-color-checked` | 带边框选中状态边框颜色 |
| `--nv-checkbox-bordered-border-color-disabled` | 带边框禁用状态边框颜色 |
| `--nv-checkbox-focus-outline-color` | 聚焦轮廓颜色 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name  | Description          | CSS Selector    |
| ----- | -------------------- | --------------- |
| base  | 根容器元素           | `::part(base)`  |
| input | 复选框输入框显示元素 | `::part(input)` |
| label | 标签及文本内容       | `::part(label)` |
