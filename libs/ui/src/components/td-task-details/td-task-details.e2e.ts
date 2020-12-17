import { newE2EPage } from '@stencil/core/testing';

describe('td-task-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<td-task-details></td-task-details>');
    const element = await page.find('td-task-details');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<td-task-details></td-task-details>');
    const component = await page.find('td-task-details');
    const element = await page.find('td-task-details >>> div');
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
