import { useLoaderData } from '@remix-run/react';
import { DefaultLayout } from '~/components/Layout/DefaultLayout/DefaultLayout';
import { ErrorBoundary as ErrorBoundaryComponent } from '~/components/Layout/ErrorBoundary/ErrorBoundary';
import { PageContext } from '~/context/PageContext/PageContext';
import { pageLoader } from '~/loaders/pageLoader';

export const loader = pageLoader;
export default function Index() {
  const page = useLoaderData<typeof pageLoader>();
  return (
    <PageContext.Provider value={page}>
      <DefaultLayout/>
    </PageContext.Provider>
  );
}


export const ErrorBoundary = ErrorBoundaryComponent;