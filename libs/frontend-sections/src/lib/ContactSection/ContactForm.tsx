import { BoxProps, Box, Button } from '@mui/material';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Save } from '@mui/icons-material';
import React from 'react';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';
import ContactFormInput, { ContactFormInputProps } from './ContactFormInput';
import ContactFormInputFull, {
  ContactFormInputFullProps,
} from './ContactFormInputFull';
import NumberFormat from 'react-number-format';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactFormProps extends BoxProps {
  NameInputProps?: ContactFormInputFullProps;
  PhoneInputProps?: ContactFormInputFullProps;
  EmailInputProps?: ContactFormInputFullProps;
  MessageInputProps?: ContactFormInputFullProps;
  ButtonProps?: LoadingButtonProps;
}

const ContactForm = ({
  sx,
  NameInputProps,
  PhoneInputProps,
  EmailInputProps,
  MessageInputProps,
  ButtonProps,
  ...rest
}: ContactFormProps) => {
  return (
    <Box sx={{ ...sx, ...styles.root }} {...rest}>
      <Box sx={styles.container}>
        <ContactFormInputFull {...NameInputProps} sx={styles.nameField} />

        <NumberFormat
          customInput={ContactFormInputFull}
          {...(PhoneInputProps as unknown)}
          format="(##) #-####-####"
          sx={styles.phoneField}
        />
        <ContactFormInputFull {...EmailInputProps} sx={styles.emailField} />
        <ContactFormInputFull
          {...MessageInputProps}
          sx={styles.messageField}
          rows={6}
          multiline
        />
        <LoadingButton
          {...ButtonProps}
          sx={styles.submitButton}
          size="small"
          variant="contained"
          color="primary"
        >
          Enviar
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default ContactForm;

const styles = AtlasStylesheet.create({
  root: {
    color: (theme) => theme.palette.primary.main,
  },

  container: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '50% 50%' },
    gridAutoFlow: 'row',
    gridTemplateRows: { xs: '1fr' },
    rowGap: { xs: 5 },
    columnGap: { xs: 1 },
  },

  nameField: {},
  phoneField: {},
  emailField: {
    gridColumn: { lg: '1/3' },
  },
  messageField: {
    gridColumn: { lg: '1/3' },
  },
  submitButton: {
    fontSize: { xs: '1.5em' },
    width: 'fit-content',
  },
});
