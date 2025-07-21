import {useReducer} from 'react'

function UpAndDown() {
    //Initial value
    const initialValue = 0;
    //Action
    const UP = 'up'
    const DOWN = 'down'
    //Reducer
    const reducer = (state, action)=>{
        switch(action){
            case UP:
                return state + 1;
            case DOWN:
                return state - 1;
            default:
                throw new Error('Hello');
        }
    }
    //Dispatch
    const [value, dispatch] = useReducer(reducer, initialValue);
    return(
        <div>
            <h3>{value}</h3>
            <button onClick={()=>dispatch(UP)}>Up</button>
            <button onClick={()=>dispatch(DOWN)}>Down</button>
        </div>
    )
}
export default UpAndDown;