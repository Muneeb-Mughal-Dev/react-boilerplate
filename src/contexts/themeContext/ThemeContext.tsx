import { createContext } from "react";

type ThemeContextType = {
  theme: Theme;
  themeToggler: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
