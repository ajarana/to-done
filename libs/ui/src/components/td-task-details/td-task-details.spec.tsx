import { newSpecPage } from '@stencil/core/testing';
import { TdTaskDetails } from './td-task-details';

describe('td-task-details', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdTaskDetails],
      html: '<td-task-details></td-task-details>'
    });
    expect(root).toEqualHtml(`
      <td-task-details>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-task-details>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdTaskDetails],
      html: `<td-task-details first="Stencil" last="'Don't call me a framework' JS"></td-task-details>`
    });
    expect(root).toEqualHtml(`
      <td-task-details first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-task-details>
    `);
  });
});
