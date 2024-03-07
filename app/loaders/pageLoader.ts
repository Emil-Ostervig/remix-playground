import { json, LoaderFunctionArgs } from '@remix-run/node';
import { getPage } from '~/api/getPage';

export const pageLoader = async ({ params, context: _context, request: _request }: LoaderFunctionArgs) => {
  const routeParam = params?.['*'] ?? '';
  const route = `/${routeParam}`;
  try {
    const data = await getPage({
      route: `${route}`,
      locale: 'en',
    });

    return json(data, {
      // This is just a mock of what the API would respons with.
      headers: {
        'Cache-Control': 'public, max-age=120, s-maxage=60, stale-while-revalidate=60, stale-while-error=3600',
      },
    });
  } catch (e) {
    console.error(e);
    throw new Response(null, {
      status: 500,
      statusText: 'whoops',
    });
  }
};
