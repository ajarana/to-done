import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TaskLabels = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<task-labels first="${firstName}" middle="${middleName}" last="${lastName}"></task-labels>`;
};
