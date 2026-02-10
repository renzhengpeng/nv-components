import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../carousel-item/index';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Carousel',
  component: 'nv-carousel', 
  argTypes: {
    value: {
      control: 'number',
      description: '当前激活的幻灯片索引'
    },
    height: {
      control: 'text',
      description: '走马灯高度'
    },
    indicator: {
      control: 'boolean',
      description: '是否显示指示器'
    },
    indicatorPosition: {
      control: 'select',
      options: ['', 'outside', 'none'],
      description: '指示器位置'
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: '指示器触发方式'
    },
    autoplay: {
      control: 'boolean',
      description: '是否自动切换'
    },
    interval: {
      control: 'number',
      description: '自动切换的时间间隔（毫秒）'
    },
    type: {
      control: 'select',
      options: ['', 'card'],
      description: '走马灯类型'
    },
    loop: {
      control: 'boolean',
      description: '是否无缝循环'
    },
    navigation: {
      control: 'boolean',
      description: '是否显示导航箭头'
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '滚动方向'
    },
    transitionDuration: {
      control: 'number',
      description: '过渡效果时长（毫秒）'
    },
    indicatorSize: {
      control: 'number',
      description: '指示器大小（像素）'
    }
  }
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  parameters: {
    docs: { disable: true },
    controls: { disable: true },
    actions: { disable: true }
  },
  render: () => {
    return html`
    <div style="padding: 20px; max-width: 1200px;">
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <div class="examples-section">
        <div class="example-item">
          <h3 class="example-title">Basic</h3>
          <p class="example-desc">Basic 示例</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Without Navigation</h3>
          <p class="example-desc">Without Navigation 示例</p>
          <div class="example-demo">
            ${ WithoutNavigation.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Without Indicator</h3>
          <p class="example-desc">Without Indicator 示例</p>
          <div class="example-demo">
            ${ WithoutIndicator.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Indicator Outside</h3>
          <p class="example-desc">Indicator Outside 示例</p>
          <div class="example-demo">
            ${ IndicatorOutside.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Hover Trigger</h3>
          <p class="example-desc">Hover Trigger 示例</p>
          <div class="example-demo">
            ${ HoverTrigger.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Manual Control</h3>
          <p class="example-desc">Manual Control 示例</p>
          <div class="example-demo">
            ${ ManualControl.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Fast Interval</h3>
          <p class="example-desc">Fast Interval 示例</p>
          <div class="example-demo">
            ${ FastInterval.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Loop Mode</h3>
          <p class="example-desc">Loop Mode 示例</p>
          <div class="example-demo">
            ${ LoopMode.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Vertical Direction</h3>
          <p class="example-desc">Vertical Direction 示例</p>
          <div class="example-demo">
            ${ VerticalDirection.render?.({} as any, {} as any) }
          </div>
        </div>

        
        <nv-divider></nv-divider>

        <div class="example-item">
          <h3 class="example-title">Transition Duration</h3>
          <p class="example-desc">Transition Duration 示例</p>
          <div class="example-demo">
            ${ TransitionDuration.render?.({} as any, {} as any) }
          </div>
        </div>
      </div>

      <style>
        .readme-content h1 {
          margin-top: 0;
          font-size: 28px;
          font-weight: 600;
          color: #303133;
          padding-bottom: 16px;
          border-bottom: 2px solid #e4e7ed;
        }
        .readme-content h2 {
          color: #303133;
          font-size: 20px;
          font-weight: 600;
          margin: 30px 0 16px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #e4e7ed;
        }
        .readme-content p {
          color: #606266;
          line-height: 1.8;
          font-size: 15px;
          margin: 12px 0;
        }
        .readme-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        .readme-content table thead {
          background: #f5f7fa;
        }
        .readme-content table th {
          padding: 12px;
          text-align: left;
          border-bottom: 2px solid #e4e7ed;
          color: #303133;
          font-weight: 600;
        }
        .readme-content table td {
          padding: 12px;
          border-bottom: 1px solid #e4e7ed;
          color: #606266;
        }
        .readme-content table tbody tr:last-child td {
          border-bottom: none;
        }
        .readme-content code {
          background: #f5f7fa;
          padding: 2px 6px;
          border-radius: 3px;
          color: #e96900;
          font-size: 13px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
        }
        
        .examples-section {
          background: #fff;
          border-radius: 4px;
          padding: 30px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .example-item {
          margin: 30px 0;
        }

        .example-item:first-child {
          margin-top: 0;
        }

        .example-item:last-child {
          margin-bottom: 0;
        }

        .example-title {
          font-size: 20px;
          font-weight: 600;
          color: #303133;
          margin: 0 0 8px 0;
        }

        .example-desc {
          font-size: 14px;
          color: #909399;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }

        .example-demo {
          padding: 24px;
          background: #fafafa;
          border: 1px solid #ebebeb;
          border-radius: 4px;
        }
      </style>
    </div>
  `;
  }
};

