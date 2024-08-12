import { useEffect, useState } from "react";

export interface SelectProps {
  setValue: React.Dispatch<React.SetStateAction<any>>;
  options: { label: string; value: string }[];
  title: string;
}

export const Select: React.FC<SelectProps> = ({ title, options, setValue }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const [selected, setSelected] = useState<{ label: string; value: string }>(
    options?.[0]
  );
  useEffect(() => {
    setValue((prevValue: any) => ({
      ...prevValue,
      country: { ...prevValue.country, value: selected.value },
    }));
  }, [selected, setValue]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative w-full flex flex-col gap-1.5">
      <h2 className="flex items-center justify-start text-sm tracking-wide">
        {title}
      </h2>
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center justify-between p-3 border border-foreground-light text-foreground-light focus:outline-none w-full"
      >
        <span className="text-sm leading-none block">{selected.label}</span>
        <svg
          className="w-4 h-4 mt-px ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`absolute top-full left-0 right-0 w-full bg-background flex flex-col mt-1 shadow-lg transition-all ease-in ${
          !toggle
            ? "scale-y-70 invisible pointer-events-none -z-50"
            : "scale-y-100 visible pointer-events-auto z-50 shadow-cs"
        }`}
      >
        {options?.map((option: any, i: number) => (
          <span
            key={i}
            onClick={() => {
              setSelected(option);
              handleToggle();
            }}
            className="flex items-center p-4 text-sm hover:bg-background-light cursor-pointer border border-foreground-light/10"
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};
