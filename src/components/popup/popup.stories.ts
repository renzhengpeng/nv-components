import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './index';
import '../button/index';
import '../divider/index';

const meta: Meta = {
  title: 'Components/Popup',
  component: 'nv-popup',
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end'
      ],
      description: 'popup 的位置'
    },
    active: {
      control: 'boolean',
      description: '是否激活显示'
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头'
    },
    distance: {
      control: 'number',
      description: '距离锚点的距离（像素）'
    },
    skidding: {
      control: 'number',
      description: '沿着锚点的偏移量（像素）'
    },
    sync: {
      control: 'select',
      options: [undefined, 'width', 'height', 'both'],
      description: '同步宽度或高度'
    },
    strategy: {
      control: 'select',
      options: ['absolute', 'fixed'],
      description: '定位策略。absolute 在大多数情况下有效，fixed 可以避免 overflow 裁剪问题'
    },
    trigger: {
      control: 'select',
      options: ['manual', 'click', 'hover', 'focus'],
      description: '触发方式'
    },
    openDelay: {
      control: 'number',
      description: '延迟显示（毫秒）'
    },
    hideDelay: {
      control: 'number',
      description: '延迟隐藏（毫秒）'
    },
    anchor: {
      control: 'text',
      description: '外部锚点元素的 ID'
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: '点击外部时是否关闭 popup'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用（禁用后无法通过触发器激活）'
    },
    autoAdjust: {
      control: 'boolean',
      description: '是否自动调整位置以避免被视口边界遮挡'
    }
  }
};

export default meta;
type Story = StoryObj;

/**
 * ## Popup 弹出层
 *
 * Popup 是一个通用的弹出层定位组件，用于在指定位置显示内容。它提供了灵活的定位、触发方式和样式定制能力。
 *
 * ### 主要特性
 *
 * - **多种定位方式**：支持 12 种不同的位置（top、bottom、left、right 及其变体）
 * - **灵活的触发方式**：支持点击、悬停、聚焦、手动控制四种触发方式
 * - **外部锚点支持**：可以相对于外部元素定位，而不仅仅是内部的锚点元素
 * - **智能位置调整**：自动检测可用空间，避免 popup 被视口边界遮挡
 * - **样式定制**：通过 CSS 变量轻松定制外观
 *
 * ### 快速开始
 *
 * ```html
 * <nv-popup placement="top" arrow>
 *   <nv-button slot="anchor">点击我</nv-button>
 *   <div>这是弹出内容</div>
 * </nv-popup>
 * ```
 *
 * ### 属性说明
 *
 * | 属性 | 类型 | 默认值 | 说明 |
 * |------|------|--------|------|
 * | `placement` | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` | popup 的位置 |
 * | `active` | `boolean` | `false` | 是否激活显示 |
 * | `arrow` | `boolean` | `false` | 是否显示箭头 |
 * | `distance` | `number` | `8` | 距离锚点的距离（像素） |
 * | `skidding` | `number` | `0` | 沿着锚点的偏移量（像素） |
 * | `sync` | `'width' \| 'height' \| 'both' \| undefined` | `undefined` | 同步宽度或高度 |
 * | `strategy` | `'absolute' \| 'fixed'` | `'absolute'` | 定位策略 |
 * | `trigger` | `'click' \| 'hover' \| 'focus' \| 'manual'` | `'hover'` | 触发方式 |
 * | `openDelay` | `number` | `100` | 延迟显示（毫秒） |
 * | `hideDelay` | `number` | `100` | 延迟隐藏（毫秒） |
 * | `anchor` | `string` | `''` | 外部锚点元素的 ID |
 * | `closeOnClickOutside` | `boolean` | `true` | 点击外部时是否关闭 popup |
 * | `disabled` | `boolean` | `false` | 是否禁用 |
 *
 * ### 插槽说明
 *
 * | 插槽名 | 说明 |
 * |--------|------|
 * | `anchor` | popup 的锚点元素 |
 * | 默认插槽 | popup 的内容（会被渲染到 body） |
 *
 * ### CSS 变量
 *
 * | 变量名 | 默认值 | 说明 |
 * |--------|--------|------|
 * | `--nv-popup-background-color` | `#fff` | 背景颜色 |
 * | `--nv-popup-border-color` | `#e4e7ed` | 边框颜色 |
 * | `--nv-popup-box-shadow` | `0 2px 12px 0 rgba(0, 0, 0, 0.1)` | 阴影 |
 * | `--nv-popup-border-radius` | `4px` | 圆角 |
 * | `--nv-popup-padding` | `12px` | 内边距 |
 * | `--nv-popup-z-index` | `2000` | 层级 |
 * | `--nv-popup-arrow-size` | `8px` | 箭头大小 |
 * | `--nv-popup-arrow-offset` | `12px` | 箭头偏移量 |
 *
 * ### 事件说明
 *
 * | 事件名 | 说明 | 参数 |
 * |--------|------|------|
 * | `nv-show` | popup 显示时触发 | - |
 * | `nv-hide` | popup 隐藏时触发 | - |
 *
 * ### 使用注意事项
 *
 * 1. **定位策略**：大多数情况下使用 `absolute` 即可，但如果遇到 `overflow` 裁剪问题，可以尝试使用 `fixed` 策略
 * 2. **外部锚点**：当需要相对于外部元素定位时，使用 `anchor` 属性指定元素的 ID
 * 3. **聚焦触发**：使用 `trigger="focus"` 时，锚点需可聚焦（如输入框、按钮、带 tabindex 的元素），聚焦显示、失焦隐藏
 * 4. **手动控制**：使用 `trigger="manual"` 时，需要通过 `active` 属性手动控制显示/隐藏
 * 5. **内容渲染**：popup 的内容在组件的 Shadow DOM 中渲染，注意 overflow 容器的层级关系
 */
