import { useState } from "react";
import { ToastContext } from "@src/contexts/toast";

export const ToastProvider = ({ children }: Children) => {
  const [toast, setToast] = useState<ToastProps>({
    message: "",
    type: "success",
    state: false,
  });

  const handleClose = () => {
    setToast({ message: "", type: "success", state: false });
  };

  const handleShow = ({ message, type, state }: ToastProps): void => {
    setToast({ message: message, type: type, state: state });
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast, handleShow, handleClose }}>
      {children}
    </ToastContext.Provider>
  );
};
