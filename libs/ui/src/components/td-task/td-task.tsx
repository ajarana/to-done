import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-task',
  styleUrl: 'td-task.scss',
  shadow: true,
})
export class TdTask {
  @Prop() thumbnailUrl: string;

  render() {
    const HeaderContent = (this.thumbnailUrl) 
    ?
    <img 
      height="90"
      src={this.thumbnailUrl}
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

        <slot name="due-date"></slot>

        <slot name="task-notes"></slot>
      </section>
    );
  }
}
