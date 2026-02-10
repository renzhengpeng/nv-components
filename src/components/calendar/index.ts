/*
 * @Descripttion: calendar组件
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { unsafeCSS, css, customElement, property, Component, state } from '../../based-on/index.ts';
import { PropertyValues } from 'lit';
import '../select/index';
import cssText from './style.scss?inline';
import template from './template.ts';

/**
 * calendar组件
 *
 * @event nv-change - 选中日期改变时触发，detail为选中的日期字符串或日期范围数组
 */
@customElement('nv-calendar')
export class NvCalendar extends Component {
  /**
   * 绑定值，选中日期的值
   * 单选模式下为字符串，范围选择模式下为数组 [startDate, endDate]
   */
  @property({ type: String })
  value: string | string[] = '';

  /**
   * 选择模式：single-单选, range-范围选择
   */
  @property({ type: String })
  mode: 'single' | 'range' = 'single';

  /**
   * 一周的第一天，0-周日，1-周一，默认周日
   */
  @property({ type: Number })
  firstDayOfWeek: 0 | 1 = 0;

  /**
   * 最小可选日期
   */
  @property({ type: String })
  minDate: string = '';

  /**
   * 最大可选日期
   */
  @property({ type: String })
  maxDate: string = '';

  /**
   * 是否显示"今天"按钮
   */
  @property({ type: Boolean })
  showToday: boolean = true;

  /**
   * 当前显示的月份/年份
   */
  @state()
  protected _currentDate: Date = new Date();

  /**
   * 范围选择的开始日期
   */
  @state()
  private _rangeStart: Date | null = null;

  /**
   * 范围选择的结束日期
   */
  @state()
  private _rangeEnd: Date | null = null;

  /**
   * 鼠标悬停的日期（范围选择时使用）
   */
  @state()
  private _hoverDate: Date | null = null;

  /**
   * 处理日期点击
   */
  protected _handleDateClick(date: Date): void {
    // 如果日期被禁用，不处理
    if (this._isDateDisabled(date)) {
      return;
    }

    // 如果点击的是其他月份的日期，切换到对应月份
    if (!this._isCurrentMonth(date)) {
      this._currentDate = new Date(date);
    }

    if (this.mode === 'range') {
      this._handleRangeSelect(date);
    } else {
      this._handleSingleSelect(date);
    }
  }

