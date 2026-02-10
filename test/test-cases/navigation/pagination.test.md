# Pagination 分页组件测试用例

## 组件信息

- **组件名称**: nv-pagination
- **组件路径**: `src/components/pagination`
- **测试优先级**: P0 (高优先级)
- **组件描述**: 当数据量过多时，使用分页分解数据

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `pagination-basic-render`
- **测试步骤**:
  1. 设置 total 和 page-size
  2. 验证分页器正常显示
  3. 验证页码按钮正确计算
- **预期结果**: 分页器正常渲染

### 1.2 页码切换

- **测试ID**: `pagination-page-change`
- **测试步骤**:
  1. 点击页码按钮
  2. 验证当前页码更新
  3. 验证触发 current-change 事件
- **预期结果**: 页码切换正常

### 1.3 上一页/下一页

- **测试ID**: `pagination-prev-next`
- **测试步骤**:
  1. 点击下一页按钮
  2. 验证页码增加
  3. 点击上一页按钮
  4. 验证页码减少
- **预期结果**: 上一页/下一页功能正常

## 2. 属性测试

### 2.1 current-page 属性 (v-model)

- **测试ID**: `pagination-current-page`
- **测试步骤**:
  1. 设置 current-page 值
  2. 验证对应页码激活
- **预期结果**: current-page 控制当前页

### 2.2 page-size 属性 (v-model)

- **测试ID**: `pagination-page-size`
- **测试步骤**:
  1. 设置 page-size 值
  2. 验证每页显示数量正确
- **预期结果**: page-size 控制每页数量

### 2.3 total 属性 - 总条目数

- **测试ID**: `pagination-total`
- **测试步骤**:
  1. 设置 total 值
  2. 验证总页数正确计算
- **预期结果**: total 属性正确工作

### 2.4 page-count 属性 - 总页数

- **测试ID**: `pagination-page-count`
- **测试步骤**:
  1. 设置 page-count 值
  2. 验证页码按钮数量正确
- **预期结果**: page-count 属性正确工作

### 2.5 pager-count 属性 - 页码按钮数量

- **测试ID**: `pagination-pager-count`
- **测试步骤**:
  1. 设置 pager-count 为 5
  2. 验证最多显示 5 个页码按钮
- **预期结果**: pager-count 控制按钮数量

### 2.6 layout 属性 - 组件布局

- **测试ID**: `pagination-layout`
- **测试步骤**:
  1. 设置 layout="prev, pager, next, jumper, total, sizes"
  2. 验证所有组件都显示
- **预期结果**: layout 控制组件显示

### 2.7 page-sizes 属性 - 每页显示个数选择器

- **测试ID**: `pagination-page-sizes`
- **测试步骤**:
  1. 设置 page-sizes="[10, 20, 30, 40]"
  2. 验证选择器选项正确
- **预期结果**: page-sizes 属性正确工作

### 2.8 disabled 属性 - 禁用

- **测试ID**: `pagination-disabled`
- **测试步骤**:
  1. 设置 disabled 为 true
  2. 验证所有按钮禁用
  3. 尝试点击
  4. 验证无法操作
- **预期结果**: 禁用功能正常

### 2.9 hide-on-single-page 属性

- **测试ID**: `pagination-hide-on-single-page`
- **测试步骤**:
  1. 设置 hide-on-single-page 为 true
  2. 设置 total 小于 page-size
  3. 验证分页器隐藏
- **预期结果**: 单页时隐藏

## 3. 事件测试

### 3.1 current-change 事件

- **测试ID**: `pagination-event-current-change`
- **测试步骤**:
  1. 监听 current-change 事件
  2. 切换页码
  3. 验证事件触发
  4. 验证事件参数包含新页码
- **预期结果**: current-change 事件正常触发

### 3.2 size-change 事件

- **测试ID**: `pagination-event-size-change`
- **测试步骤**:
  1. 监听 size-change 事件
  2. 切换每页显示数量
  3. 验证事件触发
  4. 验证事件参数包含新数量
- **预期结果**: size-change 事件正常触发

### 3.3 prev-click 事件

