# Input 组件性能分析报告

## 测试环境

- **测试页面**: http://localhost:6006/?path=/story/components-input--overview
- **测试工具**: Chrome DevTools Performance（页面加载录制）
- **测试时间**: 基于本地 Storybook 环境

---

## 核心性能指标（加载）

| 指标 | 测量值 | 阈值（良好） | 评级 |
|------|--------|--------------|------|
| **LCP** (Largest Contentful Paint) | 401 ms | < 2.5s | ✅ 优秀 |
| **CLS** (Cumulative Layout Shift) | 0.00 | < 0.1 | ✅ 优秀 |

### LCP 分解

- **TTFB**: 1 ms
- **Render delay**: 399 ms

**分析**：Input Overview 页 LCP 约 400ms，CLS 为 0。首屏与布局表现优秀；Trace 中提示存在 ForcedReflow 区间，可与输入框尺寸/焦点测量逻辑结合排查。

---

## 可用性能洞察（Chrome Performance Insights）

- **LCPBreakdown**: LCP 各阶段可进一步细化
- **CLSCulprits**: 当前无布局偏移
- **NetworkDependencyTree**: 关键请求链
- **ForcedReflow**: 存在强制重排，建议检查 `getBoundingClientRect`、`offsetWidth` 等读取与 DOM/样式更新的顺序

---

## 建议

- 输入类组件建议设置 `shadowRootOptions = { delegatesFocus: true }`，优化点击聚焦与可访问性。
- 若存在动态测量（如自适应宽度），尽量批量读取布局属性，避免布局抖动。

---

*报告生成时间: 基于 performance-analysis 自动化录制*
