declare interface Children {
  children: ReactNode;
}

declare type Theme = "light" | "dark";

declare type InputChangeEvent = ChangeEvent<HTMLInputElement>;

declare type ErrorType = {
  name: string | null;
  state: boolean;
  message: string | null;
};

declare type ToastProps = {
  message: string;
  type: "success" | "warning" | "error";
  state: boolean;
};
