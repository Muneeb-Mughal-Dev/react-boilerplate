import { forwardRef } from "react";
import { Env } from "@src/constants";
import { Link } from "react-router-dom";
// import { Image } from "@src/components/ui";

export const Logo = forwardRef(() => {
  return (
    <Link to="/" className="flex items-center justify-center gap-0.5 lg:gap-2">
      {/* <Image
        src={logoIcon}
        alt="Awal-solution-logo-icon"
        className="w-8 lg:w-10"
      /> */}
      <h1 className="capitalize text-xl font-syne font-semibold">
        {Env.appTitle}
      </h1>
    </Link>
  );
});