export const Overview: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 600;">Popup 弹出层</h1>
      <p style="margin: 0 0 30px 0; color: #606266; line-height: 1.8;">
        Popup 是一个通用的弹出层定位组件，用于在指定位置显示内容。它提供了灵活的定位、触发方式和样式定制能力。
      </p>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">基础用法</h2>
      <div style="padding: 40px; text-align: center; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-popup placement="top" arrow>
          <nv-button slot="anchor">悬停我</nv-button>
          <div style="padding: 8px;">这是一个 popup 弹出层</div>
        </nv-popup>
      </div>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">不同位置</h2>
      <div style="padding: 60px; display: flex; flex-direction: column; gap: 30px; align-items: center; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-popup placement="top" arrow>
          <nv-button slot="anchor">顶部</nv-button>
          <div style="padding: 8px;">顶部提示</div>
        </nv-popup>
        <div style="display: flex; gap: 30px;">
          <nv-popup placement="left" arrow>
            <nv-button slot="anchor">左侧</nv-button>
            <div style="padding: 8px;">左侧提示</div>
          </nv-popup>
          <nv-popup placement="right" arrow>
            <nv-button slot="anchor">右侧</nv-button>
            <div style="padding: 8px;">右侧提示</div>
          </nv-popup>
        </div>
        <nv-popup placement="bottom" arrow>
          <nv-button slot="anchor">底部</nv-button>
          <div style="padding: 8px;">底部提示</div>
        </nv-popup>
      </div>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">不同触发方式</h2>
      <div style="padding: 40px; display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; background: #f5f7fa; border-radius: 4px; margin-bottom: 30px;">
        <nv-popup placement="top" arrow trigger="hover">
          <nv-button slot="anchor">悬停触发</nv-button>
          <div style="padding: 8px;">悬停显示</div>
        </nv-popup>
        <nv-popup placement="top" arrow trigger="click">
          <nv-button slot="anchor">点击触发</nv-button>
          <div style="padding: 8px;">点击显示</div>
        </nv-popup>
        <nv-popup placement="top" arrow trigger="focus">
          <input slot="anchor" type="text" placeholder="点击或 Tab 聚焦显示提示" style="width: 160px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px; font-size: 14px; outline: none;" />
          <div style="padding: 8px;">聚焦输入框后显示</div>
        </nv-popup>
        <nv-popup placement="top" arrow trigger="manual" .active=${ false }>
          <nv-button slot="anchor" @click=${ (e: Event) => {
            const button = e.currentTarget as HTMLElement;
            const popup = button.closest('nv-popup') as any;
            if (popup) popup.active = !popup.active;
          } }>手动控制</nv-button>
          <div style="padding: 8px;">手动控制</div>
        </nv-popup>
      </div>

      <nv-divider></nv-divider>

      <h2 style="margin: 30px 0 20px 0; font-size: 20px; font-weight: 600;">示例导航</h2>
      <p style="margin: 0 0 16px 0; color: #606266;">以下示例可在左侧边栏中切换查看：</p>
      <div style="overflow-x: auto; margin-bottom: 30px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="border-bottom: 1px solid #e4e7ed;">
              <th style="text-align: left; padding: 12px; font-weight: 600;">示例</th>
              <th style="text-align: left; padding: 12px; font-weight: 600;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Auto Adjust</td><td style="padding: 12px; color: #606266;">自动调整位置，避免被视口遮挡</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Default</td><td style="padding: 12px; color: #606266;">可配置的默认示例（支持 Controls 面板）</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Positions</td><td style="padding: 12px; color: #606266;">四个方向（上/下/左/右）位置</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">All Placements</td><td style="padding: 12px; color: #606266;">12 种位置（含 start/end 变体）</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Trigger Types</td><td style="padding: 12px; color: #606266;">点击、悬停、聚焦、手动四种触发方式</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Hover Delays</td><td style="padding: 12px; color: #606266;">延迟显示与延迟隐藏</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Without Arrow</td><td style="padding: 12px; color: #606266;">无箭头样式</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">External Anchor</td><td style="padding: 12px; color: #606266;">相对于外部锚点元素定位</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Close On Click Outside</td><td style="padding: 12px; color: #606266;">点击外部是否关闭</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Disabled</td><td style="padding: 12px; color: #606266;">禁用状态</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Manual Control</td><td style="padding: 12px; color: #606266;">通过代码手动控制显示/隐藏</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Custom Content</td><td style="padding: 12px; color: #606266;">自定义弹出内容</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Distance And Skidding</td><td style="padding: 12px; color: #606266;">距离与偏移量</td></tr>
            <tr style="border-bottom: 1px solid #ebeef5;"><td style="padding: 12px;">Strategy</td><td style="padding: 12px; color: #606266;">定位策略 absolute / fixed</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};

