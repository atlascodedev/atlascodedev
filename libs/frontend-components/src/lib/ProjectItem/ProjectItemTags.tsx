import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProjectItemTagsProps extends BoxProps {
  tags: string[];
}

const ProjectItemTags = ({ sx, tags = [], ...rest }: ProjectItemTagsProps) => {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box {...rest} sx={defaultStylesMemo}>
      <Box className="AtlasCode-ProjectItemTags-root">
        {tags.map((value, index) => {
          return (
            <Box key={index} className="container">
              <Typography className="tag" variant="caption">
                {value}
              </Typography>

              {index !== tags.length - 1 && <Box className="dot">{`•`}</Box>}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectItemTags;

const defaultStyles = () => {
  return {
    '.AtlasCode-ProjectItemTags-root': {
      fontSize: '10px',
      display: 'flex',

      '.container': {
        display: 'flex',
      },

      '.dot': {
        display: 'flex',
        alignItems: 'center',
        fontSize: { xs: '1.2em', lg: '1.6em' },
      },

      '.tag': {
        px: 0.5,
        fontSize: { xs: '1.2em', lg: '1.6em' },
        textTransform: 'uppercase',
        color: (theme) => theme.palette.grey[600],
        fontWeight: 800,
      },
    },
  } as SxProps<Theme>;
};
// `•`
