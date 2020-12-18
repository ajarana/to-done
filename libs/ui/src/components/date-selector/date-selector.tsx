import { 
  Component, 
  h,
  State,
  Listen,
  Prop
} from '@stencil/core';

@Component({
  tag: 'date-selector',
  styleUrl: 'date-selector.scss',
  shadow: true,
})
export class DateSelector {
  @Prop() date: string;

  @State() showModal: Boolean;

  @Listen('modalClose')
  modalCloseHandler() {
    this.toggleModal();
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
    let year, month, day;

    if (this.date) {
      const date = new Date(parseInt(this.date, 10));

      year = date.getFullYear();

      month = date.getMonth();

      day = date.getDate();
    }

    return (
      <section class="task-form-section">
        <label class="section-heading">DUE DATE</label>

        <button
          type="button"
          onClick={() => this.toggleModal()}
        >
          <tdn-ui-icon name="calendar" size="m" lazy={true}></tdn-ui-icon>

          {(this.date) && 
            <div>{month + 1}/{day}/{year}</div>
          }
          {(!this.date) &&
            <td-text
              text="Select a Date"
            ></td-text>
          }
        </button>

        {(this.showModal) &&
          <task-date-modal
            currentlySelectedDate={this.date}
          ></task-date-modal>
        }
      </section>
    );
  }
}
