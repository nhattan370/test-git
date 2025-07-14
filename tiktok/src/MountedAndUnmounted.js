import { useState } from "react";

function ShowH1(){
    return (
        <h1>Xin chao moi nguoi</h1>
    )
}
function MountedAndUnmounted(){
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>Show</button>
            {show && <ShowH1/>}
        </div>
    )
}

export default MountedAndUnmounted;