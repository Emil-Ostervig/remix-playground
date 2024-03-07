import { LoaderFunctionArgs } from '@remix-run/node';
import { getFrame } from '~/api/getFrame';

export const frameLoader = async ({ params: _params, context: _context, request: _request }: LoaderFunctionArgs) => {
  try {
    const data = await getFrame({
      locale: 'en',
    });
    return data;
  } catch (e) {
    console.error(e);
  }
  return {};
};
