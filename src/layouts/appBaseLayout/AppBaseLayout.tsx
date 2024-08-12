import { Outlet } from "react-router-dom";

export const AppBaseLayout = () => {
  return (
    <div>
      <h1>base layout</h1>
      <Outlet />
    </div>
  );
};
