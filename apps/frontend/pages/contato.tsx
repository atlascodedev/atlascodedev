/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ContactPage as ContactPageComponent } from '@atlascode/frontend-pages';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ContactPageProps {}

const ContactPage = (props: ContactPageProps) => {
  const {
    values,
    errors,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: (values, action) => console.log(values, action),
    validationSchema: Yup.object({
      name: Yup.string().required('Este campo é obrigatório'),
      email: Yup.string()
        .email('É preciso ser um e-mail válido')
        .required('Este campo é obrigatório'),
      phone: Yup.string().required('Este campo é obrigatório'),
      message: Yup.string().required('Este campo é obrigatório'),
    }),
  });

  return (
    <ContactPageComponent
      ButtonProps={{
        loading: isSubmitting,
        disabled: !isValid,
      }}
      NameInputProps={{
        value: values.name,
        onChange: handleChange,
        name: 'name',
        onBlur: handleBlur,
        error: Boolean(errors.name),
        label: 'Nome',
        helperText: errors.name,
      }}
      EmailInputProps={{
        value: values.email,
        onChange: handleChange,
        name: 'email',
        onBlur: handleBlur,
        error: Boolean(errors.email),
        label: 'E-mail',
        helperText: errors.email,
      }}
      PhoneInputProps={{
        value: values.phone,
        onChange: handleChange,
        onBlur: handleBlur,
        name: 'phone',
        error: Boolean(errors.phone),
        helperText: errors.phone,
        label: 'Telefone',
      }}
      MessageInputProps={{
        value: values.message,
        onChange: handleChange,
        onBlur: handleBlur,
        name: 'message',
        error: Boolean(errors.message),
        helperText: errors.message,
        label: 'Mensagem',
      }}
    />
  );
};

export default ContactPage;
