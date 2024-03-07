import { HeadersFunction } from '@remix-run/node';
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

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers();
  // Headers to forward from CMS
  const headersFromCms = [
    'Cache-Control',
  ]

  for (const header of headersFromCms) {
    if (loaderHeaders.has(header)) {
      headers.set(header, loaderHeaders.get(header)!)
    }
  };
  
  // Custom headers added to the response
  const customHeaders = {
    'Some-Custom-Header': 'Some-Custom-Value'
  }
  for (const [key, value] of Object.entries(customHeaders)) {
    headers.set(key, value)
  }
  return headers;
};

export const loader = pageLoader;
export const ErrorBoundary = ErrorBoundaryLayout;
export default Index;
