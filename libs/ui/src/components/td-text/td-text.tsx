import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-text',
  styleUrl: 'td-text.scss',
  shadow: true,
})
export class TdText {
  @Prop() description: string = "";

  render() {
    return (
      <p>
        {this.description}
      </p>
    )
  }
}