/**
 * 当 popup 靠近视口边缘时，会自动调整位置以避免被遮挡。
 *
 * **箭头位置也会自动调整**：翻转后，箭头会出现在正确的位置（与实际显示方向一致）。
 *
 * 尝试将页面滚动到顶部或底部，然后点击按钮查看效果。
 */
export const AutoAdjust: Story = {
  render: () => html`
    <div style="padding: 20px;">
      <h3>自动调整位置</h3>
      <p>将按钮放在页面边缘，popup 会自动翻转到有空间的一侧</p>

      <div style="display: flex; flex-direction: column; gap: 400px; padding: 20px;">
        <!-- 顶部按钮 - 会自动翻转到底部 -->
        <div style="display: flex; justify-content: space-between;">
          <nv-popup placement="top" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">顶部左侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于顶部空间不足，这个 popup 会自动翻转到底部显示
            </div>
          </nv-popup>

          <nv-popup placement="top" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">顶部右侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于顶部空间不足，这个 popup 会自动翻转到底部显示
            </div>
          </nv-popup>
        </div>

        <!-- 中间按钮 - 演示左右翻转 -->
        <div style="display: flex; justify-content: space-between;">
          <nv-popup placement="left" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">左侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于左侧空间不足，这个 popup 会自动翻转到右侧显示
            </div>
          </nv-popup>

          <nv-popup placement="right" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">右侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于右侧空间不足，这个 popup 会自动翻转到左侧显示
            </div>
          </nv-popup>
        </div>

        <!-- 底部按钮 - 会自动翻转到顶部 -->
        <div style="display: flex; justify-content: space-between;">
          <nv-popup placement="bottom" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">底部左侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于底部空间不足，这个 popup 会自动翻转到顶部显示
            </div>
          </nv-popup>

          <nv-popup placement="bottom" trigger="click" arrow auto-adjust>
            <nv-button slot="anchor">底部右侧（会翻转）</nv-button>
            <div style="padding: 10px; width: 200px;">
              由于底部空间不足，这个 popup 会自动翻转到顶部显示
            </div>
          </nv-popup>
        </div>
      </div>

      <nv-divider></nv-divider>

      <h3>禁用自动调整</h3>
      <p>设置 <code>auto-adjust="false"</code> 可以禁用自动调整，popup 会严格按照指定的 placement 显示</p>

      <nv-popup placement="top" trigger="click" arrow .autoAdjust=${ false }>
        <nv-button slot="anchor">顶部（不会翻转）</nv-button>
        <div style="padding: 10px; width: 200px;">
          即使顶部空间不足，这个 popup 也不会翻转，可能会被遮挡
        </div>
      </nv-popup>
    </div>
  `
};

