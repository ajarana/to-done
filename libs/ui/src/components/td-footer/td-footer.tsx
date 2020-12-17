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
        <slot />

        <slot />

        <slot />
      </footer>
    );
  }
}
