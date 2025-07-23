import {useRef} from 'react'
import Video from "./Video"

function AppVideo(){
    const videoRef = useRef();
    return (
        <div>
            <br></br>
            <h1>Use useImperativeHandle </h1>
            <Video ref={videoRef}/>
            <div>
                <button onClick={()=> videoRef.current.play()}>Play</button>
                <button onClick={()=> videoRef.current.pause()}>Pause</button>
            </div>
        </div>
    )
}
export default AppVideo