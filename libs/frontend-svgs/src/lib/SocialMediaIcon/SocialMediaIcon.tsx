import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface SocialMediaIconProps extends BoxProps<'svg'> {}

export function SocialMediaIcon({
  fill = '#fff',
  component = 'svg',
  ...rest
}: SocialMediaIconProps) {
  return (
    <Box
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      component={component}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.2165 6.65137H6.96875V30.468H12.2165"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M6.96845 9.47754H1.7207V27.2391H6.96845"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M18.6756 3.82617H12.2168V33.2943H18.6756"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M34.8227 1H18.6758V35.7158H34.8227V1Z"
        stroke={fill}
        strokeWidth="2"
      />
    </Box>
  );
}

export default SocialMediaIcon;
