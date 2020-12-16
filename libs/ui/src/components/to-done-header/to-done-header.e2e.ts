import { newE2EPage } from '@stencil/core/testing';

describe('to-done-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<to-done-header></to-done-header>');
    const element = await page.find('to-done-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<to-done-header></to-done-header>');
    const component = await page.find('to-done-header');
    const element = await page.find('to-done-header >>> div');
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
