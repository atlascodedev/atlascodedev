import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CircleIconButton } from '@atlascode/frontend-components';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { Property } from 'csstype';
import { useTestimonialSlider } from './useTestimonialSlider';
import { MotionBox } from '@atlascode/frontend-utility';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface TestimonialSliderProps extends BoxProps {
  testimonials?: TestimonialSliderItem[];
}

export type TestimonialSliderItem = {
  bgcolor: Property.BackgroundColor;
  logo: string;
  testimonial: string;
  testimonialName: string;
  testimonialCompany: string;
};

export function TestimonialSlider({
  sx,
  testimonials = [],
  ...rest
}: TestimonialSliderProps) {
  const { activeTestimonial, backwards, forward, activeIndex } =
    useTestimonialSlider(testimonials);

  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(activeTestimonial?.bgcolor ?? '#333'),
    sx,
    [activeTestimonial?.bgcolor]
  );

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      {activeTestimonial && (
        <Box className="AtlasCode-TestimonialSlider-root">
          <Box className="backwards">
            <CircleIconButton
              onClick={backwards}
              fontSize={{ xs: '1.25em' }}
              inverted
              icon={ArrowBack}
            />
          </Box>

          <Box className="forward">
            <CircleIconButton
              onClick={forward}
              fontSize={{ xs: '1.25em' }}
              inverted
              icon={ArrowForward}
            />
          </Box>

          <Box className="grid">
            <Box className="picture-container">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                src={activeTestimonial.logo}
                className="picture"
              />
            </Box>

            <MotionBox
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                },
              }}
              className="text-container"
              key={activeIndex}
            >
              <Typography variant="subtitle1" className="testimonial">
                {activeTestimonial.testimonial}
              </Typography>
              <Box className="testimonial-personal-info-container">
                <Typography
                  className="testimonial-personal-name"
                  variant="subtitle1"
                >
                  {activeTestimonial.testimonialName}
                </Typography>
                <Typography
                  className="testimonial-personal-company"
                  variant="subtitle2"
                >
                  {activeTestimonial.testimonialCompany}
                </Typography>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default TestimonialSlider;

const defaultStyles = (bgcolor: Property.BackgroundColor = '#333') => {
  return {
    '.AtlasCode-TestimonialSlider-root': {
      fontSize: '10px',
      width: { xs: '27.9em', lg: '90.6em' },
      height: { xs: 'auto', lg: '40.6em' },
      border: (theme) => `0.5px solid ${theme.palette.grey[400]}`,
      borderRadius: '20px',
      position: 'relative',

      '.forward': {
        position: 'absolute',
        top: { xs: '25%', lg: '50%' },
        transform: {
          xs: 'translateY(-25%) translateX(25px)',
          lg: 'translateY(-50%) translateX(25px)',
        },
        right: 0,
        zIndex: 5,
      },

      '.backwards': {
        position: 'absolute',
        top: { xs: '25%', lg: '50%' },
        left: 0,
        transform: 'translateY(-25%) translateX(-25px) ',
        zIndex: 5,
      },

      '.grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '30% 70%' },
        gridTemplateRows: { xs: '0.75fr 1fr', lg: '1fr' },
        height: '100%',
        width: '100%',
      },

      '.picture-container': {
        transition: 'background-color 0.5s ease',
        width: '100%',
        height: '100%',
        display: 'flex',
        bgcolor: bgcolor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: { xs: '20px', lg: '20px' },
        borderBottomLeftRadius: { xs: 0, lg: '20px' },
        borderTopRightRadius: { xs: '20px', lg: 0 },
        position: 'relative',
      },

      '.picture': {
        maxHeight: { xs: '12.5em' },
        width: 'auto',
        py: { xs: 2 },
      },

      '.text-container': {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        px: { xs: '3em', lg: '5em' },
        flexDirection: 'column',
        gap: { xs: 3, lg: 5 },
        py: { xs: '3em', lg: '0px' },
      },

      '.testimonial': {
        fontSize: { xs: '1.6em', lg: '1.8em' },
        color: (theme) => theme.palette.grey[700],
      },

      '.testimonial-personal-info-container': {
        display: 'flex',
        flexDirection: 'column',
        color: (theme) => theme.palette.secondary.main,
        borderTop: (theme) => `1px solid ${theme.palette.grey[400]}`,
        py: { xs: 2 },
      },

      '.testimonial-personal-name': {
        fontSize: { xs: '1.8em' },
        fontWeight: 900,
      },

      '.testimonial-personal-company': {
        fontSize: { xs: '1.4em', lg: '1.6em' },
      },
    },
  } as SxProps<Theme>;
};
