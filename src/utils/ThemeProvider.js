import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {main: "#495057"},
    secondary: {main: "#adb5bd"},
    background: { default: "#f5f5f5", paper: "#ffffff", gradient: "linear-gradient(to right, #f8f9fa, #e9ecef)" },
    text: { primary: "#495057", secondary: "#6c757d" }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {main: "#e9ecef"},
    secondary: {main: "#ced4da"},
    background: { default: "#212529", paper: "#495057", gradient: "linear-gradient(to right,#495057, #343a40)" },
    text: { primary: "#e9ecef", secondary: "#f8f9fa" }
  },
});


export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.style.setProperty("--primary-text", theme.palette.text.primary);
    document.documentElement.style.setProperty("--secondary-text", theme.palette.text.secondary);
    document.documentElement.style.setProperty("--primary-main", theme.palette.primary.main);
    document.documentElement.style.setProperty("--secondary-main", theme.palette.secondary.main);
    document.documentElement.style.setProperty("--background-gradient", theme.palette.background.gradient);
  }, [darkMode, theme]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}


export function useTheme() {
  return useContext(ThemeContext);
}