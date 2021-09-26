import { AppLayout } from '@atlascode/frontend-components';
import { Story, Meta } from '@storybook/react';
import { AboutPage, AboutPageProps } from './AboutPage';

export default {
  component: AboutPage,
  title: 'AboutPage',
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

const Template: Story<AboutPageProps> = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
