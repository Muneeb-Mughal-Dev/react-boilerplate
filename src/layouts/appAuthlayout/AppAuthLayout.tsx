import { Outlet } from "react-router-dom";

export const AppAuthLayout = () => {
  return (
    <div>
      <h1>auth layout</h1>
      <Outlet />
    </div>
  );
};
