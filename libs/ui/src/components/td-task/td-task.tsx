import { 
  Component, 
  h, 
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'td-task',
  styleUrl: 'td-task.scss',
  shadow: true,
})
export class TdTask {
  @Prop() thumbnailUrl: string;

  @State() thumbnailError: boolean = false;

  render() {
    const HeaderContent = (this.thumbnailUrl && !this.thumbnailError) 
    ?
    <img 
      height="90"
      src={this.thumbnailUrl}
      onError={() => {
        this.thumbnailError = true;
      }}
      alt="Thumbnail for a task."
    />
    :
    <div class="placeholder-thumbnail">
      <tdn-ui-icon name="image" size="xl" lazy={true}></tdn-ui-icon>
    </div>;

    return (
      <section>
        <header>
          { HeaderContent }
        </header>

        <slot name="task-labels"></slot>

        <slot name="task-name"></slot>

        <slot name="task-description"></slot>

        <footer>
          <slot name="due-date"></slot>

          <slot name="marked-complete"></slot>
        </footer>
      </section>
    );
  }
}
