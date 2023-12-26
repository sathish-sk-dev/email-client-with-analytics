import { useContext } from "react";
import { ThemeContextProps } from "./types/ThemeContextProps";
import { ThemeContext } from "./ThemeProvider";

/**
 * A custom hook to access the theme context.
 * @returns An object containing the current theme and a function to toggle between themes.
 */
export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};
