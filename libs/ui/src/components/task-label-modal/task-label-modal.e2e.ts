import { newE2EPage } from '@stencil/core/testing';

describe('task-label-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<task-label-modal></task-label-modal>');
    const element = await page.find('task-label-modal');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<task-label-modal></task-label-modal>');
    const component = await page.find('task-label-modal');
    const element = await page.find('task-label-modal >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
