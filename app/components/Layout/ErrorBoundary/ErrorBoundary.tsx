import React from 'react'
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { Pages } from '~/api/types';
import { PageContext } from '~/context/PageContext/PageContext';
import { DefaultLayout } from '../DefaultLayout/DefaultLayout';

export const ErrorBoundary = () => {
  const error = useRouteError() as { data: { page: Pages } } | undefined;
  if (isRouteErrorResponse(error)) {
    // error.status = 500
    // error.data = "Oh no! Something went wrong!"
  }
  return (
    <PageContext.Provider value={(error?.data?.page)}>
      <DefaultLayout/>
    </PageContext.Provider>

  )
}