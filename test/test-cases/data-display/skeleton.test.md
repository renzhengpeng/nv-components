# Skeleton 骨架屏组件测试用例

## 组件信息

- **组件名称**: nv-skeleton
- **测试优先级**: P2
- **组件描述**: 在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `skeleton-basic-render`
- **测试步骤**: 1. 渲染骨架屏 2. 验证骨架屏正常显示
- **预期结果**: 骨架屏正常渲染

### 1.2 加载完成

- **测试ID**: `skeleton-loading-complete`
- **测试步骤**: 1. 设置 loading=false 2. 验证显示实际内容
- **预期结果**: 加载完成显示内容

## 2. 属性测试

### 2.1 loading 属性

- **测试ID**: `skeleton-loading`
- **测试步骤**: 1. 设置 loading 2. 验证骨架屏/内容显示
- **预期结果**: loading 控制显示

### 2.2 rows 属性

- **测试ID**: `skeleton-rows`
- **测试步骤**: 1. 设置 rows 2. 验证行数
- **预期结果**: rows 正确设置

### 2.3 animated 属性

- **测试ID**: `skeleton-animated`
- **测试步骤**: 1. 设置 animated 2. 验证动画效果
- **预期结果**: 动画效果正常

### 2.4 throttle 属性

- **测试ID**: `skeleton-throttle`
- **测试步骤**: 1. 设置 throttle 2. 验证延迟渲染
- **预期结果**: 延迟渲染正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
