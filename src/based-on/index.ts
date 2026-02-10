/*
 * @Descripttion: 依赖库的门面，以解除组件与依赖库的耦合
 * @creater: zhengpeng.ren
 * @since: 2024-05-13 11:24:50
 * @LastAuthor: zhengpeng.ren
 * @lastTime: 2024-08-23 14:07:54
 */
import {
  CSSResult,
  CSSResultArray,
  CSSResultGroup,
  CSSResultOrNative,
  css,
  LitElement,
  TemplateResult,
  TemplateInstance,
  SVGTemplateResult,
  UncompiledTemplateResult,
  svg,
  EventPart,
  unsafeCSS,
  defaultConverter,
  render,
  adoptStyles,
  html
} from 'lit';

import {
  customElement,
  property,
  query,
  queryAll,
  queryAssignedElements,
  queryAssignedNodes,
  queryAsync,
  state
 } from 'lit/decorators.js';

import {
  BooleanAttributePart,
  DirectiveResult
} from 'lit/directive.js';

import { classMap, ClassMapDirective } from 'lit/directives/class-map.js';
import Component from './Component.js';
import EventProxy from './EventProxy';

export {
  CSSResult,
  css,
  LitElement,
  svg,
  customElement,
  property,
  state,
  unsafeCSS,
  defaultConverter,
  render,
  query,
  queryAll,
  queryAssignedElements,
  queryAssignedNodes,
  queryAsync,
  adoptStyles,
  html,
  classMap,
  Component,
  EventProxy
};

export type {
  CSSResultArray,
  CSSResultGroup,
  CSSResultOrNative,
  TemplateResult,
  TemplateInstance,
  SVGTemplateResult,
  UncompiledTemplateResult,
  EventPart,
  BooleanAttributePart,
  DirectiveResult,
  ClassMapDirective
};
