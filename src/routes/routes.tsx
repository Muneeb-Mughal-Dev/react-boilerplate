// import React from "react";
// import { createBrowserRouter, RouteObject, } from "react-router-dom";

// export const router = (routes: any) => {
//   console.log("routes==>", routes);
//   const buildRoutes = (routes: any[]): RouteObject[] => {
//     if (!routes) return [];

//     return routes.map((route) => {
//       const { path, element, children } = route;

//       return {
//         path,
//         element: React.createElement(element),
//         children: children ? buildRoutes(children) : undefined,
//       };
//     });
//   };

//   const routesArray = routes ? buildRoutes(routes.children) : [];

//   console.log("routesArray==>", routesArray);

//   return createBrowserRouter(routesArray);
// };

import { Pages, useRouter } from "@src/hooks/useRouter";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const Router = ({ pages }: { pages: Pages }) => {
  const { children, element: Component } = useRouter(pages);

  return (
    <Routes>
      {Component && (
        <Route element={<Component />}>
          {children.map((child, i) => {
            const { element: Component, children } = child;
            return (
              <Fragment key={i}>
                {Component && (
                  <Route element={<Component />}>
                    {children?.map((route, i) => {
                      const { path, element: Component } = route;
                      return (
                        <Fragment key={i}>
                          {Component && (
                            <Route
                              key={i}
                              path={path}
                              element={<Component />}
                            />
                          )}
                        </Fragment>
                      );
                    })}
                  </Route>
                )}
              </Fragment>
            );
          })}
        </Route>
      )}
    </Routes>
  );
};
