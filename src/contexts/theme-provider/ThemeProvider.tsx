import React, { createContext, useEffect, useState } from "react";
import { ThemeContextProps } from "./types/ThemeContextProps";
import { ThemeProviderProps } from "./types/ThemeProviderProps";
import { Theme } from "./enums/Theme";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

/**
 * ThemeProvider is a context provider that manages the theme state and provides a function to toggle between themes.
 * @param children - The children components that will have access to the theme context.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("style", "overflow: hidden;");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.DARK,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
