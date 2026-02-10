# Dropdown 下拉菜单组件测试用例

## 组件信息

- **组件名称**: nv-dropdown
- **测试优先级**: P1
- **组件描述**: 将动作或菜单折叠到下拉菜单中

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `dropdown-basic-render`
- **测试步骤**: 1. 渲染下拉菜单 2. 触发菜单 3. 验证菜单显示
- **预期结果**: 下拉菜单正常渲染

### 1.2 hover 触发

- **测试ID**: `dropdown-hover-trigger`
- **测试步骤**: 1. 悬停触发元素 2. 验证菜单显示
- **预期结果**: hover 触发正常

### 1.3 click 触发

- **测试ID**: `dropdown-click-trigger`
- **测试步骤**: 1. 设置 trigger="click" 2. 点击触发元素 3. 验证菜单显示
- **预期结果**: click 触发正常

### 1.4 菜单项点击

- **测试ID**: `dropdown-item-click`
- **测试步骤**: 1. 打开菜单 2. 点击菜单项 3. 验证触发 command 事件
- **预期结果**: 菜单项点击正常

## 2. 属性测试

### 2.1 trigger 属性

- **测试ID**: `dropdown-trigger-{value}`
- **测试值**: hover, click
- **测试步骤**: 1. 设置不同 trigger 2. 验证触发方式正确
- **预期结果**: 不同触发方式正确

### 2.2 placement 属性

- **测试ID**: `dropdown-placement-{value}`
- **测试值**: top, bottom, top-start, top-end, bottom-start, bottom-end
- **测试步骤**: 1. 设置不同 placement 2. 验证位置正确
- **预期结果**: 不同位置正确

### 2.3 hide-on-click 属性

- **测试ID**: `dropdown-hide-on-click`
- **测试步骤**: 1. 设置 hide-on-click=false 2. 点击菜单项 3. 验证菜单不关闭
- **预期结果**: 点击关闭控制正常

### 2.4 show-timeout 属性

- **测试ID**: `dropdown-show-timeout`
- **测试步骤**: 1. 设置 show-timeout 2. 触发菜单 3. 验证延迟显示
- **预期结果**: 延迟显示正常

### 2.5 hide-timeout 属性

- **测试ID**: `dropdown-hide-timeout`
- **测试步骤**: 1. 设置 hide-timeout 2. 移开触发 3. 验证延迟隐藏
- **预期结果**: 延迟隐藏正常

### 2.6 size 属性

- **测试ID**: `dropdown-size-{value}`
- **测试值**: medium, small, mini
- **测试步骤**: 1. 设置不同 size 2. 验证尺寸正确
- **预期结果**: 不同尺寸正确

### 2.7 split-button 属性

- **测试ID**: `dropdown-split-button`
- **测试步骤**: 1. 设置 split-button 2. 验证显示分裂按钮
- **预期结果**: 分裂按钮显示

### 2.8 type 属性

- **测试ID**: `dropdown-type-{value}`
- **测试值**: primary, success, warning, danger, info
- **测试步骤**: 1. 设置不同 type 2. 验证颜色正确
- **预期结果**: 不同类型正确

## 3. 事件测试

### 3.1 command 事件

- **测试ID**: `dropdown-event-command`
- **测试步骤**: 1. 监听 command 事件 2. 点击菜单项 3. 验证事件触发
- **预期结果**: command 事件正常触发

### 3.2 visible-change 事件

- **测试ID**: `dropdown-event-visible-change`
- **测试步骤**: 1. 监听 visible-change 事件 2. 打开/关闭菜单 3. 验证事件触发
- **预期结果**: visible-change 事件正常触发

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
