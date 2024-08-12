import React, { FormEvent, ReactNode } from "react";

import { cn } from "@src/utils/functions/cn";
import { Button } from "@src/components/ui";

interface FormProps {
  title?: string;
  button?: boolean;
  buttonTitle?: string;
  className?: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  title,
  children,
  className,
  buttonTitle,
  button = false,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(`w-full space-y-4 ${className}`)}
    >
      <div
        className={`flex items-center ${button ? "justify-between" : "justify-center"}`}
      >
        {title && (
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        )}
        {button && (
          <Button type="submit" size="md" shadow>
            {buttonTitle}
          </Button>
        )}
      </div>
      {children}
    </form>
  );
};
