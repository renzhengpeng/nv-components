# Timeline 时间线组件测试用例

## 组件信息

- **组件名称**: nv-timeline
- **测试优先级**: P2
- **组件描述**: 可视化地呈现时间流信息

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `timeline-basic-render`
- **测试步骤**: 1. 渲染时间线 2. 验证时间线正常显示
- **预期结果**: 时间线正常渲染

### 1.2 时间线项

- **测试ID**: `timeline-item`
- **测试步骤**: 1. 添加多个时间线项 2. 验证项正常显示
- **预期结果**: 时间线项正常显示

## 2. 属性测试

### 2.1 reverse 属性

- **测试ID**: `timeline-reverse`
- **测试步骤**: 1. 设置 reverse 2. 验证倒序显示
- **预期结果**: 倒序显示正常

### 2.2 timestamp 属性

- **测试ID**: `timeline-item-timestamp`
- **测试步骤**: 1. 设置 timestamp 2. 验证时间戳显示
- **预期结果**: 时间戳显示正常

### 2.3 placement 属性

- **测试ID**: `timeline-item-placement-{value}`
- **测试值**: top, bottom
- **测试步骤**: 1. 设置不同 placement 2. 验证时间戳位置
- **预期结果**: 时间戳位置正确

### 2.4 type 属性

- **测试ID**: `timeline-item-type-{value}`
- **测试值**: primary, success, warning, danger, info
- **测试步骤**: 1. 设置不同 type 2. 验证节点颜色
- **预期结果**: 节点颜色正确

### 2.5 color 属性

- **测试ID**: `timeline-item-color`
- **测试步骤**: 1. 设置自定义 color 2. 验证节点颜色
- **预期结果**: 自定义颜色正确

### 2.6 size 属性

- **测试ID**: `timeline-item-size-{value}`
- **测试值**: normal, large
- **测试步骤**: 1. 设置不同 size 2. 验证节点尺寸
- **预期结果**: 节点尺寸正确

### 2.7 icon 属性

- **测试ID**: `timeline-item-icon`
- **测试步骤**: 1. 设置 icon 2. 验证自定义图标显示
- **预期结果**: 自定义图标显示正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
