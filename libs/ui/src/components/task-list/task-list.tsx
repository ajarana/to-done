import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.scss',
  shadow: true,
})
export class TaskList {
  @Prop() tasks: Array<any> = [];

  render() {
    const tasks = this.tasks.map(task => (
      <li>
        <div>{task.name}</div>

        <img 
          width="100"
          height="110"
          src={task.thumbnailUrl}
        />

        <div>{task.description}</div>

        <div>{task.labels}</div>

        <div>{task.dueDate}</div>

        <div>{task.notes}</div>
      </li>
    ));

    return (
      <div class="task-list">
        <ul>
          {tasks}
        </ul>
      </div>
    );
  }
}
