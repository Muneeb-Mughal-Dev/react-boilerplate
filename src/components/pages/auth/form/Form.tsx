import { FormEvent } from "react";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/utils/styles";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@src/components/ui";

interface FormProps extends Children {
  button: string;
  className?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  button,
  children,
  className,
  handleSubmit,
}) => {
  const { pathname } = useLocation();

  const handleSubmitButton = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmitButton}
      className={cn(
        "max-w-sm w-full flex flex-col select-none items-center justify-center gap-8 shadow-2xl bg-background rounded-lg overflow-hidden border border-background-200",
        className
      )}
    >
      <div className="px-6 py-8 w-full space-y-8">
        {children}
        <Button type="submit" fullWidth>
          {button}
          <Icon name="chevron-right" size={14} />
        </Button>
      </div>
      <div className="w-full bg-background-200/50 py-8 shadow-md text-center ">
        <p className="text-sm">
          Don’t have an account?
          <Link
            to={pathname === "/login" ? "/register" : "/login"}
            className=" ml-1 text-primary underline underline-offset-2 font-semibold"
          >
            {pathname === "/login" ? "Register" : "Log in"}
          </Link>
        </p>
      </div>
    </form>
  );
};
