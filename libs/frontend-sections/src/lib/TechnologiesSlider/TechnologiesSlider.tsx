import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import TechnologyCard from './TechnologyCard';
import {
  FigmaLogo,
  FramerLogo,
  GatsbyLogo,
  NestLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
  TypescriptLogo,
} from '@atlascode/frontend-svgs';
import React from 'react';

SwiperCore.use([Autoplay]);

const TECHNOLOGIES: Array<{ name: string; icon: React.FC<unknown> }> = [
  { name: 'NextJS', icon: NextLogo },
  { name: 'Figma', icon: FigmaLogo },
  { name: 'ReactJS', icon: ReactLogo },
  { name: 'GatsbyJS', icon: GatsbyLogo },
  { name: 'NodeJS', icon: NodeLogo },
  { name: 'Typescript', icon: TypescriptLogo },
  { name: 'NestJS', icon: NestLogo },
  { name: 'Framer', icon: FramerLogo },
];

/* eslint-disable-next-line */
export interface TechnologiesSliderProps extends BoxProps {
  technologies?: Array<{ name: string; icon: React.FC<unknown> }>;
}

export function TechnologiesSlider({ sx, ...rest }: TechnologiesSliderProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-TechnologiesSlider-root">
        <Box
          component={Swiper}
          className="AtlasCode-TechnologiesSlider-swiper-container"
          spaceBetween={25}
          slidesPerView={1}
          loop
          autoplay
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {TECHNOLOGIES.map(({ icon, name }, index) => {
            return (
              <SwiperSlide
                key={index}
                className="AtlasCode-TechnologiesSlider-swiper-slide"
              >
                <TechnologyCard icon={icon} text={name} key={index} />
              </SwiperSlide>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default TechnologiesSlider;

const defaultStyles = () => {
  return {
    '.AtlasCode-TechnologiesSlider-root': {
      '.AtlasCode-TechnologiesSlider-swiper-container': {
        height: '100%',
        py: 5,
      },

      '.AtlasCode-TechnologiesSlider-swiper-slide': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  } as SxProps<Theme>;
};
