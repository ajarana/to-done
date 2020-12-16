import { newSpecPage } from '@stencil/core/testing';
import { TaskLabels } from './task-labels';

describe('task-labels', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskLabels],
      html: '<task-labels></task-labels>'
    });
    expect(root).toEqualHtml(`
      <task-labels>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-labels>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskLabels],
      html: `<task-labels first="Stencil" last="'Don't call me a framework' JS"></task-labels>`
    });
    expect(root).toEqualHtml(`
      <task-labels first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-labels>
    `);
  });
});
