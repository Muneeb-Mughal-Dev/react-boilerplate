import { Outlet } from "react-router-dom";
import { PageTransition } from "@src/components/animations";

export const AppAuthLayout = () => {
  return (
    <PageTransition>
      <h1>auth layout</h1>
      <Outlet />
    </PageTransition>
  );
};
