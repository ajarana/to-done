import { 
  Component, 
  h,
  State,
  Listen,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'date-selector',
  styleUrl: 'date-selector.scss',
  shadow: true,
})
export class DateSelector {
  currentDate = new Date();

  @State() showModal: Boolean;

  @State() month: number = this.currentDate.getMonth() + 1;

  @State() day: number = this.currentDate.getDate();

  @State() year: number = this.currentDate.getFullYear();

  @Event({
    eventName: 'dueDateSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) dueDateSelected: EventEmitter;

  @Listen('modalClose')
  modalCloseHandler() {
    this.toggleModal();
  }

  @Listen('dateSelection')
  dateSelectionHandler(e: any) {
    const {
      year,
      month,
      day
    } = e.detail;

    this.year = year;
    this.month = month;
    this.day = day;

    const date = new Date(year, month, day).getTime().toString();

    this.dueDateSelected.emit(date);
  }

  componentDidLoad() {
    const date = new Date(this.year, this.month, this.day).getTime().toString();

    this.dueDateSelected.emit(date);
  }

  toggleModal() {
    this.showModal = !this.showModal;

    // TODO: Figure out a better way to prevent background scrolling while modal is open.
    const body = document.getElementsByTagName("body")[0];

    if (this.showModal) {
      body.classList.add("modal-open");
    }
    else {
      body.classList.remove("modal-open");
    }
  }

  render() {
    return (
      <section>
        <label class="section-heading">DUE DATE</label>

        <div
          onClick={() => this.toggleModal()}
        >
          <tdn-ui-icon name="calendar"></tdn-ui-icon>

          {this.month}/{this.day}/{this.year}
        </div>

        {(this.showModal) &&
          <task-date-modal
            currentDate={this.currentDate}
            currentlySelectedYear={this.year}
            currentlySelectedMonth={this.month}
            currentlySelectedDay={this.day}
          ></task-date-modal>
        }
      </section>
    );
  }
}
