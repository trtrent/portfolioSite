import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
    // Set state for dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [])

    // Func: handles changing of dark mode by adding to document class list
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            // Sets theme in local storage, maintains upon page refresh
            localStorage.setItem("theme", "");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            // Sets them in local storage, maintains them upon page refresh
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    // Return button, on click changes to opposite icon
    return <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outlin-hidden"> {isDarkMode ? 
        <Sun className="h-6 w-6 text-yellow-300"/> : 
        <Moon className="h-6 w-6 text-blue-900"/> }</button>
}