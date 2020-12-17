import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TdButton = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<td-button first="${firstName}" middle="${middleName}" last="${lastName}"></td-button>`;
};
