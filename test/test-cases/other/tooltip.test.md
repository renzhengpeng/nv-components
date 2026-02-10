# Tooltip 文字提示组件测试用例

## 组件信息

- **组件名称**: nv-tooltip
- **测试优先级**: P1
- **组件描述**: 常用于展示鼠标 hover 时的提示信息

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `tooltip-basic-render`
- **测试步骤**: 1. 渲染 tooltip 2. 悬停触发元素 3. 验证提示显示
- **预期结果**: tooltip 正常显示

### 1.2 hover 触发

- **测试ID**: `tooltip-hover-trigger`
- **测试步骤**: 1. 悬停触发元素 2. 验证 tooltip 显示 3. 移开鼠标 4. 验证 tooltip 隐藏
- **预期结果**: hover 触发正常

### 1.3 click 触发

- **测试ID**: `tooltip-click-trigger`
- **测试步骤**: 1. 设置 trigger="click" 2. 点击触发元素 3. 验证 tooltip 显示
- **预期结果**: click 触发正常

### 1.4 focus 触发

- **测试ID**: `tooltip-focus-trigger`
- **测试步骤**: 1. 设置 trigger="focus" 2. 聚焦触发元素 3. 验证 tooltip 显示
- **预期结果**: focus 触发正常

## 2. 属性测试

### 2.1 content 属性

- **测试ID**: `tooltip-content`
- **测试步骤**: 1. 设置 content 2. 触发 tooltip 3. 验证内容显示
- **预期结果**: content 正确显示

### 2.2 placement 属性

- **测试ID**: `tooltip-placement-{value}`
- **测试值**: top, bottom, left, right, top-start, top-end, bottom-start, bottom-end, left-start, left-end, right-start, right-end
- **测试步骤**: 1. 设置不同 placement 2. 触发 tooltip 3. 验证位置正确
- **预期结果**: 不同位置正确

### 2.3 effect 属性

- **测试ID**: `tooltip-effect-{value}`
- **测试值**: dark, light
- **测试步骤**: 1. 设置不同 effect 2. 验证效果正确
- **预期结果**: 不同效果正确

### 2.4 disabled 属性

- **测试ID**: `tooltip-disabled`
- **测试步骤**: 1. 设置 disabled 2. 尝试触发 3. 验证 tooltip 不显示
- **预期结果**: 禁用功能正常

### 2.5 offset 属性

- **测试ID**: `tooltip-offset`
- **测试步骤**: 1. 设置 offset 2. 触发 tooltip 3. 验证偏移量正确
- **预期结果**: 偏移量正确

### 2.6 transition 属性

- **测试ID**: `tooltip-transition`
- **测试步骤**: 1. 设置自定义 transition 2. 验证动画效果
- **预期结果**: 自定义动画正常

### 2.7 visible-arrow 属性

- **测试ID**: `tooltip-visible-arrow`
- **测试步骤**: 1. 设置 visible-arrow=false 2. 验证无箭头
- **预期结果**: 箭头控制正常

### 2.8 open-delay 属性

- **测试ID**: `tooltip-open-delay`
- **测试步骤**: 1. 设置 open-delay 2. 触发 tooltip 3. 验证延迟显示
- **预期结果**: 延迟显示正常

### 2.9 close-delay 属性

- **测试ID**: `tooltip-close-delay`
- **测试步骤**: 1. 设置 close-delay 2. 移开触发 3. 验证延迟隐藏
- **预期结果**: 延迟隐藏正常

### 2.10 manual 属性

- **测试ID**: `tooltip-manual`
- **测试步骤**: 1. 设置 manual 2. 手动控制显示/隐藏
- **预期结果**: 手动模式正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