- **测试ID**: `pagination-event-prev-click`
- **测试步骤**:
  1. 监听 prev-click 事件
  2. 点击上一页按钮
  3. 验证事件触发
- **预期结果**: prev-click 事件正常触发

### 3.4 next-click 事件

- **测试ID**: `pagination-event-next-click`
- **测试步骤**:
  1. 监听 next-click 事件
  2. 点击下一页按钮
  3. 验证事件触发
- **预期结果**: next-click 事件正常触发

## 4. 交互测试

### 4.1 点击页码按钮

- **测试ID**: `pagination-click-pager`
- **测试步骤**:
  1. 点击页码按钮
  2. 验证页码切换
- **预期结果**: 点击页码正常工作

### 4.2 点击更多按钮

- **测试ID**: `pagination-click-more`
- **测试步骤**:
  1. 在大量页码时点击"更多"按钮
  2. 验证快速跳转
- **预期结果**: 更多按钮正常工作

### 4.3 跳转输入框

- **测试ID**: `pagination-jumper`
- **测试步骤**:
  1. 在跳转输入框输入页码
  2. 按 Enter 键
  3. 验证跳转到对应页
- **预期结果**: 跳转功能正常

### 4.4 每页数量选择器

- **测试ID**: `pagination-size-selector`
- **测试步骤**:
  1. 点击每页数量选择器
  2. 选择新的数量
  3. 验证每页数量更新
- **预期结果**: 数量选择器正常工作

## 5. 边界测试

### 5.1 总数为0

- **测试ID**: `pagination-total-zero`
- **测试步骤**:
  1. 设置 total 为 0
  2. 验证分页器显示正确
- **预期结果**: 总数为0正常处理

### 5.2 总数为1

- **测试ID**: `pagination-total-one`
- **测试步骤**:
  1. 设置 total 为 1
  2. 验证只有一页
- **预期结果**: 总数为1正常处理

### 5.3 超大页码数

- **测试ID**: `pagination-large-pages`
- **测试步骤**:
  1. 设置 total 为 10000000
  2. 验证分页器正常工作
- **预期结果**: 超大页码数正常处理

### 5.4 第一页禁用上一页

- **测试ID**: `pagination-first-page`
- **测试步骤**:
  1. 在第一页
  2. 验证上一页按钮禁用
- **预期结果**: 第一页上一页禁用

### 5.5 最后一页禁用下一页

- **测试ID**: `pagination-last-page`
- **测试步骤**:
  1. 在最后一页
  2. 验证下一页按钮禁用
- **预期结果**: 最后一页下一页禁用

### 5.6 无效跳转页码

- **测试ID**: `pagination-invalid-jump`
- **测试步骤**:
  1. 在跳转框输入超出范围的页码
  2. 验证自动修正或提示错误
- **预期结果**: 无效页码正确处理

## 6. 可访问性测试

### 6.1 ARIA 属性 - current

- **测试ID**: `pagination-aria-current`
- **测试步骤**:
  1. 验证当前页码 aria-current="page"
- **预期结果**: ARIA current 属性正确

### 6.2 键盘导航

- **测试ID**: `pagination-keyboard-navigation`
- **测试步骤**:
  1. 使用 Tab 键导航
  2. 使用 Enter 键选择页码
  3. 验证所有功能都可用
- **预期结果**: 键盘导航正常

### 6.3 屏幕阅读器

- **测试ID**: `pagination-screen-reader`
- **测试步骤**:
  1. 使用屏幕阅读器
  2. 验证页码信息被正确读取
- **预期结果**: 屏幕阅读器支持良好

## 7. 性能测试

### 7.1 大量页码渲染

- **测试ID**: `pagination-performance-render`
- **测试步骤**:
  1. 设置 total 为 1000000
  2. 测量渲染时间
- **预期结果**: 渲染时间在可接受范围内

### 7.2 快速切换性能

- **测试ID**: `pagination-performance-switch`
- **测试步骤**:
  1. 快速连续切换页码
  2. 验证响应流畅
- **预期结果**: 快速切换响应流畅

## 测试覆盖率目标

- **功能覆盖率**: 100%
- **属性覆盖率**: 100%
- **事件覆盖率**: 100%
- **可访问性覆盖率**: 100%