export const Default: Story = {
  render: (args) => {
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      let currentNode: Node | null = button;
      let popup: any = null;

      while (currentNode) {
        if ((currentNode as HTMLElement).tagName === 'NV-POPUP') {
          popup = currentNode;
          break;
        }

        const rootNode = currentNode.getRootNode();
        if (rootNode instanceof ShadowRoot) {
          currentNode = rootNode.host;
        } else {
          currentNode = (currentNode as HTMLElement).parentNode;
        }
      }

      if (popup) {
        popup.active = !popup.active;
      }
    };

    return html`
      <nv-popup
        .placement=${ args.placement }
        .active=${ args.active }
        .arrow=${ args.arrow }
        .distance=${ args.distance }
        .skidding=${ args.skidding }
        .sync=${ args.sync }
        .strategy=${ args.strategy }
        .trigger=${ args.trigger }
        .openDelay=${ args.openDelay }
        .hideDelay=${ args.hideDelay }
        .anchor=${ args.anchor }
        .closeOnClickOutside=${ args.closeOnClickOutside }
        .disabled=${ args.disabled }
      >
        <nv-button slot="anchor" @click=${ handleClick }>鼠标移入我</nv-button>
        <div style="padding: 8px;">这是一个 popup 弹出层</div>
      </nv-popup>
    `;
  },
  args: {
    placement: 'top',
    active: false,
    arrow: true,
    distance: 8,
    skidding: 0,
    sync: undefined,
    strategy: 'absolute',
    trigger: 'hover',
    openDelay: 100,
    hideDelay: 100,
    anchor: '',
    closeOnClickOutside: true,
    disabled: false
  }
};

export const Positions: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      let currentNode: Node | null = button;
      let popup: any = null;

      while (currentNode) {
        if ((currentNode as HTMLElement).tagName === 'NV-POPUP') {
          popup = currentNode;
          break;
        }

        const rootNode = currentNode.getRootNode();
        if (rootNode instanceof ShadowRoot) {
          currentNode = rootNode.host;
        } else {
          currentNode = (currentNode as HTMLElement).parentNode;
        }
      }

      if (popup) {
        popup.active = !popup.active;
      }
    };

    return html`
      <div style="padding: 100px; display: flex; flex-direction: column; gap: 20px; align-items: center;">
        <nv-popup placement="top" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>顶部</nv-button>
          <div style="padding: 8px;">顶部提示</div>
        </nv-popup>
        <div style="display: flex; gap: 20px;">
          <nv-popup placement="left" arrow>
            <nv-button slot="anchor" @click=${ handleClick }>左侧</nv-button>
            <div style="padding: 8px;">左侧提示</div>
          </nv-popup>
          <nv-popup placement="right" arrow>
            <nv-button slot="anchor" @click=${ handleClick }>右侧</nv-button>
            <div style="padding: 8px;">右侧提示</div>
          </nv-popup>
        </div>
        <nv-popup placement="bottom" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>底部</nv-button>
          <div style="padding: 8px;">底部提示</div>
        </nv-popup>
      </div>
    `;
  }
};

