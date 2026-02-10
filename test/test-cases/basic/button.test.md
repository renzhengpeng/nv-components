# Button 按钮组件测试用例

## 组件信息

- **组件名称**: nv-button
- **组件路径**: `src/components/button`
- **测试优先级**: P0 (高优先级)
- **组件描述**: 常用的操作按钮，提供多种类型、尺寸和状态

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `button-basic-render`
- **测试步骤**:
  1. 渲染一个基础按钮
  2. 验证按钮正常显示
  3. 验证按钮文本内容正确
- **预期结果**: 按钮正常渲染，文本显示正确

### 1.2 插槽内容

- **测试ID**: `button-slot-content`
- **测试步骤**:
  1. 在按钮中插入文本内容
  2. 在按钮中插入 HTML 元素
  3. 验证内容正确显示
- **预期结果**: 插槽内容正常显示

## 2. 属性测试

### 2.1 type 属性 - 按钮类型

- **测试ID**: `button-type-{value}`
- **测试值**: default, primary, success, info, warning, error, danger, text
- **测试步骤**:
  1. 设置不同的 type 值
  2. 验证按钮样式符合对应类型
- **预期结果**: 每种类型显示对应的颜色和样式

**详细测试用例**:
| type 值 | 测试ID | 预期颜色/样式 |
|---------|--------|--------------|
| default | button-type-default | 默认灰色边框 |
| primary | button-type-primary | 主题蓝色背景 |
| success | button-type-success | 成功绿色背景 |
| info | button-type-info | 信息灰色背景 |
| warning | button-type-warning | 警告橙色背景 |
| error | button-type-error | 错误红色背景 |
| danger | button-type-danger | 危险红色背景 |
| text | button-type-text | 无边框文本按钮 |

### 2.2 size 属性 - 按钮尺寸

- **测试ID**: `button-size-{value}`
- **测试值**: mini, small, medium, large, huge
- **测试步骤**:
  1. 设置不同的 size 值
  2. 验证按钮尺寸符合预期
- **预期结果**: 按钮尺寸从小到大依次递增

**详细测试用例**:
| size 值 | 测试ID | 预期高度范围 |
|---------|--------|-------------|
| mini | button-size-mini | ~24px |
| small | button-size-small | ~28px |
| medium | button-size-medium | ~32px |
| large | button-size-large | ~36px |
| huge | button-size-huge | ~40px |

### 2.3 disabled 属性 - 禁用状态

