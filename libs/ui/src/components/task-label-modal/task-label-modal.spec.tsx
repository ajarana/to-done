import { newSpecPage } from '@stencil/core/testing';
import { TaskLabelModal } from './task-label-modal';

describe('task-label-modal', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskLabelModal],
      html: '<task-label-modal></task-label-modal>'
    });
    expect(root).toEqualHtml(`
      <task-label-modal>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-label-modal>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskLabelModal],
      html: `<task-label-modal first="Stencil" last="'Don't call me a framework' JS"></task-label-modal>`
    });
    expect(root).toEqualHtml(`
      <task-label-modal first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-label-modal>
    `);
  });
});
