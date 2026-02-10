/*
 * @Descripttion: 获取根元素的CSS变量
 * @creater: zhengpeng.ren
 * @since: 2025-11-14
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2025-11-14
 */
export default function getRootCssVariable(variable: string) {
  if (!variable) {
    return '';
  }
  return getComputedStyle(document.documentElement).getPropertyValue(variable)?.replace(/['"]/g, '');
};
