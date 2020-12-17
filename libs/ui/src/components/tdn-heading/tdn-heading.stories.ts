import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TdnHeading = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<tdn-heading first="${firstName}" middle="${middleName}" last="${lastName}"></tdn-heading>`;
};
