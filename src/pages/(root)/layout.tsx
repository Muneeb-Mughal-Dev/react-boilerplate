import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>root</nav>
      <Outlet />
    </div>
  );
}
