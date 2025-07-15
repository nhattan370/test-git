import { useState, useEffect } from "react";
function UseEffectWithDependences(){
    const tabs = ['posts','comments','albums','photos','todos','users']
    const [type, setType] = useState(tabs[0]);
    const [contents, setContents] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/` + type)
        .then(res => res.json())
        .then(res => setContents(res))
    },[type])

    return (
        <div>
            <h1>Hello</h1>
            {tabs.map((tab)=>(
                <button 
                    key = {tab}
                    style = {tab===type ? {color: 'white', backgroundColor : 'black'} : {}}
                    onClick={()=>setType(tab)}
                >
                        {tab}
                </button>
            ))}
            <ul>
                {contents.map((item, index)=>(
                    <li key = {index}>{item.title || item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseEffectWithDependences;

//Displaying all of buttons
//When you click any button, it shows the information correcsponding to button
//Handling with one button. When click anybutton, the content shows
//Handling one button. When click a button, the correcsponding content shows up