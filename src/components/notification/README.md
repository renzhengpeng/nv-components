# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 组件说明

Notification 通知组件用于显示全局的通知提醒消息，从页面角落滑出。支持多种类型和位置。

## 属性

| 属性名     | 说明                                  | 类型    | 可选值                                            | 默认值    |
| ---------- | ------------------------------------- | ------- | ------------------------------------------------- | --------- |
| type       | 主题样式                              | string  | success / warning / info / error                  | info      |
| label      | 标题                                  | string  | —                                                 | —         |
| message    | 说明文字                              | string  | —                                                 | —         |
| show-icon  | 是否显示图标                          | boolean | —                                                 | true      |
| closable   | 是否显示关闭按钮                      | boolean | —                                                 | true      |
| duration   | 显示时间，毫秒。设为 0 则不会自动关闭 | number  | —                                                 | 4500      |
| position   | 自定义弹出位置                        | string  | top-right / top-left / bottom-right / bottom-left | top-right |

## CSS 变量

### 布局相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-notification-border-radius` | 通知圆角 |
| `--nv-notification-width` | 通知宽度 |
| `--nv-notification-padding` | 通知内边距 |
| `--nv-notification-main-padding-right` | 主体右内边距 |
| `--nv-notification-box-shadow` | 通知阴影 |

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-notification-icon-font-size` | 图标字体大小 |
| `--nv-notification-title-font-size` | 标题字体大小 |
| `--nv-notification-content-font-size` | 内容字体大小 |
| `--nv-notification-closebtn-font-size` | 关闭按钮字体大小 |
| `--nv-notification-icon-width` | 图标宽度 |
| `--nv-notification-icon-height` | 图标高度 |
| `--nv-notification-icon-margin-right` | 图标右外边距 |
| `--nv-notification-title-margin-bottom` | 标题下外边距 |
| `--nv-notification-title-line-height` | 标题行高 |
| `--nv-notification-content-line-height` | 内容行高 |
| `--nv-notification-closebtn-top` | 关闭按钮上偏移 |
| `--nv-notification-closebtn-right` | 关闭按钮右偏移 |
| `--nv-notification-closebtn-width` | 关闭按钮宽度 |
| `--nv-notification-closebtn-height` | 关闭按钮高度 |

### 颜色相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-notification-background-color` | 通知背景颜色 |
| `--nv-notification-border-color` | 通知边框颜色 |
| `--nv-notification-title-font-color` | 标题文本颜色 |
| `--nv-notification-content-font-color` | 内容文本颜色 |
| `--nv-notification-icon-color-success` | success类型图标颜色 |
| `--nv-notification-icon-color-info` | info类型图标颜色 |
| `--nv-notification-icon-color-warning` | warning类型图标颜色 |
| `--nv-notification-icon-color-error` | error类型图标颜色 |
| `--nv-notification-closebtn-color` | 关闭按钮颜色 |
| `--nv-notification-closebtn-color-hover` | hover状态关闭按钮颜色 |

## CSS Parts

| Name    | Description  | CSS Selector      |
| ------- | ------------ | ----------------- |
| base    | 根属性容器   | `::part(base)`    |
| icon    | 图标容器     | `::part(icon)`    |
| group   | 内容与操作组 | `::part(group)`   |
| main    | 主体内容区域 | `::part(main)`    |
| title   | 标题区域     | `::part(title)`   |
| content | 消息内容区域 | `::part(content)` |
| close   | 关闭按钮     | `::part(close)`   |
