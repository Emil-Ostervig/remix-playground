import { createContext, useContext } from "react";
import { Pages } from "~/api/types";

export const PageContext = createContext<Pages | {}>({});
export const usePage = () => useContext(PageContext);
