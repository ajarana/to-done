import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const ToDoneHeader = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<to-done-header first="${firstName}" middle="${middleName}" last="${lastName}"></to-done-header>`;
};
