import { 
  Component, 
  h, 
  Prop,
  Event,
  EventEmitter
} from '@stencil/core';

import { classNames } from '../../utils';

@Component({
  tag: 'td-button',
  styleUrl: 'td-button.scss',
  shadow: true,
})
export class TdButton {
  @Prop() buttonText: string = "";

  @Prop() handler: Function = () => {};

  @Prop() type: string = "";

  @Event({
    eventName: 'tdButtonClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) tdButtonClicked: EventEmitter;

  onClickHandler(e) {
    this.tdButtonClicked.emit();

    this.handler(e)
  }

  render() {
    const classes = classNames([
      {
        "danger-button": this.type === "danger-button",
        "success-button": this.type === "success-button"
      }
    ]);

    return (
      <button
        class={classes}
        onClick={e => this.onClickHandler(e)}
      >
        {this.buttonText}
      </button>
    );
  }
}
