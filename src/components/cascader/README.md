# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 组件说明

Cascader 级联选择器组件用于从一组相关联的数据集合中进行选择。

## 属性

| 属性名      | 说明             | 类型    | 可选值                               | 默认值 |
| ----------- | ---------------- | ------- | ------------------------------------ | ------ |
| options     | 可选项数据源     | array   | —                                    | []     |
| value       | 选中项绑定值     | array   | —                                    | []     |
| placeholder | 输入框占位文本   | string  | —                                    | 请选择 |
| disabled    | 是否禁用         | boolean | —                                    | false  |
| clearable   | 是否支持清空选项 | boolean | —                                    | false  |
| size        | 尺寸             | string  | mini / small / medium / large / huge | medium |
| separator   | 选项分隔符       | string  | —                                    | /      |

## 事件

| 事件名    | 说明                     | 回调参数 |
| --------- | ------------------------ | -------- |
| nv-change | 当绑定值变化时触发的事件 | 当前值   |

## CSS 变量

### 输入框

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-cascader-input-height` | 输入框高度 | var(--nv-global-height-medium) |
| `--nv-cascader-input-height-{size}` | 各尺寸输入框高度 | — |
| `--nv-cascader-input-inner-font-size` | 输入框字体大小 | 14px |
| `--nv-cascader-input-inner-font-size-{size}` | 各尺寸输入框字体大小 | — |
| `--nv-cascader-input-width` | 输入框宽度 | 100% |
| `--nv-cascader-input-min-width` | 输入框最小宽度 | 200px |
| `--nv-cascader-input-padding` | 输入框内边距 | 0 30px 0 12px |
| `--nv-cascader-input-border` | 输入框边框 | 1px solid #dcdfe6 |
| `--nv-cascader-input-border-radius` | 输入框圆角 | 4px |
| `--nv-cascader-input-background-color` | 输入框背景颜色 | #fff |
| `--nv-cascader-input-transition-duration` | 输入框过渡动画时长 | 0.3s |
| `--nv-cascader-input-border-color-hover` | hover状态输入框边框颜色 | #c0c4cc |
| `--nv-cascader-input-border-color-focus` | focus状态输入框边框颜色 | #409EFF |
| `--nv-cascader-input-background-color-disabled` | disabled状态输入框背景颜色 | #f5f7fa |
| `--nv-cascader-input-inner-color` | 输入框文本颜色 | #606266 |

### 图标

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-cascader-clear-right` | 清空按钮右偏移 | 8px |
| `--nv-cascader-clear-color` | 清空按钮颜色 | #c0c4cc |
| `--nv-cascader-clear-transition-duration` | 清空按钮过渡动画时长 | 0.3s |
| `--nv-cascader-clear-color-hover` | hover状态清空按钮颜色 | #909399 |
| `--nv-cascader-suffix-right` | 后缀图标右偏移 | 8px |
| `--nv-cascader-suffix-color` | 后缀图标颜色 | #c0c4cc |
| `--nv-cascader-suffix-transition-duration` | 后缀图标过渡动画时长 | 0.3s |

### 下拉面板

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-cascader-panel-z-index` | 面板层级 | 2000 |
| `--nv-cascader-panel-background-color` | 面板背景颜色 | #fff |
| `--nv-cascader-panel-border` | 面板边框 | 1px solid #e4e7ed |
| `--nv-cascader-panel-border-radius` | 面板圆角 | 4px |
| `--nv-cascader-panel-box-shadow` | 面板阴影 | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |
| `--nv-cascader-panel-min-width` | 面板最小宽度 | 180px |
| `--nv-cascader-panel-max-height` | 面板最大高度 | 300px |

### 菜单项

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-cascader-menu-padding` | 菜单内边距 | 6px 0 |
| `--nv-cascader-menu-item-padding` | 菜单项内边距 | 8px 20px |
| `--nv-cascader-menu-item-padding-{size}` | 各尺寸菜单项内边距 | — |
| `--nv-cascader-menu-item-font-size` | 菜单项字体大小 | 14px |
| `--nv-cascader-menu-item-font-size-{size}` | 各尺寸菜单项字体大小 | — |
| `--nv-cascader-menu-item-color` | 菜单项文本颜色 | #606266 |
| `--nv-cascader-menu-item-transition-duration` | 菜单项过渡动画时长 | 0.3s |
| `--nv-cascader-menu-item-background-color-hover` | hover状态菜单项背景颜色 | #f5f7fa |
| `--nv-cascader-menu-item-color-selected` | 选中状态菜单项文本颜色 | #409EFF |
| `--nv-cascader-menu-item-background-color-selected` | 选中状态菜单项背景颜色 | #ecf5ff |
| `--nv-cascader-menu-item-icon-margin-left` | 菜单项图标左外边距 | 8px |
| `--nv-cascader-menu-item-icon-color` | 菜单项图标颜色 | #c0c4cc |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name        | Description      | CSS Selector          |
| ----------- | ---------------- | --------------------- |
| base        | 根容器元素       | `::part(base)`        |
| input       | 输入框触发容器   | `::part(input)`       |
| input-inner | 输入框显示文本   | `::part(input-inner)` |
| clear       | 清空按钮容器     | `::part(clear)`       |
| suffix      | 后缀图标容器     | `::part(suffix)`      |
| panels      | 下拉面板包装层   | `::part(panels)`      |
| panel       | 单个层级面板容器 | `::part(panel)`       |
| menu        | 选项列表容器     | `::part(menu)`        |
| item        | 单个选项元素     | `::part(item)`        |
| item-label  | 选项文本内容     | `::part(item-label)`  |
| item-icon   | 展开箭头图标     | `::part(item-icon)`   |
