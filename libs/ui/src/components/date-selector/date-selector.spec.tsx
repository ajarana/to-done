import { newSpecPage } from '@stencil/core/testing';
import { DateSelector } from './date-selector';

describe('date-selector', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [DateSelector],
      html: '<date-selector></date-selector>'
    });
    expect(root).toEqualHtml(`
      <date-selector>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </date-selector>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [DateSelector],
      html: `<date-selector first="Stencil" last="'Don't call me a framework' JS"></date-selector>`
    });
    expect(root).toEqualHtml(`
      <date-selector first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </date-selector>
    `);
  });
});