/**
 * 默认走马灯示例
 */
export const Default: Story = {
  render: (args) => html`
    <nv-carousel
      .value=${ args.value }
      height=${ args.height }
      ?indicator=${ args.indicator }
      indicatorPosition=${ args.indicatorPosition }
      trigger=${ args.trigger }
      ?autoplay=${ args.autoplay }
      .interval=${ args.interval }
      type=${ args.type }
      ?loop=${ args.loop }
      ?navigation=${ args.navigation }
      direction=${ args.direction }
      .transitionDuration=${ args.transitionDuration }
      .indicatorSize=${ args.indicatorSize }
    >
      <nv-carousel-item>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">幻灯片 1</div>
      </nv-carousel-item>
      <nv-carousel-item>
        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">幻灯片 2</div>
      </nv-carousel-item>
      <nv-carousel-item>
        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">幻灯片 3</div>
      </nv-carousel-item>
      <nv-carousel-item>
        <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">幻灯片 4</div>
      </nv-carousel-item>
    </nv-carousel>
  `,
  args: {
    value: 0,
    height: '400px',
    indicator: true,
    indicatorPosition: '',
    trigger: 'click',
    autoplay: true,
    interval: 3000,
    type: '',
    loop: true,
    navigation: true,
    direction: 'horizontal',
    transitionDuration: 400,
    indicatorSize: 12
  }
};

/**
 * 基础走马灯
 */
export const Basic: Story = {
  render: () => {
    const autoplay = true;
    return html`
      <nv-carousel height="350px" .autoplay=${ autoplay } .interval=${ 3000 }>
        <nv-carousel-item>
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
            <h2 style="margin: 0; font-size: 36px;">欢迎使用</h2>
            <p style="margin: 10px 0 0 0; font-size: 18px;">Web Components 组件库</p>
          </div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
            <h2 style="margin: 0; font-size: 36px;">强大功能</h2>
            <p style="margin: 10px 0 0 0; font-size: 18px;">丰富的组件和灵活的配置</p>
          </div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
            <h2 style="margin: 0; font-size: 36px;">开箱即用</h2>
            <p style="margin: 10px 0 0 0; font-size: 18px;">简单易用的 API 设计</p>
          </div>
        </nv-carousel-item>
      </nv-carousel>
    `;
  }
};

/**
 * 不显示导航箭头
 */
export const WithoutNavigation: Story = {
  render: () => {
    const navigation = false;
    const autoplay = true;
    return html`
      <nv-carousel height="300px" .navigation=${ navigation } .autoplay=${ autoplay }>
        <nv-carousel-item>
          <div style="background: #409EFF; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 1</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #67C23A; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 2</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #E6A23C; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 3</div>
        </nv-carousel-item>
      </nv-carousel>
    `;
  }
};

/**
 * 不显示指示器
 */
export const WithoutIndicator: Story = {
  render: () => {
    const indicator = false;
    const autoplay = true;
    return html`
      <nv-carousel height="300px" .indicator=${ indicator } .autoplay=${ autoplay }>
        <nv-carousel-item>
          <div style="background: #409EFF; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 1</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #67C23A; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 2</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #E6A23C; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 3</div>
        </nv-carousel-item>
      </nv-carousel>
    `;
  }
};

/**
 * 指示器在外部
 */
export const IndicatorOutside: Story = {
  render: () => {
    const autoplay = true;
    return html`
      <div style="padding-bottom: 30px;">
        <nv-carousel height="300px" indicatorPosition="outside" .autoplay=${ autoplay }>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 1</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #FFA8A8 0%, #FCFF00 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 2</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #FDEB71 0%, #F8D800 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px;">幻灯片 3</div>
          </nv-carousel-item>
        </nv-carousel>
      </div>
    `;
  }
};

/**
 * 悬停触发
 */
export const HoverTrigger: Story = {
  render: () => {
    const autoplay = false;
    return html`
      <nv-carousel height="300px" trigger="hover" .autoplay=${ autoplay }>
        <nv-carousel-item>
          <div style="background: #E91E63; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">悬停指示器切换 - 1</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #9C27B0; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">悬停指示器切换 - 2</div>
        </nv-carousel-item>
        <nv-carousel-item>
          <div style="background: #673AB7; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">悬停指示器切换 - 3</div>
        </nv-carousel-item>
      </nv-carousel>
    `;
  }
};

/**
 * 手动控制
 */
export const ManualControl: Story = {
  render: () => {
    const autoplay = false;
    return html`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0; color: #333;">手动控制走马灯</h3>
        <nv-carousel height="300px" .autoplay=${ autoplay }>
          <nv-carousel-item>
            <div style="background: #FF6B6B; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">手动切换 - 第 1 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #4ECDC4; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">手动切换 - 第 2 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #45B7D1; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">手动切换 - 第 3 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #96CEB4; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">手动切换 - 第 4 张</div>
          </nv-carousel-item>
        </nv-carousel>
        <p style="margin: 16px 0 0 0; color: #666; font-size: 14px;">💡 点击左右箭头或下方指示器来切换</p>
      </div>
    `;
  }
};

