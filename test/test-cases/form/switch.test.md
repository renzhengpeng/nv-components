# Switch 开关组件测试用例

## 组件信息

- **组件名称**: nv-switch
- **组件路径**: `src/components/switch`
- **测试优先级**: P0 (高优先级)
- **组件描述**: 表示两种相互对立的状态间的切换，多用于触发「开/关」

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `switch-basic-render`
- **测试步骤**:
  1. 渲染一个基础开关
  2. 验证开关正常显示
  3. 验证默认为关闭状态
- **预期结果**: 开关正常渲染，默认关闭

### 1.2 开关切换

- **测试ID**: `switch-toggle`
- **测试步骤**:
  1. 点击关闭状态的开关
  2. 验证开关变为开启状态
  3. 再次点击开关
  4. 验证开关变为关闭状态
- **预期结果**: 点击切换开关状态

### 1.3 拖拽切换

- **测试ID**: `switch-drag-toggle`
- **测试步骤**:
  1. 拖拽开关滑块
  2. 验证开关状态切换
- **预期结果**: 拖拽可以切换状态

## 2. 属性测试

### 2.1 checked 属性 - 开关状态

- **测试ID**: `switch-checked`
- **测试步骤**:
  1. 设置 checked 属性为 true
  2. 验证开关显示开启状态
  3. 设置 checked 为 false
  4. 验证开关显示关闭状态
- **预期结果**: checked 属性控制开关状态

### 2.2 disabled 属性 - 禁用状态

- **测试ID**: `switch-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证开关显示禁用样式
  3. 尝试点击开关
  4. 验证状态不改变
- **预期结果**: 禁用状态下无法操作

### 2.3 loading 属性 - 加载状态

- **测试ID**: `switch-loading`
- **测试步骤**:
  1. 设置 loading 属性
  2. 验证开关显示加载图标
  3. 尝试点击开关
  4. 验证状态不改变
- **预期结果**: 加载状态下无法操作，显示加载图标

### 2.4 active-color 属性 - 开启颜色

- **测试ID**: `switch-active-color`
- **测试步骤**:
  1. 设置 active-color 属性
  2. 开启开关
  3. 验证开关背景色为设置的颜色
- **预期结果**: 开启颜色正确显示

### 2.5 inactive-color 属性 - 关闭颜色

- **测试ID**: `switch-inactive-color`
- **测试步骤**:
  1. 设置 inactive-color 属性
  2. 关闭开关
  3. 验证开关背景色为设置的颜色
- **预期结果**: 关闭颜色正确显示

### 2.6 active-text 属性 - 开启文字

- **测试ID**: `switch-active-text`
- **测试步骤**:
  1. 设置 active-text 属性
  2. 开启开关
  3. 验证显示开启文字
- **预期结果**: 开启文字正确显示

### 2.7 inactive-text 属性 - 关闭文字

- **测试ID**: `switch-inactive-text`
- **测试步骤**:
  1. 设置 inactive-text 属性
  2. 关闭开关
  3. 验证显示关闭文字
- **预期结果**: 关闭文字正确显示

### 2.8 active-value 属性 - 开启值

- **测试ID**: `switch-active-value`
- **测试步骤**:
  1. 设置 active-value="1"
  2. 开启开关
  3. 验证 value 等于 "1"
- **预期结果**: 开启值正确设置

### 2.9 inactive-value 属性 - 关闭值

- **测试ID**: `switch-inactive-value`
- **测试步骤**:
  1. 设置 inactive-value="0"
  2. 关闭开关
  3. 验证 value 等于 "0"
- **预期结果**: 关闭值正确设置

### 2.10 width 属性 - 宽度

- **测试ID**: `switch-width`
- **测试步骤**:
  1. 设置 width 属性
  2. 验证开关宽度符合设置
- **预期结果**: 宽度正确设置

### 2.11 active-icon 属性 - 开启图标

- **测试ID**: `switch-active-icon`
- **测试步骤**:
  1. 设置 active-icon 属性
  2. 开启开关
  3. 验证显示开启图标
- **预期结果**: 开启图标正确显示

### 2.12 inactive-icon 属性 - 关闭图标

- **测试ID**: `switch-inactive-icon`
- **测试步骤**:
  1. 设置 inactive-icon 属性
  2. 关闭开关
  3. 验证显示关闭图标
- **预期结果**: 关闭图标正确显示

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `switch-event-change`
- **测试步骤**:
  1. 监听 change 事件
  2. 点击开关
  3. 验证 change 事件触发
  4. 验证事件参数包含新的状态值
- **预期结果**: change 事件正常触发

### 3.2 禁用状态下的事件

- **测试ID**: `switch-disabled-event`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 监听 change 事件
  3. 尝试点击开关
  4. 验证 change 事件不触发
- **预期结果**: 禁用状态下不触发事件

### 3.3 加载状态下的事件

- **测试ID**: `switch-loading-event`
- **测试步骤**:
  1. 设置 loading 属性
  2. 监听 change 事件
  3. 尝试点击开关
  4. 验证 change 事件不触发
- **预期结果**: 加载状态下不触发事件

## 4. 交互测试

### 4.1 鼠标点击切换

- **测试ID**: `switch-mouse-click`
- **测试步骤**:
  1. 使用鼠标点击开关
  2. 验证状态切换
- **预期结果**: 鼠标点击正常工作

### 4.2 键盘 Space 键切换

- **测试ID**: `switch-keyboard-space`
- **测试步骤**:
  1. 使用 Tab 键聚焦开关
  2. 按 Space 键
  3. 验证状态切换
- **预期结果**: Space 键切换状态

### 4.3 键盘 Enter 键切换

- **测试ID**: `switch-keyboard-enter`
- **测试步骤**:
  1. 使用 Tab 键聚焦开关
  2. 按 Enter 键
  3. 验证状态切换
- **预期结果**: Enter 键切换状态

### 4.4 Tab 键导航

- **测试ID**: `switch-tab-navigation`
- **测试步骤**:
  1. 聚焦第一个开关
  2. 按 Tab 键
  3. 验证焦点移到下一个元素
- **预期结果**: Tab 键导航正常

### 4.5 拖拽交互

- **测试ID**: `switch-drag-interaction`
- **测试步骤**:
  1. 按住开关滑块
  2. 拖拽到另一侧
  3. 释放鼠标
  4. 验证状态切换
- **预期结果**: 拖拽交互正常

## 5. 边界测试

### 5.1 极小宽度

- **测试ID**: `switch-min-width`
- **测试步骤**:
  1. 设置非常小的 width
  2. 验证开关仍然可用
- **预期结果**: 极小宽度正常处理

### 5.2 极大宽度

- **测试ID**: `switch-max-width`
- **测试步骤**:
  1. 设置非常大的 width
  2. 验证开关正确显示
- **预期结果**: 极大宽度正常处理

### 5.3 超长文本

- **测试ID**: `switch-long-text`
- **测试步骤**:
  1. 设置非常长的 active-text 和 inactive-text
  2. 验证文本正确显示或截断
- **预期结果**: 超长文本正确处理

### 5.4 特殊字符文本

- **测试ID**: `switch-special-chars-text`
- **测试步骤**:
  1. 设置包含特殊字符的文本
  2. 验证特殊字符正确显示
- **预期结果**: 特殊字符正确转义

### 5.5 自定义值类型

- **测试ID**: `switch-custom-value-type`
- **测试步骤**:
  1. 设置 active-value 和 inactive-value 为数字、布尔值等
  2. 验证值类型正确
- **预期结果**: 支持多种值类型

## 6. 可访问性测试

### 6.1 ARIA 属性 - checked

- **测试ID**: `switch-aria-checked`
- **测试步骤**:
  1. 验证关闭时 aria-checked="false"
  2. 开启开关
  3. 验证 aria-checked="true"
- **预期结果**: ARIA checked 属性正确

### 6.2 ARIA 属性 - disabled

- **测试ID**: `switch-aria-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证 aria-disabled="true"
- **预期结果**: ARIA disabled 属性正确

