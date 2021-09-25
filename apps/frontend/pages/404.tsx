import React from 'react';
import { NotFoundPage as NotFoundPageComponent } from '@atlascode/frontend-pages';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NotFoundPageProps {}

const NotFoundPage = (props: NotFoundPageProps) => {
  const router = useRouter();

  return (
    <NotFoundPageComponent
      RedirectButtonProps={{ onClick: () => router.push('/') }}
    />
  );
};

export default NotFoundPage;
