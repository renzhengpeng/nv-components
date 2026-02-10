/*
 * @Descripttion: 抽象组件，定义组件的生命周期及公共方法
 * @creater: zhengpeng.ren
 * @since: 2024-05-29 15:08:50
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-05-31 18:00:34
 */
import { PropertyDeclaration, PropertyValues } from 'lit';
import EventProxy from './EventProxy';

export default class Component extends EventProxy {
  created: boolean; // 组件是否已创建
  mounted: boolean; // 组件是否已挂载到DOM
  adopted: boolean; // 组件是否被移动
  disabled: boolean; // 组件是否禁用
  declare visible: boolean;

  changedAttribute: {
    name: string,
    oldValue: string | null
    currentValue: string | null
  } | null;

  constructor() {
    super();
    this.created = true;
    this.adopted = false;
    this.mounted = false;
    this.disabled = false;
    this.changedAttribute = null;
  }

  /**
   * 组件挂载到DOM，此时还无法获取到slot节点
   */
  connectedCallback(): void {
    super.connectedCallback();
  }

  /**
   * 组件首次更新完毕，此时已可以获取到slot节点，可以认为组件已完全挂载到文档树
   */
  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.mounted = true;
    this.$mounted();
  }

  /**
   * 组件的attribute改变
   * @param name 属性名
   * @param oldValue 属性旧值
   * @param currentValue 属性新值
   */
  attributeChangedCallback(name: string, oldValue: string | null, currentValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, currentValue);
    this.attrChanged(name, oldValue, currentValue);
  }

  /**
   * 组件被移动
   */
  protected adoptedCallback(): void {
    this.adopted = true;
  }

  /**
   * 组件从文档中删除
   */
  disconnectedCallback(): void {
    this.$destroyed();
    super.disconnectedCallback();
  }

  /**
   * 请求更新组件
   * @param name propertyName
   * @param oldValue 
   * @param options 
   */
  requestUpdate(name?: PropertyKey | undefined, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown> | undefined): void {
    // this.$beforeUpdate(name, oldValue);
    super.requestUpdate(name, oldValue, options);
    // this.$afterUpdate(name, oldValue);
  }

  /**
   * 抽象组件的属性改变回调
   * @param name 属性名
   * @param oldValue 属性旧值
   * @param currentValue 属性新值
   */
  attrChanged(name: string, oldValue: string | null, currentValue: string | null): void {
    this.changedAttribute = { name, oldValue, currentValue };
  }

  /**
   * 请求更新前回调
   * @param name propertyName，可选
   * @param oldValue 
   * @param options 
   */
  // protected $beforeUpdate(name?: PropertyKey | undefined, oldValue?: unknown) {
  //   //
  // }

  /**
   * 请求更新后回调
   * @param name propertyName，可选
   * @param oldValue 
   * @param options 
   */
  // protected $afterUpdate(name?: PropertyKey | undefined, oldValue?: unknown) {
  //   //
  // }

  /**
   * 组件挂载并完成首次更新
   * @protected
   */
  protected $mounted() {
    //
  }

  protected $destroyed() {
    //
  }

  /**
   * 获取组件标签内的所有子节点
   */
  get $slots(): Node[] | null | undefined {
    const slotElement = this.shadowRoot?.querySelector('slot');
    
    return slotElement && [].slice.call(slotElement.assignedNodes({ flatten: true }));
  }

  /**
   * 获取组件相对于视口的位置信息
   */
  get ClientRect() {
    return this.getBoundingClientRect();
  }

  /**
   * 获取计算样式
   */
  get computedStyle() {
    return window.getComputedStyle(this as unknown as HTMLElement);
  }

  /** *************************API**************************** **/

  /**
   * 设置/获取attribute
   * @param attrName 
   * @param value 
   * @returns 
   */
  attr(attrName: string, value: string): string | null {
    if (value) {
      this.setAttribute(attrName, value);
      return value;
    }

    return this.getAttribute(attrName);
  }

  /**
   * 获取/设置innerHTML
   * @param html 
   * @returns 
   */
  html(html: string): this | string {
    if (html) {
      this.innerHTML = html;
      return this;
    }

    return this.innerHTML;
  }

  /**
   * 隐藏组件
   */
  hide(): void {
    this.visible = false;
  }

  /**
   * 显示组件
   */
  show(): void {
    this.visible = true;
  }

  /**
   * 切换组件的可见状态
   */
  toggle(): void {
    this.visible = !this.visible;
  }

  /**
   * 移除组件
   */
  remove(): void {
    this.parentNode?.removeChild(this);
  }

  /**
   * 启用组件
   */
  enable() {
    this.disabled = false;
  }

  /**
   * 禁用组件
   */
  disable() {
    this.disabled = true;
  }

  /**
   * 在组件上弹出popup组件
   */
  popup() {
    // TODO: 
  }
}
