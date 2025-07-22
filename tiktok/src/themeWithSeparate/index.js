import { useContext } from "react";
import Content from "./content";
import './index.css'
import { ThemeProvider, ThemeContext } from "./ThemeContext";

function UseContentButSeparateFile(){
    return(
        <ThemeProvider>
            <InnerContent></InnerContent>        
        </ThemeProvider>
    )
}

function InnerContent(){
    const context = useContext(ThemeContext);
    return(
        <div>
            <h1>Use Content But Separate File</h1>
            <button onClick={context.changeTheme}>Toggle theme</button>
            <Content></Content>
        </div>
    )

}
export default UseContentButSeparateFile;