import { useState, useEffect } from "react";
function Countdown(){
    const [countdown, setCountdown] = useState(180);
    useEffect(()=>{
        const time = setInterval(() => setCountdown(prev => prev-1), 1000)
        return ()=>{clearInterval(time)}
    },[])
    return (
        <div>
            <h3>Countdown number</h3>
            <p>{countdown}</p>
        </div>
    )
}
export default Countdown;