- **测试ID**: `button-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证按钮显示禁用样式
  3. 尝试点击按钮
  4. 验证点击事件不触发
- **预期结果**: 按钮显示禁用样式且不可点击

### 2.4 loading 属性 - 加载状态

- **测试ID**: `button-loading`
- **测试步骤**:
  1. 设置 loading 属性
  2. 验证显示加载图标
  3. 验证按钮不可点击
- **预期结果**: 显示加载动画，按钮不可点击

### 2.5 active 属性 - 激活状态

- **测试ID**: `button-active`
- **测试步骤**:
  1. 设置 active 属性
  2. 验证按钮显示激活样式
- **预期结果**: 按钮显示按下/选中状态样式

### 2.6 plain 属性 - 朴素按钮

- **测试ID**: `button-plain`
- **测试步骤**:
  1. 设置 plain 属性
  2. 验证按钮显示朴素样式（透明背景）
- **预期结果**: 按钮背景透明，边框和文字颜色为主题色

### 2.7 round 属性 - 圆角按钮

- **测试ID**: `button-round`
- **测试步骤**:
  1. 设置 round 属性
  2. 验证按钮圆角更大
- **预期结果**: 按钮显示圆角样式

### 2.8 circle 属性 - 圆形按钮

- **测试ID**: `button-circle`
- **测试步骤**:
  1. 设置 circle 属性
  2. 验证按钮为圆形
- **预期结果**: 按钮宽高相等，完全圆形

### 2.9 icon 属性 - 图标

- **测试ID**: `button-icon-{iconName}`
- **测试步骤**:
  1. 设置 icon 属性
  2. 验证图标正确显示
  3. 验证图标位置在文字左侧
- **预期结果**: 图标正确显示在文字左侧

## 3. 事件测试

### 3.1 click 事件

- **测试ID**: `button-click-event`
- **测试步骤**:
  1. 监听 click 事件
  2. 点击按钮
  3. 验证事件被触发
- **预期结果**: 点击事件正常触发

### 3.2 禁用状态下的点击

- **测试ID**: `button-disabled-click`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 监听 click 事件
  3. 点击按钮
  4. 验证事件不触发
- **预期结果**: 禁用状态下点击事件不触发

### 3.3 加载状态下的点击

- **测试ID**: `button-loading-click`
- **测试步骤**:
  1. 设置 loading 属性
  2. 监听 click 事件
  3. 点击按钮
  4. 验证事件不触发
- **预期结果**: 加载状态下点击事件不触发

## 4. 状态测试

### 4.1 悬停状态

- **测试ID**: `button-hover-state`
- **测试步骤**:
  1. 鼠标悬停在按钮上
  2. 验证按钮样式变化
- **预期结果**: 悬停时颜色变深或变浅

### 4.2 聚焦状态

- **测试ID**: `button-focus-state`
- **测试步骤**:
  1. 使用 Tab 键或点击聚焦按钮
  2. 验证按钮显示聚焦样式
- **预期结果**: 聚焦时显示外边框或阴影

### 4.3 按下状态

- **测试ID**: `button-active-state`
- **测试步骤**:
  1. 按下鼠标但不释放
  2. 验证按钮显示按下样式
- **预期结果**: 按下时颜色更深

## 5. 交互测试

### 5.1 鼠标点击

- **测试ID**: `button-mouse-click`
- **测试步骤**:
  1. 使用鼠标左键点击按钮
  2. 验证点击事件触发
- **预期结果**: 鼠标点击正常工作

### 5.2 键盘 Enter 键

- **测试ID**: `button-keyboard-enter`
- **测试步骤**:
  1. 聚焦按钮
  2. 按下 Enter 键
  3. 验证点击事件触发
- **预期结果**: Enter 键触发点击事件

### 5.3 键盘 Space 键

- **测试ID**: `button-keyboard-space`
- **测试步骤**:
  1. 聚焦按钮
  2. 按下 Space 键
  3. 验证点击事件触发
- **预期结果**: Space 键触发点击事件

### 5.4 Tab 键导航

- **测试ID**: `button-tab-navigation`
- **测试步骤**:
  1. 按 Tab 键
  2. 验证按钮可以获得焦点
  3. 继续按 Tab 键
  4. 验证焦点移到下一个元素
- **预期结果**: Tab 键导航正常工作

## 6. 边界测试

### 6.1 空文本

- **测试ID**: `button-empty-text`
- **测试步骤**:
  1. 创建不包含文本的按钮
  2. 验证按钮正常渲染
- **预期结果**: 空按钮正常显示

### 6.2 长文本

- **测试ID**: `button-long-text`
- **测试步骤**:
  1. 创建包含很长文本的按钮
  2. 验证文本正常显示或截断
- **预期结果**: 长文本正常处理

### 6.3 特殊字符

- **测试ID**: `button-special-chars`
- **测试步骤**:
  1. 创建包含特殊字符的按钮
  2. 验证特殊字符正确显示
- **预期结果**: 特殊字符正确转义和显示

### 6.4 无效的 type 值

- **测试ID**: `button-invalid-type`
- **测试步骤**:
  1. 设置无效的 type 值
  2. 验证按钮使用默认样式
- **预期结果**: 使用 default 类型样式

### 6.5 无效的 size 值

- **测试ID**: `button-invalid-size`
- **测试步骤**:
  1. 设置无效的 size 值
  2. 验证按钮使用默认尺寸
- **预期结果**: 使用 medium 尺寸

### 6.6 属性组合

- **测试ID**: `button-combined-attrs`
- **测试步骤**:
  1. 同时设置多个属性（如 plain + round + icon）
  2. 验证所有属性效果都生效
- **预期结果**: 多个属性可以正常组合使用

## 7. 可访问性测试

### 7.1 ARIA 属性 - disabled

- **测试ID**: `button-aria-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证 aria-disabled 属性存在
- **预期结果**: aria-disabled="true"

