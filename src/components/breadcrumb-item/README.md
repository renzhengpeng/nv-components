# BreadcrumbItem 面包屑项

`Breadcrumb` 的子项组件，用于配置单个路径节点。

## 属性

| 属性名    | 说明                             | 类型    | 可选值 | 默认值 |
| --------- | -------------------------------- | ------- | ------ | ------ |
| href      | 链接地址                         | string  | —      | —      |
| target    | 链接打开方式                     | string  | _self / _blank / _parent / _top | _self |
| separator | 当前项分隔符，优先级高于父组件 separator | string  | —      | —      |
| disabled  | 是否禁用                         | boolean | true / false | false |

## 事件

| 事件名   | 说明     | 回调参数 |
| -------- | -------- | -------- |
| nv-click | 点击项时触发 | `{ index, href }` |

## 插槽

| 插槽名    | 说明         |
| --------- | ------------ |
| default   | 面包屑项内容 |
| separator | 自定义分隔符 |

## CSS 变量

| 变量名                                     | 说明             | 默认值 |
| ------------------------------------------ | ---------------- | ------ |
| --nv-breadcrumb-item-color                 | 基础文本颜色     | var(--nv-neutral-color-font-2) |
| --nv-breadcrumb-item-link-color            | 链接颜色         | var(--nv-neutral-color-font-2) |
| --nv-breadcrumb-item-link-color-hover      | 链接悬停颜色     | var(--nv-primary-color-1) |
| --nv-breadcrumb-item-current-color         | 当前页颜色       | var(--nv-neutral-color-font-1) |
| --nv-breadcrumb-item-current-font-weight   | 当前页字重       | 500 |
| --nv-breadcrumb-item-separator-margin      | 分隔符间距       | 8px |
| --nv-breadcrumb-item-separator-color       | 分隔符颜色       | var(--nv-neutral-color-font-4) |
| --nv-breadcrumb-item-disabled-color        | 禁用态颜色       | var(--nv-neutral-color-font-4) |

## CSS Parts

| Name      | Description | CSS Selector        |
| --------- | ----------- | ------------------- |
| base      | 根容器元素  | `::part(base)`      |
| link      | 链接元素    | `::part(link)`      |
| text      | 文本元素    | `::part(text)`      |
| separator | 分隔符元素  | `::part(separator)` |
