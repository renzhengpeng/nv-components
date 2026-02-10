# Transfer 穿梭框

用于在多个选项中进行选择并移动。

## 组件说明

Transfer 穿梭框组件用于在两个列表之间移动数据项，常用于多选场景。

## 属性

| 属性名             | 说明                 | 类型    | 可选值 | 默认值               |
| ------------------ | -------------------- | ------- | ------ | -------------------- |
| value              | 绑定值               | array   | —      | —                    |
| data               | Transfer 的数据源    | array   | —      | []                   |
| filterable         | 是否可搜索           | boolean | —      | false                |
| filter-placeholder | 搜索框占位符         | string  | —      | 请输入搜索内容       |
| titles             | 自定义列表标题       | array   | —      | ['列表 1', '列表 2'] |
| button-texts       | 自定义按钮文案       | array   | —      | []                   |
| format             | 列表顶部勾选状态文案 | object  | —      | —                    |

## 事件

| 事件名    | 说明                   | 回调参数                                        |
| --------- | ---------------------- | ----------------------------------------------- |
| nv-change | 右侧列表元素变化时触发 | 当前值、数据移动的方向、发生移动的数据 key 数组 |

## 插槽

| 插槽名       | 说明               |
| ------------ | ------------------ |
| default      | 自定义数据项的内容 |
| left-footer  | 左侧列表底部的内容 |
| right-footer | 右侧列表底部的内容 |

## CSS 变量

| 变量名                    | 说明           | 默认值 |
| ------------------------- | -------------- | ------ |
| --nv-transfer-panel-width | 穿梭框面板宽度 | —      |

## CSS Parts

| Name       | Description  | CSS Selector         |
| ---------- | ------------ | -------------------- |
| base       | 根属性容器   | `::part(base)`       |
| panel      | 列表面板     | `::part(panel)`      |
| header     | 面板头部     | `::part(header)`     |
| title      | 面板标题     | `::part(title)`      |
| count      | 面板条目统计 | `::part(count)`      |
| search     | 搜索框容器   | `::part(search)`     |
| input      | 搜索输入框   | `::part(input)`      |
| body       | 面板内容区域 | `::part(body)`       |
| item       | 列表项       | `::part(item)`       |
| item-label | 列表项文本   | `::part(item-label)` |
| buttons    | 按钮区域     | `::part(buttons)`    |
| button     | 穿梭按钮     | `::part(button)`     |
