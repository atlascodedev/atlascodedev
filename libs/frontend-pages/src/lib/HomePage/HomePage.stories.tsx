import { Story, Meta } from '@storybook/react';
import { HomePage, HomePageProps } from './HomePage';
import { AppLayout } from '@atlascode/frontend-components';

export default {
  component: HomePage,
  title: 'HomePage',
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

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
