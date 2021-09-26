import {
  Box,
  BoxProps,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import { OurServicesItem } from '@atlascode/frontend-components';
import {
  AdvertisementIcon,
  BrandingIcon,
  CodeIcon,
  SocialMediaIcon,
} from '@atlascode/frontend-svgs';
import { MotionBox } from '@atlascode/frontend-utility';
import React from 'react';
import { indexOf } from 'lodash';

/* eslint-disable-next-line */
export interface OurServicesDesktopProps extends BoxProps {}

const CONTENT_LIST: string[] = [
  'Apresente seu negócio através de uma plataforma totalmente personalizada e gerencie as seções do seu website em tempo real com o nosso painel administrativo. Precisando de mais tempo? Nós podemos automatizar funções para facilitar ainda mais o funcionamento da sua empresa.',

  'Encante os clientes que visitarem a sua página com estratégias pensadas para o seu negócio. Passe mais credibilidade e conquiste a sua audiência através de conteúdos de qualidade, fortalecendo cada vez mais a imagem da sua marca e criando um vínculo com seus consumidores.',

  'Alcance todo o potencial do seu negócio com uma identidade visual pensada e alinhada ao seu própósito e objetivo estratégico. Cada vez que a sua marca aparece é uma oportunidade para reforçar o seu posicionamento e fortalecer ainda mais a sua imagem no mercado.',

  'Cause grande impacto com campanhas segmentadas para seu público-alvo nas redes sociais, ou até mesmo deixe que o seus clientes encontrem você através de pesquisas específicas no Google. O investimento em mídias pagas é de grande importância para alavancar ainda mais as suas vendas no mundo digital.',
];

// Transition time in seconds
const TRANSITION_TIME = 10;

export function OurServicesDesktop({ sx, ...rest }: OurServicesDesktopProps) {
  const [activeItem, setActiveItem] = React.useState<boolean[]>([
    false,
    false,
    false,
    true,
  ]);

  const callback = React.useCallback(() => {
    if (indexOf(activeItem, true) === activeItem.length - 1) {
      setActiveItem([true, false, false, false]);
    } else {
      const activeIndex = indexOf(activeItem, true);

      setActiveItem((prevState) => {
        const currentState = [...prevState];

        currentState[activeIndex] = false;
        currentState[activeIndex + 1] = true;

        return currentState;
      });
    }
  }, [activeItem]);

  const handleClick = (index: 0 | 1 | 2 | 3) => {
    const stateList = [false, false, false, false];

    stateList[index] = true;

    setActiveItem(stateList);
  };

  const isDesktop = useMediaQuery('@media(min-width: 1024px)');

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {isDesktop && (
        <Box sx={{ ...styles.root, ...sx }} {...rest}>
          <Container sx={styles.container} maxWidth="lg">
            <Typography variant="h1" sx={styles.title}>
              Nossos serviços
            </Typography>

            <Box sx={styles.grid}>
              <Box sx={styles.timeItemContainer}>
                <OurServicesItem
                  active={activeItem[0]}
                  title="Desenvolvimento nativo"
                  fillTime={TRANSITION_TIME}
                  icon={CodeIcon}
                  onFillTimeEnd={callback}
                  onClick={() => handleClick(0)}
                />
                <OurServicesItem
                  active={activeItem[1]}
                  title="Branding"
                  fillTime={TRANSITION_TIME}
                  icon={BrandingIcon}
                  onFillTimeEnd={callback}
                  onClick={() => handleClick(1)}
                />
                <OurServicesItem
                  active={activeItem[2]}
                  title="Redes sociais"
                  fillTime={TRANSITION_TIME}
                  icon={SocialMediaIcon}
                  onFillTimeEnd={callback}
                  onClick={() => handleClick(2)}
                />
                <OurServicesItem
                  active={activeItem[3]}
                  fillTime={TRANSITION_TIME}
                  title="Anúncios"
                  icon={AdvertisementIcon}
                  onFillTimeEnd={callback}
                  onClick={() => handleClick(3)}
                />
              </Box>
              <MotionBox sx={styles.contentContainer}>
                <MotionBox
                  key={indexOf(activeItem, true)}
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.5,
                  }}
                  sx={styles.content}
                >
                  {CONTENT_LIST[indexOf(activeItem, true)]}
                </MotionBox>
              </MotionBox>
            </Box>
          </Container>
        </Box>
      )}
    </React.Fragment>
  );
}

export default OurServicesDesktop;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
    bgcolor: (theme) => theme.palette.secondary.main,
  },

  timeItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 5 },
  },

  contentContainer: {
    display: 'flex',
  },

  content: {
    fontSize: { xs: '2em' },
    color: (theme) => theme.palette.secondary.contrastText,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: { xs: '3.8em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.contrastText,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '50% 50%' },
    py: { xs: 10 },
  },
});
