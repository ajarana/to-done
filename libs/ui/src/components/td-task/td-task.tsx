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
    />
    :
    <div class="placeholder-thumbnail">
      <tdn-ui-icon name="image"></tdn-ui-icon>
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
        </footer>
      </section>
    );
  }
}
