import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface ReactLogoProps extends BoxProps<'svg'> {}

export function ReactLogo(props: ReactLogoProps) {
  return (
    <Box
      width="51"
      height="46"
      viewBox="0 0 51 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component="svg"
    >
      <path
        d="M41.4007 15.2675C40.87 15.0833 40.336 14.9135 39.7957 14.7566C39.8857 14.3883 39.9678 14.0199 40.0449 13.6516C41.2592 7.68789 40.4647 2.8868 37.7516 1.30458C35.1511 -0.210371 30.8973 1.36864 26.6018 5.14802C26.1788 5.52275 25.7655 5.90549 25.3602 6.30105C25.09 6.03841 24.8134 5.78058 24.5352 5.52916C20.0305 1.48875 15.5195 -0.215176 12.8096 1.37024C10.2107 2.8916 9.44036 7.40764 10.534 13.0559C10.6433 13.6164 10.7655 14.1721 10.9038 14.7262C10.2638 14.9087 9.64782 15.1041 9.0576 15.3123C3.781 17.1732 0.410156 20.0878 0.410156 23.1113C0.410156 26.2341 4.02867 29.3681 9.5272 31.2674C9.97268 31.4211 10.4214 31.5636 10.8749 31.6933C10.7269 32.2891 10.5967 32.8896 10.4825 33.4934C9.44036 39.0439 10.2541 43.4527 12.8466 44.9644C15.5227 46.5242 20.0145 44.9196 24.3888 41.0553C24.7346 40.7494 25.0804 40.4259 25.4294 40.0864C25.8668 40.5124 26.3171 40.9272 26.7771 41.3292C31.0147 45.014 35.1994 46.5018 37.7886 44.9884C40.4631 43.4222 41.3315 38.6868 40.2026 32.9264C40.1145 32.4746 40.0153 32.025 39.905 31.578C40.2202 31.4852 40.529 31.3859 40.8314 31.2866C46.547 29.3729 50.2652 26.2773 50.2652 23.1129C50.2652 20.0766 46.785 17.1411 41.4007 15.2675ZM28.0009 6.77347C31.6805 3.53538 35.1206 2.25743 36.6886 3.17025C38.3579 4.14392 39.0076 8.06903 37.9591 13.216C37.8899 13.5523 37.8143 13.8854 37.7339 14.2169C35.5383 13.7143 33.3113 13.359 31.0678 13.1536C29.7845 11.2893 28.3768 9.51305 26.8543 7.83682C27.2274 7.47169 27.6101 7.11778 28.0009 6.77347ZM15.1303 25.696C16.0407 27.4732 17.0346 29.2068 18.1087 30.891C16.5652 30.7219 15.0315 30.4728 13.514 30.1448C13.9547 28.7083 14.4966 27.2141 15.1303 25.696ZM15.1287 20.6323C14.5304 19.205 14.0017 17.7497 13.5446 16.2716C15.0373 15.9375 16.5455 15.6756 18.0637 15.4869C17.0055 17.1556 16.0261 18.8726 15.1287 20.6323ZM16.2609 23.1625C17.5703 20.4016 19.0875 17.7431 20.7993 15.2098C23.8238 14.98 26.8615 14.9811 29.8858 15.213C30.7319 16.4765 31.5333 17.7691 32.2885 19.0885C33.0475 20.4129 33.7648 21.7629 34.4371 23.1337C33.7714 24.518 33.0569 25.8784 32.2949 27.2125C31.539 28.5385 30.743 29.8389 29.9035 31.1136C28.4239 31.2209 26.8961 31.2754 25.3377 31.2754C23.7858 31.2754 22.2772 31.2273 20.8234 31.1312C19.1046 28.5929 17.5795 25.9297 16.2609 23.1641V23.1625ZM34.1395 28.2871C34.6413 27.4095 35.1238 26.5191 35.5869 25.6175C36.219 27.0652 36.777 28.5449 37.2595 30.0519C35.7252 30.401 34.1717 30.6684 32.6085 30.8526C33.136 30.0086 33.6458 29.1535 34.1395 28.2887V28.2871ZM35.566 20.6323C35.1053 19.749 34.6271 18.875 34.1315 18.0107C33.6441 17.1598 33.1385 16.3194 32.6149 15.4901C34.2071 15.6934 35.7301 15.9625 37.1614 16.294C36.7014 17.7673 36.1691 19.215 35.566 20.6339V20.6323ZM25.3618 9.3758C26.3991 10.5192 27.3769 11.7139 28.2952 12.9566C26.3322 12.8627 24.3658 12.8622 22.4027 12.955C23.3297 11.7145 24.3173 10.52 25.3618 9.3758ZM13.8775 3.23431C15.5452 2.25743 19.2329 3.65068 23.12 7.1386C23.3692 7.3628 23.6185 7.59501 23.8678 7.83682C22.3366 9.51302 20.9183 11.2881 19.6221 13.1504C17.3837 13.3535 15.1612 13.7028 12.9688 14.1961C12.8402 13.6804 12.7276 13.1632 12.6263 12.6427C11.6887 7.80159 12.311 4.15033 13.8775 3.23431ZM11.4458 29.6195C11.0325 29.5 10.6223 29.3702 10.2155 29.2303C8.09977 28.5566 6.12794 27.4977 4.40017 26.1075C3.90239 25.7624 3.48094 25.3193 3.16183 24.8056C2.84144 24.2885 2.62971 23.7121 2.53945 23.1113C2.53945 21.2776 5.2461 18.9363 9.7604 17.3461C10.3265 17.1459 10.899 16.965 11.4764 16.8C12.1462 18.9719 12.958 21.0978 13.9064 23.1641C12.9459 25.2603 12.124 27.4166 11.4458 29.6195ZM22.9881 39.4331C21.3629 40.9437 19.4708 42.1415 17.4075 42.9658C16.8655 43.2281 16.2747 43.3753 15.6726 43.3982C15.0705 43.4211 14.4701 43.3191 13.9096 43.0987C12.3368 42.1811 11.6838 38.642 12.5748 33.8953C12.6809 33.3348 12.8032 32.7759 12.9399 32.2218C15.1544 32.7022 17.3995 33.0305 19.659 33.2051C20.9663 35.0775 22.3953 36.8626 23.9369 38.5491C23.6281 38.8533 23.3113 39.1464 22.9881 39.4331ZM25.4197 36.9989C24.3614 35.839 23.3604 34.6285 22.4204 33.3716C23.3757 33.4101 24.347 33.4293 25.3377 33.4293C26.3541 33.4293 27.3576 33.4053 28.3467 33.3604C27.434 34.6227 26.457 35.8376 25.4197 37.0005V36.9989ZM38.3531 39.9952C38.3073 40.6012 38.1388 41.1917 37.8578 41.7311C37.5781 42.2678 37.1911 42.742 36.7207 43.1244C35.1495 44.0436 31.7899 42.8489 28.1666 39.6973C27.7377 39.3235 27.3194 38.938 26.9122 38.5411C28.4248 36.8483 29.8212 35.0559 31.0919 33.1763C33.3642 32.9828 35.6201 32.6318 37.8433 32.1257C37.9462 32.5405 38.0363 32.9457 38.1135 33.3428C38.5959 35.5272 38.678 37.782 38.3547 39.9952H38.3531ZM40.1623 29.2432C39.889 29.3344 39.6091 29.4225 39.3245 29.5074C38.6277 27.325 37.7842 25.1919 36.7995 23.1225C37.747 21.0808 38.5577 18.9788 39.2264 16.8305C39.7362 16.981 40.2315 17.1379 40.7075 17.3045C45.3215 18.9091 48.1359 21.2824 48.1359 23.1113C48.1359 25.0602 45.0964 27.5889 40.1623 29.2432Z"
        fill="#3C4661"
      />
      <path
        d="M25.3361 18.611C26.2183 18.6118 27.0799 18.8762 27.8095 19.3701C28.5413 19.8633 29.1122 20.5664 29.4499 21.3879C29.7871 22.2123 29.8749 23.1168 29.7024 23.9902C29.532 24.8601 29.1087 25.6609 28.485 26.2931C27.8626 26.924 27.0697 27.3516 26.2045 27.5262C25.3404 27.7 24.4438 27.6107 23.6313 27.27C22.8152 26.9269 22.12 26.3499 21.6339 25.6125C21.0609 24.7444 20.8035 23.7072 20.9044 22.6733C21.0053 21.6393 21.4586 20.6709 22.1887 19.929C22.5993 19.5124 23.089 19.1813 23.6294 18.955C24.1697 18.7287 24.7499 18.6118 25.3361 18.611Z"
        fill="#3C4661"
      />
    </Box>
  );
}

export default ReactLogo;