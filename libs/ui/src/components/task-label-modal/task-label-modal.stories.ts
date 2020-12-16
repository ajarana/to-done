import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TaskLabelModal = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<task-label-modal first="${firstName}" middle="${middleName}" last="${lastName}"></task-label-modal>`;
};
