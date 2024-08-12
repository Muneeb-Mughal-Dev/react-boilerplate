import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div>
      <nav>base</nav>
      <Outlet />
    </div>
  );
}
