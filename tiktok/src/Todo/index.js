import { useReducer,useRef } from 'react';
import reducer, {initialState} from './Reducer';
import {addJob, setJob, deleteJob} from './Action'
import logger from './logger';
function TodoAppWithSeperate(){
    const [state, dispatch] = useReducer(logger(reducer), initialState);
    const {job, jobs} = state;
    const jobRef = useRef();
    const handleAdd = ()=> {
        dispatch(addJob(job));
        dispatch(setJob(''));
        jobRef.current.focus();
    }
    return (
        <div>
        <h1>Todo app with seperate files</h1>
            <div>
                <input type="text" value={job} placeholder="Enter you work..."
                    onChange={e => dispatch(setJob(e.target.value))}
                    ref = {jobRef}    
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {jobs.map(((job,index) => (
                    <li key={index}>{job}-{index}
                    <span onClick={()=>dispatch(deleteJob(index))}> &times; </span>
                    </li>
                )))}
            </ul>
        </div>
    )
}
export default TodoAppWithSeperate;