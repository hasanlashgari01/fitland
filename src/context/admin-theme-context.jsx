import { createContext, useContext, useEffect, useState } from "react";

const AdminThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = window.document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      if (theme === "dark" || (theme === "system" && prefersDark.matches)) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const handleChange = () => applyTheme();
      prefersDark.addEventListener("change", handleChange);
      return () => prefersDark.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return <AdminThemeContext.Provider value={{ theme, setTheme }}>{children}</AdminThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(AdminThemeContext);

  return { theme, setTheme };
};

export default ThemeProvider;
