import { useState, memo } from "react";
function MemoExample(){
    return (
        <div>
            <h1>Use memo</h1>
            <p>When you don't want to re-render unnesscery component. You can use memo to optimize performance</p>
        </div>
    )
}
export default memo(MemoExample);