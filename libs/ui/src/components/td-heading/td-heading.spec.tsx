import { newSpecPage } from '@stencil/core/testing';
import { TdHeading } from './td-heading';

describe('td-heading', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdHeading],
      html: '<td-heading></td-heading>'
    });
    expect(root).toEqualHtml(`
      <td-heading>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-heading>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdHeading],
      html: `<td-heading first="Stencil" last="'Don't call me a framework' JS"></td-heading>`
    });
    expect(root).toEqualHtml(`
      <td-heading first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-heading>
    `);
  });
});
