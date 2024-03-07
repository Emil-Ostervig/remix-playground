import { LoaderFunctionArgs } from '@remix-run/node';
import { getPage } from '~/api/getPage';

export const pageLoader = async ({ params, context: _context, request: _request }: LoaderFunctionArgs) => {
  const routeParam = params?.['*'] ?? '';
  const route = `/${routeParam}`;
  let data;
  try {
    data = await getPage({
      route: `${route}`,
      locale: 'en',
    });
  } catch (e) {
    console.error(e);
    throw new Response(null, {
      status: 500,
      statusText: 'whoops',
    });
  }

  return data;
};
