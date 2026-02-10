# Button 组件性能分析报告

## 测试环境

- **测试页面**: http://localhost:6006/?path=/story/components-button--overview
- **测试工具**: Chrome DevTools Performance（页面加载录制）
- **测试时间**: 基于本地 Storybook 环境

---

## 核心性能指标（加载）

| 指标 | 测量值 | 阈值（良好） | 评级 |
|------|--------|--------------|------|
| **LCP** (Largest Contentful Paint) | 1023 ms | < 2.5s | ✅ 优秀 |
| **CLS** (Cumulative Layout Shift) | 0.00 | < 0.1 | ✅ 优秀 |

### LCP 分解

- **TTFB**: 2 ms
- **Render delay**: 1021 ms

**分析**：Button Overview 页 LCP 约 1s，CLS 为 0，无布局偏移。主要耗时在渲染阶段，符合 Storybook iframe 与组件初始化的预期。

---

## 可用性能洞察（Chrome Performance Insights）

- **LCPBreakdown**: 可进一步分析 LCP 各阶段优化空间
- **CLSCulprits**: 当前无布局偏移，可定期回归
- **NetworkDependencyTree**: 关键请求链可优化
- **ForcedReflow**: 存在强制重排区间，可结合代码排查

---

## 建议

- Button 为轻量展示型组件，当前加载与布局表现良好。
- 若在复杂页面中作为大量实例使用，可关注列表/虚拟列表与事件委托，避免单按钮绑定过多监听。

---

*报告生成时间: 基于 performance-analysis 自动化录制*
