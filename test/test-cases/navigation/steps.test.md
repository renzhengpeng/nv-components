# Steps 步骤条组件测试用例

## 组件信息

- **组件名称**: nv-steps
- **测试优先级**: P2
- **组件描述**: 引导用户按照流程完成任务的分步导航条

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `steps-basic-render`
- **测试步骤**: 1. 渲染步骤条 2. 验证步骤条正常显示
- **预期结果**: 步骤条正常渲染

### 1.2 步骤切换

- **测试ID**: `steps-change`
- **测试步骤**: 1. 更新 active 2. 验证当前步骤变化
- **预期结果**: 步骤切换正常

## 2. 属性测试

### 2.1 active 属性

- **测试ID**: `steps-active`
- **测试步骤**: 1. 设置 active 2. 验证当前步骤
- **预期结果**: active 正确显示

### 2.2 direction 属性

- **测试ID**: `steps-direction-{value}`
- **测试值**: horizontal, vertical
- **测试步骤**: 1. 设置不同 direction 2. 验证方向正确
- **预期结果**: 不同方向正确

### 2.3 process-status 属性

- **测试ID**: `steps-process-status-{value}`
- **测试值**: wait, process, finish, error, success
- **测试步骤**: 1. 设置不同 process-status 2. 验证状态正确
- **预期结果**: 不同状态正确

### 2.4 finish-status 属性

- **测试ID**: `steps-finish-status-{value}`
- **测试值**: wait, process, finish, error, success
- **测试步骤**: 1. 设置 finish-status 2. 验证完成状态
- **预期结果**: 完成状态正确

### 2.5 align-center 属性

- **测试ID**: `steps-align-center`
- **测试步骤**: 1. 设置 align-center 2. 验证居中对齐
- **预期结果**: 居中对齐正常

### 2.6 simple 属性

- **测试ID**: `steps-simple`
- **测试步骤**: 1. 设置 simple 2. 验证简洁模式
- **预期结果**: 简洁模式正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
