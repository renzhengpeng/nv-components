# Drawer 组件性能分析报告

## 测试环境

- **测试页面**: http://localhost:6006/?path=/story/components-drawer--overview
- **测试工具**: Chrome DevTools Performance（页面加载 / 交互录制）
- **测试时间**: 待补充

---

## 核心性能指标

| 指标 | 测量值 | 阈值（良好） | 评级 |
|------|--------|--------------|------|
| **LCP** (Largest Contentful Paint) | 1088 ms | < 2.5s | ✅ 优秀 |
| **CLS** (Cumulative Layout Shift) | 0.00 | < 0.1 | ✅ 优秀 |
| **INP** (Interaction to Next Paint，如有交互) | 30 ms | < 200ms | ✅ 优秀 |

### LCP 分解（如有）

- **TTFB**: 1 ms
- **Render delay**: 1086 ms

---

## 分析摘要

Drawer Overview 页 LCP 约 1088ms，CLS 为 0，无布局偏移，表现优秀。

---

## 优化建议（如有）

_待补充。_

---

## 如何复现

1. 启动 Storybook：`yarn storybook`（默认 http://localhost:6006/）
2. 打开 Chrome DevTools → Performance 面板，访问上述测试页面录制
3. 将 Core Web Vitals 与 Insights 数据填入本报告

---

*报告状态: 已测试（加载）；测试时间: 基于 Storybook 本地录制*
