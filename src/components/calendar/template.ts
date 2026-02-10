/*
 * @Descripttion: calendar组件模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import { repeat as litRepeat } from 'lit/directives/repeat.js';
import classNamesConfig from './classNames';
import { NvCalendar } from './index.ts';
import '../icon/index';
import '../select/index';

const template = function(this: NvCalendar) {
  const days = this._getDaysInMonth();
  const weekDays = this._getWeekDays();
  const year = this._currentDate.getFullYear();
  const month = this._currentDate.getMonth();

  // 生成年份选项（当前年份前后各50年）
  const years = Array.from({ length: 101 }, (_, i) => year - 50 + i);
  const months = Array.from({ length: 12 }, (_, i) => i);

  return html`
    <div part="base" class=${ classNamesConfig.block }>
      <div part="header" class=${ classNamesConfig.elements.header }>
        <button 
          part="prev"
          class=${ classNamesConfig.elements.btn } 
          @click=${ this._handlePrevMonth }
          aria-label="上一月"
        >
          <nv-icon name="back"></nv-icon>
        </button>
        
        <div part="title" class=${ classNamesConfig.elements.title }>
          <nv-select 
            class=${ classNamesConfig.elements.yearSelect }
            size="mini"
            .value=${ String(year) }
            @nv-change=${ this._handleYearChange }
          >
            ${ years.map(y => html`
              <nv-option value=${ String(y) } label=${ `${ y }年` }></nv-option>
            `) }
          </nv-select>
          <nv-select 
            class=${ classNamesConfig.elements.monthSelect }
            size="mini"
            .value=${ String(month) }
            @nv-change=${ this._handleMonthChange }
          >
            ${ months.map(m => html`
              <nv-option value=${ String(m) } label=${ `${ m + 1 }月` }></nv-option>
            `) }
          </nv-select>
        </div>
        
        <button 
          part="next"
          class=${ classNamesConfig.elements.btn } 
          @click=${ this._handleNextMonth }
          aria-label="下一月"
        >
          <nv-icon name="right"></nv-icon>
        </button>
      </div>

      ${ 
        this.showToday
          ? html`
        <div part="today" class=${ classNamesConfig.elements.todayBtn }>
          <button 
            class=${ classNamesConfig.elements.btn }
            @click=${ this._handleGoToday }
          >
            今天
          </button>
        </div>
      `
          : ''
      }

      <div part="body" class=${ classNamesConfig.elements.body }>
        <div part="weekdays" class=${ classNamesConfig.elements.weekdays }>
          ${ litRepeat(weekDays, (day) => day, (day) => html`
            <div part="weekday" class=${ classNamesConfig.elements.weekday }>${ day }</div>
          `) }
        </div>
        <div part="days" class=${ classNamesConfig.elements.days }>
          ${ litRepeat(days, (date) => date.getTime(), (date) => {
            const isSelected = this._isDateSelected(date);
            const isToday = this._isToday(date);
            const isCurrentMonth = this._isCurrentMonth(date);
            const isDisabled = this._isDateDisabled(date);
            const isInRange = this._isInRange(date);
            const isRangeEdge = this._isRangeEdge(date);
            
            return html`
              <div
                part="day"
                class="${ classMap({
                  [classNamesConfig.elements.day]: true,
                  [classNamesConfig.modifiers.selected]: isSelected,
                  [classNamesConfig.modifiers.today]: isToday,
                  [classNamesConfig.modifiers.otherMonth]: !isCurrentMonth,
                  [classNamesConfig.modifiers.disabled]: isDisabled,
                  [classNamesConfig.modifiers.inRange]: isInRange,
                  [classNamesConfig.modifiers.rangeEdge]: isRangeEdge
                }) }"
                @click=${ () => this._handleDateClick(date) }
                @mouseenter=${ () => this._handleDateHover(date) }
                @mouseleave=${ this._handleDateLeave }
              >
                ${ date.getDate() }
              </div>
            `;
          }) }
        </div>
      </div>
    </div>
  `;
};

export default template;
