import { normalizePath } from "@src/utils";

export type PageModule = {
  default: React.ComponentType;
};

export type Pages = {
  [key: string]: PageModule;
};

export interface RouterProps {
  pages: Pages;
}

interface Route {
  path: string;
  component: React.ComponentType;
}

export const useRouter = (pages: Pages): Route[] => {
  const routes = Object.keys(pages)
    .map((key) => {
      const path = normalizePath(key);

      if (!pages[key].default) {
        console.warn(`${key} doesn't export a default React component`);
        return null;
      }

      return {
        path,
        component: pages[key].default,
      };
    })
    .filter((route): route is Route => route !== null);

  return routes;
};
