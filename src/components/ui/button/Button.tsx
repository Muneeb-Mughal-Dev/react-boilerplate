import { useRef } from "react";
import { cn } from "@src/utils/styles/cn";
import { ripple as rippleEffect } from "@src/utils/styles/ripple";

interface ButtonProps extends ChildrenWithElement {
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
    | "secondary";
  rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "none";
  variant?: "solid" | "outline";
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

  const styles = {
    base: "relative inline-flex border items-center gap-1.5 hover:gap-0.5 font-primary min-w-max overflow-hidden font-medium tracking-wider hover:bg-opacity-85 transition-all ease-out duration-300",
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-3 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base",
    },
    color: {
      info: "bg-info text-white",
      muted: "bg-muted text-muted-foreground",
      danger: "bg-destructive text-white",
      primary:
        "bg-primary text-white before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-primary",
      success: "bg-success text-white",
      warning: "bg-warning text-white",
      secondary: "bg-secondary text-white",
    },
    variant: {
      solid: `bg-${color} text-white border-${color}`,
      outline: `border-${color} bg-transparent text-${color} hover:bg-${color} hover:text-white`,
    },
    rounded: {
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
      none: "rounded-none",
    },
    disabled:
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none before:disabled:shadow-none after:disabled:shadow-none",
    shadow: "shadow-md shadow-primary-foreground",
    fullWidth: "w-full justify-center",
  };

  const rippleClr = rippleColor ? rippleColor : "bg-white/30";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      rippleEffect(e, btnRef, rippleClr);
      if (onClick) {
        onClick();
      }
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
        styles.base,
        styles.size?.[size],
        styles.color?.[color],
        styles.variant?.[variant],
        styles.rounded?.[rounded],
        styles.disabled,
        shadow && styles.shadow,
        fullWidth && styles.fullWidth,
        className
      )}
    >
      {!after && icon && <span>{icon}</span>}
      {children}
      {after && icon && <span>{icon}</span>}
    </Component>
  );
};
