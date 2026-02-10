/*
 * @Descripttion: badge组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-badge';

const classNames = {
  block: BLOCK,
  modifiers: {
    dot: 'is-dot',
    fixed: 'is-fixed',
    success: 'is-success',
    error: 'is-error',
    warning: 'is-warning',
    processing: 'is-processing',
    info: 'is-info'
  },
  elements: {
    content: `${ BLOCK }__content`
  }
};

export default classNames;
