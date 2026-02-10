# Alert 警告

用于页面中展示重要的提示信息。

## 组件说明

Alert 组件用于向用户显示警告、提示、成功或错误等重要信息。支持四种主题类型，可以添加图标、标题、描述文字，并支持关闭功能。

## 属性

| 属性名      | 说明         | 类型    | 可选值                               | 默认值 |
| ----------- | ------------ | ------- | ------------------------------------ | ------ |
| type        | 主题类型     | string  | success / warning / info / error     | info   |
| label       | 标题         | string  | —                                    | —      |
| description | 辅助性文字   | string  | —                                    | —      |
| closable    | 是否可关闭   | boolean | —                                    | false  |
| center      | 文字是否居中 | boolean | —                                    | false  |
| show-icon   | 是否显示图标 | boolean | —                                    | false  |
| size        | 警告尺寸     | string  | mini / small / medium / large / huge | medium |

## 事件

| 事件名   | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| nv-close | 关闭警告时触发的事件 | —        |

## 插槽

| 插槽名  | 说明                              |
| ------- | --------------------------------- |
| default | 描述内容                          |
| title   | 标题内容（当不使用 title 属性时） |

## CSS 变量

### 尺寸相关

| 变量名                                     | 说明                       | 默认值 |
| ------------------------------------------ | -------------------------- | ------ |
| --nv-alert-border-radius                   | 警告框圆角                 | —      |
| --nv-alert-padding-{size}                  | 各尺寸内边距               | —      |
| --nv-alert-content-padding-{size}          | 各尺寸内容区域内边距       | —      |
| --nv-alert-padding-left-with-icon          | 带图标时的左内边距         | —      |
| --nv-alert-icon-font-size-{size}           | 各尺寸图标字体大小         | —      |
| --nv-alert-title-font-size-{size}          | 各尺寸标题字体大小         | —      |
| --nv-alert-description-font-size-{size}    | 各尺寸描述字体大小         | —      |
| --nv-alert-icon-margin-right               | 图标右外边距               | —      |
| --nv-alert-closebtn-right                  | 关闭按钮右侧位置           | 15px   |
| --nv-alert-description-margin-top          | 描述上外边距               | —      |

### 颜色相关

| 变量名                              | 说明                 | 默认值 |
| ----------------------------------- | -------------------- | ------ |
| --nv-alert-background-color-info    | Info 类型背景颜色    | —      |
| --nv-alert-background-color-success | Success 类型背景颜色 | —      |
| --nv-alert-background-color-warning | Warning 类型背景颜色 | —      |
| --nv-alert-background-color-error   | Error 类型背景颜色   | —      |
| --nv-alert-font-color-info          | Info 类型文本颜色    | —      |
| --nv-alert-font-color-success       | Success 类型文本颜色 | —      |
| --nv-alert-font-color-warning       | Warning 类型文本颜色 | —      |
| --nv-alert-font-color-error         | Error 类型文本颜色   | —      |
| --nv-alert-icon-color-info          | Info 类型图标颜色    | —      |
| --nv-alert-icon-color-success       | Success 类型图标颜色 | —      |
| --nv-alert-icon-color-warning       | Warning 类型图标颜色 | —      |
| --nv-alert-icon-color-error         | Error 类型图标颜色   | —      |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## CSS Parts

| Name        | Description  | CSS Selector          |
| ----------- | ------------ | --------------------- |
| base        | 根容器元素   | `::part(base)`        |
| icon        | 图标容器元素 | `::part(icon)`        |
| content     | 内容容器元素 | `::part(content)`     |
| title       | 标题元素     | `::part(title)`       |
| description | 描述文字元素 | `::part(description)` |
| close       | 关闭按钮元素 | `::part(close)`       |
