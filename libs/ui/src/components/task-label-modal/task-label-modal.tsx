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
  tag: 'task-label-modal',
  styleUrl: 'task-label-modal.scss',
  shadow: true,
})
export class TaskLabelModal {
  @Prop() labels: Array<any> = [];

  @Prop() currentlySelectedLabelIds: Array<any> = [];

  @State() selectedLabelIds: Array<any> = this.currentlySelectedLabelIds;

  @Event({
    eventName: 'modalClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) modalClose: EventEmitter;

  @Event({
    eventName: 'labelSelection',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) labelSelection: EventEmitter;

  handleClick(e: MouseEvent) {
    e.preventDefault();

    this.labelSelection.emit(this.selectedLabelIds);

    this.modalClose.emit();
  }

  render() {
    const labels = this.labels.map(label => {
      const {
        id: labelId,
        name
      } = label;

      const classes = classNames([
        "label-option",
        {
          "selected": this.selectedLabelIds.includes(label.id)
        }
      ]);

      return (
        <li
          class={classes}
          onClick={() => {
            if (this.selectedLabelIds.includes(label.id)) {
              this.selectedLabelIds = this.selectedLabelIds.filter(id => labelId !== id);
            }
            else {
              this.selectedLabelIds = this.selectedLabelIds.concat([labelId]);
            }
          }}
        >
          {name}
        </li>
      )
    });

    return (
      <div
        class="task-label-modal-wrapper"
        onClick={() => {
          this.modalClose.emit();
        }}
      >
        <form
          //Prevents modalClose from being called when children are selected
          onClick={e => e.stopPropagation()}
          class="task-label-modal"
        >
          <button
            type="button"
            onClick={e => this.handleClick(e)}
          >Select labels</button>

          <ul>
            {labels}
          </ul>
        </form>
      </div>
    );
  }
}