export const AllPlacements: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      let currentNode: Node | null = button;
      let popup: any = null;

      while (currentNode) {
        if ((currentNode as HTMLElement).tagName === 'NV-POPUP') {
          popup = currentNode;
          break;
        }

        const rootNode = currentNode.getRootNode();
        if (rootNode instanceof ShadowRoot) {
          currentNode = rootNode.host;
        } else {
          currentNode = (currentNode as HTMLElement).parentNode;
        }
      }

      if (popup) {
        popup.active = !popup.active;
      }
    };

    return html`
      <div style="padding: 150px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; align-items: center; justify-items: center;">
        <nv-popup placement="top-start" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>top-start</nv-button>
          <div style="padding: 8px;">top-start</div>
        </nv-popup>
        <nv-popup placement="top" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>top</nv-button>
          <div style="padding: 8px;">top</div>
        </nv-popup>
        <nv-popup placement="top-end" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>top-end</nv-button>
          <div style="padding: 8px;">top-end</div>
        </nv-popup>

        <nv-popup placement="left-start" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>left-start</nv-button>
          <div style="padding: 8px;">left-start</div>
        </nv-popup>
        <div></div>
        <nv-popup placement="right-start" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>right-start</nv-button>
          <div style="padding: 8px;">right-start</div>
        </nv-popup>

        <nv-popup placement="left" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>left</nv-button>
          <div style="padding: 8px;">left</div>
        </nv-popup>
        <div></div>
        <nv-popup placement="right" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>right</nv-button>
          <div style="padding: 8px;">right</div>
        </nv-popup>

        <nv-popup placement="left-end" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>left-end</nv-button>
          <div style="padding: 8px;">left-end</div>
        </nv-popup>
        <div></div>
        <nv-popup placement="right-end" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>right-end</nv-button>
          <div style="padding: 8px;">right-end</div>
        </nv-popup>

        <nv-popup placement="bottom-start" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>bottom-start</nv-button>
          <div style="padding: 8px;">bottom-start</div>
        </nv-popup>
        <nv-popup placement="bottom" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>bottom</nv-button>
          <div style="padding: 8px;">bottom</div>
        </nv-popup>
        <nv-popup placement="bottom-end" arrow>
          <nv-button slot="anchor" @click=${ handleClick }>bottom-end</nv-button>
          <div style="padding: 8px;">bottom-end</div>
        </nv-popup>
      </div>
    `;
  }
};

export const TriggerTypes: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 60px; justify-content: center;">
      <div style="text-align: center;">
        <nv-popup placement="top" arrow trigger="manual" .active=${ false }>
          <nv-button slot="anchor" @click=${ (e: Event) => {
            const button = e.currentTarget as HTMLElement;
            const popup = button.closest('nv-popup') as any;
            if (popup) popup.active = !popup.active;
          } }>手动控制</nv-button>
          <div style="padding: 12px;">trigger="manual"<br/>需要手动控制 active 属性</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">trigger="manual"</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow trigger="click">
          <nv-button slot="anchor">点击触发</nv-button>
          <div style="padding: 12px;">trigger="click"<br/>点击锚点自动切换</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">trigger="click"</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow trigger="hover" .openDelay=${ 200 } .hideDelay=${ 200 }>
          <nv-button slot="anchor">悬停触发</nv-button>
          <div style="padding: 12px;">trigger="hover"<br/>鼠标悬停自动显示</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">trigger="hover"</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow trigger="focus" .openDelay=${ 100 } .hideDelay=${ 100 }>
          <input slot="anchor" type="text" placeholder="聚焦我显示提示" style="width: 140px; padding: 8px 12px; border: 1px solid #dcdfe6; border-radius: 4px; font-size: 14px; outline: none;" />
          <div style="padding: 12px;">trigger="focus"<br/>聚焦输入框显示，失焦隐藏</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">trigger="focus"</div>
      </div>
    </div>
  `
};

export const HoverDelays: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 40px; justify-content: center;">
      <nv-popup placement="top" arrow trigger="hover" .openDelay=${ 0 } .hideDelay=${ 0 }>
        <nv-button slot="anchor">立即触发（无延迟）</nv-button>
        <div style="padding: 12px;">鼠标悬停立即显示</div>
      </nv-popup>

      <nv-popup placement="top" arrow trigger="hover" .openDelay=${ 300 } .hideDelay=${ 300 }>
        <nv-button slot="anchor">延迟触发（300ms）</nv-button>
        <div style="padding: 12px;">鼠标悬停 300ms 后显示</div>
      </nv-popup>
    </div>
  `
};

