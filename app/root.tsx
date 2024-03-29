import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, ShouldRevalidateFunction, useLoaderData } from '@remix-run/react';
import { FrameContext } from './context/FrameContext/FrameContext';
import { frameLoader } from './loaders/frameLoader';
import './styles/reset.css';
import './styles/vars.css';
import './styles/global.css';

export const links: LinksFunction = () => [...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])];

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams: _currentParams,
  defaultShouldRevalidate,
  json: _json,
  nextParams: _nextParams,
  nextUrl: _nextUrl,
  text: _text,
  actionResult: _actionResult,
}) => {
  return defaultShouldRevalidate;
};

export const loader = frameLoader;

export default function App() {
  const frame = useLoaderData<typeof frameLoader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <FrameContext.Provider value={frame}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </FrameContext.Provider>
      </body>
    </html>
  );
}
