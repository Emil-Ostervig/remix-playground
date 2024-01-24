import { LoaderFunctionArgs } from "@remix-run/node";
import { getPage } from "~/api/get-page";
import { Pages } from "~/api/types";

export const pageLoader = async ({
  params,
  context,
  request,
}: LoaderFunctionArgs) => {
  const route = params?.["*"];
  try {
    const data = await getPage({
      route: route ? `/${route}` : "/",
      locale: "en",
    });
    return data as Pages;
  } catch (e) {
    console.error(e);
  }
};
