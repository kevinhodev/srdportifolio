import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const useTheme = () => {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
};

export { useTheme };
