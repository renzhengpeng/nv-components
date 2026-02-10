# Result 结果组件测试用例

## 组件信息

- **组件名称**: nv-result
- **测试优先级**: P2
- **组件描述**: 用于反馈一系列操作任务的处理结果

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `result-basic-render`
- **测试步骤**: 1. 渲染结果组件 2. 验证结果正常显示
- **预期结果**: 结果组件正常渲染

### 1.2 不同状态

- **测试ID**: `result-status`
- **测试步骤**: 1. 设置不同 status 2. 验证图标和颜色
- **预期结果**: 不同状态正确显示

## 2. 属性测试

### 2.1 title 属性

- **测试ID**: `result-title`
- **测试步骤**: 1. 设置 title 2. 验证标题显示
- **预期结果**: title 正确显示

### 2.2 sub-title 属性

- **测试ID**: `result-sub-title`
- **测试步骤**: 1. 设置 sub-title 2. 验证副标题显示
- **预期结果**: sub-title 正确显示

### 2.3 status 属性

- **测试ID**: `result-status-{value}`
- **测试值**: success, warning, info, error
- **测试步骤**: 1. 设置不同 status 2. 验证状态图标
- **预期结果**: 不同状态正确

### 2.4 icon 属性

- **测试ID**: `result-icon`
- **测试步骤**: 1. 设置自定义 icon 2. 验证图标显示
- **预期结果**: 自定义图标显示正常

## 3. 插槽测试

### 3.1 icon 插槽

- **测试ID**: `result-slot-icon`
- **测试步骤**: 1. 使用 icon 插槽 2. 验证自定义图标显示
- **预期结果**: icon 插槽正常

### 3.2 title 插槽

- **测试ID**: `result-slot-title`
- **测试步骤**: 1. 使用 title 插槽 2. 验证自定义标题显示
- **预期结果**: title 插槽正常

### 3.3 sub-title 插槽

- **测试ID**: `result-slot-sub-title`
- **测试步骤**: 1. 使用 sub-title 插槽 2. 验证自定义副标题显示
- **预期结果**: sub-title 插槽正常

### 3.4 extra 插槽

- **测试ID**: `result-slot-extra`
- **测试步骤**: 1. 使用 extra 插槽 2. 验证额外内容显示
- **预期结果**: extra 插槽正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
