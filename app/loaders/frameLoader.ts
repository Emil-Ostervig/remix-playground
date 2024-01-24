import { LoaderFunctionArgs } from "@remix-run/node";
import { getFrame } from "~/api/get-frame";

export const frameLoader = async ({
  params,
  context,
  request,
}: LoaderFunctionArgs) => {
  try {
    const data = await getFrame({
      locale: "en",
    });
    return data;
  } catch (e) {
    console.error(e);
  }
  return {};
};
