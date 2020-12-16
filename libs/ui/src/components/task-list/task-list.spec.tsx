import { newSpecPage } from '@stencil/core/testing';
import { TaskList } from './task-list';

describe('task-list', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskList],
      html: '<task-list></task-list>'
    });
    expect(root).toEqualHtml(`
      <task-list>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-list>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskList],
      html: `<task-list first="Stencil" last="'Don't call me a framework' JS"></task-list>`
    });
    expect(root).toEqualHtml(`
      <task-list first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-list>
    `);
  });
});
