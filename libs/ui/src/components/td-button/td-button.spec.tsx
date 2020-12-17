import { newSpecPage } from '@stencil/core/testing';
import { TdButton } from './td-button';

describe('td-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdButton],
      html: '<td-button></td-button>'
    });
    expect(root).toEqualHtml(`
      <td-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdButton],
      html: `<td-button first="Stencil" last="'Don't call me a framework' JS"></td-button>`
    });
    expect(root).toEqualHtml(`
      <td-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-button>
    `);
  });
});
