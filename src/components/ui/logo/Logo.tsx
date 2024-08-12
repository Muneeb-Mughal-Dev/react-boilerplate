import { forwardRef } from "react";
import { Env } from "@src/constants";
import { Link } from "react-router-dom";

export const Logo = forwardRef(() => {
  return (
    <Link to="/" className="flex items-center justify-center gap-0.5 lg:gap-2">
      <h1 className="capitalize text-2xl font-bold">{Env.appTitle}</h1>
    </Link>
  );
});
