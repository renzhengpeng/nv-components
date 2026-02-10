/*
 * @Descripttion: select组件stories
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import './index';
import '../divider/index';
import '../message/index';
import { message } from '../message/message';
import readmeMd from './README.md?raw';

// 解析 README
const readmeHtml = marked.parse(readmeMd) as string;

const meta: Meta = {
  title: 'Components/Select',
  component: 'nv-select',
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值'
    },
    placeholder: {
      control: 'text',
      description: '占位符'
    },
    name: {
      control: 'text',
      description: '表单字段名称（用于表单提交）'
    },
    form: {
      control: 'text',
      description: '关联的表单 id（在表单外仍可参与提交与校验）'
    },
    required: {
      control: 'boolean',
      description: '是否必填（参与 form.reportValidity() / checkValidity()）'
    },
    autocomplete: {
      control: 'text',
      description: '自动完成提示（如 on / off）'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用'
    },
    clearable: {
      control: 'boolean',
      description: '是否可清空'
    },
    filterable: {
      control: 'boolean',
      description: '是否可搜索'
    },
    multiple: {
      control: 'boolean',
      description: '是否多选'
    },
    max: {
      control: 'number',
      description: '多选时最多可选项数量'
    },
    maxTagCount: {
      control: 'text',
      description: '多选时最多展示的 tag 数量，超出折叠为 +N；设为 responsive 时根据容器宽度动态计算'
    },
    noDataText: {
      control: 'text',
      description: '无选项时的占位文案'
    },
    noMatchText: {
      control: 'text',
      description: '可搜索时无匹配结果的占位文案'
    },
    virtual: {
      control: 'boolean',
      description: '是否启用虚拟滚动（为 true 时，选项数达到 virtual-threshold 才启用；为 false 时始终不使用虚拟滚动）'
    },
    virtualThreshold: {
      control: 'number',
      description: '启用虚拟滚动的选项数阈值，选项数 >= 该值且 virtual 为 true 时使用虚拟滚动'
    },
    dropdownMaxHeight: {
      control: 'text',
      description: '下拉浮层最大高度，支持 CSS 值（如 "300px"、"50vh"），不设置时使用默认值'
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large', 'huge'],
      description: '尺寸'
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
      <!-- README 文档 -->
      <div class="readme-content" style="background: #fff; padding: 30px; border-radius: 4px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); margin-bottom: 40px;">
        ${ unsafeHTML(readmeHtml) }
      </div>

      <!-- 分隔线 -->
      <nv-divider style="margin: 40px 0;">
        <span style="color: #909399; font-size: 16px; font-weight: 500;">✨ 交互示例</span>
      </nv-divider>

      <!-- 示例区域 -->
      <div class="examples-section">
        <!-- 基础用法 -->
        <div class="example-item">
          <h3 class="example-title">基础用法</h3>
          <p class="example-desc">基本的选择器用法</p>
          <div class="example-demo">
            ${ Basic.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 默认值 -->
        <div class="example-item">
          <h3 class="example-title">默认值</h3>
          <p class="example-desc">设置默认选中的值</p>
          <div class="example-demo">
            ${ WithDefaultValue.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 表单关联 -->
        <div class="example-item">
          <h3 class="example-title">表单关联</h3>
          <p class="example-desc">支持 name、form、required、autocomplete 等表单属性；必填时参与 form.reportValidity() 校验；提交或重置时与原生表单一致</p>
          <div class="example-demo">
            ${ FormAssociated.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可清空 -->
        <div class="example-item">
          <h3 class="example-title">可清空</h3>
          <p class="example-desc">设置 clearable 属性可以清空选项</p>
          <div class="example-demo">
            ${ Clearable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 可搜索 -->
        <div class="example-item">
          <h3 class="example-title">可搜索</h3>
          <p class="example-desc">设置 filterable 属性可以搜索选项</p>
          <div class="example-demo">
            ${ Filterable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 多选 -->
        <div class="example-item">
          <h3 class="example-title">多选</h3>
          <p class="example-desc">设置 multiple 属性可以多选</p>
          <div class="example-demo">
            ${ Multiple.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 多选可清空 -->
        <div class="example-item">
          <h3 class="example-title">多选可清空</h3>
          <p class="example-desc">多选模式下也可以清空</p>
          <div class="example-demo">
            ${ MultipleWithClearable.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 多选上限与折叠 -->
        <div class="example-item">
          <h3 class="example-title">多选上限与折叠</h3>
          <p class="example-desc">max 限制最多可选数量；max-tag-count 超出时折叠为 +N；为 responsive 时根据容器宽度动态计算</p>
          <div class="example-demo">
            ${ MultipleWithMaxAndCollapse.render?.({} as any, {} as any) }
            ${ MultipleWithResponsiveTags.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 禁用状态 -->
        <div class="example-item">
          <h3 class="example-title">禁用状态</h3>
          <p class="example-desc">选择器可以设置为禁用状态</p>
          <div class="example-demo">
            ${ Disabled.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 不同尺寸 -->
        <div class="example-item">
          <h3 class="example-title">不同尺寸</h3>
          <p class="example-desc">提供 mini、small、medium、large、huge 五种尺寸</p>
          <div class="example-demo">
            ${ Sizes.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 禁用选项 -->
        <div class="example-item">
          <h3 class="example-title">禁用选项</h3>
          <p class="example-desc">可以禁用某些选项</p>
          <div class="example-demo">
            ${ WithDisabledOption.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 无数据与无匹配文案 -->
        <div class="example-item">
          <h3 class="example-title">无数据与无匹配文案</h3>
          <p class="example-desc">no-data-text 无选项时展示；no-match-text 可搜索且无匹配时展示</p>
          <div class="example-demo">
            ${ NoDataNoMatch.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 自定义浮层高度 -->
        <div class="example-item">
          <h3 class="example-title">自定义浮层高度</h3>
          <p class="example-desc">通过 dropdown-max-height 设置下拉浮层最大高度，支持 CSS 值（如 "180px"、"360px"、"50vh"），不设置时使用默认高度</p>
          <div class="example-demo">
            ${ CustomDropdownHeight.render?.({} as any, {} as any) }
          </div>
        </div>

        <nv-divider></nv-divider>

        <!-- 虚拟滚动对比（大数据） -->
        <div class="example-item">
          <h3 class="example-title">虚拟滚动对比（大数据）</h3>
          <p class="example-desc">virtual 为 true 且选项数达到 virtual-threshold（默认 50）时启用虚拟滚动，少量选项时自动全量渲染避免浮层留白；virtual=false 时始终全量渲染（约 2000 条可对比性能）</p>
          <div class="example-demo">
            ${ LargeDataVirtual.render?.({} as any, {} as any) }
            ${ LargeDataNoVirtual.render?.({} as any, {} as any) }
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
        .readme-content h3 {
          color: #303133;
          font-size: 18px;
          font-weight: 600;
          margin: 24px 0 12px 0;
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

        /* 示例区域样式 */
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

