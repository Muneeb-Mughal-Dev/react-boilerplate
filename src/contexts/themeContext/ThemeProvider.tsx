import { useEffect, useState } from "react";
import { CURRENT_THEME } from "@src/libs/storage";
import { ThemeContext } from "@src/contexts/themeContext/ThemeContext";

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (typeof window !== undefined) {
      const currentTheme = window.localStorage.getItem(CURRENT_THEME);
      if (currentTheme) {
        setTheme(currentTheme as "light" | "dark");
      }
    }
  }, []);

  const themeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem(CURRENT_THEME, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
