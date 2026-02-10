# ColorPicker 颜色选择器组件测试用例

## 组件信息

- **组件名称**: nv-color-picker
- **测试优先级**: P2
- **组件描述**: 用于颜色选择，支持多种格式

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `color-picker-basic-render`
- **测试步骤**: 1. 渲染颜色选择器 2. 验证选择器正常显示
- **预期结果**: 颜色选择器正常渲染

### 1.2 打开面板

- **测试ID**: `color-picker-open-panel`
- **测试步骤**: 1. 点击选择器 2. 验证颜色面板打开
- **预期结果**: 面板打开正常

### 1.3 选择颜色

- **测试ID**: `color-picker-select-color`
- **测试步骤**: 1. 在面板中选择颜色 2. 验证颜色更新
- **预期结果**: 颜色选择正常

## 2. 属性测试

### 2.1 value 属性 (v-model)

- **测试ID**: `color-picker-value`
- **测试步骤**: 1. 设置 value 2. 验证颜色显示
- **预期结果**: value 控制颜色

### 2.2 show-alpha 属性

- **测试ID**: `color-picker-show-alpha`
- **测试步骤**: 1. 设置 show-alpha 2. 验证透明度滑块显示
- **预期结果**: 透明度滑块显示正常

### 2.3 color-format 属性

- **测试ID**: `color-picker-color-format-{value}`
- **测试值**: hex, rgb, hsl, hsv
- **测试步骤**: 1. 设置不同 color-format 2. 验证格式正确
- **预期结果**: 不同格式正确

### 2.4 disabled 属性

- **测试ID**: `color-picker-disabled`
- **测试步骤**: 1. 设置 disabled 2. 尝试点击 3. 验证无法操作
- **预期结果**: 禁用功能正常

### 2.5 size 属性

- **测试ID**: `color-picker-size-{value}`
- **测试值**: medium, small, mini
- **测试步骤**: 1. 设置不同 size 2. 验证尺寸正确
- **预期结果**: 不同尺寸正确

### 2.6 predefine 属性

- **测试ID**: `color-picker-predefine`
- **测试步骤**: 1. 设置 predefine 2. 验证预定义颜色显示
- **预期结果**: 预定义颜色显示正常

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `color-picker-event-change`
- **测试步骤**: 1. 监听事件 2. 选择颜色 3. 验证事件触发
- **预期结果**: change 事件正常

### 3.2 active-change 事件

- **测试ID**: `color-picker-event-active-change`
- **测试步骤**: 1. 监听事件 2. 拖动颜色面板 3. 验证事件触发
- **预期结果**: active-change 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
