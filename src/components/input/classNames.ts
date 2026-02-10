/*
 * @Descripttion: input组件的所有css class配置
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-12-19
 */
const BLOCK = 'nv-input';

const classNames = {
  block: BLOCK,
  elements: {
    wrapper: `${ BLOCK }__wrapper`,
    inner: `${ BLOCK }__inner`,
    prefix: `${ BLOCK }__prefix`,
    suffix: `${ BLOCK }__suffix`,
    prepend: `${ BLOCK }__prepend`,
    append: `${ BLOCK }__append`,
    clearIcon: `${ BLOCK }__clear`,
    passwordIcon: `${ BLOCK }__password-icon`,
    icon: `${ BLOCK }__icon`,
    count: `${ BLOCK }__count`
  },
  modifiers: {
    disabled: 'is-disabled',
    focus: 'is-focus',
    clearable: 'is-clearable',
    showPassword: 'is-show-password',
    prepend: 'is-prepend',
    append: 'is-append',
    prefix: 'is-prefix',
    suffix: 'is-suffix',
    readonly: 'is-readonly'
  }
};

export default classNames;
