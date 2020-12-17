import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'td-header',
  styleUrl: 'td-header.scss',
  shadow: true,
})
export class TdHeader {
  @Prop() headerCopy: string = "";

  render() {
    return (
      <header>
        <div class="container">
          <tdn-ui-icon name="logo"></tdn-ui-icon>

          <p class="copy">
            {this.headerCopy}
          </p>

          <section class="right">
            <slot />
          </section>
        </div>
      </header>
    );
  }
}