### 7.2 ARIA 属性 - busy

- **测试ID**: `button-aria-busy`
- **测试步骤**:
  1. 设置 loading 属性
  2. 验证 aria-busy 属性存在
- **预期结果**: aria-busy="true"

### 7.3 role 属性

- **测试ID**: `button-role`
- **测试步骤**:
  1. 验证按钮的 role 属性
- **预期结果**: role="button"

### 7.4 键盘可访问性

- **测试ID**: `button-keyboard-accessible`
- **测试步骤**:
  1. 仅使用键盘操作按钮
  2. 验证所有功能都可访问
- **预期结果**: 完全支持键盘操作

### 7.5 屏幕阅读器

- **测试ID**: `button-screen-reader`
- **测试步骤**:
  1. 使用屏幕阅读器
  2. 验证按钮信息被正确读取
- **预期结果**: 按钮状态和文本被正确读取

## 8. 样式测试

### 8.1 CSS Parts - base

- **测试ID**: `button-part-base`
- **测试步骤**:
  1. 使用 `::part(base)` 选择器
  2. 应用自定义样式
  3. 验证样式生效
- **预期结果**: 可以通过 CSS Parts 自定义样式

### 8.2 CSS Parts - button

- **测试ID**: `button-part-button`
- **测试步骤**:
  1. 使用 `::part(button)` 选择器
  2. 应用自定义样式
  3. 验证样式生效
- **预期结果**: 可以通过 CSS Parts 自定义内容容器样式

### 8.3 CSS 变量

- **测试ID**: `button-css-variables`
- **测试步骤**:
  1. 设置 CSS 变量（如 --nv-button-font-size）
  2. 验证样式变化
- **预期结果**: CSS 变量可以自定义按钮样式

### 8.4 主题色

- **测试ID**: `button-theme-color`
- **测试步骤**:
  1. 修改全局主题色变量
  2. 验证按钮颜色随之变化
- **预期结果**: 按钮颜色跟随主题色

## 9. 性能测试

### 9.1 大量按钮渲染

- **测试ID**: `button-performance-render`
- **测试步骤**:
  1. 渲染 1000 个按钮
  2. 测量渲染时间
- **预期结果**: 渲染时间在可接受范围内

### 9.2 频繁状态切换

- **测试ID**: `button-performance-state-change`
- **测试步骤**:
  1. 快速切换按钮状态（disabled/loading）
  2. 验证性能表现
- **预期结果**: 状态切换流畅无卡顿

## 10. 兼容性测试

### 10.1 浏览器兼容性

- **测试环境**: Chrome, Firefox, Safari, Edge
- **测试步骤**:
  1. 在不同浏览器中测试所有功能
  2. 验证表现一致
- **预期结果**: 所有现代浏览器表现一致

### 10.2 响应式

- **测试ID**: `button-responsive`
- **测试步骤**:
  1. 在不同屏幕尺寸下测试
  2. 验证按钮自适应
- **预期结果**: 按钮在不同屏幕下正常显示

## 测试覆盖率目标

- **功能覆盖率**: 100%
- **属性覆盖率**: 100%
- **事件覆盖率**: 100%
- **边界情况覆盖率**: ≥ 80%
- **可访问性覆盖率**: 100%

## 自动化测试建议

1. 使用 Puppeteer 进行 E2E 测试
2. 使用 Jest 进行单元测试
3. 使用 Axe 进行可访问性测试
4. 使用 Percy 进行视觉回归测试
5. 在 CI/CD 中自动运行所有测试
