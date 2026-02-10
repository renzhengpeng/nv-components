# Checkbox 复选框组件测试用例

## 组件信息

- **组件名称**: nv-checkbox
- **组件路径**: `src/components/checkbox`
- **测试优先级**: P0 (高优先级)
- **组件描述**: 一组备选项中进行多选

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `checkbox-basic-render`
- **测试步骤**:
  1. 渲染一个基础复选框
  2. 验证复选框正常显示
  3. 验证标签文本正确显示
- **预期结果**: 复选框和标签正常渲染

### 1.2 选中/取消选中

- **测试ID**: `checkbox-toggle`
- **测试步骤**:
  1. 点击未选中的复选框
  2. 验证复选框变为选中状态
  3. 再次点击复选框
  4. 验证复选框变为未选中状态
- **预期结果**: 点击切换选中状态

### 1.3 半选状态

- **测试ID**: `checkbox-indeterminate`
- **测试步骤**:
  1. 设置 indeterminate 属性为 true
  2. 验证复选框显示半选状态（横线）
  3. 点击复选框
  4. 验证变为全选状态
- **预期结果**: 半选状态正确显示和切换

## 2. 属性测试

### 2.1 checked 属性 - 选中状态

- **测试ID**: `checkbox-checked`
- **测试步骤**:
  1. 设置 checked 属性为 true
  2. 验证复选框显示选中状态
  3. 设置 checked 为 false
  4. 验证复选框显示未选中状态
- **预期结果**: checked 属性控制选中状态

### 2.2 disabled 属性 - 禁用状态

