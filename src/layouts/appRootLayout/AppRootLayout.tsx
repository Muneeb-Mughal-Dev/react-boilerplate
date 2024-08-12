import { Outlet } from "react-router-dom";
import { AppNavbar } from "@src/layouts/appRootLayout/components/AppNavbar";

export const AppRootLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
    </div>
  );
};
