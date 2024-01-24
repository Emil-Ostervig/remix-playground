import { useLoaderData } from "@remix-run/react";
import { DynamicBlocks } from "~/components/modules/DynamicBlocks/DynamicBlocks";
import { Navigation } from "~/components/Navigation/Navigation";
import { PageContext } from "~/context/PageContext/PageContext";
import { pageLoader } from "~/loaders/pageLoader";


export const loader = pageLoader;
export default function Index() {
  const page = useLoaderData<typeof pageLoader>();
  return (
    <PageContext.Provider value={{ page: page }}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <Navigation />
        <DynamicBlocks elements={page.modules ?? []}/>
      </div>
    </PageContext.Provider>
  );
}
