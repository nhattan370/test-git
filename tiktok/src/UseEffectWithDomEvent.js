import { useState, useEffect } from "react";

function ScrollScreen(){
    const [show, setShow] = useState(false);
    const handleScroll = ()=>{
        setShow(window.scrollY >= 200);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return(
        <div>
            <h3>Showing the button on the bottom right when scrolling exceed 200px</h3>
            {show && <button style={{position:'fixed', right:'10px', bottom:'10px'}}>Go on the top</button>}
        </div>
    )
}

export default ScrollScreen;
//Khi muon hien thi thu gi do thi day logic true false giong nhu bai nay