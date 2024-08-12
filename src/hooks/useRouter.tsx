import React from "react";
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

export interface Route {
  path: string;
  element: React.ComponentType;
  layout?: string;
  children?: Route[];
}

export interface NestedRoutes {
  element?: React.ComponentType;
  children: Route[] | NestedRoutes[];
}

const groupRoutes = (pages: Pages): Route[] => {
  const routes: Route[] = [];

  Object.keys(pages).forEach((key) => {
    const path = normalizePath(key);
    const segments = path.split("/");
    let currentPath = "";

    segments.forEach((segment) => {
      if (segment.startsWith("(") && segment.endsWith(")")) {
        return;
      }
      currentPath += `/${segment}`;
    });
    console.log("currentPath==>", currentPath);
    if (!key.endsWith("layout.tsx") && pages[key].default) {
      routes.push({
        path: currentPath,
        element: pages[key].default,
        layout: segments[1],
      });
    }
  });

  return routes;
};

const nestRoutes = (routes: Route[], pages: Pages): NestedRoutes => {
  const nestedRoutes: NestedRoutes = { children: [] };

  const addLayouts: NestedRoutes[] = [];

  Object.keys(pages).forEach((key) => {
    const path = normalizePath(key);
    const segments = path.split("/")[1];
    if (key === `./pages/${segments}/layout.tsx`) {
      addLayouts.push({
        element: pages[`./pages/${segments}/layout.tsx`]?.default,
        children: routes.filter((route) => {
          return route.layout === segments;
        }),
      });
    }
    if (segments === "layout") {
      nestedRoutes.element = pages[key].default;
      nestedRoutes.children = addLayouts.length > 0 ? addLayouts : routes;
    }
  });

  if (!nestedRoutes.children.length) {
    nestedRoutes.children = routes;
  }

  return nestedRoutes;
};

export const useRouter = (pages: Pages): NestedRoutes => {
  const routes = groupRoutes(pages);
  const nestedRoutes = nestRoutes(routes, pages);

  return nestedRoutes;
};
