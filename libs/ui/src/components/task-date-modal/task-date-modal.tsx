import { 
  Component, 
  h, 
  Prop,
  State,
  Event,
  EventEmitter
} from '@stencil/core';

import { classNames } from '../../utils';

@Component({
  tag: 'task-date-modal',
  styleUrl: 'task-date-modal.scss',
  shadow: true,
})
export class TaskDateModal {
  currentDate = new Date();

  @Prop() currentlySelectedDate: string;

  @State() month: string;

  @State() day: string;

  @State() year: string;

  @State() monthError: boolean = false;

  @State() dayError: boolean = false;

  @State() yearError: boolean = false;

  @State() fullDateError: boolean = false;

  @Event({
    eventName: 'modalClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) modalClose: EventEmitter;

  @Event({
    eventName: 'dateSelection',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) dateSelection: EventEmitter;

  handleClick(e: MouseEvent) {
    e.preventDefault();

    const validFullDate = this.validateFullDate();

    if (validFullDate) {
      this.dateSelection.emit({
        year: parseInt(this.year, 10),
        month: parseInt(this.month, 10),
        day: parseInt(this.day, 10)
      });
  
      this.modalClose.emit();
    }
  }

  componentDidLoad() {
    const date = (this.currentlySelectedDate) ? new Date(parseInt(this.currentlySelectedDate, 10)) : this.currentDate;

    this.year = date.getFullYear().toString();

    this.month = (date.getMonth() + 1).toString();

    this.day = date.getDate().toString();
  }

  isNumber(val: string) {
    return val.match(/^\d+$/g);
  }

  validateMonth() {
    const isNumber = this.isNumber(this.month);

    const month = parseInt(this.month, 10);

    this.monthError = !isNumber || month > 12 || month < 1;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  inputHandler(e: any, type) {
    const target = e.target as HTMLInputElement;

    const {
      value
    } = target;

    const isNumber = this.isNumber(value);

    if (this[type + "Error"] && isNumber) {
      this[type + "Error"] = false;
    }
    
    this[type] = value;

    if (this.fullDateError && this.month && this.day && this.year) {
      this.validateFullDate();
    }
    else {
      this.fullDateError = false;
    }
  }

  validateDay() {
    const isNumber = this.isNumber(this.day);

    const day = parseInt(this.day, 10);

    this.dayError = !isNumber || day > 31 || day < 1;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
    else {
      this.fullDateError = false;
    }
  }

  validateYear() {
    const isNumber = this.isNumber(this.year);

    const year = parseInt(this.year, 10);

    this.yearError = !isNumber || year.toString().length < 4;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  validateFullDate() {
    if (!this.isNumber(this.year) || !this.isNumber(this.month) || !this.isNumber(this.day)) {
      return this.fullDateError = true;
    }

    const year = parseInt(this.year, 10);

    const month = parseInt(this.month, 10);

    const day = parseInt(this.day, 10);

    const date = new Date(year, month - 1, day);

    const dateMatchesCurrentDate = this.currentDate.getFullYear() === year && this.currentDate.getMonth() === month - 1 && this.currentDate.getDate() === day;

    const invalidDate = date.getFullYear() !== year || date.getMonth() !== (month - 1) || date.getDate() !== day;

    const presentOrFutureDate = dateMatchesCurrentDate || date.getTime() > this.currentDate.getTime();

    this.fullDateError = invalidDate || !presentOrFutureDate;

    return !this.fullDateError;
  }

  render() {
    const dateInputClasses = classNames([
      "date-inputs",
      {
        "error": this.dayError || this.monthError || this.yearError || this.fullDateError,
        "day-error": this.dayError,
        "month-error": this.monthError,
        "year-error": this.yearError,
        "full-date-error": this.fullDateError
      }
    ]);

    return (
      <div
        class="task-date-modal-wrapper"
        onClick={() => {
          this.modalClose.emit();
        }}
      >
        <form
          class="task-date-modal"
          onClick={e => e.stopPropagation()}
        >
          <td-heading
            type="h2"
            headingText="Select a Date"
          ></td-heading>

          <section class={dateInputClasses}>
            <div class="month">
              <label htmlFor="monthInput">Month</label>

              <input 
                id="monthInput"
                onInput={e => this.inputHandler(e as InputEvent, "month")}
                placeholder="Month"
                onBlur={() => this.validateMonth()}
                maxLength={2}
                value={this.month}
              />
            </div>

            <div class="day">
              <label htmlFor="dayInput">Day</label>

              <input 
                id="dayInput"
                onInput={e => this.inputHandler(e as InputEvent, "day")}
                placeholder="Day"
                onBlur={() => this.validateDay()}
                maxLength={2}
                value={this.day}
              />
            </div>

            <div class="year">
              <label htmlFor="yearInput">Year</label>

              <input 
                id="yearInput"
                onInput={e => this.inputHandler(e as InputEvent, "year")}
                placeholder="Year"
                onBlur={() => this.validateYear()}
                maxLength={4}
                value={this.year}
              />
            </div>
          </section>

          {(this.fullDateError || this.dayError || this.monthError || this.yearError) &&
            <p>Date entered is not a valid due date. The due date should either be today or another day in the future.</p>
          }

          <td-button
            buttonText="Select Date"
            handler={e => this.handleClick(e)}
          ></td-button>
        </form>
      </div>
    );
  }
}