export const Default: Story = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select
        value="${ args.value }"
        placeholder="${ args.placeholder }"
        name="${ args.name ?? '' }"
        form="${ args.form ?? '' }"
        ?required="${ args.required }"
        autocomplete="${ args.autocomplete ?? 'off' }"
        no-data-text="${ args.noDataText }"
        no-match-text="${ args.noMatchText }"
        ?disabled="${ args.disabled }"
        ?clearable="${ args.clearable }"
        ?filterable="${ args.filterable }"
        ?multiple="${ args.multiple }"
        .max=${ args.max }
        .maxTagCount=${ args.maxTagCount }
        ?virtual="${ args.virtual }"
        virtual-threshold="${ args.virtualThreshold }"
        dropdown-max-height="${ args.dropdownMaxHeight ?? '' }"
        size="${ args.size }"
        @nv-change="${ (e: CustomEvent) => console.log('Selected:', e.detail) }"
      >
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `,
  args: {
    value: '',
    placeholder: '请选择',
    name: '',
    form: '',
    required: false,
    autocomplete: 'off',
    noDataText: '无数据',
    noMatchText: '无匹配数据',
    disabled: false,
    clearable: false,
    filterable: false,
    multiple: false,
    max: undefined,
    maxTagCount: undefined,
    virtual: true,
    virtualThreshold: 50,
    dropdownMaxHeight: '',
    size: 'medium'
  }
};

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select placeholder="请选择">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
      </nv-select>
    </div>
  `
};

