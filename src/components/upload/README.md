# Upload 上传

通过点击或者拖拽上传文件。

## 组件说明

Upload 上传组件用于上传文件到服务器。支持多种上传方式、文件列表展示和上传前的校验。

## 属性

| 属性名      | 说明                         | 类型    | 可选值 | 默认值 |
| ----------- | ---------------------------- | ------- | ------ | ------ |
| action      | 上传的地址                   | string  | —      | —      |
| headers     | 设置上传的请求头部           | object  | —      | —      |
| multiple    | 是否支持多选文件             | boolean | —      | false  |
| data        | 上传时附带的额外参数         | object  | —      | —      |
| name        | 上传的文件字段名（表单提交时使用） | string  | —      | file   |
| form        | 关联的表单 id                | string  | —      | —      |
| required    | 是否必选                     | boolean | —      | false  |
| accept      | 接受上传的文件类型           | string  | —      | —      |
| drag        | 是否启用拖拽上传             | boolean | —      | false  |
| auto-upload | 是否在选取文件后立即上传     | boolean | —      | true   |
| disabled    | 是否禁用                     | boolean | —      | false  |
| limit       | 最大允许上传个数             | number  | —      | 0      |

## 事件

| 事件名      | 说明                     | 回调参数                 |
| ----------- | ------------------------ | ------------------------ |
| nv-change   | 文件状态改变时的钩子     | file, fileList           |
| nv-success  | 文件上传成功时的钩子     | response, file, fileList |
| nv-error    | 文件上传失败时的钩子     | err, file, fileList      |
| nv-progress | 文件上传时的进度钩子     | event, file, fileList    |
| nv-remove   | 文件移除时的钩子         | file, fileList           |
| nv-exceed   | 文件超出个数限制时的钩子 | files, fileList          |

## 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 触发文件选择框的内容 |
| tip     | 提示说明文字         |

## CSS 变量

### 拖拽区域

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-upload-drag-area-border` | 拖拽区域边框 | 1px dashed #d9d9d9 |
| `--nv-upload-drag-area-border-radius` | 拖拽区域圆角 | 6px |
| `--nv-upload-drag-area-background-color` | 拖拽区域背景颜色 | #fafafa |
| `--nv-upload-drag-area-transition-duration` | 拖拽区域过渡动画时长 | 0.3s |
| `--nv-upload-drag-area-padding` | 拖拽区域内边距 | 40px |
| `--nv-upload-drag-area-border-color-hover` | hover状态拖拽区域边框颜色 | #409EFF |

### 文件列表

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-upload-file-list-margin` | 文件列表外边距 | 8px 0 0 |
| `--nv-upload-file-item-padding` | 文件项内边距 | 4px 8px |
| `--nv-upload-file-item-border-radius` | 文件项圆角 | 2px |
| `--nv-upload-file-item-margin-bottom` | 文件项下外边距 | 4px |
| `--nv-upload-file-item-background-color-hover` | hover状态文件项背景颜色 | #eef1f6 |

### 文件缩略图

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-upload-file-thumb-width` | 缩略图宽度 | 40px |
| `--nv-upload-file-thumb-height` | 缩略图高度 | 40px |
| `--nv-upload-file-thumb-margin-right` | 缩略图右外边距 | 8px |
| `--nv-upload-file-thumb-border-radius` | 缩略图圆角 | 2px |
| `--nv-upload-file-thumb-background-color` | 缩略图背景颜色 | #f5f7fa |
| `--nv-upload-file-thumb-mask-font-size` | 缩略图遮罩字体大小 | 12px |
| `--nv-upload-file-thumb-mask-icon-size` | 缩略图遮罩图标大小 | 16px |

### 文件名与状态

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-upload-file-name-font-size` | 文件名字体大小 | 14px |
| `--nv-upload-file-name-color` | 文件名颜色 | #606266 |
| `--nv-upload-file-status-margin-left` | 状态图标左外边距 | 8px |
| `--nv-upload-file-status-margin-right` | 状态图标右外边距 | 8px |
| `--nv-upload-file-remove-color` | 移除按钮颜色 | #909399 |
| `--nv-upload-file-remove-transition-duration` | 移除按钮过渡动画时长 | 0.3s |
| `--nv-upload-file-remove-color-hover` | hover状态移除按钮颜色 | #F56C6C |

### 提示文字

| 变量名 | 说明 | 默认值 |
| ------ | ---- | ------ |
| `--nv-upload-tip-color` | 提示文字颜色 | #909399 |
| `--nv-upload-tip-font-size` | 提示文字字体大小 | 12px |
| `--nv-upload-tip-margin-top` | 提示文字上外边距 | 4px |

## CSS Parts

| Name      | Description        | CSS Selector        |
| --------- | ------------------ | ------------------- |
| base      | 根容器元素         | `::part(base)`      |
| drag-area | 拖拽上传区域       | `::part(drag-area)` |
| trigger   | 触发文件选择的容器 | `::part(trigger)`   |
| list      | 文件列表容器       | `::part(list)`      |
| item      | 单个文件项         | `::part(item)`      |
| thumb     | 文件缩略图容器     | `::part(thumb)`     |
| name      | 文件名称显示元素   | `::part(name)`      |
| status    | 文件状态显示容器   | `::part(status)`    |
| remove    | 移除按钮元素       | `::part(remove)`    |
