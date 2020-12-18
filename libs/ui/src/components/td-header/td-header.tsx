import { 
  Component, 
  h, 
  Prop,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'td-header',
  styleUrl: 'td-header.scss',
  shadow: true,
})
export class TdHeader {
  @Prop() headerCopy: string = "";

  @Event({
    eventName: 'headerClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) headerClicked: EventEmitter;

  render() {
    return (
      <header>
        <div 
          class="container"
          onClick={() => {
            this.headerClicked.emit();
          }}
        >
          <tdn-ui-icon 
            name="logo"
            size="xl"
          ></tdn-ui-icon>

          <p class="copy">
            {this.headerCopy}
          </p>

          <section class="right">
            <slot name="right-1" />

            <slot name="r-right-1" />

            <slot name="r-right-2" />

            <slot name="r-right-3" />
          </section>
        </div>
      </header>
    );
  }
}
