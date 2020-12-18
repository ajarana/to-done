import { 
  Component, 
  h, 
  State,
  Prop,
  Event, 
  EventEmitter,
  Listen,
  Watch,
  Host
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

  @State() taskName: string = "";

  @State() description: string = "";

  @State() notes: string = "";

  @State() labelsSelected: Array<any> = [];

  @State() file: File;

  @State() fileSelectionErrorMessage: string = "";

  @State() previewSrc: string;

  @State() taskNameError: boolean = false;

  @State() dueDate: string = "";

  @Prop() edit: boolean;

  @Prop() task: any;

  @Prop() labels: Array<any>;

  @Watch('task')
  watchHandler(task: any) {
    const {
      description,
      // dueDate,
      labels,
      name,
      notes
    } = task;

    this.taskName = name;
    this.description = description;
    this.labelsSelected = labels;

    this.notes = notes;
  }

  @Event({
    eventName: 'taskChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskChanged: EventEmitter;

  @Event({
    eventName: 'taskDeleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskDeleted: EventEmitter;

  @Event({
    eventName: 'taskCancelled',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskCancelled: EventEmitter;

  @Listen('dateSelection')
  dueDateSelectionHandler(e) {
    const {
      year,
      month,
      day
    } = e.detail;

    this.dueDate = new Date(year, month - 1, day).getTime().toString()
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

    this.validateFile(file);
  }

  validateFile(file: File) {
    const {
      size,
      type
    } = file;

    if (!type.startsWith('image/')) {
      this.fileSelectionErrorMessage = "Please select an image file";

      return false;
    }
    else if (size > 1048576) {
      this.fileSelectionErrorMessage = "Please select a file 1MB or smaller";

      return false;
    }

    this.fileSelectionErrorMessage = "";

    this.createPreview(file);

    return true;
  }

  clearFile() {
    this.file = undefined;

    this.previewSrc = undefined;

    this.fileSelectionErrorMessage = "";

    if (this.fileInput) this.fileInput.value = "";
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

    this.validateFile(file);
  }

  // TODO: Figure out a nice way to include the preview in the UI.
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
        "uploaded": this.file,
        "error": this.fileSelectionErrorMessage
      }
    ]);

    let FancyUploadContents: any;

    if (this.fileSelectionErrorMessage) {
      FancyUploadContents = (
        <div>
          <p><span>{this.file.name}</span> of size <span>{this.getFileSize(this.file.size)}</span> cannot be selected. {this.fileSelectionErrorMessage}.</p>

          <td-button
            buttonText="Clear Selection"
            handler={() => this.clearFile()}
          ></td-button>
        </div>
      );
    }
    else if (this.file) {
      FancyUploadContents = (
        <div>
          <p>Success! <span>{this.file.name}</span> selected of size <span>{this.getFileSize(this.file.size)}</span></p>

          <td-button
            buttonText="Clear Selection"
            handler={() => this.clearFile()}
          ></td-button>
        </div>
      );
    }
    else {
      FancyUploadContents = (
        <div>
          <tdn-ui-icon name="upload" />

          <h3 class="section-heading">
            <p>Click to upload</p>

            <p>Drag and drop your files or click to upload</p>
          </h3>

          <label class="section-heading file-upload-label hidden" htmlFor="fileUpload">Click to upload</label>

          <input 
            id="fileUpload"
            type="file"
            accept="image/*"
            onChange={e => this.onFileSelection(e)}
            onDragLeave={e => this.onDragLeave(e)}
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.onDrop(e)}
            ref={el => this.fileInput = el as HTMLInputElement}
          />
        </div>
      );
    }

    const taskId = this.task && this.task.id;

    return (
      <Host>
        <td-header
          header-copy="Edit Task"
        >
          <td-text
            slot="r-left-1"
            text="To Done"
          ></td-text>

          <td-text
            slot="r-left-2"
            text={this.edit ? "Edit Task" : "Add Task"}
          ></td-text>

          <td-text
            slot="r-middle-1"
            text={this.edit ? "Edit Task" : "Add Task"}
          ></td-text>

          <td-button 
            slot="r-right-1"
            buttonText="Cancel"
            handler={() => this.taskCancelled.emit()}
          ></td-button>

          <td-button 
            slot="r-right-2"
            buttonText="Delete"
            type="danger-button"
            handler={() => this.taskDeleted.emit({
              ...(taskId && {id: taskId}) 
            })}
          ></td-button>

          <td-button 
            slot="r-right-3"
            buttonText="Save"
            type="success-button"
            handler={e => {
              e.preventDefault();

              this.taskChanged.emit({
                ...(taskId && {id: taskId}),
                name: this.taskName,
                thumbnail: this.file,
                labels: this.labelsSelected,
                description: this.description,
                dueDate: this.dueDate,
                notes: this.notes
              });
            }}
          ></td-button>
        </td-header>

        <main>
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
                maxlength={50}
              />

              {(this.taskNameError) &&
                <p>Please enter a valid name</p>
              }
            </section>

            <section
              class="task-form-section"
            >
              <h3 class="section-heading">THUMBNAIL</h3>

              <div 
                class={fancyUploadClasses}
              >
                {FancyUploadContents}
              </div>
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
              selectedLabelIds={this.labelsSelected}
            ></task-labels>

            <date-selector
              date={this.dueDate}
            ></date-selector>

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
          </form>

          <td-footer>
            <td-button 
              slot="r-left-1"
              buttonText="Cancel"
              handler={() => this.taskCancelled.emit()}
            ></td-button>

            <td-button 
              slot="r-right-1"
              buttonText="Delete"
              type="danger-button"
              handler={() => this.taskDeleted.emit({
                ...(taskId && {id: taskId}) 
              })}
            ></td-button>

            <td-button 
              slot="r-right-2"
              buttonText="Save"
              type="success-button"
              handler={e => {
                e.preventDefault();

                this.taskChanged.emit({
                  ...(taskId && {id: taskId}),
                  name: this.taskName,
                  thumbnail: this.file,
                  labels: this.labelsSelected,
                  description: this.description,
                  dueDate: this.dueDate,
                  notes: this.notes
                });
              }}
            ></td-button>
          </td-footer>
        </main>
      </Host>
    );
  }
}
