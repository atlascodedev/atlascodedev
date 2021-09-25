import { Accordion } from '@atlascode/frontend-components';
import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { Box, BoxProps, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

export type FAQItem = { question: string; answer: string };

/* eslint-disable-next-line */
export interface FAQProps extends BoxProps {
  questions: FAQItem[];
}

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
      'É uma tecnologia que permite guardar dados na internet através de um servidor online que está sempre funcionado. Nele, o usuário pode armazenar arquivos, informações e documentos sem precisar de um HD físico.',
  },
  {
    question: 'Como faço pra colocar meu site no Google?',
    answer:
      'É questão de tempo após colocar o seu website no ar para que ele comece a ser indexado pelos bots do Google. Isso pode ser acelerado utilizando ferramentas como o Google Search Console. A partir disso, você precisa trabalhar com boas práticas em SEO para subir no ranking de pesquisas de forma orgânica, ou investir em anúncios.',
  },
];

export function FAQ({ sx, questions, ...rest }: FAQProps) {
  const defaultStylesMemo = useMemoizedMergedObject(defaultStyles(), sx);

  return (
    <Box sx={defaultStylesMemo} {...rest}>
      <Box className="Atlas-FAQ-root">
        <Box className="container">
          <Typography variant="h2" className="title">
            Perguntas frequentes
          </Typography>

          <Box className="accordion-container">
            {QUESTIONS.map((value, index) => {
              return (
                <Accordion
                  content={value.answer}
                  title={value.question}
                  key={index}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FAQ;

const defaultStyles = () => {
  return {
    '.Atlas-FAQ-root': {
      width: '100%',
      fontSize: '10px',

      '.container': {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
      },

      '.title': {
        fontSize: { xs: '3.2em' },
        color: (theme) => theme.palette.secondary.main,
        fontWeight: 900,
        textAlign: 'center',
        py: { xs: 3, lg: 4 },
      },

      '.accordion-container': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: { xs: '1em', lg: '2em' },
        px: { lg: 30 },
      },
    },
  } as SxProps<Theme>;
};
