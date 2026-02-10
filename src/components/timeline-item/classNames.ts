/*
 * @Descripttion: timeline-item组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-timeline-item';

const classNames = {
  block: BLOCK,
  modifiers: {
    pending: 'is-pending',
    reverse: 'is-reverse',
    nodeHasIcon: `${ BLOCK }__node--has-icon`
  },
  elements: {
    tail: `${ BLOCK }__tail`,
    node: `${ BLOCK }__node`,
    wrapper: `${ BLOCK }__wrapper`,
    content: `${ BLOCK }__content`,
    timestamp: `${ BLOCK }__timestamp`
  }
};

export default classNames;
