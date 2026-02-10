# Drawer 抽屉组件测试用例

## 组件信息

- **组件名称**: nv-drawer
- **测试优先级**: P1
- **组件描述**: 有些时候, Modal 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Modal 几乎相同的 API, 在 UI 上带来不一样的体验

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `drawer-basic-render`
- **测试步骤**: 1. 设置 visible=true 2. 验证抽屉显示
- **预期结果**: 抽屉正常渲染

### 1.2 打开/关闭

- **测试ID**: `drawer-toggle`
- **测试步骤**: 1. 打开抽屉 2. 关闭抽屉 3. 验证状态切换
- **预期结果**: 打开关闭正常

## 2. 属性测试

### 2.1 visible 属性

- **测试ID**: `drawer-visible`
- **测试步骤**: 1. 设置 visible 2. 验证抽屉显示/隐藏
- **预期结果**: visible 控制显示

### 2.2 direction 属性

- **测试ID**: `drawer-direction-{value}`
- **测试值**: rtl, ltr, ttb, btt
- **测试步骤**: 1. 设置不同 direction 2. 验证方向正确
- **预期结果**: 不同方向正确

### 2.3 size 属性

- **测试ID**: `drawer-size`
- **测试步骤**: 1. 设置 size 2. 验证尺寸正确
- **预期结果**: 尺寸正确设置

### 2.4 title 属性

- **测试ID**: `drawer-title`
- **测试步骤**: 1. 设置 title 2. 验证标题显示
- **预期结果**: 标题正确显示

### 2.5 modal 属性

- **测试ID**: `drawer-modal`
- **测试步骤**: 1. 设置 modal=false 2. 验证无遮罩层
- **预期结果**: 遮罩层控制正常

### 2.6 modal-append-to-body 属性

- **测试ID**: `drawer-modal-append-to-body`
- **测试步骤**: 1. 设置 modal-append-to-body 2. 验证遮罩层添加到 body
- **预期结果**: 遮罩层位置正确

### 2.7 append-to-body 属性

- **测试ID**: `drawer-append-to-body`
- **测试步骤**: 1. 设置 append-to-body 2. 验证抽屉添加到 body
- **预期结果**: 抽屉位置正确

### 2.8 lock-scroll 属性

- **测试ID**: `drawer-lock-scroll`
- **测试步骤**: 1. 设置 lock-scroll 2. 打开抽屉 3. 验证页面滚动锁定
- **预期结果**: 滚动锁定正常

### 2.9 close-on-press-escape 属性

- **测试ID**: `drawer-close-on-press-escape`
- **测试步骤**: 1. 打开抽屉 2. 按 ESC 键 3. 验证抽屉关闭
- **预期结果**: ESC 键关闭正常

### 2.10 show-close 属性

- **测试ID**: `drawer-show-close`
- **测试步骤**: 1. 设置 show-close=false 2. 验证无关闭按钮
- **预期结果**: 关闭按钮控制正常

## 3. 事件测试

### 3.1 open 事件

- **测试ID**: `drawer-event-open`
- **测试步骤**: 1. 监听 open 事件 2. 打开抽屉 3. 验证事件触发
- **预期结果**: open 事件正常触发

### 3.2 opened 事件

- **测试ID**: `drawer-event-opened`
- **测试步骤**: 1. 监听 opened 事件 2. 打开抽屉 3. 等待动画完成 4. 验证事件触发
- **预期结果**: opened 事件正常触发

### 3.3 close 事件

- **测试ID**: `drawer-event-close`
- **测试步骤**: 1. 监听 close 事件 2. 关闭抽屉 3. 验证事件触发
- **预期结果**: close 事件正常触发

### 3.4 closed 事件

- **测试ID**: `drawer-event-closed`
- **测试步骤**: 1. 监听 closed 事件 2. 关闭抽屉 3. 等待动画完成 4. 验证事件触发
- **预期结果**: closed 事件正常触发

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
- **事件覆盖率**: ≥90%
