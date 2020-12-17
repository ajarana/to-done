import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-heading',
  styleUrl: 'td-heading.scss',
  shadow: true,
})
export class TdHeading {
  @Prop() type: string;

  @Prop() headingText: string;

  render() {
    let heading: any;
    
    if (this.type === "h2") {
      heading = (
        <h2>{this.headingText}</h2>
      )
    }

    return (
      <header>
        {heading}
      </header>
    );
  }
}
