import { newSpecPage } from '@stencil/core/testing';
import { TdFooter } from './td-footer';

describe('td-footer', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdFooter],
      html: '<td-footer></td-footer>'
    });
    expect(root).toEqualHtml(`
      <td-footer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-footer>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdFooter],
      html: `<td-footer first="Stencil" last="'Don't call me a framework' JS"></td-footer>`
    });
    expect(root).toEqualHtml(`
      <td-footer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-footer>
    `);
  });
});
