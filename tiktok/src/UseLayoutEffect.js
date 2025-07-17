import { useState, useLayoutEffect } from "react";
function UseLayoutEffect(){
    const [count, setCount] = useState(0);
    useLayoutEffect(()=>{
        if(count>3) setCount(0);
    },[count])
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Run</button>
            <h3>{count}</h3>
        </div>
    )
}
export default UseLayoutEffect;

/*
1. useEffect
- Update State
- Update Dom
- Render UI
- Call clean up in useEffect
- Call useEffect

2. useLayoutEffect
- Update State
- Update Dom
- Call clean up in useLayoutEffect
- Call useLayoutEffect
- Render UI

useEffect and useLayoutEffect are almost the same in behavior, but useLayoutEffect provide better user experience
*/