# InfiniteScroll 无限滚动

滚动至底部时，加载更多数据。

## 组件说明

InfiniteScroll 无限滚动组件用于在用户滚动到底部时自动加载更多内容。

## 属性

| 属性名    | 说明                 | 类型    | 可选值 | 默认值 |
| --------- | -------------------- | ------- | ------ | ------ |
| disabled  | 是否禁用             | boolean | —      | false  |
| distance  | 触发加载的距离阈值   | number  | —      | 0      |
| immediate | 是否立即执行加载方法 | boolean | —      | true   |

## 事件

| 事件名  | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| nv-load | 滚动到底部触发的加载事件 | —        |

## CSS 变量

| 变量名                             | 说明         | 默认值 |
| ---------------------------------- | ------------ | ------ |
| --nv-infinite-scroll-loading-color | 加载图标颜色 | —      |

## CSS Parts

| Name   | Description    | CSS Selector     |
| ------ | -------------- | ---------------- |
| base   | 根容器元素     | `::part(base)`   |
| loader | 加载指示器容器 | `::part(loader)` |
| text   | 加载文案       | `::part(text)`   |
