# CheckboxGroup 多选框组

用于管理一组多选框。

## 组件说明

CheckboxGroup 多选框组组件用于管理一组多选框，统一控制选中状态和值。

## 属性

| 属性名   | 说明                           | 类型    | 可选值                               | 默认值 |
| -------- | ------------------------------ | ------- | ------------------------------------ | ------ |
| value    | 绑定值                         | array   | —                                    | []     |
| name     | 原生 name 属性                 | string  | —                                    | —      |
| disabled | 是否禁用                       | boolean | —                                    | false  |
| size     | 多选框组尺寸                   | string  | mini / small / medium / large / huge | medium |
| min      | 可被勾选的 checkbox 的最小数量 | number  | —                                    | 0      |
| max      | 可被勾选的 checkbox 的最大数量 | number  | —                                    | 0      |

## 事件

| 事件名    | 说明                     | 回调参数   |
| --------- | ------------------------ | ---------- |
| nv-change | 当绑定值变化时触发的事件 | 更新后的值 |

## 插槽

| 插槽名  | 说明                        |
| ------- | --------------------------- |
| default | 自定义内容（Checkbox 组件） |

## CSS 变量

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-checkbox-group-spacing` | 多选框之间的间距 | 30px |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
