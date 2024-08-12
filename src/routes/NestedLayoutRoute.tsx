import { Routes, Route } from "react-router-dom";

export const NestedLayoutRoute = ({ routes }) => {
  return (
    <Routes>
      {routes?.map((route, i) => {
        console.log("NestedLayoutRoute ==>", route);
        return <Route key={i}></Route>;
      })}
    </Routes>
  );
};