export const WithoutArrow: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-popup placement="top">
        <nv-button slot="anchor">无箭头</nv-button>
        <div style="padding: 8px;">无箭头提示</div>
      </nv-popup>
    </div>
  `
};

export const ExternalAnchor: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px;">
      <h3 style="text-align: center; margin-bottom: 40px;">外部锚点示例</h3>

      <!-- 场景1：点击按钮2，popup 在按钮1上显示 -->
      <div style="margin-bottom: 60px;">
        <h4 style="color: #409eff; margin-bottom: 16px;">场景1：点击按钮2，popup 在按钮1上显示</h4>
        <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
          <nv-button id="external-anchor-btn1">按钮1（锚点位置）</nv-button>

          <nv-popup
            anchor="external-anchor-btn1"
            placement="top"
            arrow
            trigger="manual"
          >
            <!-- 按钮2 作为触发器，通过 slot 传入 -->
            <nv-button slot="anchor" @click=${ (e: Event) => {
              const button = e.currentTarget as HTMLElement;
              const popup = button.closest('nv-popup') as any;
              if (popup) popup.toggle();
            } }>按钮2（点击触发）</nv-button>

            <div style="padding: 12px;">
              这个 popup 显示在"按钮1"上方<br/>
              但是通过点击"按钮2"来触发
            </div>
          </nv-popup>
        </div>
        <div style="margin-top: 12px; text-align: center; color: #909399; font-size: 12px;">
          anchor="external-anchor-btn1" + trigger="manual" + 手动切换
        </div>
      </div>

      <!-- 场景2：点击按钮自己触发 -->
      <div style="margin-bottom: 60px;">
        <h4 style="color: #67c23a; margin-bottom: 16px;">场景2：点击按钮自己触发（自动）</h4>
        <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
          <nv-button id="external-anchor-auto">点击我自己</nv-button>
        </div>

        <nv-popup
          anchor="external-anchor-auto"
          placement="bottom"
          arrow
          trigger="click"
        >
          <div style="padding: 12px;">点击按钮自己就会触发</div>
        </nv-popup>
        <div style="margin-top: 12px; text-align: center; color: #909399; font-size: 12px;">
          anchor="external-anchor-auto" + trigger="click"
        </div>
      </div>

      <!-- 场景3：悬停按钮触发 -->
      <div>
        <h4 style="color: #e6a23c; margin-bottom: 16px;">场景3：悬停按钮触发（自动）</h4>
        <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
          <nv-button id="external-anchor-hover">悬停我</nv-button>
        </div>

        <nv-popup
          anchor="external-anchor-hover"
          placement="right"
          arrow
          trigger="hover"
          .openDelay=${ 200 }
          .hideDelay=${ 200 }
        >
          <div style="padding: 12px;">鼠标悬停按钮就会显示</div>
        </nv-popup>
        <div style="margin-top: 12px; text-align: center; color: #909399; font-size: 12px;">
          anchor="external-anchor-hover" + trigger="hover"
        </div>
      </div>
    </div>
  `
};

export const CloseOnClickOutside: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 60px; justify-content: center;">
      <div style="text-align: center;">
        <nv-popup
          placement="top"
          arrow
          trigger="click"
          .closeOnClickOutside=${ true }
        >
          <nv-button slot="anchor">开启点击外部关闭</nv-button>
          <div style="padding: 12px; width: 200px;">
            closeOnClickOutside="true"<br/>
            <br/>
            点击外部区域会自动关闭
          </div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #67c23a;">✅ 开启（默认）</div>
      </div>

      <div style="text-align: center;">
        <nv-popup
          placement="top"
          arrow
          trigger="click"
          .closeOnClickOutside=${ false }
        >
          <nv-button slot="anchor">关闭点击外部关闭</nv-button>
          <div style="padding: 12px; width: 200px;">
            closeOnClickOutside="false"<br/>
            <br/>
            点击外部不会关闭<br/>
            需要再次点击按钮
          </div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #f56c6c;">❌ 关闭</div>
      </div>
    </div>
  `
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-popup placement="top" arrow disabled>
        <nv-button slot="anchor">禁用状态</nv-button>
        <div style="padding: 8px;">禁用后无法通过触发器激活</div>
      </nv-popup>
    </div>
  `
};

export const ManualControl: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-popup
        id="manual-popup"
        placement="top"
        arrow
        trigger="manual"
      >
        <nv-button slot="anchor">手动控制</nv-button>
        <div style="padding: 12px;">手动控制的弹出层</div>
      </nv-popup>
      <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
        <nv-button @click=${ () => {
          const popup = document.getElementById('manual-popup') as any;
          if (popup) popup.active = true;
        } }>显示</nv-button>
        <nv-button @click=${ () => {
          const popup = document.getElementById('manual-popup') as any;
          if (popup) popup.active = false;
        } }>隐藏</nv-button>
        <nv-button @click=${ () => {
          const popup = document.getElementById('manual-popup') as any;
          if (popup) popup.toggle();
        } }>切换</nv-button>
      </div>
    </div>
  `
};

export const CustomContent: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; text-align: center;">
      <nv-popup placement="top" arrow>
        <nv-button slot="anchor">自定义内容</nv-button>
        <div style="padding: 12px; min-width: 200px;">
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 16px;">标题</div>
          <div style="color: #606266; font-size: 14px;">这是自定义的弹出内容，可以包含任何 HTML 元素。</div>
          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #ebeef5;">
            <nv-button size="small">操作按钮</nv-button>
          </div>
        </div>
      </nv-popup>
    </div>
  `
};

