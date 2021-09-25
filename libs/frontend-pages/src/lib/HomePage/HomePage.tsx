import { Box, Typography } from '@mui/material';
import { AtlasStylesheet, scrollToElem } from '@atlascode/frontend-helpers';
import {
  HomeHero,
  DefenseSection,
  DefenseSectionAux,
  OurServicesDesktop,
  OurServicesMobile,
  CloudPitchSection,
  ProjectsSection,
  FAQ as FAQSection,
  FAQItem,
} from '@atlascode/frontend-sections';

import {
  ProjectItemProps,
  TestimonialSlider,
  TestimonialSliderItem,
} from '@atlascode/frontend-components';

/* eslint-disable-next-line */
export interface HomePageProps {}

const projects: ProjectItemProps[] = [
  {
    tags: ['Desenvolvimento', 'Rebranding', 'UI', 'UX'],
    techList: ['figma', 'react', 'next', 'node'],
    title: 'Website de cartas contempladas com automação de funções.',
    imgURL:
      'https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fprojeto-1.webp?alt=media',
    websiteURL: 'https://portalbens.com',
  },
  {
    tags: ['Desenvolvimento', 'UI', 'UX'],
    title: 'Projeto de mapeamento Cultural de Taquara',
    techList: ['figma', 'react', 'next', 'node'],
    imgURL:
      'https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fprojeto-2.webp?alt=media',
    websiteURL: 'https://mapa.pro-cidadania.org',
  },
  {
    tags: ['Desenvolvimento', 'UI', 'UX'],
    title: 'Website de cursos de pós-graduação e extensão em Medicina',
    techList: ['figma', 'react', 'next', 'node'],
    imgURL:
      'https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fprojeto-3.webp?alt=media',
    websiteURL: 'https://institutoeg.com',
  },
  {
    tags: ['Desenvolvimento', 'UI', 'UX'],
    title: 'Landing Page para assessoria integral em projetos culturais',
    techList: ['figma', 'react', 'gatsby', 'node'],
    imgURL:
      'https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fprojeto-4.webp?alt=media',
    websiteURL: 'https://www.pro-cidadania.org',
  },
  {
    tags: ['Desenvolvimento', 'Branding', 'UI', 'UX'],
    title: 'Landing Page de serralheria e prestação de serviço',
    techList: ['figma', 'react', 'gatsby', 'node'],
    imgURL:
      'https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fprojeto-5.webp?alt=media',
    websiteURL: 'https://hightechsc.com.br',
  },
];

const testimonials: TestimonialSliderItem[] = [
  {
    bgcolor: '#181D26',
    logo: './images/hightech.png',
    testimonial:
      'Só tenho a agradecer ao atendimento prestado pelo Atlas Code. Foram atenciosos do começo ao fim do projeto e me auxiliaram em diversas dúvidas sobre negócios digitais.',
    testimonialName: 'Enir Menezes',
    testimonialCompany: 'Serralheria High Tech',
  },
  {
    bgcolor: '#344E3E',
    logo: './images/portalbens.png',
    testimonial:
      'Sabemos que estamos seguros e muito bem amparados quando o assunto é assessoria para qualquer dúvida que possa surgir da nossa área. Agradeço aos profissionais do Atlas Code pelo empenho. E o nosso caminho agora é o topo do Google!',
    testimonialName: 'Matheus Teixeira de Oliveira',
    testimonialCompany: 'Sócio administrador - Portal Bens',
  },
];

