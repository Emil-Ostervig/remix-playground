import { createContext } from "react";

export type ComponentShadeContextType = "dark" | "light";

/**
 * Dark is default shade of components, e.g. dark text on a light background.
 * Use 'light' component shade if the background is dark, e.g. text on images
 */
export const ComponentShadeContext =
  createContext<ComponentShadeContextType>("dark");
