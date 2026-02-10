/*
 * @Descripttion: 事件代理层 TODO: 待完善
 * @creater: zhengpeng.ren
 * @since: 2024-05-29 15:10:09
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-08-23 14:42:12
 */
import { LitElement } from 'lit';

type Listener = EventListenerOrEventListenerObject;

interface DispatchEventOptions {
  bubbles?: boolean;
  detail?: unknown;
  cancelable?: boolean;
  composed?: boolean;
}

interface Listeners {
  [key: string]: Set<Listener>;
}

export default class EventProxy extends LitElement {
  listeners: null | Listeners;

  constructor() {
    super();
    this.listeners = null; // 初始事件监听者对象为空
  }

  /**
   * 拦截DOM原生的事件监听函数，将其转发到自定义的on函数以实现事件的统一管理
   * @param type string
   * @param listener Listener
   * @param options boolean | AddEventListenerOptions
   * @returns void
   */
  addEventListener(type: string, listener: Listener, options?: boolean | AddEventListenerOptions) {
    return this.on(type, listener, options);
  }

  removeEventListener(type: string, listener: Listener, options?: boolean | EventListenerOptions | undefined) {
    return this.off(type, listener, options);
  }

  /**
   * 添加事件监听
   * @param type 事件类型
   * @param listener 事件监听器
   * @param options 事件监听配置选项
   * @returns void
   */
  on(type: string, listener: Listener, options?: boolean | AddEventListenerOptions) {
    this.listeners = this.listeners || {};
    this.listeners[type] = this.listeners[type] || new Set();
    this.listeners[type].add(listener);

    return super.addEventListener(type, listener, options);
  }

  /**
   * 添加一个仅执行一次的事件监听器
   * @param type 事件类型
   * @param listener 事件监听器
   */
  once(type: string, listener: Listener) {
    const onceListener = (e: Event) => {
      if (typeof listener === 'function') {
        listener.call(this, e);
      } else {
        listener.handleEvent.call(this, e);
      }

      this.off(type, onceListener);
    };

    this.on(type, onceListener);
  }

  /**
   * 移除事件监听器
   * @param type 事件类型
   * @param listener 事件监听器
   * @param options 事件移除配置选项
   */
  off(type: string, listener: Listener, options?: boolean | EventListenerOptions | undefined) {
    if (this.listeners && this.listeners[type]) {
      super.removeEventListener(type, listener, options);
      this.listeners[type].delete(listener);
    }
  }

  /**
   * 清空某个类型的事件监听或者所有的事件监听
   * @param type 事件类型
   * @returns void
   */
  clearEventListeners(type?: string): void {
    if (this.listeners === null) return;

    if (!type) {
      // 清空所有事件监听器
      Object.keys(this.listeners).forEach((eventType) => {
        this.listeners![eventType].forEach((listener: Listener) => {
          super.removeEventListener(eventType, listener);
        });
        this.listeners![eventType].clear();
      });
      this.listeners = null;
      return;
    }

    if (this.listeners[type]) {
      this.listeners[type].forEach((listener: Listener) => {
        this.off(type, listener);
      });
      this.listeners[type].clear();
    }
  }

  /**
   * 主动触发某个事件
   * @param name 事件名
   * @param data 数据
   * @param options 事件配置选项
   * @returns boolean - 如果事件被取消则返回 false，否则返回 true
   */
  dispatch(name: string, data?: unknown, options?: DispatchEventOptions): boolean {
    const { bubbles = true, cancelable = true, composed = true } = options || {};
    return super.dispatchEvent(new CustomEvent(name, {
      bubbles,
      detail: data,
      cancelable,
      composed
    }));
  }
}
