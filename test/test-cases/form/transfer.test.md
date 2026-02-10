# Transfer 穿梭框组件测试用例

## 组件信息

- **组件名称**: nv-transfer
- **测试优先级**: P2
- **组件描述**: 双栏穿梭选择框

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `transfer-basic-render`
- **测试步骤**: 1. 渲染穿梭框 2. 验证穿梭框正常显示
- **预期结果**: 穿梭框正常渲染

### 1.2 选择项目

- **测试ID**: `transfer-select-item`
- **测试步骤**: 1. 勾选项目 2. 验证项目被选中
- **预期结果**: 项目选择正常

### 1.3 穿梭项目

- **测试ID**: `transfer-move-item`
- **测试步骤**: 1. 选择项目 2. 点击穿梭按钮 3. 验证项目移动
- **预期结果**: 项目穿梭正常

## 2. 属性测试

### 2.1 data 属性

- **测试ID**: `transfer-data`
- **测试步骤**: 1. 设置 data 2. 验证数据显示
- **预期结果**: data 正确显示

### 2.2 value 属性 (v-model)

- **测试ID**: `transfer-value`
- **测试步骤**: 1. 设置 value 2. 验证右侧项目
- **预期结果**: value 控制右侧项目

### 2.3 filterable 属性

- **测试ID**: `transfer-filterable`
- **测试步骤**: 1. 设置 filterable 2. 输入搜索 3. 验证过滤
- **预期结果**: 搜索过滤正常

### 2.4 titles 属性

- **测试ID**: `transfer-titles`
- **测试步骤**: 1. 设置 titles 2. 验证标题显示
- **预期结果**: titles 正确显示

### 2.5 button-texts 属性

- **测试ID**: `transfer-button-texts`
- **测试步骤**: 1. 设置 button-texts 2. 验证按钮文字
- **预期结果**: 按钮文字正确

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `transfer-event-change`
- **测试步骤**: 1. 监听事件 2. 穿梭项目 3. 验证事件触发
- **预期结果**: change 事件正常

### 3.2 left-check-change 事件

- **测试ID**: `transfer-event-left-check-change`
- **测试步骤**: 1. 监听事件 2. 勾选左侧项目 3. 验证事件触发
- **预期结果**: left-check-change 事件正常

### 3.3 right-check-change 事件

- **测试ID**: `transfer-event-right-check-change`
- **测试步骤**: 1. 监听事件 2. 勾选右侧项目 3. 验证事件触发
- **预期结果**: right-check-change 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
