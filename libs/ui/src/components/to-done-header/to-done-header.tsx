import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'to-done-header',
  styleUrl: 'to-done-header.scss',
  shadow: true,
})
export class ToDoneHeader {
  @Prop() headerCopy: string = "";

  render() {
    return (
      <header>
        <div class="container">
          <tdn-ui-icon name="logo"></tdn-ui-icon>

          <p class="copy">
            {this.headerCopy}
          </p>
        </div>
      </header>
    );
  }
}
