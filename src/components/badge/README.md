# Badge 标记

出现在按钮、图标旁的数字或状态标记。

## 组件说明

Badge 标记组件用于在图标或文字右上角显示数字或状态标记。适用于消息提醒、待办数量等场景。

## 属性

| 属性名    | 说明                                                | 类型    | 可选值                                        | 默认值 |
| --------- | --------------------------------------------------- | ------- | --------------------------------------------- | ------ |
| value     | 显示值                                              | number  | —                                             | —      |
| max       | 最大值，超过最大值会显示 '{max}+'                   | number  | —                                             | —      |
| is-dot    | 是否显示为小圆点                                    | boolean | —                                             | false  |
| is-fixed  | 是否固定在右上角                                    | boolean | —                                             | false  |
| color     | 自定义背景色                                        | string  | —                                             | —      |
| offset-x  | 水平偏移量（px），正数向右，负数向左                | number  | —                                             | 0      |
| offset-y  | 垂直偏移量（px），正数向下，负数向上                | number  | —                                             | 0      |
| size      | 圆点半径（px），至少为1，仅当 is-dot 为 true 时有效 | number  | —                                             | —      |
| show-zero | 当值为0时是否展示徽标                               | boolean | —                                             | false  |
| text      | 用来展示非数字的徽标内容                            | string  | —                                             | —      |
| status    | 徽标状态                                            | string  | success / error / warning / processing / info | —      |

## 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

## CSS 变量

| 变量名                                        | 说明             | 默认值                              |
| --------------------------------------------- | ---------------- | ----------------------------------- |
| --nv-badge-border-radius                      | 徽标圆角         | 10px                                |
| --nv-badge-dot-border-radius                  | 点状徽标圆角     | 50%                                 |
| --nv-badge-padding                            | 徽标内边距       | 0 var(--nv-padding-small)           |
| --nv-badge-dot-padding                        | 点状徽标内边距   | 0                                   |
| --nv-badge-font-size                          | 徽标字体大小     | var(--nv-font-size-small)           |
| --nv-badge-height                             | 徽标高度         | 18px                                |
| --nv-badge-line-height                        | 徽标行高         | 18px                                |
| --nv-badge-dot-width                          | 点状徽标宽度     | 8px                                 |
| --nv-badge-dot-height                         | 点状徽标高度     | 8px                                 |
| --nv-badge-fixed-right                        | 固定徽标右边距   | 0px                                 |
| --nv-badge-background-color                   | 徽标背景颜色     | var(--nv-secondary-color-danger-1)  |
| --nv-badge-font-color                         | 徽标文字颜色     | var(--nv-neutral-color-white)       |
| --nv-badge-border-color                       | 徽标边框颜色     | var(--nv-neutral-color-white)       |
| --nv-badge-status-success-background-color    | 成功状态背景色   | var(--nv-secondary-color-success-1) |
| --nv-badge-status-success-border-color        | 成功状态边框色   | var(--nv-secondary-color-success-1) |
| --nv-badge-status-error-background-color      | 错误状态背景色   | var(--nv-secondary-color-danger-1)  |
| --nv-badge-status-error-border-color          | 错误状态边框色   | var(--nv-secondary-color-danger-1)  |
| --nv-badge-status-warning-background-color    | 警告状态背景色   | var(--nv-secondary-color-warning-1) |
| --nv-badge-status-warning-border-color        | 警告状态边框色   | var(--nv-secondary-color-warning-1) |
| --nv-badge-status-processing-background-color | 处理中状态背景色 | var(--nv-primary-color-1)           |
| --nv-badge-status-processing-border-color     | 处理中状态边框色 | var(--nv-primary-color-1)           |
| --nv-badge-status-info-background-color       | 信息状态背景色   | var(--nv-secondary-color-info-1)    |
| --nv-badge-status-info-border-color           | 信息状态边框色   | var(--nv-secondary-color-info-1)    |

## CSS Parts

| Name    | Description  | CSS Selector      |
| ------- | ------------ | ----------------- |
| base    | 根容器元素   | `::part(base)`    |
| content | 徽标内容元素 | `::part(content)` |
