# Popconfirm 气泡确认框组件测试用例

## 组件信息

- **组件名称**: nv-popconfirm
- **测试优先级**: P2
- **组件描述**: 点击元素，弹出气泡式的确认框

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `popconfirm-basic-render`
- **测试步骤**: 1. 点击触发元素 2. 验证确认框显示
- **预期结果**: 确认框正常渲染

### 1.2 确认操作

- **测试ID**: `popconfirm-confirm`
- **测试步骤**: 1. 打开确认框 2. 点击确认按钮 3. 验证触发 confirm 事件
- **预期结果**: 确认操作正常

### 1.3 取消操作

- **测试ID**: `popconfirm-cancel`
- **测试步骤**: 1. 打开确认框 2. 点击取消按钮 3. 验证触发 cancel 事件
- **预期结果**: 取消操作正常

## 2. 属性测试

### 2.1 title 属性

- **测试ID**: `popconfirm-title`
- **测试步骤**: 1. 设置 title 2. 验证标题显示
- **预期结果**: title 正确显示

### 2.2 confirm-button-text 属性

- **测试ID**: `popconfirm-confirm-button-text`
- **测试步骤**: 1. 设置 confirm-button-text 2. 验证确认按钮文字
- **预期结果**: 确认按钮文字正确

### 2.3 cancel-button-text 属性

- **测试ID**: `popconfirm-cancel-button-text`
- **测试步骤**: 1. 设置 cancel-button-text 2. 验证取消按钮文字
- **预期结果**: 取消按钮文字正确

### 2.4 icon 属性

- **测试ID**: `popconfirm-icon`
- **测试步骤**: 1. 设置 icon 2. 验证图标显示
- **预期结果**: 图标显示正常

### 2.5 icon-color 属性

- **测试ID**: `popconfirm-icon-color`
- **测试步骤**: 1. 设置 icon-color 2. 验证图标颜色
- **预期结果**: 图标颜色正确

## 3. 事件测试

### 3.1 confirm 事件

- **测试ID**: `popconfirm-event-confirm`
- **测试步骤**: 1. 监听事件 2. 点击确认 3. 验证事件触发
- **预期结果**: confirm 事件正常

### 3.2 cancel 事件

- **测试ID**: `popconfirm-event-cancel`
- **测试步骤**: 1. 监听事件 2. 点击取消 3. 验证事件触发
- **预期结果**: cancel 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
