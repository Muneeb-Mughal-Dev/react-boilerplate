import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <nav>auth</nav>
      <Outlet />
    </div>
  );
}
