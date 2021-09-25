import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography, useMediaQuery } from '@mui/material';
import { SxProps } from '@mui/system';
import ProjectItemTags from './ProjectItemTags';
import ProjectItemTech, { TechType } from './ProjectItemTech';
/* eslint-disable-next-line */
export interface ProjectItemProps extends BoxProps {
  inverted?: boolean;
  techList: TechType[];
  tags: string[];
  title: string;
  imgURL: string;
  imgAlt?: string;
  websiteURL: string;
}

export function ProjectItem({
  sx,
  inverted = false,
  techList = ['figma', 'react', 'next'],
  tags = ['Desenvolvimento', 'Rebranding', 'UI', 'UX'],
  title = 'Website de cartas contempladas com automação de funções.',
  websiteURL = 'https://atlascode.dev',
  imgURL = 'https://via.placeholder/1500',
  imgAlt = 'this is an alt text, change me',
  ...rest
}: ProjectItemProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(inverted && isDesktop),
    sx,
    [inverted, isDesktop]
  );

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="AtlasCode-ProjectItem-root">
        <Box className="grid">
          <Box className="picture-container">
            <Box
              className="picture"
              component="img"
              alt={imgAlt}
              src={imgURL}
            />
          </Box>
          <Box className="info-container">
            <ProjectItemTags tags={tags} />

            <Typography variant="h2" className="title">
              {title}
            </Typography>

            <Box
              className="link"
              component="a"
              href={websiteURL}
              target="_blank"
            >
              Ver site
            </Box>

            <Box className="tech-container">
              {techList.map((value, index) => {
                return <ProjectItemTech tech={value} key={index} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectItem;

const defaultStyles = (inverted = false) => {
  return {
    '.AtlasCode-ProjectItem-root': {
      fontSize: '10px',
      textAlign: inverted ? 'right' : 'left',

      '.grid': {
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'auto 1fr' },
        gridAutoFlow: 'row',
        columnGap: { xs: 0, lg: 4 },
      },

      '.picture-container': {
        width: { xs: '30em', lg: '57em' },
        height: { xs: '21.8em', lg: '41em' },
        borderRadius: '20px',
        order: { xs: 0, lg: inverted ? 1 : 0 },
        mb: { xs: 2, lg: 0 },
      },

      '.info-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2 },
        alignSelf: { xs: 'initial', lg: 'center' },
        order: { xs: 1, lg: inverted ? 0 : 1 },
        alignItems: { lg: inverted ? 'flex-end' : 'initial' },
      },

      '.picture': {
        objectFit: 'cover',
        width: '100%',
        borderRadius: '20px',
        height: '100%',
      },

      '.link': {
        width: 'fit-content',
        fontSize: { xs: '1.4em', lg: '1.8em' },
        color: (theme) => theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 800,
        py: 2,
      },

      '.title': {
        fontSize: { xs: '1.8em', lg: '3.2em' },
        fontWeight: 900,
        color: (theme) => theme.palette.secondary.main,
        maxWidth: { xs: '26ch' },
        lineHeight: 1.45,
      },

      '.tech-container': {
        display: 'flex',
        pt: { xs: 2, lg: 5 },
        gap: { xs: 5 },
      },
    },
  } as SxProps<Theme>;
};
