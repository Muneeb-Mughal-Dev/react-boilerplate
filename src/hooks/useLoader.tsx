import { useContext } from "react";
import { LoaderContext } from "@src/contexts/loader";

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) throw new Error("Expected to be wrapped in a Loader Provider");

  return context;
};
