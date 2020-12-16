import { newSpecPage } from '@stencil/core/testing';
import { ToDoneHeader } from './to-done-header';

describe('to-done-header', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ToDoneHeader],
      html: '<to-done-header></to-done-header>'
    });
    expect(root).toEqualHtml(`
      <to-done-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </to-done-header>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ToDoneHeader],
      html: `<to-done-header first="Stencil" last="'Don't call me a framework' JS"></to-done-header>`
    });
    expect(root).toEqualHtml(`
      <to-done-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </to-done-header>
    `);
  });
});
