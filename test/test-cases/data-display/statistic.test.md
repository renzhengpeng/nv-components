# Statistic 统计数值组件测试用例

## 组件信息

- **组件名称**: nv-statistic
- **测试优先级**: P2
- **组件描述**: 用于突出某个或某组数字时使用

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `statistic-basic-render`
- **测试步骤**: 1. 渲染统计数值 2. 验证数值正常显示
- **预期结果**: 统计数值正常渲染

### 1.2 数值动画

- **测试ID**: `statistic-animation`
- **测试步骤**: 1. 更新数值 2. 验证动画效果
- **预期结果**: 数值动画正常

## 2. 属性测试

### 2.1 value 属性

- **测试ID**: `statistic-value`
- **测试步骤**: 1. 设置 value 2. 验证数值显示
- **预期结果**: value 正确显示

### 2.2 title 属性

- **测试ID**: `statistic-title`
- **测试步骤**: 1. 设置 title 2. 验证标题显示
- **预期结果**: title 正确显示

### 2.3 precision 属性

- **测试ID**: `statistic-precision`
- **测试步骤**: 1. 设置 precision 2. 验证小数位数
- **预期结果**: 小数位数正确

### 2.4 prefix 属性

- **测试ID**: `statistic-prefix`
- **测试步骤**: 1. 设置 prefix 2. 验证前缀显示
- **预期结果**: 前缀正确显示

### 2.5 suffix 属性

- **测试ID**: `statistic-suffix`
- **测试步骤**: 1. 设置 suffix 2. 验证后缀显示
- **预期结果**: 后缀正确显示

### 2.6 value-style 属性

- **测试ID**: `statistic-value-style`
- **测试步骤**: 1. 设置 value-style 2. 验证样式应用
- **预期结果**: 样式正确应用

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
