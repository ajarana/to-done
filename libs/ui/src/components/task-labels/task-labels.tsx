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
  tag: 'task-labels',
  styleUrl: 'task-labels.scss',
  shadow: true,
})
export class TaskLabels {
  @Prop() labels: Array<any>;

  @Prop() selectedLabelIds: Array<any> = [];

  @State() showModal: Boolean;

  @Event({
    eventName: 'taskLabelsSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskLabelsSelected: EventEmitter;

  selectLabels(labelId: number) {
    if (this.selectedLabelIds.includes(labelId)) {
      this.selectedLabelIds = this.selectedLabelIds.filter(id => labelId !== id);
    }
    else {
      this.selectedLabelIds = this.selectedLabelIds.concat([labelId]);
    }

    this.taskLabelsSelected.emit(this.selectedLabelIds);
  }

  render() {
    const selectedLabels = this.labels.map(label => {
      const {
        id,
        color,
        name
      } = label;

      const selected = this.selectedLabelIds.includes(id);

      const labelClasses = classNames([
        "label",
        `color-${id}`,
        {
          "selected": selected
        }
      ]);

      return (
        <button
          type="button"
          class={labelClasses}
          onClick={() => this.selectLabels(id)}
          // Conditionally adds prop to object
          style={
            {
              ...(selected && {background: color}),
              border: `1px solid ${color}`
            }
          }
        >
          <p>{name}</p>
          
          <tdn-ui-icon name={(selected) ? "x" : "add"} lazy={true}></tdn-ui-icon>
        </button>
      );
    });

    return (
      <div
        class="task-labels"
      >
        <label class="section-heading">LABELS</label>

        <div class="labels">
          {selectedLabels}
        </div>
      </div>
    );
  }
}
