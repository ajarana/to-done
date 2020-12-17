import { newSpecPage } from '@stencil/core/testing';
import { TdHeader } from './td-header';

describe('td-header', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdHeader],
      html: '<td-header></td-header>'
    });
    expect(root).toEqualHtml(`
      <td-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-header>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdHeader],
      html: `<td-header first="Stencil" last="'Don't call me a framework' JS"></td-header>`
    });
    expect(root).toEqualHtml(`
      <td-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-header>
    `);
  });
});
