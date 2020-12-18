import { Component, h, Prop } from '@stencil/core';
import { classNames } from '../../utils';

@Component({
  tag: 'td-text',
  styleUrl: 'td-text.scss',
  shadow: true,
})
export class TdText {
  @Prop() text: string = "";

  @Prop() type: string = "";

  render() {
    const classes = classNames([
      {
        "secondary": this.type === "secondary"
      }
    ]);

    return (
      <p class={classes}>
        {this.text}
      </p>
    )
  }
}