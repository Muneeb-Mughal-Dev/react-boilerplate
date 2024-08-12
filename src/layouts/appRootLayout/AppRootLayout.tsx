import { Outlet } from "react-router-dom";

export const AppRootLayout = () => {
  return (
    <div>
      <h1>root layout</h1>
      <Outlet />
    </div>
  );
};
