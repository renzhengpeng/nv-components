# Upload 组件性能分析报告

## 测试环境

- **测试页面**: http://localhost:6006/?path=/story/components-upload--overview
- **测试工具**: Chrome DevTools Performance（页面加载 / 交互录制）
- **测试时间**: 2025-02-01

---

## 核心性能指标

| 指标 | 测量值 | 阈值（良好） | 评级 |
|------|--------|--------------|------|
| **LCP** (Largest Contentful Paint) | 1597 ms | < 2.5s | ✅ 优秀 |
| **CLS** (Cumulative Layout Shift) | 0.00 | < 0.1 | ✅ 良好 |
| **INP** (Interaction to Next Paint，如有交互) | 28 ms | < 200ms | ✅ 优秀 |

### LCP 分解（如有）

- **TTFB**: 1 ms
- **Render delay**: 1596 ms

---

## 分析摘要

Upload Overview 页 LCP 约 1597 ms，CLS 0.00；点击「点击上传」后 INP 28 ms，交互响应优秀。

---

## 优化建议（如有）

_待补充。_

---

## 如何复现

1. 启动 Storybook：`yarn storybook`（默认 http://localhost:6006/）
2. 打开 Chrome DevTools → Performance 面板，访问上述测试页面录制
3. 将 Core Web Vitals 与 Insights 数据填入本报告

---

*报告状态: 已分析*
