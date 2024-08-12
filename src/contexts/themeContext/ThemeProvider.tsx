import { ReactNode, useEffect, useState } from "react";

import { storage } from "@src/utils/storage";
import { CURRENT_THEME } from "@src/utils/storage/variables";
import { ThemeContext } from "@src/contexts/themeContext/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = storage.get(CURRENT_THEME) as "light" | "dark" | null;
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  const themeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    storage.set(CURRENT_THEME, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
