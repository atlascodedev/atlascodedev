import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { MotionBox } from '@atlascode/frontend-utility';
import { ChevronLeft, KeyboardArrowUp } from '@mui/icons-material';
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AccordionChevronProps extends BoxProps {
  open?: boolean;
}

const AccordionChevron = ({
  sx,
  open = false,
  ...rest
}: AccordionChevronProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <MotionBox
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={{
          closed: {
            rotate: 0,
          },
          open: {
            rotate: 900,
          },
        }}
        className="AtlasCode-Accordion-Chevron-root"
      >
        <KeyboardArrowUp className="icon" />
      </MotionBox>
    </Box>
  );
};

export default AccordionChevron;

const defaultStyles = () => {
  return {
    '.AtlasCode-Accordion-Chevron-root': {
      fontSize: '8px',
      width: { xs: '3.5em' },
      height: { xs: '3.5em' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: (theme) => theme.palette.secondary.main,
      color: (theme) => theme.palette.secondary.contrastText,
      borderRadius: '50%',
      cursor: 'pointer',

      '.icon': {
        fontSize: { xs: '2.2em' },
      },
    },
  } as SxProps<Theme>;
};
