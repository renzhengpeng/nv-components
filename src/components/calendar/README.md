# Calendar 日历

显示日期。

## 组件说明

Calendar 日历组件用于显示日期和相关信息。

## 属性

| 属性名           | 说明                       | 类型           | 可选值        | 默认值 |
| ---------------- | -------------------------- | -------------- | ------------- | ------ |
| value            | 绑定值                     | string / array | —             | —      |
| mode             | 选择模式                   | string         | single / range | single |
| first-day-of-week | 一周的第一天（0为周日，1为周一） | number         | 0 / 1         | 0      |
| min-date         | 最小可选日期               | string         | —             | —      |
| max-date         | 最大可选日期               | string         | —             | —      |
| show-today       | 是否显示今天按钮           | boolean        | —             | true   |

## 事件

| 事件名    | 说明                   | 回调参数   |
| --------- | ---------------------- | ---------- |
| nv-change | 选择日期后会执行的回调 | 选中的日期 |

## CSS 变量

| 变量名                  | 说明           | 默认值 |
| ----------------------- | -------------- | ------ |
| --nv-calendar-cell-size | 日历单元格大小 | —      |

## CSS Parts

| Name     | Description           | CSS Selector       |
| -------- | --------------------- | ------------------ |
| base     | 根容器元素            | `::part(base)`     |
| header   | 头部区域              | `::part(header)`   |
| prev     | 上一月按钮            | `::part(prev)`     |
| title    | 标题区域（年/月选择） | `::part(title)`    |
| next     | 下一月按钮            | `::part(next)`     |
| today    | 今天按钮区域          | `::part(today)`    |
| body     | 内容区域              | `::part(body)`     |
| weekdays | 星期头部区域          | `::part(weekdays)` |
| weekday  | 星期单元格            | `::part(weekday)`  |
| days     | 日期网格区域          | `::part(days)`     |
| day      | 日期单元格            | `::part(day)`      |
