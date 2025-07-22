import { createContext, useState } from "react";
import Content from "./content";
import './index.css'

export const ThemeContext = createContext();

function UseContentWithTheme(){
    const [theme, setTheme] = useState();
    const changeTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark')
    }
    return(
        <div>
            <ThemeContext.Provider value={theme}>
                <button onClick={changeTheme}>Toggle theme</button>
                <Content></Content>
            </ThemeContext.Provider>
        </div>
    )
}
export default UseContentWithTheme;