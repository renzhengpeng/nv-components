# Popup 弹出层组件测试用例

## 组件信息

- **组件名称**: nv-popup
- **测试优先级**: P1
- **组件描述**: 弹出层基础组件，用于构建 Tooltip、Dropdown 等组件

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `popup-basic-render`
- **测试步骤**: 1. 设置 visible=true 2. 验证弹出层显示
- **预期结果**: 弹出层正常渲染

### 1.2 显示/隐藏

- **测试ID**: `popup-toggle`
- **测试步骤**: 1. 切换 visible 2. 验证弹出层显示/隐藏
- **预期结果**: 显示隐藏正常

## 2. 属性测试

### 2.1 visible 属性

- **测试ID**: `popup-visible`
- **测试步骤**: 1. 设置 visible 2. 验证弹出层显示/隐藏
- **预期结果**: visible 控制显示

### 2.2 placement 属性

- **测试ID**: `popup-placement-{value}`
- **测试值**: top, bottom, left, right, top-start, top-end, bottom-start, bottom-end, left-start, left-end, right-start, right-end
- **测试步骤**: 1. 设置不同 placement 2. 验证位置正确
- **预期结果**: 不同位置正确

### 2.3 trigger 属性

- **测试ID**: `popup-trigger-{value}`
- **测试值**: click, hover, focus, manual
- **测试步骤**: 1. 设置不同 trigger 2. 验证触发方式正确
- **预期结果**: 不同触发方式正确

### 2.4 offset 属性

- **测试ID**: `popup-offset`
- **测试步骤**: 1. 设置 offset 2. 验证偏移量正确
- **预期结果**: 偏移量正确

### 2.5 show-arrow 属性

- **测试ID**: `popup-show-arrow`
- **测试步骤**: 1. 设置 show-arrow 2. 验证箭头显示
- **预期结果**: 箭头显示控制正常

### 2.6 transition 属性

- **测试ID**: `popup-transition`
- **测试步骤**: 1. 设置自定义 transition 2. 验证动画效果
- **预期结果**: 自定义动画正常

### 2.7 append-to-body 属性

- **测试ID**: `popup-append-to-body`
- **测试步骤**: 1. 设置 append-to-body 2. 验证弹出层添加到 body
- **预期结果**: 添加到 body 正常

### 2.8 popper-options 属性

- **测试ID**: `popup-popper-options`
- **测试步骤**: 1. 设置 popper-options 2. 验证定位选项生效
- **预期结果**: 定位选项正常

## 3. 事件测试

### 3.1 show 事件

- **测试ID**: `popup-event-show`
- **测试步骤**: 1. 监听 show 事件 2. 显示弹出层 3. 验证事件触发
- **预期结果**: show 事件正常触发

### 3.2 hide 事件

- **测试ID**: `popup-event-hide`
- **测试步骤**: 1. 监听 hide 事件 2. 隐藏弹出层 3. 验证事件触发
- **预期结果**: hide 事件正常触发

## 4. 定位测试

### 4.1 自动定位

- **测试ID**: `popup-auto-placement`
- **测试步骤**: 1. 在边界位置触发 2. 验证自动调整位置
- **预期结果**: 自动定位正常

### 4.2 边界检测

- **测试ID**: `popup-boundary-detection`
- **测试步骤**: 1. 在页面边界触发 2. 验证不溢出视口
- **预期结果**: 边界检测正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