const QUESTIONS: FAQItem[] = [
  {
    question: 'Existe algum valor de manutenção?',
    answer:
      'Não. A ideia é dar autonomia aos nossos clientes, oferecendo a facilidade de utilizar nosso painel administrativo para gerenciar seções do próprio website, fazendo modificações com facilidade em tempo real.',
  },
  {
    question: 'Quanto tempo leva pra criar um website?',
    answer:
      'Depende das funcionalidades que terão em seu website, mas pode variar entre 15 a 60 dias.',
  },
  {
    question: 'Qual o valor de um domínio?',
    answer:
      'Em média os valores são de R$ 40,00 a R$ 60,00 por ano. Domínios com nomes pequenos ou muito específicos tendem a ter um valor bem mais alto por causa da facilidade de acesso.',
  },
  {
    question: 'Todos os sites precisam de hospedagem?',
    answer:
      'Todo projeto precisa estar hospedado em algum local, mas isso não precisa ter um custo fixo. Podemos hospedar seu projeto em nuvem de forma gratuita. Você só começa a pagar alguns centavos caso tenha uma média maior do que 30 mil acessos por dia.',
  },
  {
    question: 'Como funciona o serviço em nuvem?',
    answer:
      'Diferente do serviço tradicional onde você provisionaria este e pagaria por todo custo operacional do mesmo, o serviço em nuvem lhe dá a liberdade de pagar apenas pelo que usar e a agilidade de calibrar recursos de acordo com as suas necessidades.',
  },
  {
    question: 'Como faço pra colocar meu site no Google?',
    answer:
      'É questão de tempo após colocar o seu website no ar para que ele comece a ser indexado pelos bots do Google. Isso pode ser acelerado utilizando ferramentas como o Google Search Console. A partir disso, você precisa trabalhar com boas práticas em SEO para subir no ranking de pesquisas de forma orgânica, ou investir em anúncios.',
  },
];

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <Box id="hero" sx={styles.heroSection}>
        <HomeHero ctaAction={() => scrollToElem('#services')} />
      </Box>

      <Box id="defense-1" sx={styles.defenseSection}>
        <DefenseSection />
      </Box>

      <Box id="defense-2" sx={styles.defenseSectionAux}>
        <DefenseSectionAux />
      </Box>

      <Box id="services" sx={styles.serviceRoot}>
        <Box sx={styles.serviceSection}>
          <OurServicesDesktop sx={styles.servicesDesktop} />
          <OurServicesMobile sx={styles.servicesMobile} />
        </Box>

        <Box sx={styles.cloudSection}>
          <CloudPitchSection sx={styles.cloudSectionInner} />
        </Box>
      </Box>

      <Box id="projects" sx={styles.projectsSection}>
        <ProjectsSection sx={styles.projectsInner} projects={projects} />
      </Box>

      <Box id="testimonials" sx={styles.testimonialsSection}>
        <Typography variant="h2" sx={styles.testimonialsSectionTitle}>
          O que dizem do nosso trabalho
        </Typography>
        <TestimonialSlider testimonials={testimonials} />
      </Box>

      <Box id="faq" sx={styles.faqSection}>
        <FAQSection questions={QUESTIONS} />
      </Box>
    </div>
  );
}

export default HomePage;

const styles = AtlasStylesheet.create({
  serviceRoot: {
    bgcolor: (theme) => theme.palette.secondary.main,
  },

  faqSection: {
    py: { xs: 8 },
    px: { xs: 2, lg: 0 },
  },

  defenseSection: {
    py: { xs: 8 },
  },
  defenseSectionAux: {
    py: { xs: 8 },
  },

  heroSection: {},
  serviceSection: {},

  servicesDesktop: {
    py: { xs: 8 },
    pb: { xs: 0 },
  },

  servicesMobile: {},

  cloudSection: {},

  cloudSectionInner: {
    py: { xs: 6 },
  },
  projectsSection: {},

  projectsInner: {
    py: { xs: 8 },
  },

  testimonialsSection: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    py: { xs: 8 },
    fontSize: '10px',
    flexDirection: 'column',
    gap: { xs: 4.75 },
    textAlign: 'center',
  },

  testimonialsSectionTitle: {
    fontSize: { xs: '2.4em', lg: '3.2em' },
    fontWeight: 900,
    color: (theme) => theme.palette.secondary.light,
  },
});
