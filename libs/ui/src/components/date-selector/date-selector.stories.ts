import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const DateSelector = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<date-selector first="${firstName}" middle="${middleName}" last="${lastName}"></date-selector>`;
};
