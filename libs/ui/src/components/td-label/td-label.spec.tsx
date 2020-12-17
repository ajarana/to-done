import { newSpecPage } from '@stencil/core/testing';
import { TdLabel } from './td-label';

describe('td-label', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdLabel],
      html: '<td-label></td-label>'
    });
    expect(root).toEqualHtml(`
      <td-label>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-label>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdLabel],
      html: `<td-label first="Stencil" last="'Don't call me a framework' JS"></td-label>`
    });
    expect(root).toEqualHtml(`
      <td-label first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-label>
    `);
  });
});
