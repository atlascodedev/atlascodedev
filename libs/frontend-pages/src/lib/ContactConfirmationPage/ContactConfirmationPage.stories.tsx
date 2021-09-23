import { AppLayout } from '@atlascode/frontend-components';
import { Story, Meta } from '@storybook/react';
import {
  ContactConfirmationPage,
  ContactConfirmationPageProps,
} from './ContactConfirmationPage';

export default {
  component: ContactConfirmationPage,
  title: 'ContactConfirmationPage',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
} as Meta;

const Template: Story<ContactConfirmationPageProps> = (args) => (
  <ContactConfirmationPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
