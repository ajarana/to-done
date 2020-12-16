import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TaskForm = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<task-form first="${firstName}" middle="${middleName}" last="${lastName}"></task-form>`;
};
