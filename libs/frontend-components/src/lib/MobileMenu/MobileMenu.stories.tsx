import { AppLayout } from '../AppLayout/AppLayout';
import { Story, Meta } from '@storybook/react';
import { MobileMenu, MobileMenuProps } from './MobileMenu';
import { Box } from '@mui/material';

export default {
  component: MobileMenu,
  title: 'MobileMenu',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
  decorators: [
    (Story) => (
      <AppLayout>
        <Box sx={{ height: '55vh' }} />
        <Story />
      </AppLayout>
    ),
  ],
} as Meta;

const Template: Story<MobileMenuProps> = (args) => <MobileMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
