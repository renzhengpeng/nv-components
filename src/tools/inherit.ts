/*
 * @Descripttion: 继承工具函数
 * @creater: zhengpeng.ren
 * @since: 2024-05-31 18:10:07
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-06-03 10:28:37
 */
declare type SubFunction = () => void;
declare type Sub = object | Array<any> | SubFunction
declare type Sup = object | Array<any> | SubFunction

export default function(subclass: Sub, supclass: Sup) {
  if (supclass) {
    let subPrototype = null;
    let supPrototype = null;

    if (typeof subclass === 'function') {
      subPrototype = subclass.prototype;
    } else if (subclass.toString() === '[object Object]' || Array.isArray(subclass)) {
      subPrototype = subclass;
    }

    if (typeof supclass === 'function') {
      subPrototype = supclass.prototype;
    } else if (supclass.toString() === '[object Object]' || Array.isArray(supclass)) {
      supPrototype = supclass;
    }

    Object.setPrototypeOf(subPrototype, supPrototype);
  }
};
