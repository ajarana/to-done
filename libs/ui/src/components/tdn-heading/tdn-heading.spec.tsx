import { newSpecPage } from '@stencil/core/testing';
import { TdnHeading } from './tdn-heading';

describe('tdn-heading', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdnHeading],
      html: '<tdn-heading></tdn-heading>'
    });
    expect(root).toEqualHtml(`
      <tdn-heading>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </tdn-heading>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdnHeading],
      html: `<tdn-heading first="Stencil" last="'Don't call me a framework' JS"></tdn-heading>`
    });
    expect(root).toEqualHtml(`
      <tdn-heading first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </tdn-heading>
    `);
  });
});