export const WithDefaultValue: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select value="option2" placeholder="请选择">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
      </nv-select>
    </div>
  `
};

/** 表单关联：name、form、required、autocomplete，与原生表单提交与校验一致 */
export const FormAssociated: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <form
        id="select-form-demo"
        style="display: flex; flex-direction: column; gap: 12px;"
        @submit=${ (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          if (form.reportValidity()) {
            const fd = new FormData(form);
            message.success({ message: '表单校验通过，FormData: ' + JSON.stringify(Object.fromEntries(fd)), showIcon: true });
          } else {
            message.error({ message: '请选择一项', showIcon: true });
          }
        } }
      >
        <label style="font-size: 14px; color: #606266;">必填选择（required，未选时提交会校验）</label>
        <nv-select
          form="select-form-demo"
          name="fruit"
          required
          placeholder="请选择一项"
          autocomplete="off"
        >
          <nv-option value="apple" label="苹果"></nv-option>
          <nv-option value="banana" label="香蕉"></nv-option>
          <nv-option value="orange" label="橙子"></nv-option>
        </nv-select>
        <div style="display: flex; gap: 8px;">
          <button type="submit" style="padding: 6px 16px; cursor: pointer;">提交（会触发校验）</button>
          <button type="reset" style="padding: 6px 16px; cursor: pointer;">重置</button>
        </div>
      </form>
      <p style="font-size: 12px; color: #909399; margin: 0;">通过 form 属性可让选择器在表单外仍参与提交：form="select-form-demo"</p>
    </div>
  `
};

export const Clearable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select clearable placeholder="请选择">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
      </nv-select>
    </div>
  `
};

export const Filterable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select filterable placeholder="请选择或搜索">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select multiple placeholder="请选择多个选项">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

export const MultipleWithClearable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select multiple clearable placeholder="请选择多个选项">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

export const MultipleWithMaxAndCollapse: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select
        multiple
        clearable
        max="3"
        max-tag-count="2"
        placeholder="最多选 3 项，展示 2 个 tag 后折叠"
      >
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

export const MultipleWithResponsiveTags: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select
        multiple
        clearable
        max-tag-count="responsive"
        placeholder="responsive：根据宽度自动折叠"
      >
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4"></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

export const NoDataNoMatch: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; width: 300px;">
      <div>
        <p style="font-size: 14px; color: #606266; margin-bottom: 8px;">无选项时展示 no-data-text（打开下拉查看）</p>
        <nv-select no-data-text="暂无选项数据" placeholder="请选择">
          <!-- 无 option，打开下拉显示「暂无选项数据」 -->
        </nv-select>
      </div>
      <div>
        <p style="font-size: 14px; color: #606266; margin-bottom: 8px;">可搜索且无匹配时展示 no-match-text（输入「xyz」等无匹配关键词）</p>
        <nv-select
          filterable
          no-match-text="没有找到匹配项"
          placeholder="请选择或搜索"
        >
          <nv-option value="option1" label="选项1"></nv-option>
          <nv-option value="option2" label="选项2"></nv-option>
          <nv-option value="option3" label="选项3"></nv-option>
        </nv-select>
      </div>
    </div>
  `
};

