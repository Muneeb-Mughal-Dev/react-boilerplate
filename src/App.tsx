import "@src/assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { PageModule, Pages } from "./hooks/useRouter";
import { Router } from "./routes/routes";

export const App = () => {
  const pagesRaw = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  });
  const pages: Pages = Object.fromEntries(
    Object.entries(pagesRaw).map(([key, module]) => [key, module as PageModule])
  );

  // const routes = useRouter(pages)

  return (
    <BrowserRouter>
      <Router pages={pages} />
    </BrowserRouter>
  );
};
