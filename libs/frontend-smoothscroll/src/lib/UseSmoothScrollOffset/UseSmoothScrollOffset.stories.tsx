import { Story, Meta } from '@storybook/react';

import { Box } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-types
type DemoProps = {};

const Demo = (props: DemoProps) => {
  return <Box>Smooth Scroll Offset Hook Demo </Box>;
};

export default {
  component: Demo,
  title: 'UseSmoothScrollOffset',
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