### 6.3 role 属性

- **测试ID**: `switch-role`
- **测试步骤**:
  1. 验证 role="switch"
- **预期结果**: role 属性正确

### 6.4 键盘完全可访问

- **测试ID**: `switch-keyboard-accessible`
- **测试步骤**:
  1. 仅使用键盘操作开关
  2. Tab 聚焦、Space/Enter 切换
  3. 验证所有功能都可用
- **预期结果**: 完全支持键盘操作

### 6.5 屏幕阅读器

- **测试ID**: `switch-screen-reader`
- **测试步骤**:
  1. 使用屏幕阅读器
  2. 验证开关状态被正确读取
  3. 验证文本被正确读取
- **预期结果**: 屏幕阅读器支持良好

## 7. 样式测试

### 7.1 CSS Parts

- **测试ID**: `switch-css-parts`
- **测试步骤**:
  1. 使用 CSS Parts 自定义样式
  2. 验证样式生效
- **预期结果**: CSS Parts 可自定义样式

### 7.2 CSS 变量

- **测试ID**: `switch-css-variables`
- **测试步骤**:
  1. 设置 CSS 变量
  2. 验证样式变化
- **预期结果**: CSS 变量可自定义样式

### 7.3 自定义颜色

- **测试ID**: `switch-custom-colors`
- **测试步骤**:
  1. 设置 active-color 和 inactive-color
  2. 验证颜色正确应用
- **预期结果**: 自定义颜色正常工作

## 8. 动画测试

### 8.1 切换动画

- **测试ID**: `switch-transition`
- **测试步骤**:
  1. 点击开关
  2. 验证滑块有平滑的过渡动画
- **预期结果**: 切换动画流畅

### 8.2 加载动画

- **测试ID**: `switch-loading-animation`
- **测试步骤**:
  1. 设置 loading 属性
  2. 验证加载图标有旋转动画
- **预期结果**: 加载动画正常

## 9. 性能测试

### 9.1 大量开关渲染

- **测试ID**: `switch-performance-render`
- **测试步骤**:
  1. 渲染 1000 个开关
  2. 测量渲染时间
- **预期结果**: 渲染时间在可接受范围内

### 9.2 快速切换性能

- **测试ID**: `switch-performance-toggle`
- **测试步骤**:
  1. 快速连续点击开关
  2. 验证响应流畅
- **预期结果**: 快速切换响应流畅

## 测试覆盖率目标

- **功能覆盖率**: 100%
- **属性覆盖率**: 100%
- **事件覆盖率**: 100%
- **可访问性覆盖率**: 100%
