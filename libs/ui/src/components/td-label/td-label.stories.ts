import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TdLabel = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<td-label first="${firstName}" middle="${middleName}" last="${lastName}"></td-label>`;
};
