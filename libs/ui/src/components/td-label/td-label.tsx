import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-label',
  styleUrl: 'td-label.scss',
  shadow: true,
})
export class TdLabel {
  @Prop() label: any;

  render() {
    const {
      name,
      color
    } = this.label;

    return (
      <div
        style={
          {
            background: color
          }
        }
      >
        <p>
          {name}
        </p>
      </div>
    );
  }
}
