# Empty 空状态组件测试用例

## 组件信息

- **组件名称**: nv-empty
- **测试优先级**: P2
- **组件描述**: 空状态时的占位提示

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `empty-basic-render`
- **测试步骤**: 1. 渲染空状态 2. 验证空状态正常显示
- **预期结果**: 空状态正常渲染

### 1.2 自定义描述

- **测试ID**: `empty-custom-description`
- **测试步骤**: 1. 设置 description 2. 验证描述显示
- **预期结果**: 自定义描述显示正常

## 2. 属性测试

### 2.1 description 属性

- **测试ID**: `empty-description`
- **测试步骤**: 1. 设置 description 2. 验证描述文本
- **预期结果**: description 正确显示

### 2.2 image 属性

- **测试ID**: `empty-image`
- **测试步骤**: 1. 设置自定义 image 2. 验证图片显示
- **预期结果**: 自定义图片显示正常

### 2.3 image-size 属性

- **测试ID**: `empty-image-size`
- **测试步骤**: 1. 设置 image-size 2. 验证图片尺寸
- **预期结果**: 图片尺寸正确

## 3. 插槽测试

### 3.1 default 插槽

- **测试ID**: `empty-slot-default`
- **测试步骤**: 1. 使用 default 插槽 2. 验证自定义内容显示
- **预期结果**: default 插槽正常

### 3.2 image 插槽

- **测试ID**: `empty-slot-image`
- **测试步骤**: 1. 使用 image 插槽 2. 验证自定义图片显示
- **预期结果**: image 插槽正常

### 3.3 description 插槽

- **测试ID**: `empty-slot-description`
- **测试步骤**: 1. 使用 description 插槽 2. 验证自定义描述显示
- **预期结果**: description 插槽正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
