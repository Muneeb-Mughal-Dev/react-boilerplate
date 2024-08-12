import { useTheme } from "@src/hooks";
import { Button, Icon } from "@src/components/ui";

export const ThemeToggler = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <Button after shadow size="xs" onClick={themeToggler}>
      <Icon name={theme === "dark" ? "sun-medium" : "moon-star"} size={18} />
    </Button>
  );
};
