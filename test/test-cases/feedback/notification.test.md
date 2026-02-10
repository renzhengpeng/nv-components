# Notification 通知组件测试用例

## 组件信息

- **组件名称**: nv-notification
- **测试优先级**: P1
- **组件描述**: 悬浮出现在页面角落，显示全局的通知提醒消息

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `notification-basic-render`
- **测试步骤**: 1. 显示通知 2. 验证通知正常显示
- **预期结果**: 通知正常渲染

### 1.2 自动关闭

- **测试ID**: `notification-auto-close`
- **测试步骤**: 1. 显示通知 2. 等待 duration 3. 验证通知关闭
- **预期结果**: 自动关闭正常

### 1.3 手动关闭

- **测试ID**: `notification-manual-close`
- **测试步骤**: 1. 点击关闭按钮 2. 验证通知关闭
- **预期结果**: 手动关闭正常

## 2. 属性测试

### 2.1 title 属性

- **测试ID**: `notification-title`
- **测试步骤**: 1. 设置 title 2. 验证标题显示
- **预期结果**: title 正确显示

### 2.2 message 属性

- **测试ID**: `notification-message`
- **测试步骤**: 1. 设置 message 2. 验证消息内容
- **预期结果**: message 正确显示

### 2.3 type 属性

- **测试ID**: `notification-type-{value}`
- **测试值**: success, warning, info, error
- **测试步骤**: 1. 设置不同 type 2. 验证图标和颜色
- **预期结果**: 不同类型正确

### 2.4 duration 属性

- **测试ID**: `notification-duration`
- **测试步骤**: 1. 设置 duration 2. 验证关闭时间
- **预期结果**: duration 正确设置

### 2.5 position 属性

- **测试ID**: `notification-position-{value}`
- **测试值**: top-right, top-left, bottom-right, bottom-left
- **测试步骤**: 1. 设置不同 position 2. 验证位置
- **预期结果**: 不同位置正确

### 2.6 showClose 属性

- **测试ID**: `notification-show-close`
- **测试步骤**: 1. 设置 showClose=false 2. 验证无关闭按钮
- **预期结果**: 关闭按钮显示控制正常

### 2.7 offset 属性

- **测试ID**: `notification-offset`
- **测试步骤**: 1. 设置 offset 2. 验证偏移距离
- **预期结果**: 偏移距离正确

## 3. 事件测试

### 3.1 close 事件

- **测试ID**: `notification-event-close`
- **测试步骤**: 1. 监听事件 2. 关闭通知 3. 验证事件触发
- **预期结果**: close 事件正常

### 3.2 click 事件

- **测试ID**: `notification-event-click`
- **测试步骤**: 1. 监听事件 2. 点击通知 3. 验证事件触发
- **预期结果**: click 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
