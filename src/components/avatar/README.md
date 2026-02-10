# Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

## 组件说明

Avatar 头像组件用于展示用户或事物的图标信息。支持图片、图标和文字三种展示形式，以及多种尺寸和形状。

## 属性

| 属性名          | 说明                         | 类型            | 可选值                       | 默认值 |
| --------------- | ---------------------------- | --------------- | ---------------------------- | ------ |
| src             | 图片头像的资源地址           | string          | —                            | —      |
| src-set         | 响应式图片源集合             | string          | —                            | —      |
| size            | 头像的大小                   | number / string | small / medium / large / 数字 | medium |
| shape           | 头像的形状                   | string          | circle / square              | circle |
| icon            | 设置头像的图标类型           | string          | —                            | —      |
| alt             | 图片的 alt 属性              | string          | —                            | —      |
| backgroundColor | 背景色（当显示文字或图标时） | string          | —                            | —      |
| fontFamily      | 字体类型（当显示文字时）     | string          | —                            | —      |
| fontSize        | 字体大小（当显示文字时）     | string          | —                            | —      |
| fontColor       | 字体颜色（当显示文字时）     | string          | —                            | —      |
| fontWeight      | 字体粗细（当显示文字时）     | string          | —                            | —      |

## 事件

| 事件名   | 说明               | 回调参数   |
| -------- | ------------------ | ---------- |
| nv-error | 图片加载失败的回调 | (e: Event) |

## 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |

## CSS 变量

| 变量名                       | 说明             | 默认值  |
| ---------------------------- | ---------------- | ------- |
| --nv-avatar-size-large       | 大尺寸头像大小   | 56px    |
| --nv-avatar-size-medium      | 中等尺寸头像大小 | 40px    |
| --nv-avatar-size-small       | 小尺寸头像大小   | 24px    |
| --nv-avatar-font-size-large  | 大尺寸字体大小   | 20px    |
| --nv-avatar-font-size-medium | 中等尺寸字体大小 | 14px    |
| --nv-avatar-font-size-small  | 小尺寸字体大小   | 12px    |
| --nv-avatar-font-color       | 头像文字颜色     | #fff    |
| --nv-avatar-font-family      | 头像字体类型     | inherit |
| --nv-avatar-font-weight      | 头像字体粗细     | normal  |
| --nv-avatar-background-color | 头像背景颜色     | #c0c4cc |
| --nv-avatar-border-radius    | 方形头像圆角     | 4px     |

## CSS Parts

| Name  | Description  | CSS Selector    |
| ----- | ------------ | --------------- |
| base  | 根容器元素   | `::part(base)`  |
| image | 头像图片元素 | `::part(image)` |
