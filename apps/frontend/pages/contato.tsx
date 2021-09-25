/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { ContactPage as ContactPageComponent } from '@atlascode/frontend-pages';
import { useFormik } from 'formik';
import { FormService } from '@atlascode/frontend-services';
import * as Yup from 'yup';
import Head from 'next/head';
import { alertStore } from '@atlascode/frontend-utility';
import { deviceAwareWhatsappURL } from '@atlascode/frontend-helpers';

interface ContactPageProps {}

const ContactPage = (props: ContactPageProps) => {
  const alertDispatch = alertStore((state) => state.dispatch);

  const {
    values,
    errors,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    submitForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: (values, action) => {
      action.setSubmitting(true);
      alertDispatch({ message: 'Enviando sua mensagem...', severity: 'info' });

      FormService.postContact(
        values.email,
        values.name,
        values.phone,
        values.message
      )
        .then(() => {
          alertDispatch({
            message:
              'Sua mensagem foi enviada com sucesso! Obrigado pelo contato, retornaremos em breve!',
            severity: 'success',
          });
          action.setSubmitting(false);
          action.resetForm();
        })
        .catch((err) => {
          alertDispatch({
            severity: 'error',
            message:
              'Houve um erro ao tentar enviar sua mensagem, recarregue a página e tente novamente. Se o erro persistir, por favor, tente o contato através do nosso WhatsApp. Pedimos desculpas pela inconveniência.',
          });
          console.error(err);
          action.setSubmitting(false);
        });
    },
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
    <div>
      <Head>Contato - AtlasCode - Desenvolvimento {'&'} estratégia.</Head>

      <ContactPageComponent
        whatsAppURL={deviceAwareWhatsappURL(
          '5551993836839',
          'Olá, vim através do website e gostaria de mais informações.'
        )}
        facebookURL={'https://www.facebook.com/atlascodedev/'}
        instagramURL={'https://www.instagram.com/atlascode'}
        ButtonProps={{
          loading: isSubmitting,
          disabled: !isValid,
          onClick: submitForm,
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
    </div>
  );
};

export default ContactPage;
