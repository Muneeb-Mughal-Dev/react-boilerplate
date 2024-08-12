import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export type InputProps = {
  name: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "tel"
    | "url"
    | "search"
    | "checkbox"
    | "radio"
    | "file"
    | "color"
    | "range"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
  label?: string;
  forget?: boolean;
  required?: boolean;
  placeholder?: string;
  onChange?: (e: InputChangeEvent) => void;
  error?: ErrorType;
  defaultValue?: string;
  state?: string;
};

export const Input: React.FC<InputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  defaultValue,
  state,
  type = "text",
  forget = false,
  required = false,
  error = { name: null, state: false, message: null },
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("password");
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setPassword(showPassword ? "password" : "text");
  };

  return (
    <>
      {type !== "checkbox" ? (
        <div className="w-full flex flex-col gap-1.5">
          <label
            htmlFor={name}
            className={`flex items-center justify-between text-sm tracking-wide ${
              error.name === name && error.state
                ? "text-dander"
                : "text-foreground"
            }`}
          >
            <span>{label}</span>
            {type === "password" && forget && (
              <Link
                to="/"
                className="font-semibold text-primary hover:text-primary-100 transition-colors ease-out duration-200"
              >
                Forget password?
              </Link>
            )}
          </label>
          <div className="relative space-y-1">
            <input
              id={name}
              name={name}
              onChange={onChange}
              required={required}
              placeholder={placeholder}
              defaultValue={defaultValue}
              type={type === "password" ? password : type}
              autoComplete={type === "password" ? "new-password" : "off"}
              className={`block w-full rounded-sm border px-2 py-1.5 pl-4 bg-transparent text-foreground shadow-md placeholder:text-foreground-light sm:text-sm sm:leading-6 ${
                error.name === name && error.state
                  ? "border-dander"
                  : "border-foreground-light"
              }`}
            />
            {error.name === name && error.state && (
              <p className="text-xs text-left capitalize text-dander transition-all ease-out duration-300">
                {error.message}
              </p>
            )}
            {type === "password" && (
              <span
                className="absolute top-1 right-4 cursor-pointer text-foreground select-none"
                onClick={handleClickShowPassword}
              >
                {!showPassword ? (
                  <EyeOff strokeWidth={1.5} width={18} />
                ) : (
                  <Eye strokeWidth={1.5} width={18} />
                )}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center input">
          <input
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            defaultChecked={false}
            className="w-4 h-4  border appearance-none border-gray-300"
          />
          <label
            htmlFor={name}
            className={`ms-2 ${
              state ? "text-foreground" : "text-foreground/10"
            } text-sm `}
          >
            {label}
          </label>
        </div>
      )}
    </>
  );
};
