# Carousel 走马灯组件测试用例

## 组件信息

- **组件名称**: nv-carousel
- **测试优先级**: P2
- **组件描述**: 在有限空间内，循环播放同一类型的图片、文字等内容

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `carousel-basic-render`
- **测试步骤**: 1. 渲染走马灯 2. 验证走马灯正常显示
- **预期结果**: 走马灯正常渲染

### 1.2 自动切换

- **测试ID**: `carousel-autoplay`
- **测试步骤**: 1. 等待自动切换 2. 验证切换到下一张
- **预期结果**: 自动切换正常

### 1.3 手动切换

- **测试ID**: `carousel-manual-switch`
- **测试步骤**: 1. 点击指示器 2. 验证切换到对应项
- **预期结果**: 手动切换正常

## 2. 属性测试

### 2.1 height 属性

- **测试ID**: `carousel-height`
- **测试步骤**: 1. 设置 height 2. 验证高度
- **预期结果**: height 正确设置

### 2.2 initial-index 属性

- **测试ID**: `carousel-initial-index`
- **测试步骤**: 1. 设置 initial-index 2. 验证初始显示项
- **预期结果**: 初始索引正确

### 2.3 trigger 属性

- **测试ID**: `carousel-trigger-{value}`
- **测试值**: hover, click
- **测试步骤**: 1. 设置不同 trigger 2. 验证触发方式
- **预期结果**: 不同触发方式正确

### 2.4 autoplay 属性

- **测试ID**: `carousel-autoplay-prop`
- **测试步骤**: 1. 设置 autoplay=false 2. 验证不自动切换
- **预期结果**: 自动播放控制正常

### 2.5 interval 属性

- **测试ID**: `carousel-interval`
- **测试步骤**: 1. 设置 interval 2. 验证切换间隔
- **预期结果**: 切换间隔正确

### 2.6 indicator-position 属性

- **测试ID**: `carousel-indicator-position-{value}`
- **测试值**: outside, none
- **测试步骤**: 1. 设置不同 indicator-position 2. 验证指示器位置
- **预期结果**: 指示器位置正确

### 2.7 arrow 属性

- **测试ID**: `carousel-arrow-{value}`
- **测试值**: always, hover, never
- **测试步骤**: 1. 设置不同 arrow 2. 验证箭头显示
- **预期结果**: 箭头显示控制正常

### 2.8 type 属性

- **测试ID**: `carousel-type-card`
- **测试步骤**: 1. 设置 type="card" 2. 验证卡片模式
- **预期结果**: 卡片模式正常

### 2.9 loop 属性

- **测试ID**: `carousel-loop`
- **测试步骤**: 1. 设置 loop=false 2. 验证不循环
- **预期结果**: 循环控制正常

### 2.10 direction 属性

- **测试ID**: `carousel-direction-{value}`
- **测试值**: horizontal, vertical
- **测试步骤**: 1. 设置不同 direction 2. 验证方向
- **预期结果**: 不同方向正确

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `carousel-event-change`
- **测试步骤**: 1. 监听事件 2. 切换项 3. 验证事件触发
- **预期结果**: change 事件正常

## 4. 方法测试

### 4.1 setActiveItem 方法

- **测试ID**: `carousel-method-set-active-item`
- **测试步骤**: 1. 调用 setActiveItem 方法 2. 验证切换到指定项
- **预期结果**: setActiveItem 方法正常

### 4.2 prev 方法

- **测试ID**: `carousel-method-prev`
- **测试步骤**: 1. 调用 prev 方法 2. 验证切换到上一项
- **预期结果**: prev 方法正常

### 4.3 next 方法

- **测试ID**: `carousel-method-next`
- **测试步骤**: 1. 调用 next 方法 2. 验证切换到下一项
- **预期结果**: next 方法正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
