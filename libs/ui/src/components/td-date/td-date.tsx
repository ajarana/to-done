import { 
  Component, 
  h, 
  Prop, 
  Host 
} from '@stencil/core';

@Component({
  tag: 'td-date',
  styleUrl: 'td-date.scss',
  shadow: true,
})
export class TdDate {
  @Prop() date: string = "";

  dateIsValid(date) {
    return Object.prototype.toString.call(date) === '[object Date]' && isFinite(date);
  }

  render() {
    const date = new Date(parseInt(this.date, 10));

    const validDate = this.dateIsValid(date);

    let contents = <div></div>;

    if (validDate) {
      const month = date.getMonth();

      const day = date.getDate();

      const year = date.getFullYear();

      contents = (
        <div>
          <tdn-ui-icon
            name="calendar"
          ></tdn-ui-icon>

          {month + 1}/{day}/{year}
        </div>
      );
    }

    return (
      <Host>
        {contents}
      </Host>
    );
  }
}
