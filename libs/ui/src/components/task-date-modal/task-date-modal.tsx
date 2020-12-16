import { 
  Component, 
  h, 
  Prop,
  State,
  Event,
  EventEmitter
} from '@stencil/core';

// const months = [
//   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ];

@Component({
  tag: 'task-date-modal',
  styleUrl: 'task-date-modal.scss',
  shadow: true,
})
export class TaskDateModal {
  @State() showModal: Boolean;

  @Prop() currentDate: any;

  @Prop() currentlySelectedYear: number;

  @Prop() currentlySelectedMonth: number;

  @Prop() currentlySelectedDay: number;

  @State() month: number;

  @State() day: number;

  @State() year: number;

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
        year: this.year,
        month: this.month,
        day: this.day
      });
  
      this.modalClose.emit();
    }
  }

  componentDidLoad() {
    this.year = this.currentlySelectedYear;

    this.month = this.currentlySelectedMonth;

    this.day = this.currentlySelectedDay;
  }

  isNumber(val: string) {
    return val.match(/^\d+$/g);
  }

  monthHandler(e: any) {
    const target = e.target as HTMLInputElement;

    const {
      value
    } = target;

    const month = parseInt(value, 10);

    const isNumber = this.isNumber(value);

    if (this.monthError && isNumber) {
      this.monthError = false;
    }

    this.month = isNumber ? month : null;

    if (this.fullDateError && this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  validateMonth() {
    this.monthError = !this.month || this.month > 12 || this.month < 1;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  dayHandler(e: any) {
    const target = e.target as HTMLInputElement;

    const {
      value
    } = target;

    const day = parseInt(value, 10);

    const isNumber = this.isNumber(value);

    if (this.dayError && isNumber) {
      this.dayError = false;
    }

    this.day = isNumber ? day : null;

    if (this.fullDateError && this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  validateDay() {
    this.dayError = !this.day || this.day > 31 || this.day < 1;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  yearHandler(e: any) {
    const target = e.target as HTMLInputElement;

    const {
      value
    } = target;

    const year = parseInt(value, 10);

    const isNumber = this.isNumber(value);

    if (this.yearError && isNumber) {
      this.yearError = false;
    }

    this.year = isNumber ? year : null;

    if (this.fullDateError && this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  validateYear() {
    this.yearError = !this.year || this.year.toString().length < 4;

    if (this.month && this.day && this.year) {
      this.validateFullDate();
    }
  }

  validateFullDate() {
    const date = new Date(this.year, this.month - 1, this.day);

    const dateMatchesCurrentDate = this.currentDate.getFullYear() === this.year && this.currentDate.getMonth() === this.month - 1 && this.currentDate.getDate() === this.day;

    const invalidDate = date.getFullYear() !== this.year || date.getMonth() !== (this.month - 1) || date.getDate() !== this.day;

    const presentOrFutureDate = dateMatchesCurrentDate || date.getTime() > this.currentDate.getTime();

    this.fullDateError = invalidDate || !presentOrFutureDate;

    return !this.fullDateError;
  }

  render() {
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
          <section>
            <div>
              <label htmlFor="monthInput">Month</label>

              <input 
                id="monthInput"
                onInput={e => this.monthHandler(e as InputEvent)}
                placeholder="Month"
                onBlur={() => this.validateMonth()}
                maxLength={2}
                value={this.month}
              />

              {(this.monthError) &&
                <p>Please enter a valid month. e.g. 1 for January.</p>
              }
            </div>

            <div>
              <label htmlFor="dayInput">Day</label>

              <input 
                id="dayInput"
                onInput={e => this.dayHandler(e as InputEvent)}
                placeholder="Day"
                onBlur={() => this.validateDay()}
                maxLength={2}
                value={this.day}
              />

              {(this.dayError) &&
                <p>Please enter a valid day of the month.</p>
              }
            </div>

            <div>
              <label htmlFor="yearInput">Year</label>

              <input 
                id="yearInput"
                onInput={e => this.yearHandler(e as InputEvent)}
                placeholder="Year"
                onBlur={() => this.validateYear()}
                maxLength={4}
                value={this.year}
              />

              {(this.yearError) &&
                <p>Please enter a valid year.</p>
              }
            </div>

            {(this.fullDateError) &&
                <p>Date entered is not a valid due date. The due date should either be today or another day in the future.</p>
              }
          </section>

          <button
            type="button"
            onClick={e => this.handleClick(e)}
          >Select date</button>
        </form>
      </div>
    );
  }
}
