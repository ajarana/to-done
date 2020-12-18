import { 
  Component, 
  h, 
  Prop,
  Event,
  EventEmitter,
  State
} from '@stencil/core';

@Component({
  tag: 'td-task-details',
  styleUrl: 'td-task-details.scss',
  shadow: true,
})
export class TdTaskDetails {
  @Prop() task: any = {};

  @Prop() labels: Array<any> = [];

  @Prop() complete: boolean;

  @State() thumbnailError: boolean = false;

  @Event({
    eventName: 'taskEdit',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskEdit: EventEmitter;

  @Event({
    eventName: 'taskMarkedComplete',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskMarkedComplete: EventEmitter;
  
  render() {
    const {
      id,
      thumbnailUrl,
      description,
      labels: selectedLabels,
      dueDate,
      notes
    } = this.task || {};

    const ThumbnailContent = (thumbnailUrl && !this.thumbnailError) 
    ?
    <img 
      height="90"
      src={thumbnailUrl}
      onError={() => {
        this.thumbnailError = true;
      }}
    />
    :
    <div class="placeholder-thumbnail">
      <tdn-ui-icon name="image"></tdn-ui-icon>
    </div>;

    return (
      <main>
        <section class="task-details">
          <section class="thumbnail">
            <td-heading
              type="h3"
              headingText="THUMBNAIL"
            ></td-heading>

            {ThumbnailContent}
          </section>
          
          <section>
            <td-heading
              type="h3"
              headingText="DESCRIPTION"
            ></td-heading>

            {description
              ?
              <td-text
                text={description}
              ></td-text>
              :
              <td-button
                buttonText="Add a Description"
                handler={() => {
                  this.taskEdit.emit({
                    id
                  });
                }}
              ></td-button>
            }
          </section>

          <section>
            <td-heading
              type="h3"
              headingText="LABELS"
            ></td-heading>

            {(selectedLabels && selectedLabels.length > 0)
              ?
              <td-labels
                slot="task-labels"
                labels={this.labels}
                selectedLabels={selectedLabels}
              ></td-labels>
              :
              <td-button
                buttonText="Add Labels"
                handler={() => {
                  this.taskEdit.emit({
                    id
                  });
                }}
              ></td-button>
            }
          </section>

          <section>
            <td-heading
              type="h3"
              headingText="DUE DATE"
            ></td-heading>

            {dueDate
              ?
              <td-date
                date={dueDate}
              ></td-date>
              :
              <td-button
                buttonText="Add Due Date"
                handler={() => {
                  this.taskEdit.emit({
                    id
                  });
                }}
              ></td-button>
            }
          </section>

          <section>
            <td-heading
              type="h3"
              headingText="NOTES"
            ></td-heading>

            {notes
              ?
              <td-text
                text={notes}
              ></td-text>
              :
              <td-button
                buttonText="Add Notes"
                handler={() => {
                  this.taskEdit.emit({
                    id
                  });
                }}
              ></td-button>
            }
          </section>
        </section>

        <td-footer>
          <td-button 
            slot="right-1"
            buttonText="Edit"
            handler={() => {
              this.taskEdit.emit({
                id
              });
            }}
          ></td-button>

          <td-button 
            slot="right-2"
            buttonText={this.complete ? "Mark Incomplete" : "Mark as Complete"}
            type={(this.complete ? "danger-button" : "success-button")}
            handler={() => {
              this.taskMarkedComplete.emit({
                id,
                data: {
                  complete: !this.complete
                }
              });
            }}
          ></td-button>
        </td-footer>
      </main>
    );
  }
}
