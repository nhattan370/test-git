import { useState, useRef, useEffect } from "react";
function CountdownUseRefSaveOldValue(){
    const [count, setCount] = useState(50);
    const [isRunning, setIsRunning] = useState(false);
    const timeId = useRef(null);
    const prevCount = useRef();
    const handleDecrese = () => {
        if(isRunning) return;
        timeId.current = setInterval(()=>{
            setCount(prev => prev-1);
        },1000);
        setIsRunning(true);
    }
    const handleStop = ()=>{
        clearInterval(timeId.current);
        setIsRunning(false);
    }
    useEffect(()=>{
        return ()=>{
            clearInterval(timeId.current);
        }
    },[])
    useEffect(()=>{
        prevCount.current = count;
    },[count])
    console.log(count, prevCount.current)
    return (
        <div>
            <h1>Use Ref</h1>
            <h2>{count}</h2>
            <button onClick={handleDecrese}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default CountdownUseRefSaveOldValue;