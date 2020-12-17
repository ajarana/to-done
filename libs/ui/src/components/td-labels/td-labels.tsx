import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-labels',
  styleUrl: 'td-labels.scss',
  shadow: true,
})
export class TdLabels {
  @Prop() labels: Array<any> = [];

  @Prop() selectedLabels: Array<any> = [];

  render() {
      const labels = this.selectedLabels.map((id: number) => {
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
        <ul class="task-labels">
          {labels}
        </ul>
      )
  }
}
