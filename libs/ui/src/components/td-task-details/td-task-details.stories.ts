import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TdTaskDetails = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<td-task-details first="${firstName}" middle="${middleName}" last="${lastName}"></td-task-details>`;
};
