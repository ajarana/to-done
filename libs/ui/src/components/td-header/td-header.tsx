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
    eventName: 'goHome',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) goHome: EventEmitter;

  render() {
    return (
      <header>
        <div 
          class="container"
        >
          <section class="left">
            <tdn-ui-icon 
              name="logo"
              size="xl"
              lazy={true}
            ></tdn-ui-icon>

            <div
              onClick={() => this.goHome.emit()}
            >
              <slot 
                name="r-left-1" 
              />
            </div>

            <slot name="r-left-2" />
          </section>

          <section class="middle">
            <slot name="r-middle-1" />
          </section>

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
