import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import {
  BoxProps,
  ButtonBase,
  Theme,
  Box,
  PaperProps,
  Button,
} from '@mui/material';
import { ResponsiveStyleValue, SxProps } from '@mui/system';
import { SvgIconComponent } from '@mui/icons-material';
import { Property } from 'csstype';
import React from 'react';

/* eslint-disable-next-line */
export interface CircleIconButtonProps extends BoxProps<typeof Button> {
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
  color?: 'primary' | 'secondary';
  icon?: SvgIconComponent;
  inverted?: boolean;
  elevation?: PaperProps['elevation'];
}

export function CircleIconButton({
  sx,
  color = 'primary',
  fontSize = '10px',
  icon: Icon,
  inverted = false,
  elevation = 0,
  ...rest
}: CircleIconButtonProps) {
  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(fontSize, color, inverted, elevation),
    sx,
    [fontSize, color, inverted, elevation]
  );

  return (
    <Box {...rest} sx={defaultStylesMemo} component={ButtonBase}>
      <Box component={Icon} className="icon-inner" />
    </Box>
  );
}

export default CircleIconButton;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize> = '10px',
  color: 'primary' | 'secondary',
  inverted = false,
  elevation = 0
) => {
  return {
    fontSize: fontSize,
    width: '4em',
    height: '4em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '2.35em',
    boxShadow: (theme) => theme.shadows[elevation],
    bgcolor: (theme) =>
      inverted ? theme.palette[color].main : theme.palette[color].contrastText,
    color: (theme) =>
      inverted ? theme.palette[color].contrastText : theme.palette[color].main,

    '.icon-inner': {
      fontSize: '2.6em',
    },
  } as SxProps<Theme>;
};
