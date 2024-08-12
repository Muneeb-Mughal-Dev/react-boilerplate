import { Outlet } from "react-router-dom";
import { AppNavbar } from "@src/layouts/appRootLayout/components/AppNavbar";
import { PageTransition } from "@src/components/animations";

export const AppRootLayout = () => {
  return (
    <>
      <AppNavbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
};
