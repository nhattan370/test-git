import { forwardRef, useImperativeHandle, useRef } from 'react';
import video2 from './video2.mp4'

function Video(props, ref){
    const videoRef = useRef()
    useImperativeHandle((ref), ()=>({
       play(){
        videoRef.current.play()
       },
       pause(){
        videoRef.current.pause()
       }
    }))
    
    return(
        <video src={video2} style={{height:'200px', width:'200px'}} ref={videoRef}/>
    )
}
export default forwardRef(Video);