import { createContext } from "react";

export interface ToastContextType {
  toast: ToastProps;
  handleClose: () => void;
  handleShow: ({ message, type, state }: ToastProps) => void;
}

export const ToastContext = createContext<ToastContextType>({
  toast: { message: "", type: "success", state: false },
  handleShow: () => {},
  handleClose: () => {},
});