  /**
   * 处理单选模式的日期选择
   */
  private _handleSingleSelect(date: Date): void {
    const dateStr = this._formatDate(date);
    this.value = dateStr;
    this.dispatchEvent(new CustomEvent('nv-change', {
      detail: dateStr,
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 处理范围选择模式的日期选择
   */
  private _handleRangeSelect(date: Date): void {
    if (!this._rangeStart || (this._rangeStart && this._rangeEnd)) {
      // 开始新的范围选择
      this._rangeStart = date;
      this._rangeEnd = null;
      this.value = '';
    } else {
      // 完成范围选择
      if (date < this._rangeStart) {
        this._rangeEnd = this._rangeStart;
        this._rangeStart = date;
      } else {
        this._rangeEnd = date;
      }

      const startStr = this._formatDate(this._rangeStart);
      const endStr = this._formatDate(this._rangeEnd);
      this.value = [startStr, endStr];

      this.dispatchEvent(new CustomEvent('nv-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      }));
    }
  }

  /**
   * 处理鼠标悬停（范围选择时显示预览）
   */
  protected _handleDateHover(date: Date): void {
    if (this.mode === 'range' && this._rangeStart && !this._rangeEnd) {
      this._hoverDate = date;
    }
  }

  /**
   * 处理鼠标离开
   */
  protected _handleDateLeave(): void {
    this._hoverDate = null;
  }

  /**
   * 处理上一个月
   */
  protected _handlePrevMonth(): void {
    const newDate = new Date(this._currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    this._currentDate = newDate;
  }

  /**
   * 处理下一个月
   */
  protected _handleNextMonth(): void {
    const newDate = new Date(this._currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    this._currentDate = newDate;
  }

  /**
   * 处理跳转到今天
   */
  protected _handleGoToday(): void {
    this._currentDate = new Date();
  }

  /**
   * 处理年份选择
   */
  protected _handleYearChange(e: CustomEvent): void {
    const year = parseInt(String(e.detail), 10);
    const newDate = new Date(this._currentDate);
    newDate.setFullYear(year);
    this._currentDate = newDate;
  }

  /**
   * 处理月份选择
   */
  protected _handleMonthChange(e: CustomEvent): void {
    const month = parseInt(String(e.detail), 10);
    const newDate = new Date(this._currentDate);
    newDate.setMonth(month);
    this._currentDate = newDate;
  }

  /**
   * 格式化日期为 YYYY-MM-DD
   */
  private _formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${ year }-${ month }-${ day }`;
  }

  /**
   * 获取当前月份的所有日期
   */
  protected _getDaysInMonth(): Date[] {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const days: Date[] = [];

    // 获取第一天是星期几（0=周日，1=周一...）
    let firstDayWeek = firstDay.getDay();

    // 根据 firstDayOfWeek 调整起始位置
    if (this.firstDayOfWeek === 1) {
      // 周一开始，需要调整
      firstDayWeek = firstDayWeek === 0 ? 6 : firstDayWeek - 1;
    }

    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDayWeek);

    // 生成42天（6周）
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }

    return days;
  }

  /**
   * 获取周标题
   */
  protected _getWeekDays(): string[] {
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    if (this.firstDayOfWeek === 1) {
      // 周一开始
      return [...weekDays.slice(1), weekDays[0]];
    }
    return weekDays;
  }

  /**
   * 检查日期是否被选中
   */
  protected _isDateSelected(date: Date): boolean {
    if (!this.value) {
      return false;
    }

    if (this.mode === 'single') {
      return this._formatDate(date) === this.value;
    }

    // 范围选择模式
    if (Array.isArray(this.value) && this.value.length === 2) {
      const dateStr = this._formatDate(date);
      return dateStr === this.value[0] || dateStr === this.value[1];
    }

    return false;
  }

  /**
   * 检查日期是否在范围内（包括hover预览）
   */
  protected _isInRange(date: Date): boolean {
    if (this.mode !== 'range') {
      return false;
    }

    let start = this._rangeStart;
    let end = this._rangeEnd || this._hoverDate;

    if (!start || !end) {
      return false;
    }

    // 确保start小于end
    if (start > end) {
      [start, end] = [end, start];
    }

    const dateTime = date.getTime();
    const startTime = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
    const endTime = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();

    return dateTime > startTime && dateTime < endTime;
  }

  /**
   * 检查日期是否是范围的起点或终点
   */
  protected _isRangeEdge(date: Date): boolean {
    if (this.mode !== 'range' || !this._rangeStart) {
      return false;
    }

    const dateStr = this._formatDate(date);
    const startStr = this._formatDate(this._rangeStart);

    if (dateStr === startStr) {
      return true;
    }

    if (this._rangeEnd) {
      const endStr = this._formatDate(this._rangeEnd);
      return dateStr === endStr;
    }

    return false;
  }

  /**
   * 检查日期是否被禁用
   */
  protected _isDateDisabled(date: Date): boolean {
    const dateStr = this._formatDate(date);

    // 检查最小日期
    if (this.minDate && dateStr < this.minDate) {
      return true;
    }

    // 检查最大日期
    if (this.maxDate && dateStr > this.maxDate) {
      return true;
    }

    return false;
  }

  /**
   * 检查日期是否是今天
   */
  protected _isToday(date: Date): boolean {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  }

  /**
   * 检查日期是否是当前月份
   */
  protected _isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this._currentDate.getMonth() &&
           date.getFullYear() === this._currentDate.getFullYear();
  }

  /**
   * 属性变化时的处理
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // 当value变化时，更新范围选择的状态
    if (changedProperties.has('value')) {
      this._updateRangeState();
    }
  }

  /**
   * 更新范围选择状态
   */
  private _updateRangeState(): void {
    if (this.mode === 'range' && Array.isArray(this.value) && this.value.length === 2) {
      this._rangeStart = this._parseDate(this.value[0]);
      this._rangeEnd = this._parseDate(this.value[1]);
    } else if (this.mode === 'single' && typeof this.value === 'string' && this.value) {
      // 单选模式下，更新当前显示的月份为选中日期所在月份
      const selectedDate = this._parseDate(this.value);
      if (selectedDate) {
        this._currentDate = selectedDate;
      }
    }
  }

  /**
   * 解析日期字符串
   */
  private _parseDate(dateStr: string): Date | null {
    if (!dateStr) {
      return null;
    }
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  }

  render() {
    return template.call(this);
  }

  static styles = css`${ unsafeCSS(cssText) }`;
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-calendar': NvCalendar
  }
}
