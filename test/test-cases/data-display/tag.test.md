# Tag 标签组件测试用例

## 组件信息

- **组件名称**: nv-tag
- **测试优先级**: P1
- **组件描述**: 用于标记和选择

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `tag-basic-render`
- **测试步骤**: 1. 渲染基础标签 2. 验证标签正常显示
- **预期结果**: 标签正常渲染

### 1.2 可关闭标签

- **测试ID**: `tag-closable`
- **测试步骤**: 1. 设置 closable 2. 点击关闭按钮 3. 验证触发 close 事件
- **预期结果**: 可关闭功能正常

## 2. 属性测试

### 2.1 type 属性

- **测试ID**: `tag-type-{value}`
- **测试值**: success, info, warning, danger
- **测试步骤**: 1. 设置不同 type 2. 验证颜色正确
- **预期结果**: 不同类型颜色正确

### 2.2 closable 属性

- **测试ID**: `tag-closable-prop`
- **测试步骤**: 1. 设置 closable 2. 验证显示关闭按钮
- **预期结果**: 关闭按钮显示

### 2.3 disable-transitions 属性

- **测试ID**: `tag-disable-transitions`
- **测试步骤**: 1. 设置 disable-transitions 2. 验证无动画
- **预期结果**: 动画禁用

### 2.4 hit 属性

- **测试ID**: `tag-hit`
- **测试步骤**: 1. 设置 hit 2. 验证边框描边
- **预期结果**: 边框描边显示

### 2.5 color 属性

- **测试ID**: `tag-color`
- **测试步骤**: 1. 设置自定义 color 2. 验证颜色应用
- **预期结果**: 自定义颜色正确

### 2.6 size 属性

- **测试ID**: `tag-size-{value}`
- **测试值**: medium, small, mini
- **测试步骤**: 1. 设置不同 size 2. 验证尺寸正确
- **预期结果**: 不同尺寸正确

### 2.7 effect 属性

- **测试ID**: `tag-effect-{value}`
- **测试值**: dark, light, plain
- **测试步骤**: 1. 设置不同 effect 2. 验证效果正确
- **预期结果**: 不同效果正确

## 3. 事件测试

### 3.1 close 事件

- **测试ID**: `tag-event-close`
- **测试步骤**: 1. 设置 closable 2. 监听 close 事件 3. 点击关闭 4. 验证事件触发
- **预期结果**: close 事件正常触发

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
