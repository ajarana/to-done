import { 
  Component, 
  h, 
  Prop,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.scss',
  shadow: true,
})
export class TaskList {
  @Prop() tasks: Array<any> = [];

  @Prop() labels: Array<any> = [];

  @Event({
    eventName: 'taskSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskSelected: EventEmitter;

  render() {
    const tasks = this.tasks.map(task => {
      const {
        id,
        name,
        thumbnailUrl,
        description,
        labels: selectedLabels,
        dueDate
      } = task;

      return (
        <li
          onClick={() => this.taskSelected.emit(id)}
        >
          <td-task
            thumbnailUrl={thumbnailUrl}
          >
            {(selectedLabels.length > 0) &&
              <td-labels
                slot="task-labels"
                labels={this.labels}
                selectedLabels={selectedLabels}
              ></td-labels>
            }

            <td-heading
              slot="task-name"
              type="h2"
              headingText={name}
            ></td-heading>

            {(description) &&
              <td-text
                slot="task-description"
                text={description}
                type="secondary"
              ></td-text>
            }

            {(dueDate) &&
              <td-date
                slot="due-date"
                date={dueDate}
              ></td-date>
            }
          </td-task>
        </li>
      );
    });

    return (
      <div class="task-list-container">
        {(tasks && tasks.length > 0)
            ?
            <ul class="task-list">
              {tasks}
            </ul>
            :
            <div>
              <td-text
                text="Nothing here, yet! Add a task to get started."
              ></td-text>
            </div>
          }
      </div>
    );
  }
}
