import { newSpecPage } from '@stencil/core/testing';
import { TdText } from './td-text';

describe('td-text', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdText],
      html: '<td-text></td-text>'
    });
    expect(root).toEqualHtml(`
      <td-text>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-text>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdText],
      html: `<td-text first="Stencil" last="'Don't call me a framework' JS"></td-text>`
    });
    expect(root).toEqualHtml(`
      <td-text first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-text>
    `);
  });
});
