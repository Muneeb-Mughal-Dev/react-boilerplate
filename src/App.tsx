import "@src/assets/styles/index.css";
import { RouterProvider } from "react-router-dom";
import { useRouter } from "@src/hooks/useRouter";
import { router } from "@src/routes/routes";

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
    <RouterProvider
      router={routerInstance}
      fallbackElement={<p>Loading...</p>}
    />
  );
};
