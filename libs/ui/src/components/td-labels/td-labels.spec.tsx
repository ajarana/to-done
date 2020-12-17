import { newSpecPage } from '@stencil/core/testing';
import { TdLabels } from './td-labels';

describe('td-labels', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdLabels],
      html: '<td-labels></td-labels>'
    });
    expect(root).toEqualHtml(`
      <td-labels>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-labels>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdLabels],
      html: `<td-labels first="Stencil" last="'Don't call me a framework' JS"></td-labels>`
    });
    expect(root).toEqualHtml(`
      <td-labels first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-labels>
    `);
  });
});