/**
 * 快速切换
 */
export const FastInterval: Story = {
  render: () => {
    const autoplay = true;
    return html`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0; color: #333;">快速切换 (1.5秒间隔)</h3>
        <nv-carousel height="250px" .autoplay=${ autoplay } .interval=${ 1500 }>
          <nv-carousel-item>
            <div style="background: #FF6B6B; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">1</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #4ECDC4; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">2</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #45B7D1; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">3</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #96CEB4; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">4</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: #FFEAA7; height: 100%; display: flex; align-items: center; justify-content: center; color: #333; font-size: 24px;">5</div>
          </nv-carousel-item>
        </nv-carousel>
      </div>
    `;
  }
};

/**
 * 无缝循环模式
 */
export const LoopMode: Story = {
  render: () => {
    const autoplay = false;
    return html`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3 style="margin: 0 0 16px 0; color: #333;">无缝循环（Loop）模式</h3>
        <nv-carousel height="300px" ?loop=${ true } .autoplay=${ autoplay }>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">第 1 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">第 2 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">第 3 张</div>
          </nv-carousel-item>
          <nv-carousel-item>
            <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold;">第 4 张</div>
          </nv-carousel-item>
        </nv-carousel>
        <p style="margin: 16px 0 0 0; color: #666; font-size: 14px;">💡 在第一张点击左箭头或最后一张点击右箭头，不会反向滚动</p>
      </div>
    `;
  }
};

/**
 * 垂直滚动
 */
export const VerticalDirection: Story = {
  render: () => {
    const autoplay = true;
    return html`
      <div style="display: flex; gap: 40px;">
        <div style="flex: 1;">
          <h4 style="margin: 0 0 12px 0; color: #333;">垂直滚动 - 自动播放</h4>
          <nv-carousel height="400px" direction="vertical" .autoplay=${ autoplay } .interval=${ 3000 }>
            <nv-carousel-item>
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <h2 style="margin: 0; font-size: 28px;">垂直滚动 1</h2>
                <p style="margin: 10px 0 0 0;">上下滑动效果</p>
              </div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <h2 style="margin: 0; font-size: 28px;">垂直滚动 2</h2>
                <p style="margin: 10px 0 0 0;">自动切换</p>
              </div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <h2 style="margin: 0; font-size: 28px;">垂直滚动 3</h2>
                <p style="margin: 10px 0 0 0;">流畅过渡</p>
              </div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <h2 style="margin: 0; font-size: 28px;">垂直滚动 4</h2>
                <p style="margin: 10px 0 0 0;">无缝循环</p>
              </div>
            </nv-carousel-item>
          </nv-carousel>
        </div>

        <div style="flex: 1;">
          <h4 style="margin: 0 0 12px 0; color: #333;">垂直滚动 - 手动控制</h4>
          <nv-carousel height="400px" direction="vertical" .autoplay=${ false }>
            <nv-carousel-item>
              <div style="background: #FF6B6B; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">📱</div>
                <h3 style="margin: 0;">移动优先</h3>
                <p style="margin: 8px 0 0 0;">手动点击上下箭头</p>
              </div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #4ECDC4; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">🎨</div>
                <h3 style="margin: 0;">精美设计</h3>
                <p style="margin: 8px 0 0 0;">垂直滑动体验</p>
              </div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #45B7D1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">⚡</div>
                <h3 style="margin: 0;">性能卓越</h3>
                <p style="margin: 8px 0 0 0;">流畅动画效果</p>
              </div>
            </nv-carousel-item>
          </nv-carousel>
        </div>
      </div>
    `;
  }
};

/**
 * 不同过渡时长对比
 */
export const TransitionDuration: Story = {
  render: () => {
    const autoplay = false;
    return html`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 12px 0; color: #333;">快速 (200ms)</h4>
          <nv-carousel height="200px" .autoplay=${ autoplay } .transitionDuration=${ 200 }>
            <nv-carousel-item>
              <div style="background: #667eea; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">快速 - 幻灯片 1</div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #764ba2; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">快速 - 幻灯片 2</div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #f093fb; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">快速 - 幻灯片 3</div>
            </nv-carousel-item>
          </nv-carousel>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; color: #333;">缓慢 (800ms)</h4>
          <nv-carousel height="200px" .autoplay=${ autoplay } .transitionDuration=${ 800 }>
            <nv-carousel-item>
              <div style="background: #FF6B6B; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">缓慢 - 幻灯片 1</div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #4ECDC4; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">缓慢 - 幻灯片 2</div>
            </nv-carousel-item>
            <nv-carousel-item>
              <div style="background: #45B7D1; height: 100%; display: flex; align-items: center; justify-content: center; color: white;">缓慢 - 幻灯片 3</div>
            </nv-carousel-item>
          </nv-carousel>
        </div>
      </div>
    `;
  }
};

