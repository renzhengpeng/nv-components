# Steps 步骤条

引导用户按照流程完成任务的分步导航条。

## 组件说明

Steps 步骤条组件用于引导用户按照流程完成任务，可清楚地展示当前进度。

## 属性

| 属性名         | 说明               | 类型    | 可选值                               | 默认值     |
| -------------- | ------------------ | ------- | ------------------------------------ | ---------- |
| active         | 设置当前激活步骤   | number  | —                                    | 0          |
| direction      | 显示方向           | string  | vertical / horizontal                | horizontal |
| center         | 进行居中对齐       | boolean | —                                    | false      |
| simple         | 是否应用简洁风格   | boolean | —                                    | false      |
| finish-status  | 设置结束步骤的状态 | string  | finish / success                     | finish     |
| process-status | 设置当前步骤的状态 | string  | process / wait                       | process    |
| size           | 步骤条尺寸         | string  | mini / small / medium / large / huge | medium     |

## CSS 变量

### 简约模式

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-steps-simple-padding-{size}` | 各尺寸简约模式内边距 |
| `--nv-steps-simple-border-radius` | 简约模式圆角 |
| `--nv-steps-simple-background-color` | 简约模式背景颜色 |

### 尺寸相关

| 变量名 | 说明 |
| ------ | ---- |
| `--nv-steps-font-size-{size}` | 各尺寸字体大小 |
| `--nv-steps-vertical-padding-bottom` | 垂直模式下内边距 |

> 注：`{size}` 表示 mini/small/medium/large/huge 五个尺寸

## Step CSS Parts

| Name        | Description  | CSS Selector          |
| ----------- | ------------ | --------------------- |
| base        | 根容器元素   | `::part(base)`        |
| head        | 头部区域     | `::part(head)`        |
| icon        | 图标容器     | `::part(icon)`        |
| line        | 连线容器     | `::part(line)`        |
| line-inner  | 内部连线     | `::part(line-inner)`  |
| main        | 主体内容区域 | `::part(main)`        |
| title       | 标题区域     | `::part(title)`       |
| description | 描述区域     | `::part(description)` |

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
