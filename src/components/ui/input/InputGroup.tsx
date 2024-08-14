import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";

export interface InputGroupProps {
  name: string;
  label?: string;
  onChange: any;
  defaultValues: any;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  name,
  label,
  onChange,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState<number[]>([0]);
  const [inputsData, setInputsData] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const valuesArray = Object.keys(inputsData)
      .sort((a, b) => parseInt(a.split("-")[1]) - parseInt(b.split("-")[1]))
      .map((key) => inputsData[key]);

    onChange({
      target: {
        name: name,
        value: valuesArray,
      },
    });
  }, [inputsData, name]);

  useEffect(() => {
    if (defaultValues) {
      const newInputs = defaultValues.map((_: any, i: number) => i);
      const newInputsData = defaultValues.reduce(
        (acc: any, item: any, i: number) => {
          acc[`option-${i + 1}`] = item;
          return acc;
        },
        {}
      );

      setInputs(newInputs);
      setInputsData(newInputsData);
    }
  }, [defaultValues]);

  const handleIncrement = () => {
    const newInputs = [...inputs, inputs.length];
    setInputs(newInputs);
  };

  const handleDecrement = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    const newInputsData = { ...inputsData };
    delete newInputsData[`option-${index + 1}`];
    for (let i = index + 1; i <= inputs.length; i++) {
      if (newInputsData[`option-${i + 1}`]) {
        newInputsData[`option-${i}`] = newInputsData[`option-${i + 1}`];
        delete newInputsData[`option-${i + 1}`];
      }
    }
    setInputsData(newInputsData);
  };

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setInputsData({ ...inputsData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <p className="flex ml-1 text-foreground font-sans items-center justify-between text-sm tracking-wide">
        {label}
      </p>
      {inputs.map((item, i) => (
        <div key={item} className="flex items-end justify-between gap-1">
          <Input
            name={`option-${i + 1}`}
            placeholder={`Option ${i + 1}`}
            defaultValue={inputsData[`option-${i + 1}`] || ""}
            onChange={handleChange}
          />
          <Button
            onClick={() => handleDecrement(i)}
            className={`${inputs.length === 1 ? "hidden" : ""}`}
          >
            <Minus size={18} />
          </Button>
          <Button onClick={handleIncrement}>
            <Plus size={18} />
          </Button>
        </div>
      ))}
    </div>
  );
};
