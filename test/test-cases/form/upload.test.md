# Upload 上传组件测试用例

## 组件信息

- **组件名称**: nv-upload
- **测试优先级**: P1
- **组件描述**: 通过点击或者拖拽上传文件

## 1. 功能测试

### 1.1 基础渲染

- **测试ID**: `upload-basic-render`
- **测试步骤**: 1. 渲染上传组件 2. 验证上传按钮显示
- **预期结果**: 上传组件正常渲染

### 1.2 点击上传

- **测试ID**: `upload-click`
- **测试步骤**: 1. 点击上传按钮 2. 选择文件 3. 验证文件上传
- **预期结果**: 点击上传正常

### 1.3 拖拽上传

- **测试ID**: `upload-drag`
- **测试步骤**: 1. 设置 drag 2. 拖拽文件 3. 验证文件上传
- **预期结果**: 拖拽上传正常

### 1.4 文件列表

- **测试ID**: `upload-file-list`
- **测试步骤**: 1. 上传文件 2. 验证文件列表显示
- **预期结果**: 文件列表显示正常

### 1.5 删除文件

- **测试ID**: `upload-remove-file`
- **测试步骤**: 1. 点击删除按钮 2. 验证文件被删除
- **预期结果**: 删除文件正常

## 2. 属性测试

### 2.1 action 属性

- **测试ID**: `upload-action`
- **测试步骤**: 1. 设置 action 2. 上传文件 3. 验证请求地址
- **预期结果**: action 正确设置

### 2.2 multiple 属性

- **测试ID**: `upload-multiple`
- **测试步骤**: 1. 设置 multiple 2. 选择多个文件 3. 验证多文件上传
- **预期结果**: 多文件上传正常

### 2.3 accept 属性

- **测试ID**: `upload-accept`
- **测试步骤**: 1. 设置 accept 2. 验证文件类型限制
- **预期结果**: 文件类型限制正常

### 2.4 limit 属性

- **测试ID**: `upload-limit`
- **测试步骤**: 1. 设置 limit 2. 上传超过限制的文件 3. 验证限制生效
- **预期结果**: 文件数量限制正常

### 2.5 file-list 属性

- **测试ID**: `upload-file-list-prop`
- **测试步骤**: 1. 设置 file-list 2. 验证文件列表显示
- **预期结果**: file-list 正确显示

### 2.6 list-type 属性

- **测试ID**: `upload-list-type-{value}`
- **测试值**: text, picture, picture-card
- **测试步骤**: 1. 设置不同 list-type 2. 验证列表样式
- **预期结果**: 不同列表样式正确

### 2.7 auto-upload 属性

- **测试ID**: `upload-auto-upload`
- **测试步骤**: 1. 设置 auto-upload=false 2. 选择文件 3. 验证不自动上传
- **预期结果**: 自动上传控制正常

### 2.8 disabled 属性

- **测试ID**: `upload-disabled`
- **测试步骤**: 1. 设置 disabled 2. 尝试上传 3. 验证无法操作
- **预期结果**: 禁用功能正常

### 2.9 drag 属性

- **测试ID**: `upload-drag-prop`
- **测试步骤**: 1. 设置 drag 2. 验证拖拽区域显示
- **预期结果**: 拖拽模式正常

### 2.10 show-file-list 属性

- **测试ID**: `upload-show-file-list`
- **测试步骤**: 1. 设置 show-file-list=false 2. 验证文件列表隐藏
- **预期结果**: 文件列表显示控制正常

## 3. 事件测试

### 3.1 change 事件

- **测试ID**: `upload-event-change`
- **测试步骤**: 1. 监听事件 2. 上传文件 3. 验证事件触发
- **预期结果**: change 事件正常

### 3.2 success 事件

- **测试ID**: `upload-event-success`
- **测试步骤**: 1. 监听事件 2. 上传成功 3. 验证事件触发
- **预期结果**: success 事件正常

### 3.3 error 事件

- **测试ID**: `upload-event-error`
- **测试步骤**: 1. 监听事件 2. 上传失败 3. 验证事件触发
- **预期结果**: error 事件正常

### 3.4 progress 事件

- **测试ID**: `upload-event-progress`
- **测试步骤**: 1. 监听事件 2. 上传文件 3. 验证进度事件触发
- **预期结果**: progress 事件正常

### 3.5 remove 事件

- **测试ID**: `upload-event-remove`
- **测试步骤**: 1. 监听事件 2. 删除文件 3. 验证事件触发
- **预期结果**: remove 事件正常

### 3.6 exceed 事件

- **测试ID**: `upload-event-exceed`
- **测试步骤**: 1. 设置 limit 2. 监听事件 3. 上传超过限制 4. 验证事件触发
- **预期结果**: exceed 事件正常

## 测试覆盖率目标

- **功能覆盖率**: ≥90%
- **属性覆盖率**: ≥90%
- **事件覆盖率**: ≥90%
