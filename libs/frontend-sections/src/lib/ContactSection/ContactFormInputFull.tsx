import React from 'react';
import { FormControl, FormHelperText } from '@mui/material';
import ContactFormInput, { ContactFormInputProps } from './ContactFormInput';
import { Box } from '@mui/system';
import { AtlasStylesheet } from '@atlascode/frontend-helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactFormInputFullProps extends ContactFormInputProps {
  label?: string;
  helperText?: string;
}

const ContactFormInputFull = ({
  label = 'Placeholder label',
  sx,
  helperText = ' ',
  ...rest
}: ContactFormInputFullProps) => {
  const styleMemo = React.useMemo(() => styles(rest.error), [rest.error]);

  return (
    <FormControl sx={{ ...sx, ...styleMemo.formControl }} variant="standard">
      <Box
        sx={styleMemo.label}
        component="label"
        htmlFor={`$label-for-${label}`}
      >
        {label}
      </Box>
      <ContactFormInput
        {...rest}
        sx={styleMemo.input}
        id={`$label-for-${label}`}
      />
      <FormHelperText
        sx={styleMemo.helperText}
        error={rest.error}
        id={`$label-for-${label}`}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default ContactFormInputFull;

const styles = (error = false) =>
  AtlasStylesheet.create({
    formControl: {
      transition: 'all 0.3s ease',
      color: (theme) =>
        (error && theme.palette.error.main) || theme.palette.secondary.light,
      fontSize: '10px',
      ':focus-within': {
        color: (theme) =>
          (error && theme.palette.error.dark) || theme.palette.primary.main,
      },
      gap: { xs: 1 },
    },
    label: {
      fontSize: '1.6em',
      fontWeight: 700,
    },
    input: {},

    helperText: {
      fontSize: { xs: '1.2em', lg: '1.2em' },
    },
  });
