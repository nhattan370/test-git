import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState();
    const changeTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark')
    }
    const value = {
        theme: theme,
        changeTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext, ThemeProvider}