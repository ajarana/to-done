import { newE2EPage } from '@stencil/core/testing';

describe('tdn-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tdn-heading></tdn-heading>');
    const element = await page.find('tdn-heading');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tdn-heading></tdn-heading>');
    const component = await page.find('tdn-heading');
    const element = await page.find('tdn-heading >>> div');
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