/** 自定义浮层高度：通过 dropdown-max-height 设置下拉浮层最大高度 */
export const CustomDropdownHeight: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start;">
      <div style="width: 280px;">
        <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">默认高度（未设置 dropdown-max-height）</p>
        <nv-select placeholder="请选择">
          <nv-option value="1" label="选项 1"></nv-option>
          <nv-option value="2" label="选项 2"></nv-option>
          <nv-option value="3" label="选项 3"></nv-option>
          <nv-option value="4" label="选项 4"></nv-option>
          <nv-option value="5" label="选项 5"></nv-option>
          <nv-option value="6" label="选项 6"></nv-option>
          <nv-option value="7" label="选项 7"></nv-option>
          <nv-option value="8" label="选项 8"></nv-option>
        </nv-select>
      </div>
      <div style="width: 280px;">
        <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">较矮浮层（dropdown-max-height="180px"）</p>
        <nv-select dropdown-max-height="180px" placeholder="请选择">
          <nv-option value="1" label="选项 1"></nv-option>
          <nv-option value="2" label="选项 2"></nv-option>
          <nv-option value="3" label="选项 3"></nv-option>
          <nv-option value="4" label="选项 4"></nv-option>
          <nv-option value="5" label="选项 5"></nv-option>
          <nv-option value="6" label="选项 6"></nv-option>
          <nv-option value="7" label="选项 7"></nv-option>
          <nv-option value="8" label="选项 8"></nv-option>
        </nv-select>
      </div>
      <div style="width: 280px;">
        <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">较高浮层（dropdown-max-height="360px"）</p>
        <nv-select dropdown-max-height="360px" placeholder="请选择">
          <nv-option value="1" label="选项 1"></nv-option>
          <nv-option value="2" label="选项 2"></nv-option>
          <nv-option value="3" label="选项 3"></nv-option>
          <nv-option value="4" label="选项 4"></nv-option>
          <nv-option value="5" label="选项 5"></nv-option>
          <nv-option value="6" label="选项 6"></nv-option>
          <nv-option value="7" label="选项 7"></nv-option>
          <nv-option value="8" label="选项 8"></nv-option>
        </nv-select>
      </div>
      <div style="width: 280px;">
        <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">视口高度 50%（dropdown-max-height="50vh"）</p>
        <nv-select dropdown-max-height="50vh" placeholder="请选择">
          <nv-option value="1" label="选项 1"></nv-option>
          <nv-option value="2" label="选项 2"></nv-option>
          <nv-option value="3" label="选项 3"></nv-option>
          <nv-option value="4" label="选项 4"></nv-option>
          <nv-option value="5" label="选项 5"></nv-option>
          <nv-option value="6" label="选项 6"></nv-option>
          <nv-option value="7" label="选项 7"></nv-option>
          <nv-option value="8" label="选项 8"></nv-option>
        </nv-select>
      </div>
    </div>
  `
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select disabled placeholder="禁用状态">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
      </nv-select>
      <nv-select disabled value="option2" placeholder="禁用状态（有值）">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
      </nv-select>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select size="mini" placeholder="mini尺寸">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
      </nv-select>
      <nv-select size="small" placeholder="small尺寸">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
      </nv-select>
      <nv-select size="medium" placeholder="medium尺寸">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
      </nv-select>
      <nv-select size="large" placeholder="large尺寸">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
      </nv-select>
      <nv-select size="huge" placeholder="huge尺寸">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2"></nv-option>
      </nv-select>
    </div>
  `
};

export const WithDisabledOption: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <nv-select placeholder="请选择">
        <nv-option value="option1" label="选项1"></nv-option>
        <nv-option value="option2" label="选项2" disabled></nv-option>
        <nv-option value="option3" label="选项3"></nv-option>
        <nv-option value="option4" label="选项4" disabled></nv-option>
        <nv-option value="option5" label="选项5"></nv-option>
      </nv-select>
    </div>
  `
};

/** 生成大量选项（用于虚拟滚动对比示例） */
const LARGE_OPTION_COUNT = 2000;
function renderLargeOptions() {
  const options = [];
  for (let i = 0; i < LARGE_OPTION_COUNT; i++) {
    options.push(html`<nv-option value="item-${ i }" label="选项 ${ i + 1 }"></nv-option>`);
  }
  return options;
}

/** 虚拟滚动（virtual=true，默认）：仅渲染可视区域，大数据下更流畅 */
export const LargeDataVirtual: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">虚拟滚动（virtual=true，默认）— 约 ${ LARGE_OPTION_COUNT } 条</p>
      <nv-select virtual placeholder="请选择（虚拟滚动）" filterable>
        ${ renderLargeOptions() }
      </nv-select>
    </div>
  `
};

/** 非虚拟滚动（virtual=false）：全量渲染，可对比打开下拉与滚动的性能 */
export const LargeDataNoVirtual: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
      <p style="font-size: 14px; color: #606266; margin: 0 0 8px 0;">非虚拟滚动（virtual=false）— 约 ${ LARGE_OPTION_COUNT } 条</p>
      <nv-select virtual="false" placeholder="请选择（全量渲染）" filterable>
        ${ renderLargeOptions() }
      </nv-select>
    </div>
  `
};
