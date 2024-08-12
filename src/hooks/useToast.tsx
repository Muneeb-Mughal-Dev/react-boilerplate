import { useContext } from "react";
import { ToastContext } from "@src/contexts/toast";

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("Expected to be wrapped in a Toast Provider");

  return context;
};
