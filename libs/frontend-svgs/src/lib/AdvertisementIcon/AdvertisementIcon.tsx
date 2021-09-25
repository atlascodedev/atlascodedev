import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface AdvertisementIconProps extends BoxProps<'svg'> {}

export function AdvertisementIcon({
  fill,
  component = 'svg',
  ...rest
}: AdvertisementIconProps) {
  return (
    <Box
      width="47"
      height="44"
      viewBox="0 0 47 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      component={component}
      {...rest}
    >
      <path
        d="M3 10.2548L23.2588 2L44 10.2548L23.2588 19.9663L3 10.2548Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path
        d="M11.0617 14.208L3 17.5356L7.82353 19.8693L23.2588 27.3372L44 17.5356L35.2471 14.208"
        stroke={fill}
      />
      <path
        d="M11.9831 21.8086L3 25.6309L23.2588 35.1681L44 25.6309L34.5561 22.0389"
        stroke={fill}
      />
      <path
        d="M11.9831 29.8711L3 33.463L23.2588 43.0003L44 33.463L34.7864 29.8711"
        stroke={fill}
      />
    </Box>
  );
}

export default AdvertisementIcon;
