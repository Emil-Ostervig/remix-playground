import { Frame } from "./types";
export const getFrame = async ({ locale }: { locale: string }) => {
  const url = `${process.env.CMS_API_URL}/api/content/frame/${process.env.CMS_AMPLIENCE_ID}/${locale}`;
  const apiRoute = new URL(url);
  console.log(`fetching frame at url: ${apiRoute.toString()}`);
  const res = await fetch(apiRoute).then((res) => res.json());

  return res as Frame;
};
