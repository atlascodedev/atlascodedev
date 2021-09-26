import React from 'react';
import { ContactConfirmationPage } from '@atlascode/frontend-pages';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactRedirectPageProps {}

const ContactRedirectPage = (props: ContactRedirectPageProps) => {
  const router = useRouter();

  return (
    <ContactConfirmationPage
      ReturnButtonProps={{ onClick: () => router.push('/') }}
    />
  );
};

export default ContactRedirectPage;
