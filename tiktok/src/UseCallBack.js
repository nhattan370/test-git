import { memo } from "react";
function UseCallback({onIncrease}){
    return (
        <>
            {console.log('re-render')}
            <button onClick={onIncrease}>Click</button>
        </>
    )
}
export default memo(UseCallback);