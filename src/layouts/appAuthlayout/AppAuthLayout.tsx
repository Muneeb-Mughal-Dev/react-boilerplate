import { Outlet } from "react-router-dom";
import { PageTransition } from "@src/components/animations";

export const AppAuthLayout = () => {
  return (
    <PageTransition>
      <section className="w-full h-svh sm:h-lvh flex items-center justify-center">
        <Outlet />
      </section>
    </PageTransition>
  );
};
