import { Pages } from "./types";
export const getPage = async ({
  route,
  locale,
}: {
  route: string;
  locale: string;
}) => {
  const url = `${process.env.CMS_API_URL}/api/content/page/${process.env.CMS_AMPLIENCE_ID}/${locale}`;
  const apiRoute = new URL(url);
  apiRoute.searchParams.set("path", route);
  console.log(`fetching page at url: ${apiRoute.toString()}`);
  const res = await fetch(apiRoute).then((res) => res.json());

  return res as Pages;
};
