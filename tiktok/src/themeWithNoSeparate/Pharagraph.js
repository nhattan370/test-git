import { useContext } from "react";
import { ThemeContext } from "./index";

function Pharagraph(){
    const theme = useContext(ThemeContext);
    return(
        <div className={theme}>
            Many people enjoy traveling because it allows them to experience new cultures, try different foods, and meet interesting people. When you visit a new place, you can learn about its history, explore beautiful landscapes, and discover how others live. Traveling can also help you relax and take a break from your daily routine. Whether it's a short weekend trip or a long journey abroad, traveling often creates unforgettable memories.
        </div>
    )
}
export default Pharagraph;