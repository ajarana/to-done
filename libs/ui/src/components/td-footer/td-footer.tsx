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
          <slot name="left-1" />

          <slot name="left-2" />
        </section>

        <section>
          <slot name="right-1" />

          <slot name="right-2" />
        </section>
      </footer>
    );
  }
}
