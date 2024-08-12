import { forwardRef } from "react";
import { APP_TITLE } from "@src/constants/variables";
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
        {APP_TITLE}
      </h1>
    </Link>
  );
});
