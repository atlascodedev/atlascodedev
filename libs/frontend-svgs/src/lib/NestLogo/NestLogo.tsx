import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface NestLogoProps extends BoxProps<'svg'> {}

export function NestLogo({ component = 'svg', ...rest }: NestLogoProps) {
  return (
    <Box
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      component={component}
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.2326 0C40.7515 0.00671293 40.2747 0.0911376 39.8206 0.25C43.8638 2.905 39.0946 6.75 41.3227 10C41.1692 8.90685 41.3434 7.79277 41.8232 6.79835C42.3031 5.80393 43.0671 4.97373 44.019 4.4125C44.7325 3.82 45.1906 3.6075 45.0379 2.6275C44.7901 1.0225 42.6471 0 41.2326 0ZM46.9907 1.035C46.4324 3.8425 45.7389 3.945 43.6785 5.7525C42.8749 6.38516 42.3078 7.26942 42.0685 8.26298C41.8292 9.25653 41.9316 10.3016 42.3592 11.23C33.8473 7.93 22.937 5.935 14.9384 11.645C12.0618 13.6975 10.3069 16.645 6.75942 17.8475C4.46622 18.6325 2.21307 18.4 0.776058 20.67C0.250505 21.3255 -0.0240388 22.1465 0.00165271 22.9858C0.0273442 23.8251 0.351591 24.6278 0.916254 25.25C1.34435 25.6875 2.168 25.9675 2.50848 26.4125C2.70626 26.6625 2.70125 26.9125 2.88901 27.245C3.22084 28.0199 3.7004 28.7229 4.30099 29.315C4.669 29.6175 5.93327 29.9125 6.14857 30.235C6.41895 30.6375 5.71797 32.235 6.30629 32.485C6.70184 32.6675 7.86096 30.625 7.97362 30.445C7.7433 32.0525 7.44037 34.905 9.2504 32.53C10.1091 31.4025 10.1617 31.03 11.6062 30.78C12.5306 30.6196 13.4649 30.5227 14.4026 30.49C19.7594 30.3029 24.9839 32.1747 28.9998 35.7198C33.0156 39.2649 35.5167 44.2132 35.9878 49.545C35.7174 48.295 34.0826 46.295 32.5605 46.77C31.9121 46.97 31.6717 48.0875 31.2462 48.735C30.7081 49.556 30.045 50.2881 29.2809 50.905C29.4103 49.693 29.3494 48.4683 29.1007 47.275C28.645 49.145 27.7312 52.2475 25.4305 51.745C24.6641 51.6282 23.946 51.2985 23.3581 50.7937C22.7703 50.2889 22.3363 49.6292 22.1059 48.89C21.808 46.99 23.8183 44.7625 20.5863 44.605C14.1022 44.2875 15.6018 53.81 19.4296 56.2925C18.5499 56.3897 17.6918 56.6286 16.8886 57C19.3201 58.4102 22.0599 59.2056 24.8696 59.3171C27.6792 59.4287 30.4736 58.8529 33.0095 57.6399C35.5455 56.4269 37.7462 54.6135 39.4202 52.3574C41.0943 50.1013 42.1908 47.4709 42.6145 44.695C43.1717 47.2371 43.1589 49.8709 42.577 52.4075C42.2659 53.7555 41.8005 55.0633 41.1901 56.305C40.3625 57.9822 39.2628 59.5112 37.9355 60.83C37.1494 61.6075 35.7074 62.39 35.2117 63.1825C38.2459 62.7808 41.2108 61.9666 44.024 60.7625C41.1118 64.7458 37.2335 67.9245 32.7533 70C37.5569 69.6606 42.2005 68.1326 46.2651 65.5536C50.3297 62.9747 53.6876 59.426 56.0358 55.2275C55.2874 59.4264 53.6252 63.4102 51.1665 66.8975C54.4734 64.6867 57.2869 61.817 59.4303 58.4686C61.5736 55.1202 63.0005 51.3654 63.6214 47.44C64.2379 50.3135 64.4143 53.2637 64.1446 56.19C66.8612 52.4206 68.6963 48.0907 69.5148 43.5191C70.3332 38.9475 70.1142 34.2508 68.8738 29.775C67.925 26.2956 66.5022 22.9628 64.6453 19.87C63.9283 18.6649 63.1435 17.5014 62.2946 16.385C61.9616 15.9525 60.1816 14.37 60.1816 13.885C60.1666 13.9333 60.1541 13.9333 60.144 13.885C60.144 22.005 51.3818 27.2175 44.044 25.0425C46.8342 24.8264 49.4713 23.6829 51.5343 21.7945C53.5973 19.9062 54.9671 17.382 55.425 14.625C55.8304 11.7326 55.2088 8.7898 53.6681 6.30733C52.1274 3.82487 49.7649 1.95949 46.9907 1.035V1.035Z"
        fill="#3C4661"
      />
    </Box>
  );
}

export default NestLogo;