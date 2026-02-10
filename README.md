<!--
 * @Descripttion:
 * @creater: zhengpeng.ren
 * @since: 2024-05-27 10:05:51
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-12-19
-->
# nv-components

> Lightweight component library based on Lit

## 简介

`nv-components` 是一个基于 [Lit](https://lit.dev/) 构建的轻量级 Web Components 组件库。它提供了丰富的 UI 组件，支持多种构建格式（UMD、CJS、ES），可以轻松集成到任何现代前端项目中。

### 特性

- 🎨 **基于 Lit** - 使用 Lit 构建，性能优异，体积小巧
- 📦 **多种构建格式** - 支持 UMD、CJS、ES 三种格式，满足不同场景需求
- 🎯 **TypeScript 支持** - 完整的 TypeScript 类型定义
- 🎨 **主题定制** - 丰富的 CSS 变量，支持主题定制
- 🚀 **现代化构建** - 使用 Vite + TypeScript + SASS 构建
- 📱 **组件丰富** - 提供按钮、输入框、下拉菜单、图标等常用组件
- ✨ **按需引入** - 支持按需引入组件，减小打包体积

### 组件列表

- **Button** - 按钮组件
- **ButtonGroup** - 按钮组组件
- **Input** - 输入框组件
- **Icon** - 图标组件
- **Dropdown** - 下拉菜单组件
- **Popover** - 弹出层组件
- **Row** - 行布局组件
- **Col** - 列布局组件
- **Link** - 链接组件

## 开发

### 环境要求

- Node.js >= 14.0.0
- Yarn >= 1.22.0

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn run dev
```

开发服务器将在 http://localhost:5173 启动。页面会自动重载，你可以在控制台看到任何 lint 错误。

### 构建

#### 构建所有格式

```bash
yarn run build
```

这将构建 UMD、CJS 和 ES 三种格式。

#### 单独构建

```bash
# 构建 UMD 格式（输出到 dist 文件夹）
yarn run build:umd

# 构建 CommonJS 格式（输出到 lib 文件夹）
yarn run build:cmd

# 构建 ES Module 格式（输出到 es 文件夹）
yarn run build:es
```

### 代码检查

```bash
yarn run lint
```

## 使用

### 安装

```bash
yarn add nv-components
# 或
npm install nv-components
```

### 引入方式

#### 方式一：按需引入（推荐）

按需引入可以减少打包体积，只引入需要的组件。

##### ES Module 方式

```javascript
// 按需引入单个组件
import { NvButton } from 'nv-components/es/components/button';
import 'nv-components/es/components/button/style.css';

// 或者使用 components 路径
import { NvButton } from 'nv-components/components/button';
import 'nv-components/components/button/style.css';

// 按需引入多个组件
import { NvButton, NvInput } from 'nv-components/components/button';
import { NvInput } from 'nv-components/components/input';
import 'nv-components/components/button/style.css';
import 'nv-components/components/input/style.css';
```

##### CommonJS 方式

```javascript
const { NvButton } = require('nv-components/lib/components/button');
require('nv-components/lib/components/button/style.css');
```

#### 方式二：全量引入

如果项目中使用了大部分组件，可以选择全量引入。

```javascript
// ES Module
import * from 'nv-components/components';
import 'nv-components/styles'; // 引入全局样式

// CommonJS
require('nv-components/components');
require('nv-components/styles');
```

#### 方式三：UMD 方式（浏览器）

```html
<link rel="stylesheet" href="path/to/nv-components/dist/style.css">
<script src="path/to/nv-components/dist/index.js"></script>
```

### 使用组件

#### HTML 中使用

```html
<nv-button type="primary">点击我</nv-button>
<nv-input placeholder="请输入内容"></nv-input>
<nv-link type="primary" href="https://example.com">链接</nv-link>
```

#### React/Vue 中使用

```javascript
// React
function App() {
  return (
    <div>
      <nv-button type="primary">按钮</nv-button>
    </div>
  );
}

// Vue
<template>
  <nv-button type="primary">按钮</nv-button>
</template>
```

#### 原生 JavaScript 中使用

```javascript
import { NvButton } from 'nv-components/components/button';
import 'nv-components/components/button/style.css';

// 直接使用自定义元素
const button = document.createElement('nv-button');
button.setAttribute('type', 'primary');
button.textContent = '按钮';
document.body.appendChild(button);
```

### 样式引入

#### 按需引入样式

```javascript
// 只引入需要的组件样式
import 'nv-components/components/button/style.css';
import 'nv-components/components/input/style.css';
```

#### 全量引入样式

```javascript
// 引入全局样式（包含变量和全局样式）
import 'nv-components/styles';
```

## 全局 CSS 变量

组件库提供了丰富的 CSS 变量，你可以通过覆盖这些变量来自定义主题。

### 颜色变量

#### 主色

```css
--nv-primary-color-1: #409EFF;
--nv-primary-color-2: #53A8FF;
--nv-primary-color-3: #66B1FF;
/* ... 更多主色变量 */
```

#### 辅助色

```css
/* 成功色 */
--nv-secondary-color-success-1: #67C23A;
--nv-secondary-color-success-1-hover: #85CE61;
--nv-secondary-color-success-1-active: #5DAF34;

/* 警告色 */
--nv-secondary-color-warning-1: #E6A23C;
--nv-secondary-color-warning-1-hover: #EBB563;
--nv-secondary-color-warning-1-active: #CF9236;

/* 危险色 */
--nv-secondary-color-danger-1: #F56C6C;
--nv-secondary-color-danger-1-hover: #F78989;
--nv-secondary-color-danger-1-active: #DD6161;

/* 信息色 */
--nv-secondary-color-info-1: #909399;
--nv-secondary-color-info-1-hover: #A6A9AD;
--nv-secondary-color-info-1-active: #82848A;
```

#### 中性色

```css
/* 文字颜色 */
--nv-neutral-color-font-1: #303133; /* 主要文字 */
--nv-neutral-color-font-2: #606266; /* 常规文字 */
--nv-neutral-color-font-3: #909399; /* 次要文字 */
--nv-neutral-color-font-4: #C0C4CC; /* 占位文字 */

/* 边框颜色 */
--nv-neutral-color-border-1: #DCDFE6; /* 一级边框 */
--nv-neutral-color-border-2: #E4E7ED; /* 二级边框 */
--nv-neutral-color-border-3: #EBEEF5; /* 三级边框 */
--nv-neutral-color-border-4: #F2F6FC; /* 四级边框 */
```

### 字体变量

```css
/* 字体大小 */
--nv-font-size-mini: 12px;
--nv-font-size-small: 14px;
--nv-font-size-normal: 16px;
--nv-font-size-large: 18px;
--nv-font-size-huge: 20px;

/* 字体颜色 */
--nv-font-color-dark: #303133;
--nv-font-color-regular: #606266;
--nv-font-color-info: #909399;
--nv-font-color-placeholder: #C0C4CC;
```

### 尺寸变量

```css
/* 圆角 */
--nv-border-radius-mini: 2px;
--nv-border-radius-small: 4px;
--nv-border-radius-normal: 6px;
--nv-border-radius-large: 8px;
--nv-border-radius-huge: 10px;

/* 内边距 */
--nv-padding-mini: 5px;
--nv-padding-small: 7px;
--nv-padding-normal: 9px;
--nv-padding-large: 11px;
--nv-padding-huge: 13px;
```

### 自定义主题示例

```css
:root {
  /* 自定义主色 */
  --nv-primary-color-1: #your-color;

  /* 自定义字体大小 */
  --nv-font-size-normal: 18px;

  /* 自定义圆角 */
  --nv-border-radius-normal: 8px;
}
```

## 技术栈

- **Lit** - Web Components 框架
- **TypeScript** - 类型系统
- **Vite** - 构建工具
- **SASS** - CSS 预处理器
- **ESLint** - 代码检查工具

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 版本信息

当前版本：`0.1.0`

## 许可证

[MIT License](LICENSE)

## 贡献

欢迎提交 Issue 和 Pull Request！
