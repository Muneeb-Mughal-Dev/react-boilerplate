import { useState } from "react";
import { Button } from "@src/components/ui";

const tabsData = [
  { id: 1, button: "Payment" },
  { id: 2, button: "Branding" },
  { id: 3, button: "Security" },
  { id: 4, button: "Security" },
  { id: 5, button: "Security" },
  { id: 6, button: "Security" },
  { id: 7, button: "Security" },
  { id: 8, button: "Security" },
  { id: 9, button: "Security" },
  { id: 11, button: "Security" },
  { id: 12, button: "Security" },
];

export const ButtonGroup = () => {
  const [active, setActive] = useState<{ id: number; state: boolean }>({
    id: 1,
    state: true,
  });
  return (
    <div className="custom_scrollbar flex flex-nowrap items-center gap-4 bg-foreground-light/15 p-2 rounded-t-lg shadow backdrop-blur-md w-full overflow-x-auto">
      {tabsData?.map((tab) => (
        <div key={tab.id} className="mx-auto">
          <Button
            size="xs"
            rounded="lg"
            variant="solid"
            color={active.id === tab.id ? "primary" : "default"}
            onClick={() => setActive({ ...active, id: tab.id })}
          >
            {tab.button}
          </Button>
        </div>
      ))}
    </div>
  );
};