- **测试ID**: `checkbox-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证复选框显示禁用样式
  3. 尝试点击复选框
  4. 验证状态不改变
- **预期结果**: 禁用状态下无法操作

### 2.3 indeterminate 属性 - 半选状态

- **测试ID**: `checkbox-indeterminate-prop`
- **测试步骤**:
  1. 设置 indeterminate 属性
  2. 验证显示半选样式（横线图标）
- **预期结果**: 半选状态样式正确

### 2.4 label 属性 - 标签文本

- **测试ID**: `checkbox-label`
- **测试步骤**:
  1. 设置 label 属性
  2. 验证标签文本正确显示
  3. 点击标签文本
  4. 验证复选框状态切换
- **预期结果**: 标签文本正确显示，点击标签可切换状态

### 2.5 value 属性 - 值

- **测试ID**: `checkbox-value`
- **测试步骤**:
  1. 设置 value 属性
  2. 在 checkbox-group 中使用
  3. 选中复选框
  4. 验证 group 的值包含该 value
- **预期结果**: value 属性正确工作

### 2.6 name 属性 - 表单名称

- **测试ID**: `checkbox-name`
- **测试步骤**:
  1. 设置 name 属性
  2. 在表单中使用
  3. 提交表单
  4. 验证表单数据包含该字段
- **预期结果**: name 属性正确工作

### 2.7 size 属性 - 尺寸

- **测试ID**: `checkbox-size-{value}`
- **测试值**: mini, small, medium, large
- **测试步骤**:
  1. 设置不同的 size 值
  2. 验证复选框尺寸符合预期
- **预期结果**: 不同尺寸正确显示

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `checkbox-event-change`
- **测试步骤**:
  1. 监听 change 事件
  2. 点击复选框
  3. 验证 change 事件触发
  4. 验证事件参数包含新的选中状态
- **预期结果**: change 事件正常触发

### 3.2 禁用状态下的事件

- **测试ID**: `checkbox-disabled-event`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 监听 change 事件
  3. 尝试点击复选框
  4. 验证 change 事件不触发
- **预期结果**: 禁用状态下不触发事件

## 4. Checkbox Group 测试

### 4.1 基础分组

- **测试ID**: `checkbox-group-basic`
- **测试步骤**:
  1. 创建 checkbox-group
  2. 添加多个 checkbox
  3. 选中部分复选框
  4. 验证 group 的 value 包含所有选中项的值
- **预期结果**: 分组功能正常

### 4.2 min 属性 - 最小选中数

- **测试ID**: `checkbox-group-min`
- **测试步骤**:
  1. 设置 min="2"
  2. 选中 2 个复选框
  3. 尝试取消选中其中一个
  4. 验证无法取消（保持最小数量）
- **预期结果**: 最小选中数限制生效

### 4.3 max 属性 - 最大选中数

- **测试ID**: `checkbox-group-max`
- **测试步骤**:
  1. 设置 max="3"
  2. 选中 3 个复选框
  3. 尝试选中第 4 个
  4. 验证无法选中（达到最大数量）
- **预期结果**: 最大选中数限制生效

### 4.4 组禁用

- **测试ID**: `checkbox-group-disabled`
- **测试步骤**:
  1. 设置 group 的 disabled 属性
  2. 验证所有复选框都显示禁用状态
  3. 尝试点击任意复选框
  4. 验证无法操作
- **预期结果**: 组禁用功能正常

## 5. 交互测试

### 5.1 鼠标点击

- **测试ID**: `checkbox-mouse-click`
- **测试步骤**:
  1. 使用鼠标点击复选框
  2. 验证状态切换
  3. 点击标签文本
  4. 验证状态也切换
- **预期结果**: 鼠标点击正常工作

### 5.2 键盘 Space 键

- **测试ID**: `checkbox-keyboard-space`
- **测试步骤**:
  1. 使用 Tab 键聚焦复选框
  2. 按 Space 键
  3. 验证状态切换
- **预期结果**: Space 键切换状态

### 5.3 Tab 键导航

- **测试ID**: `checkbox-tab-navigation`
- **测试步骤**:
  1. 聚焦第一个复选框
  2. 按 Tab 键
  3. 验证焦点移到下一个复选框
- **预期结果**: Tab 键导航正常

## 6. 边界测试

### 6.1 空标签

- **测试ID**: `checkbox-empty-label`
- **测试步骤**:
  1. 不设置 label 属性
  2. 验证只显示复选框，无标签文本
- **预期结果**: 空标签正常处理

### 6.2 超长标签

- **测试ID**: `checkbox-long-label`
- **测试步骤**:
  1. 设置非常长的标签文本
  2. 验证文本正确显示或换行
- **预期结果**: 超长标签正确处理

### 6.3 特殊字符标签

- **测试ID**: `checkbox-special-chars-label`
- **测试步骤**:
  1. 设置包含特殊字符的标签
  2. 验证特殊字符正确显示
- **预期结果**: 特殊字符正确转义

## 7. 可访问性测试

### 7.1 ARIA 属性 - checked

- **测试ID**: `checkbox-aria-checked`
- **测试步骤**:
  1. 验证 aria-checked 属性
  2. 选中复选框
  3. 验证 aria-checked="true"
  4. 取消选中
  5. 验证 aria-checked="false"
  6. 设置半选状态
  7. 验证 aria-checked="mixed"
- **预期结果**: ARIA checked 属性正确

### 7.2 ARIA 属性 - disabled

- **测试ID**: `checkbox-aria-disabled`
- **测试步骤**:
  1. 设置 disabled 属性
  2. 验证 aria-disabled="true"
- **预期结果**: ARIA disabled 属性正确

### 7.3 键盘完全可访问

- **测试ID**: `checkbox-keyboard-accessible`
- **测试步骤**:
  1. 仅使用键盘操作复选框
  2. Tab 聚焦、Space 切换
  3. 验证所有功能都可用
- **预期结果**: 完全支持键盘操作

### 7.4 屏幕阅读器

- **测试ID**: `checkbox-screen-reader`
- **测试步骤**:
  1. 使用屏幕阅读器
  2. 验证复选框状态被正确读取
  3. 验证标签被正确读取
- **预期结果**: 屏幕阅读器支持良好

## 8. 样式测试

### 8.1 CSS Parts

- **测试ID**: `checkbox-css-parts`
- **测试步骤**:
  1. 使用 CSS Parts 自定义样式
  2. 验证样式生效
- **预期结果**: CSS Parts 可自定义样式

### 8.2 CSS 变量

- **测试ID**: `checkbox-css-variables`
- **测试步骤**:
  1. 设置 CSS 变量
  2. 验证样式变化
- **预期结果**: CSS 变量可自定义样式

### 8.3 主题色

- **测试ID**: `checkbox-theme-color`
- **测试步骤**:
  1. 修改全局主题色
  2. 验证选中状态颜色随之变化
- **预期结果**: 复选框颜色跟随主题色

## 9. 性能测试

### 9.1 大量复选框渲染

- **测试ID**: `checkbox-performance-render`
- **测试步骤**:
  1. 渲染 1000 个复选框
  2. 测量渲染时间
- **预期结果**: 渲染时间在可接受范围内

### 9.2 快速切换性能

- **测试ID**: `checkbox-performance-toggle`
- **测试步骤**:
  1. 快速连续点击复选框
  2. 验证响应流畅
- **预期结果**: 快速切换响应流畅

## 测试覆盖率目标

- **功能覆盖率**: 100%
- **属性覆盖率**: 100%
- **事件覆盖率**: 100%
- **可访问性覆盖率**: 100%
