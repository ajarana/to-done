import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tdn-heading',
  styleUrl: 'tdn-heading.scss',
  shadow: true,
})
export class TdnHeading {
  @Prop() type: string;

  @Prop() text: string;

  render() {
    let heading: any;
    
    if (this.type === "h2") {
      heading = (
        <h2>{this.text}</h2>
      )
    }

    return (
      <header>
        {heading}
      </header>
    );
  }
}
