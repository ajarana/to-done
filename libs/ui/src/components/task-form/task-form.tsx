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

  @State() file: File;

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

  createPreview(file: File) {      
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

  getFileSize(size: number) {
    if(size < 1024) {
      return size + 'bytes';
    } 
    else if(size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'kB';
    } 
    else if(size >= 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }
  }

  render() {
    const taskNameWrapperClasses = classNames([
      "task-form-section",
      {
        "has-error": this.taskNameError
      }
    ]);

    const fancyUploadClasses = classNames([
      "fancy-upload",
      {
        "uploaded": this.file
      }
    ]);

    const FancyUploadContents = (this.file) ? 
    <div>
      <p>Success! <span>{this.file.name}</span> selected with size <span class="file-size">{this.getFileSize(this.file.size)}</span></p>

      <button
        type="button"
        onClick={() => this.clearFile()}
      >Clear Selection</button>
    </div>
    :
    <div>
      <tdn-ui-icon name="upload" />

      <label class="section-heading file-upload-label" htmlFor="fileUpload">Click to upload</label>

      <input 
        id="fileUpload"
        type="file"
        accept="image/*"
        onChange={e => this.onFileSelection(e)}
        ref={el => this.fileInput = el as HTMLInputElement}
      />
    </div>;

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
            placeholder="e.g. Turn work in on time"
          />

          {(this.taskNameError) &&
            <p>Please enter a valid name.</p>
          }
        </section>

        <section
          class="task-form-section"
        >
          <h3 class="section-heading">THUMBNAIL</h3>

          <div 
            class={fancyUploadClasses}
          >
            {/* <img 
              class="preview-image"
              src={this.previewSrc}
            /> */}

            {FancyUploadContents}
          </div>

          <div
            class="drop-zone"
            onDragLeave={e => this.onDragLeave(e)}
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e)}
          ></div>
        </section>

        <section
          class="task-form-section"
        >
          <label class="section-heading" htmlFor="description">DESCRIPTION</label>
          <textarea 
            id="description"
            value={this.description}
            onInput={e => this.handleDescription(e)}
            spellcheck={false}
            maxLength={100}
            placeholder="e.g. Todo app completion"
          />
        </section>

        <task-labels
          labels={this.labels}
        ></task-labels>

        <date-selector></date-selector>

        <section
          class="task-form-section"
        >
          <label class="section-heading" htmlFor="notes">NOTES</label>
          <textarea 
            id="notes"
            value={this.notes}
            onInput={e => this.handleNotes(e)}
            spellcheck={false}
            maxLength={100}
            placeholder="e.g. Make sure you're familiar with the tools"
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
