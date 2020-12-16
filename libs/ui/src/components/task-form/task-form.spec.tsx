import { newSpecPage } from '@stencil/core/testing';
import { TaskForm } from './task-form';

describe('task-form', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TaskForm],
      html: '<task-form></task-form>'
    });
    expect(root).toEqualHtml(`
      <task-form>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </task-form>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TaskForm],
      html: `<task-form first="Stencil" last="'Don't call me a framework' JS"></task-form>`
    });
    expect(root).toEqualHtml(`
      <task-form first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </task-form>
    `);
  });
});
