import { useRef } from "react";
import { UseStore } from "./globalState";
import { addTodo, deleteTodo, setTodo } from "./globalState/actions";

function AppForGlobalState(){
    const inputRef = useRef();
    const [state, dispatch] = UseStore();
    const {todo, todos} = state
    const handleAdd = ()=>{
        dispatch(addTodo(state));
        dispatch(setTodo(''));
        inputRef.current.focus();
    }
    return (
        <div>
            <h2>Create global state by useReducer and useContext</h2>
            <input type="text" placeholder="Enter work..." onChange={e=>dispatch(setTodo(e.target.value))} ref = {inputRef} value={todo}/>
            <br></br>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key = {index}>{todo}
                    <span onClick={()=>{dispatch(deleteTodo(index))}} style={{cursor:"pointer"}}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default AppForGlobalState