import { Story, Meta } from '@storybook/react';
import { AboutPage, AboutPageProps } from './AboutPage';

export default {
  component: AboutPage,
  title: 'AboutPage',
} as Meta;

const Template: Story<AboutPageProps> = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
