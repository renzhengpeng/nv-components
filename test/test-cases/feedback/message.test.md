# Message 消息提示组件测试用例

## 组件信息

- **组件名称**: nv-message
- **测试优先级**: P1
- **组件描述**: 常用于主动操作后的反馈提示

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `message-basic-render`
- **测试步骤**: 1. 显示消息 2. 验证消息正常显示
- **预期结果**: 消息正常渲染

### 1.2 自动关闭

- **测试ID**: `message-auto-close`
- **测试步骤**: 1. 显示消息 2. 等待 duration 3. 验证消息关闭
- **预期结果**: 自动关闭正常

### 1.3 手动关闭

- **测试ID**: `message-manual-close`
- **测试步骤**: 1. 设置 showClose 2. 点击关闭按钮 3. 验证消息关闭
- **预期结果**: 手动关闭正常

## 2. 属性测试

### 2.1 message 属性

- **测试ID**: `message-message`
- **测试步骤**: 1. 设置 message 2. 验证消息内容
- **预期结果**: message 正确显示

### 2.2 type 属性

- **测试ID**: `message-type-{value}`
- **测试值**: success, warning, info, error
- **测试步骤**: 1. 设置不同 type 2. 验证图标和颜色
- **预期结果**: 不同类型正确

### 2.3 duration 属性

- **测试ID**: `message-duration`
- **测试步骤**: 1. 设置 duration 2. 验证关闭时间
- **预期结果**: duration 正确设置

### 2.4 showClose 属性

- **测试ID**: `message-show-close`
- **测试步骤**: 1. 设置 showClose 2. 验证关闭按钮显示
- **预期结果**: 关闭按钮显示正常

### 2.5 center 属性

- **测试ID**: `message-center`
- **测试步骤**: 1. 设置 center 2. 验证文字居中
- **预期结果**: 文字居中正常

### 2.6 offset 属性

- **测试ID**: `message-offset`
- **测试步骤**: 1. 设置 offset 2. 验证偏移距离
- **预期结果**: 偏移距离正确

## 3. 事件测试

### 3.1 close 事件

- **测试ID**: `message-event-close`
- **测试步骤**: 1. 监听事件 2. 关闭消息 3. 验证事件触发
- **预期结果**: close 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
