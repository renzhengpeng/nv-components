# Icon 图标

提供了一套常用的图标集合。

## 组件说明

Icon 图标组件提供了一套常用的图标库，通过 name 属性指定图标名称即可使用。支持自定义颜色和大小，可以灵活应用在各种场景中。

## 属性

| 属性名   | 说明     | 类型   | 可选值       | 默认值 |
| -------- | -------- | ------ | ------------ | ------ |
| name     | 图标名称 | string | —            | —      |
| color    | 图标颜色 | string | —            | —      |
| size     | 图标大小 | string | —            | —      |
| position | 图标位置 | string | left / right | —      |

## CSS 变量

| 变量名          | 说明     | 默认值  |
| --------------- | -------- | ------- |
| --nv-icon-color | 图标颜色 | inherit |
| --nv-icon-size  | 图标大小 | 1em     |

## 图标列表

组件库内置了常用的图标，可以在 Storybook 中查看完整的图标列表。

### 常用图标

- **基础**: search, edit, delete, close, check, plus, minus
- **箭头**: arrow-up, arrow-down, arrow-left, arrow-right
- **文件**: document, folder, file, download, upload
- **用户**: user, user-group, setting
- **状态**: info, warning, error, success, loading
- **其他**: calendar, clock, location, star, heart

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根图标元素  | `::part(base)` |
