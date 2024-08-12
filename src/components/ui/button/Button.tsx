import { ElementType, useRef } from "react";
import { cn } from "@src/utils/styles/cn";
import { ripple as rippleEffect } from "@src/utils/styles/ripple";

interface ButtonProps extends Children {
  as?: ElementType;
  to?: string;
  icon?: React.ReactNode | string;
  type?: "button" | "submit";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "info"
    | "muted"
    | "danger"
    | "primary"
    | "success"
    | "warning"
    | "default"
    | "secondary";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "none";
  variant?: "solid" | "outline" | "default";
  shadow?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  rippleColor?: string;
  after?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  children,
  size = "md",
  color = "primary",
  rounded = "lg",
  shadow = false,
  type = "button",
  fullWidth = false,
  disabled = false,
  variant = "solid",
  ripple = true,
  rippleColor,
  onClick,
  icon,
  className,
  after = false,
  ...rest
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const btnSize =
    size === "xs"
      ? "px-3 py-2 text-xs"
      : size === "sm"
        ? "px-3 py-2 text-sm"
        : size === "md"
          ? "px-5 py-2.5 text-sm"
          : size === "lg"
            ? "px-5 py-3 text-base"
            : size === "xl"
              ? "px-6 py-3.5 text-base"
              : null;

  const rippleClr = rippleColor ? rippleColor : "bg-white/30";

  const btnColor =
    color === "primary" && variant === "default"
      ? "bg-muted/20 text-foreground"
      : color === "primary" && variant === "solid"
        ? "bg-primary text-white"
        : color === "primary" && variant === "outline"
          ? "border border-primary text-primary hover:bg-primary hover:text-white"
          : color === "secondary" && variant === "solid"
            ? "bg-secondary text-white"
            : color === "secondary" && variant === "outline"
              ? "border border-secondary text-secondary hover:bg-secondary hover:text-white"
              : color === "danger" && variant === "solid"
                ? "bg-destructive text-white"
                : color === "danger" && variant === "outline"
                  ? "border border-destructive text-destructive hover:bg-destructive hover:text-white"
                  : color === "muted" && variant === "solid"
                    ? "bg-muted text-muted-foreground"
                    : color === "muted" && variant === "outline"
                      ? "border border-muted-foreground text-muted-foreground hover:bg-muted hover:text-muted-foreground"
                      : color === "success" && variant === "solid"
                        ? "bg-success text-white"
                        : color === "success" && variant === "outline"
                          ? "border border-success text-success hover:bg-success hover:text-white"
                          : color === "warning" && variant === "solid"
                            ? "bg-warning text-white"
                            : color === "warning" && variant === "outline"
                              ? "border border-warning text-warning hover:bg-warning hover:text-white"
                              : color === "info" && variant === "solid"
                                ? "bg-info text-white"
                                : color === "info" && variant === "outline"
                                  ? "border border-info text-info hover:bg-info hover:text-white"
                                  : color === "default" && variant === "solid"
                                    ? "bg-muted text-foreground"
                                    : color === "default" &&
                                        variant === "outline"
                                      ? "border border-foreground text-foreground hover:bg-muted hover:text-foreground"
                                      : null;

  const btnRounded =
    rounded === "xs"
      ? "rounded"
      : rounded === "sm"
        ? "rounded-sm"
        : rounded === "md"
          ? "rounded-md"
          : rounded === "lg"
            ? "rounded-lg"
            : rounded === "xl"
              ? "rounded-xl"
              : rounded === "2xl"
                ? "rounded-2xl"
                : rounded === "3xl"
                  ? "rounded-3xl"
                  : rounded === "none"
                    ? "rounded-none"
                    : rounded === "full"
                      ? "rounded-full"
                      : null;

  const btnShadow = shadow ? "shadow-md shadow-primary-foreground" : "";

  const width = fullWidth ? "w-full" : "";

  const btnDisabled = disabled
    ? "cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
    : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      if (ripple) {
        rippleEffect(e, btnRef, rippleClr);
      }
      onClick();
    }
  };

  return (
    <Component
      id="bt"
      ref={btnRef}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      {...rest}
      className={cn(
        `relative inline-flex items-center gap-1 font-montserrat min-w-max overflow-hidden font-medium tracking-wider hover:bg-opacity-85 transition-all ease-out duration-200 ${btnRounded} ${btnShadow} ${btnSize} ${btnColor} ${width} ${btnDisabled}`,
        className
      )}
    >
      {!after && icon && <span>{icon}</span>}
      {children}
      {after && icon && <span>{icon}</span>}
    </Component>
  );
};
