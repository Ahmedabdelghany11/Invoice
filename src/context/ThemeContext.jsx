import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// creating the context for the theme to make it available to use over the whole project
const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [isDark, setIsDark] = useLocalStorage(
        window.matchMedia("(prefers-color-scheme: dark)").matches,
        "darkMode"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark-mode", isDark);
        document.documentElement.classList.toggle("light-mode", !isDark);
    }, [isDark])

    function toggleTheme() {
        setIsDark((dark) => !dark);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const themeContext = useContext(ThemeContext);
    if (themeContext === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return themeContext;
}

export { ThemeProvider, useTheme };