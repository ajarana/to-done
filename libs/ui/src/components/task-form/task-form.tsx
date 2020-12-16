import { 
  Component, 
  h, 
  State,
  Prop,
  Event, 
  EventEmitter,
  Listen
} 
from '@stencil/core';

import { classNames } from '../../utils';

@Component({
  tag: 'task-form',
  styleUrl: 'task-form.scss',
  shadow: true,
})
export class TaskForm {
  fileInput: HTMLInputElement;
  taskName: string = "";
  description: string = "";
  notes: string = "";
  dueDate: string;
  labelsSelected: Array<any> = [];

  @State() file: string;

  @State() previewSrc: string;

  @State() taskNameError: boolean = false;

  @Prop() labels: Array<any>;

  @Event({
    eventName: 'taskAdded',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskAdded: EventEmitter;

  @Listen('dueDateSelected')
  dueDateSelectionHandler(e) {
    this.dueDate = e.detail;
  }

  @Listen('taskLabelsSelected')
  taskLabelsSelectedHandler(e) {
    this.labelsSelected = e.detail;
  }

  handleTaskName(e) {
    this.taskName = e.target.value;
  }

  handleDescription(e) {
    this.description = e.target.value;
  }

  handleNotes(e) {
    this.notes = e.target.value;
  }

  onFileSelection(e) {
    const file = e.target.files[0];

    this.file = file;

    this.createPreview(file);
  }

  clearFile() {
    this.file = undefined;

    this.previewSrc = undefined;

    this.fileInput.value = "";
  }

  onDragLeave(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  onDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    this.file = file;

    this.createPreview(file);
  }

  createPreview(file) {      
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();

    reader.onload = e => { 
      this.previewSrc = e.target.result as string; 
    };

    reader.readAsDataURL(file);
  }

  validateTaskName() {
    this.taskNameError = !this.taskName;
  }

  render() {
    const taskNameWrapperClasses = classNames([
      "task-form-section",
      {
        "has-error": this.taskNameError
      }
    ]);

    return (
      <form class="task-form">
        <section
          class={taskNameWrapperClasses}
        >
          <label class="section-heading" htmlFor="taskName">TASK NAME*</label>
          <input 
            id="taskName"
            value={this.taskName}
            onInput={e => this.handleTaskName(e)}
            onBlur={() => this.validateTaskName()}
            placeholder="Turn my work in on time"
          />
        </section>

        <section>
          <label class="section-heading">THUMBNAIL</label>

          <input 
            type="file"
            accept="image/*"
            onChange={e => this.onFileSelection(e)}
            ref={el => this.fileInput = el as HTMLInputElement}
          />

          <div
            class="drop-zone"
            onDragLeave={e => this.onDragLeave(e)}
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e)}
          ></div>

          {/* <img 
            width="100"
            height="100"
            src={this.previewSrc}
          /> */}

          <button
            type="button"
            onClick={() => this.clearFile()}
          >Clear</button>
        </section>

        <section>
          <label class="section-heading" htmlFor="description">DESCRIPTION</label>
          <textarea 
            id="description"
            value={this.description}
            onInput={e => this.handleDescription(e)}
          />
        </section>

        <task-labels
          labels={this.labels}
        ></task-labels>

        <date-selector></date-selector>

        <section>
          <label class="section-heading" htmlFor="notes">NOTES</label>
          <textarea 
            id="notes"
            value={this.notes}
            onInput={e => this.handleNotes(e)}
          />
        </section>

        <button
          type="button"
          onClick={e => {
            e.preventDefault();

            this.taskAdded.emit({
              name: this.taskName,
              thumbnail: this.file,
              labels: this.labelsSelected,
              description: this.description,
              dueDate: this.dueDate,
              notes: this.notes
            });
          }}
        >Add task</button>
      </form>
    );
  }
}
