# Cascader 级联选择器组件测试用例

## 组件信息

- **组件名称**: nv-cascader
- **测试优先级**: P1
- **组件描述**: 当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `cascader-basic-render`
- **测试步骤**: 1. 渲染级联选择器 2. 验证选择器正常显示
- **预期结果**: 级联选择器正常渲染

### 1.2 展开选项

- **测试ID**: `cascader-expand`
- **测试步骤**: 1. 点击选择器 2. 点击选项 3. 验证下级选项展开
- **预期结果**: 选项展开正常

### 1.3 选择选项

- **测试ID**: `cascader-select`
- **测试步骤**: 1. 逐级选择选项 2. 验证值更新
- **预期结果**: 选择功能正常

## 2. 属性测试

### 2.1 options 属性

- **测试ID**: `cascader-options`
- **测试步骤**: 1. 设置 options 2. 验证选项显示
- **预期结果**: options 正确显示

### 2.2 value 属性 (v-model)

- **测试ID**: `cascader-value`
- **测试步骤**: 1. 设置 value 2. 验证选中项
- **预期结果**: value 控制选中项

### 2.3 props 属性

- **测试ID**: `cascader-props`
- **测试步骤**: 1. 设置自定义 props 2. 验证映射正确
- **预期结果**: props 映射正常

### 2.4 separator 属性

- **测试ID**: `cascader-separator`
- **测试步骤**: 1. 设置 separator 2. 验证分隔符
- **预期结果**: separator 正确显示

### 2.5 disabled 属性

- **测试ID**: `cascader-disabled`
- **测试步骤**: 1. 设置 disabled 2. 尝试点击 3. 验证无法操作
- **预期结果**: 禁用功能正常

### 2.6 clearable 属性

- **测试ID**: `cascader-clearable`
- **测试步骤**: 1. 设置 clearable 2. 选择选项 3. 点击清空 4. 验证清空
- **预期结果**: 清空功能正常

### 2.7 show-all-levels 属性

- **测试ID**: `cascader-show-all-levels`
- **测试步骤**: 1. 设置 show-all-levels=false 2. 验证只显示最后一级
- **预期结果**: 显示层级控制正常

### 2.8 filterable 属性

- **测试ID**: `cascader-filterable`
- **测试步骤**: 1. 设置 filterable 2. 输入搜索 3. 验证过滤
- **预期结果**: 搜索过滤正常

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `cascader-event-change`
- **测试步骤**: 1. 监听事件 2. 选择选项 3. 验证事件触发
- **预期结果**: change 事件正常

### 3.2 expand-change 事件

- **测试ID**: `cascader-event-expand-change`
- **测试步骤**: 1. 监听事件 2. 展开选项 3. 验证事件触发
- **预期结果**: expand-change 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
