import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TaskDateModal = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<task-date-modal first="${firstName}" middle="${middleName}" last="${lastName}"></task-date-modal>`;
};
