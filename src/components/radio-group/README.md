# RadioGroup 单选框组

用于管理一组单选框。

## 组件说明

RadioGroup 单选框组组件用于管理一组单选框，统一控制选中状态和值。

## 属性

| 属性名     | 说明                             | 类型    | 可选值                               | 默认值 |
| ---------- | -------------------------------- | ------- | ------------------------------------ | ------ |
| value      | 绑定值                           | string  | —                                    | —      |
| name       | 原生 name 属性                   | string  | —                                    | —      |
| disabled   | 是否禁用                         | boolean | —                                    | false  |
| size       | 单选框组尺寸                     | string  | mini / small / medium / large / huge | medium |
| text-color | 按钮形式的激活文字颜色           | string  | —                                    | —      |
| fill       | 按钮形式的激活填充色和边框色     | string  | —                                    | —      |

## 事件

| 事件名    | 说明                   | 回调参数              |
| --------- | ---------------------- | --------------------- |
| nv-change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## 插槽

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 自定义内容（Radio 组件） |

## CSS 变量

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-radio-group-spacing` | 单选框之间的间距 | 30px |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
