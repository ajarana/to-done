import { 
  Component, 
  h, 
  Prop,
  State,
  Listen,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'task-labels',
  styleUrl: 'task-labels.scss',
  shadow: true,
})
export class TaskLabels {
  @Prop() labels: Array<any>;

  @State() selectedLabelIds: Array<any> = [];

  @State() showModal: Boolean;

  @Event({
    eventName: 'taskLabelsSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskLabelsSelected: EventEmitter;

  @Listen('modalClose')
  modalCloseHandler() {
    this.toggleModal();
  }

  @Listen('labelSelection')
  labelSelectionHandler(e: any) {
    this.selectLabels(e.detail);

    this.taskLabelsSelected.emit(e.detail);
  }

  selectLabels(labelIds: Array<any>) {
    this.selectedLabelIds = labelIds;
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
    const selectedLabels = this.selectedLabelIds.map(id => {
      const label = this.labels.find(label => label.id === id);

      return (
        <li>
          {label.name}
        </li>
      );
    });
    
    return (
      <div
        class="task-labels"
      >
        <label class="section-heading">LABELS</label>

        <ul>
          {selectedLabels}
        </ul>

        <button
          onClick={() => this.toggleModal()}
        >Select labels</button>

        {(this.showModal) &&
          <task-label-modal
            labels={this.labels}
            currentlySelectedLabelIds={this.selectedLabelIds}
          ></task-label-modal>
        }
      </div>
    );
  }
}
