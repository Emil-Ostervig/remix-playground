import { MetaFunction, useLoaderData } from '@remix-run/react';
import { DefaultLayout } from '~/components/Layout/DefaultLayout/DefaultLayout';
import { ErrorBoundary as ErrorBoundaryLayout } from '~/components/Layout/ErrorBoundary/ErrorBoundary';
import { PageContext } from '~/context/PageContext/PageContext';
import { pageLoader } from '~/loaders/pageLoader';



export const Index = () => {
  const page = useLoaderData<typeof pageLoader>();
  return (
    <PageContext.Provider value={page}>
      <DefaultLayout />
    </PageContext.Provider>
  );
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.pageTitle ?? data?.meta?.title }];
};

export const headers = () => ({
  'Cache-Control': 'public, max-age=300, must-revalidate',
});

export const loader = pageLoader;
export const ErrorBoundary = ErrorBoundaryLayout;
export default Index;
