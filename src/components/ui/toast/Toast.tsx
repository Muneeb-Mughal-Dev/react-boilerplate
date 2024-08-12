import { Check, CircleAlert, X } from "lucide-react";

import { useToast } from "@src/hooks";
import { Button } from "@src/components/ui";

interface ToastProps {
  message: string;
  close: boolean;
  type: "success" | "warning" | "error";
}

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  close = false,
}) => {
  const { handleClose } = useToast();

  const toastColour =
    type === "success"
      ? "text-green-200 bg-green-600"
      : type === "error"
        ? "bg-red-600 text-foreground"
        : type === "warning"
          ? "bg-yellow-600 text-foreground"
          : null;

  return (
    <div
      role="alert"
      id={`toast-${type}`}
      className="fixed top-5 z-40 w-full bg-transparent select-none pointer-events-none"
    >
      <div className="flex items-center">
        <div
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 shadow-2xl rounded-sm ${toastColour}`}
        >
          {type === "success" ? (
            <Check size={18} />
          ) : type === "error" ? (
            <X size={18} />
          ) : type === "warning" ? (
            <CircleAlert size={18} />
          ) : null}
        </div>
        <div className="ms-3 text-sm font-normal text-foreground-light">
          {message}
        </div>
      </div>
      {close && (
        <Button size="xs" color="default" onClick={handleClose}>
          <X size={18} />
        </Button>
      )}
    </div>
  );
};
