import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TdHeading = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<td-heading first="${firstName}" middle="${middleName}" last="${lastName}"></td-heading>`;
};
