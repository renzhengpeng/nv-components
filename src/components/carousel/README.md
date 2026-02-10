# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 组件说明

Carousel 走马灯组件用于在有限的空间内展示一组内容，支持自动轮播和手动切换。

## 属性

| 属性名               | 说明                           | 类型    | 可选值                | 默认值     |
| -------------------- | ------------------------------ | ------- | --------------------- | ---------- |
| value                | 当前激活的幻灯片索引           | number  | —                     | 0          |
| height               | 走马灯的高度                   | string  | —                     | 300px      |
| indicator            | 是否显示指示器                 | boolean | —                     | true       |
| indicator-position   | 指示器的位置                   | string  | outside / none        | —          |
| trigger              | 指示器的触发方式               | string  | hover / click         | click      |
| autoplay             | 是否自动切换                   | boolean | —                     | true       |
| interval             | 自动切换的时间间隔（毫秒）     | number  | —                     | 4000       |
| type                 | 走马灯的类型                   | string  | card                  | —          |
| loop                 | 是否循环显示                   | boolean | —                     | false      |
| navigation           | 是否显示导航箭头               | boolean | —                     | true       |
| direction            | 走马灯展示的方向               | string  | horizontal / vertical | horizontal |
| transition-duration  | 切换过渡时间（毫秒）           | number  | —                     | 400        |
| indicator-size       | 指示器大小                     | number  | —                     | 12         |

## 事件

| 事件名    | 说明             | 回调参数                               |
| --------- | ---------------- | -------------------------------------- |
| nv-change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

## CSS 变量

| 变量名                         | 说明         | 默认值 |
| ------------------------------ | ------------ | ------ |
| --nv-carousel-arrow-background | 箭头背景颜色 | —      |
| --nv-carousel-indicator-color  | 指示器颜色   | —      |

## CSS Parts

| Name       | Description | CSS Selector         |
| ---------- | ----------- | -------------------- |
| base       | 根属性容器  | `::part(base)`       |
| container  | 滚动容器    | `::part(container)`  |
| track      | 轨道容器    | `::part(track)`      |
| indicators | 指示器容器  | `::part(indicators)` |
| indicator  | 指示器项    | `::part(indicator)`  |

## Carousel-Item CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根容器元素  | `::part(base)` |
