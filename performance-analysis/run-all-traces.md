# 批量运行组件性能测试说明

## 路由规则（与 README 一致）

- **规则**: `http://localhost:6006/?path=/story/components-[组件名]--overview`
- **[组件名]**：kebab-case 并**去掉中横线**（如 `button-group` → `buttongroup`，`infinite-scroll` → `infinitescroll`）
- **无 Overview 的组件** 使用 `--default`：Step、Submenu、TabPane、TimelineItem

## 需测试的组件 URL 列表（按规则）

启动 Storybook（`yarn storybook`）后，在 Chrome DevTools Performance 面板中依次访问以下 URL 并录制「Reload」加载性能，将 LCP/CLS 填入对应报告。

### 使用 --overview 的组件

| 组件 | URL |
|------|-----|
| Alert | http://localhost:6006/?path=/story/components-alert--overview |
| Avatar | http://localhost:6006/?path=/story/components-avatar--overview |
| BackTop | http://localhost:6006/?path=/story/components-backtop--overview |
| Badge | http://localhost:6006/?path=/story/components-badge--overview |
| Button | http://localhost:6006/?path=/story/components-button--overview |
| ButtonGroup | http://localhost:6006/?path=/story/components-buttongroup--overview |
| Calendar | http://localhost:6006/?path=/story/components-calendar--overview |
| Card | http://localhost:6006/?path=/story/components-card--overview |
| Carousel | http://localhost:6006/?path=/story/components-carousel--overview |
| Cascader | http://localhost:6006/?path=/story/components-cascader--overview |
| Checkbox | http://localhost:6006/?path=/story/components-checkbox--overview |
| CheckboxGroup | http://localhost:6006/?path=/story/components-checkboxgroup--overview |
| Col | http://localhost:6006/?path=/story/components-col--overview |
| Collapse | http://localhost:6006/?path=/story/components-collapse--overview |
| ColorPicker | http://localhost:6006/?path=/story/components-colorpicker--overview |
| Divider | http://localhost:6006/?path=/story/components-divider--overview |
| Drawer | http://localhost:6006/?path=/story/components-drawer--overview |
| Dropdown | http://localhost:6006/?path=/story/components-dropdown--overview |
| Empty | http://localhost:6006/?path=/story/components-empty--overview |
| Icon | http://localhost:6006/?path=/story/components-icon--overview |
| InfiniteScroll | http://localhost:6006/?path=/story/components-infinitescroll--overview |
| Input | http://localhost:6006/?path=/story/components-input--overview |
| Link | http://localhost:6006/?path=/story/components-link--overview |
| Loading | http://localhost:6006/?path=/story/components-loading--overview |
| Message | http://localhost:6006/?path=/story/components-message--overview |
| Modal | http://localhost:6006/?path=/story/components-modal--overview |
| NavMenu | http://localhost:6006/?path=/story/components-navmenu--overview |
| Notification | http://localhost:6006/?path=/story/components-notification--overview |
| Pagination | http://localhost:6006/?path=/story/components-pagination--overview |
| Popconfirm | http://localhost:6006/?path=/story/components-popconfirm--overview |
| Popup | http://localhost:6006/?path=/story/components-popup--overview |
| Progress | http://localhost:6006/?path=/story/components-progress--overview |
| Radio | http://localhost:6006/?path=/story/components-radio--overview |
| RadioGroup | http://localhost:6006/?path=/story/components-radiogroup--overview |
| Rate | http://localhost:6006/?path=/story/components-rate--overview |
| Result | http://localhost:6006/?path=/story/components-result--overview |
| Row | http://localhost:6006/?path=/story/components-row--overview |
| Select | http://localhost:6006/?path=/story/components-select--overview |
| Skeleton | http://localhost:6006/?path=/story/components-skeleton--overview |
| Slider | http://localhost:6006/?path=/story/components-slider--overview |
| Statistic | http://localhost:6006/?path=/story/components-statistic--overview |
| Steps | http://localhost:6006/?path=/story/components-steps--overview |
| Switch | http://localhost:6006/?path=/story/components-switch--overview |
| Tabs | http://localhost:6006/?path=/story/components-tabs--overview |
| Tag | http://localhost:6006/?path=/story/components-tag--overview |
| Timeline | http://localhost:6006/?path=/story/components-timeline--overview |
| Tooltip | http://localhost:6006/?path=/story/components-tooltip--overview |
| Transfer | http://localhost:6006/?path=/story/components-transfer--overview |
| Upload | http://localhost:6006/?path=/story/components-upload--overview |

### 使用 --default 的组件（无 Overview 故事）

| 组件 | URL |
|------|-----|
| Step | http://localhost:6006/?path=/story/components-step--default |
| Submenu | http://localhost:6006/?path=/story/components-submenu--default |
| TabPane | http://localhost:6006/?path=/story/components-tabpane--default |
| TimelineItem | http://localhost:6006/?path=/story/components-timelineitem--default |

## 操作步骤

1. 启动 Storybook：`yarn storybook`（默认 http://localhost:6006/）
2. 打开 Chrome DevTools → Performance 面板
3. 对上表中每个 URL：
   - **仅 LCP/CLS**：点击「Reload」录制页面加载，记录 LCP、CLS（及 TTFB、Render delay 如有）
   - **有交互的组件（需测 INP）**：开始录制 → Reload → 待页面加载完成后执行一次典型交互（如点击按钮、切换 Tab、打开下拉、选择单选项等）→ 停止录制，记录 LCP、CLS、**INP**（< 200ms 为良好）
4. 将数据填入 `performance-analysis/<组件名>.md` 对应表格，并将 README 索引中该组件状态改为「✅ 已分析」
