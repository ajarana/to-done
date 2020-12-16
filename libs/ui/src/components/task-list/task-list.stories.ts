import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TaskList = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<task-list first="${firstName}" middle="${middleName}" last="${lastName}"></task-list>`;
};
