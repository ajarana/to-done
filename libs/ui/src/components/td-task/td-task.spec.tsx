import { newSpecPage } from '@stencil/core/testing';
import { TdTask } from './td-task';

describe('td-task', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TdTask],
      html: '<td-task></td-task>'
    });
    expect(root).toEqualHtml(`
      <td-task>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </td-task>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TdTask],
      html: `<td-task first="Stencil" last="'Don't call me a framework' JS"></td-task>`
    });
    expect(root).toEqualHtml(`
      <td-task first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </td-task>
    `);
  });
});
