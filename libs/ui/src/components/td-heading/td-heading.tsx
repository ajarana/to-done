import { 
  Component, 
  h, 
  Prop,
  Host
} from '@stencil/core';

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
      );
    }
    else if (this.type === "h3") {
      heading = (
        <h3>{this.headingText}</h3>
      );
    }

    return (
      <Host>
        {heading}
      </Host>
    );
  }
}
