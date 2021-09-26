import { AppLayout } from '@atlascode/frontend-components';
import { Story, Meta } from '@storybook/react';
import { ContactPage, ContactPageProps } from './ContactPage';

export default {
  component: ContactPage,
  title: 'ContactPage',
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

const Template: Story<ContactPageProps> = (args) => <ContactPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
