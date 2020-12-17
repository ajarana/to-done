import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.scss',
  shadow: true,
})
export class TaskList {
  @Prop() tasks: Array<any> = [];

  @Prop() labels: Array<any> = [];

  render() {
    const tasks = this.tasks.map(task => {
      const {
        name,
        thumbnailUrl,
        description,
        labels: taskLabels,
        dueDate,
        notes
      } = task;

      const labels = taskLabels.map((id: number) => {
        const label = this.labels.find(label => label.id === id);

        return (
          <li>
            <td-label
              label={label}
            ></td-label>
          </li>
        );
      });

      return (
        <li>
          <td-task
            thumbnailUrl={thumbnailUrl}
          >
            {(labels.length > 0) &&
              <ul class="task-labels" slot="task-labels">
                {labels}
              </ul>
            }

            <td-heading
              slot="task-name"
              type="h2"
              headingText={name}
            ></td-heading>

            {(description) &&
              <p slot="task-description">{description}</p>
            }

            {(dueDate) &&
              <td-date
                slot="due-date"
                date={dueDate}
              ></td-date>
            }

            {(notes) &&
              <div slot="task-notes">{notes}</div>
            }
          </td-task>
        </li>
      );
    });

    return (
      <ul class="task-list">
        {tasks}
      </ul>
    );
  }
}