export const DistanceAndSkidding: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px; display: flex; gap: 40px; justify-content: center; align-items: center;">
      <div style="text-align: center;">
        <nv-popup placement="top" arrow>
          <nv-button slot="anchor">距离 8px（默认）</nv-button>
          <div style="padding: 8px;">distance="8"</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">距离 8px</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow distance=${ 12 }>
          <nv-button slot="anchor">距离 12px</nv-button>
          <div style="padding: 8px;">distance="12"</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">距离 12px</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow distance=${ 20 }>
          <nv-button slot="anchor">距离 20px</nv-button>
          <div style="padding: 8px;">distance="20"</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">距离 20px</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow skidding=${ -20 }>
          <nv-button slot="anchor">偏移 -20px</nv-button>
          <div style="padding: 8px;">skidding="-20"</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">偏移 -20px</div>
      </div>

      <div style="text-align: center;">
        <nv-popup placement="top" arrow skidding=${ 20 }>
          <nv-button slot="anchor">偏移 20px</nv-button>
          <div style="padding: 8px;">skidding="20"</div>
        </nv-popup>
        <div style="margin-top: 12px; font-size: 12px; color: #909399;">偏移 20px</div>
      </div>
    </div>
  `
};

export const Strategy: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <div style="padding: 100px;">
      <h3 style="text-align: center; margin-bottom: 40px;">定位策略对比</h3>

      <div style="margin-bottom: 60px;">
        <h4 style="color: #409eff; margin-bottom: 16px;">absolute 策略（默认）- 部分被裁剪</h4>
        <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
          <div style="width: 300px; height: 180px; overflow: hidden;
                      position: relative; border: 2px solid #409eff; padding: 20px;">
            <div style="padding-top: 30px; text-align: center;">
              <nv-popup placement="bottom" arrow strategy="absolute">
                <nv-button slot="anchor">absolute</nv-button>
                <div style="padding: 12px; width: 200px; line-height: 1.6;">
                  这是一段较长的内容。<br/>
                  使用 absolute 定位时，<br/>
                  popup 的底部会被父元素<br/>
                  的 overflow: hidden 裁剪掉，<br/>
                  你只能看到前面几行。
                </div>
              </nv-popup>
            </div>
          </div>
        </div>
        <div style="margin-top: 12px; text-align: center; color: #909399; font-size: 12px;">
          ⚠️ absolute 定位受父元素 overflow 影响，popup 底部内容会被裁剪
        </div>
      </div>

      <div>
        <h4 style="color: #67c23a; margin-bottom: 16px;">fixed 策略 - 完整显示</h4>
        <div style="display: flex; gap: 40px; align-items: center; justify-content: center;">
          <div style="width: 300px; height: 180px; overflow: hidden;
                      position: relative; border: 2px solid #67c23a; padding: 20px;">
            <div style="padding-top: 30px; text-align: center;">
              <nv-popup placement="bottom" arrow strategy="fixed">
                <nv-button slot="anchor">fixed</nv-button>
                <div style="padding: 12px; width: 200px; line-height: 1.6;">
                  这是一段较长的内容。<br/>
                  使用 fixed 定位时，<br/>
                  popup 的底部不会被父元素<br/>
                  的 overflow: hidden 裁剪掉，<br/>
                  你可以看到完整内容！
                </div>
              </nv-popup>
            </div>
          </div>
        </div>
        <div style="margin-top: 12px; text-align: center; color: #909399; font-size: 12px;">
          ✅ fixed 定位相对于视口，不受父元素 overflow 影响，内容完整显示
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f0f9ff; border-radius: 4px; border-left: 4px solid #409eff;">
        <h4 style="margin-top: 0; color: #409eff;">💡 使用建议</h4>
        <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
          <li><strong>absolute（默认）</strong>：适合大多数场景，性能更好，滚动体验自然</li>
          <li><strong>fixed</strong>：当遇到 overflow 裁剪问题时使用，可完全避免裁剪</li>
        </ul>
      </div>
    </div>
  `
};
