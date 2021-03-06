import { Box, BoxProps } from '@mui/material';
/* eslint-disable-next-line */
export interface GatsbyLogoProps extends BoxProps<'svg'> {}

export function GatsbyLogo(props: GatsbyLogoProps) {
  return (
    <Box
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component="svg"
    >
      <path
        d="M24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0ZM10.6286 37.3714C7.02857 33.7714 5.14286 28.9714 5.14286 24.3429L23.8286 42.8571C19.0286 42.6857 14.2286 40.9714 10.6286 37.3714ZM28.1143 42.3429L5.65714 19.8857C7.54286 11.4857 15.0857 5.14286 24 5.14286C30.3429 5.14286 35.8286 8.22857 39.2571 12.8571L36.6857 15.0857C33.7714 11.1429 29.1429 8.57143 24 8.57143C17.3143 8.57143 11.6571 12.8571 9.42857 18.8571L29.1429 38.5714C34.1143 36.8571 37.8857 32.5714 39.0857 27.4286H30.8571V24H42.8571C42.8571 32.9143 36.5143 40.4571 28.1143 42.3429Z"
        fill="#3C4661"
      />
    </Box>
  );
}

export default GatsbyLogo;
