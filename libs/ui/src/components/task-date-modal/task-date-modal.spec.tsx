import { newSpecPage } from '@stencil/core/testing';
import { TaskDateModal } from './task-date-modal';

describe('task-date-modal', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskDateModal],
      html: '<task-date-modal></task-date-modal>'
    });
    expect(root).toEqualHtml(`
      <task-date-modal>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-date-modal>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskDateModal],
      html: `<task-date-modal first="Stencil" last="'Don't call me a framework' JS"></task-date-modal>`
    });
    expect(root).toEqualHtml(`
      <task-date-modal first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-date-modal>
    `);
  });
});
