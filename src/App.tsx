import { RouterProvider } from "react-router-dom";

import { router } from "@src/routes/routes";
import { useRouter } from "@src/hooks/useRouter";
import { ThemeProvider } from "@src/contexts";

import { AnimatePresence } from "framer-motion";

export const App = () => {
  const pagesRaw = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  });
  const pages: Pages = Object.fromEntries(
    Object.entries(pagesRaw).map(([key, module]) => [key, module as PageModule])
  );

  const routes = useRouter(pages);
  const routerInstance = router(routes);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <RouterProvider
          router={routerInstance}
          fallbackElement={<p>Loading...</p>}
        />
      </AnimatePresence>
    </ThemeProvider>
  );
};
