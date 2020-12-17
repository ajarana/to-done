import { newSpecPage } from '@stencil/core/testing';
import { TdDate } from './td-date';

describe('td-date', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdDate],
      html: '<td-date></td-date>'
    });
    expect(root).toEqualHtml(`
      <td-date>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-date>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdDate],
      html: `<td-date first="Stencil" last="'Don't call me a framework' JS"></td-date>`
    });
    expect(root).toEqualHtml(`
      <td-date first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-date>
    `);
  });
});
