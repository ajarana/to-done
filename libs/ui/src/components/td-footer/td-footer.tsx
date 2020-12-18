import { 
  Component, 
  h, 
  Prop 
} from '@stencil/core';

@Component({
  tag: 'td-footer',
  styleUrl: 'td-footer.scss',
  shadow: true,
})
export class TdFooter {
  @Prop() last: string;

  render() {
    return (
      <footer>
        <section>
          <slot name="r-left-1" />

          <slot name="r-left-2" />
        </section>

        <section>
          <slot name="r-right-1" />

          <slot name="r-right-2" />
        </section>
      </footer>
    );
  }
}
