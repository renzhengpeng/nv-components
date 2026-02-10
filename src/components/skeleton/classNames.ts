/*
 * @Descripttion: skeleton组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
const BLOCK = 'nv-skeleton';

const classNames = {
  block: BLOCK,
  elements: {
    avatar: `${ BLOCK }__avatar`,
    content: `${ BLOCK }__content`,
    title: `${ BLOCK }__title`,
    paragraph: `${ BLOCK }__paragraph`,
    text: `${ BLOCK }__text`
  },
  modifiers: {
    animated: 'is-animated',
    avatar: 'avatar'
  }
};

export default classNames;

