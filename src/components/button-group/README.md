# ButtonGroup 按钮组

用于将多个按钮组合在一起形成按钮组。

## 组件说明

ButtonGroup 按钮组组件用于将多个按钮组合在一起，提供统一的视觉效果和间距控制。按钮组内的按钮会自动调整圆角和边框样式，实现无缝连接的效果。

## 属性

| 属性名       | 说明                                                                                                                              | 类型    | 可选值                               | 默认值 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------ | ------ |
| disabled     | 是否禁用按钮组内所有按钮                                                                                                          | boolean | —                                    | false  |
| size         | 按钮组尺寸（会传递给内部所有按钮）                                                                                                | string  | mini / small / medium / large / huge | medium |
| active-key   | 当前激活的按钮的 key（对应按钮的 data-key 属性）                                                                                  | string  | —                                    | ''     |
| vertical     | 是否垂直排列按钮                                                                                                                  | boolean | —                                    | false  |
| button-width | 按钮宽度（水平和垂直模式都支持，支持任何 CSS 单位。垂直模式下不设置时自动计算最宽按钮的宽度，水平模式下不设置时保持按钮自然宽度） | string  | —                                    | ''     |

## 事件

| 事件名           | 说明                 | 回调参数                              |
| ---------------- | -------------------- | ------------------------------------- |
| nv-active-change | 激活的按钮改变时触发 | { activeKey: string, oldKey: string } |

## 插槽

| 插槽名  | 说明                            |
| ------- | ------------------------------- |
| default | 自定义按钮组内容（Button 组件） |

## CSS 变量

| 变量名 | 说明                              | 默认值 |
| ------ | --------------------------------- | ------ |
| —      | ButtonGroup 组件暂未提供 CSS 变量 | —      |

## 使用说明

### 水平模式（默认）

- ButtonGroup 组件会自动处理内部按钮的圆角和边框样式
- 第一个按钮保留左侧圆角，右侧圆角为 0
- 最后一个按钮保留右侧圆角，左侧圆角为 0
- 中间按钮的左右圆角都为 0，使用负 margin 让边框重叠
- 在 hover、active、is-active 状态下，按钮的 z-index 会提升，确保边框完整显示

### 垂直模式（vertical）

- 设置 `vertical` 属性后，按钮会垂直排列
- 第一个按钮保留上侧圆角，下侧圆角为 0
- 最后一个按钮保留下侧圆角，上侧圆角为 0
- 中间按钮的上下圆角都为 0，使用负 margin 让边框重叠
- z-index 层级管理与水平模式一致

### 按钮宽度统一（button-width）

- 水平和垂直模式都支持 `button-width` 属性
- 可以手动设置固定宽度（支持任何 CSS 单位，如 `100px`、`10rem`、`50%` 等）

**垂直模式：**

- 不设置 `button-width` 时，会自动计算所有按钮中最宽的宽度，并应用到所有按钮，确保宽度一致
- 设置 `button-width` 时，所有按钮使用指定宽度

**水平模式：**

- 不设置 `button-width` 时，按钮保持自然宽度（按内容自适应）
- 设置 `button-width` 时，所有按钮使用指定宽度

示例：

```html
<!-- 垂直模式 - 自动统一宽度 -->
<nv-button-group vertical>
  <nv-button>短</nv-button>
  <nv-button>中等长度</nv-button>
  <nv-button>这是一个很长的按钮</nv-button>
</nv-button-group>

<!-- 垂直模式 - 手动设置固定宽度 -->
<nv-button-group vertical button-width="150px">
  <nv-button>按钮1</nv-button>
  <nv-button>按钮2</nv-button>
  <nv-button>按钮3</nv-button>
</nv-button-group>

<!-- 水平模式 - 按钮自然宽度（默认） -->
<nv-button-group>
  <nv-button>短</nv-button>
  <nv-button>中等长度</nv-button>
  <nv-button>很长的按钮</nv-button>
</nv-button-group>

<!-- 水平模式 - 手动设置固定宽度 -->
<nv-button-group button-width="100px">
  <nv-button>按钮1</nv-button>
  <nv-button>按钮2</nv-button>
  <nv-button>按钮3</nv-button>
</nv-button-group>
```

### ActiveKey 功能

- 使用 `active-key` 属性时，需要为每个按钮设置 `data-key` 属性作为唯一标识
- 点击按钮时会自动更新 `active-key` 并触发 `nv-active-change` 事件
- 激活的按钮会应用 `.is-active` 样式（与 hover 状态一致）

## CSS Parts

| Name | Description | CSS Selector   |
| ---- | ----------- | -------------- |
| base | 根属性容器  | `::part(base)` |
