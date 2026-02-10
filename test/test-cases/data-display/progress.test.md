# Progress 进度条组件测试用例

## 组件信息

- **组件名称**: nv-progress
- **测试优先级**: P1
- **组件描述**: 用于展示操作进度，告知用户当前状态和预期

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `progress-basic-render`
- **测试步骤**: 1. 渲染基础进度条 2. 验证进度条正常显示
- **预期结果**: 进度条正常渲染

### 1.2 进度更新

- **测试ID**: `progress-update`
- **测试步骤**: 1. 更新 percentage 值 2. 验证进度条宽度变化
- **预期结果**: 进度更新正常

## 2. 属性测试

### 2.1 percentage 属性

- **测试ID**: `progress-percentage`
- **测试步骤**: 1. 设置 percentage 2. 验证进度显示正确
- **预期结果**: percentage 正确显示

### 2.2 type 属性

- **测试ID**: `progress-type-{value}`
- **测试值**: line, circle, dashboard
- **测试步骤**: 1. 设置不同 type 2. 验证类型正确
- **预期结果**: 不同类型正确显示

### 2.3 stroke-width 属性

- **测试ID**: `progress-stroke-width`
- **测试步骤**: 1. 设置 stroke-width 2. 验证宽度正确
- **预期结果**: 宽度正确设置

### 2.4 status 属性

- **测试ID**: `progress-status-{value}`
- **测试值**: success, exception, warning
- **测试步骤**: 1. 设置不同 status 2. 验证颜色正确
- **预期结果**: 不同状态颜色正确

### 2.5 color 属性

- **测试ID**: `progress-color`
- **测试步骤**: 1. 设置自定义 color 2. 验证颜色应用
- **预期结果**: 自定义颜色正确

### 2.6 show-text 属性

- **测试ID**: `progress-show-text`
- **测试步骤**: 1. 设置 show-text=false 2. 验证文字隐藏
- **预期结果**: 文字显示控制正常

### 2.7 text-inside 属性

- **测试ID**: `progress-text-inside`
- **测试步骤**: 1. 设置 text-inside 2. 验证文字在进度条内
- **预期结果**: 文字内显正常

### 2.8 format 属性

- **测试ID**: `progress-format`
- **测试步骤**: 1. 设置自定义 format 函数 2. 验证文字格式化
- **预期结果**: 格式化函数正常工作

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
