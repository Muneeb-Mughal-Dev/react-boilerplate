import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "@src/assets/styles/index.css";

export const AppBaseLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
