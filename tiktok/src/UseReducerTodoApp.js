import { useReducer, useRef } from "react";

    //Initial value
    const initialState = {
        job:'',
        jobs:[]
    }
    //Action
    const SET_JOB = 'set_job';
    const ADD_JOB = 'add_job';
    const DELETE_JOB = 'delete_job';
    //Reducer
    const reducer = (state, action)=>{
        let newState;
        switch(action.type){
            case SET_JOB:
                newState = {
                    ...state,
                    job: action.payload
                }
                break;
            case ADD_JOB:
                newState = {...state, jobs: [...state.jobs, action.payload]}
                break;
            case DELETE_JOB:
                newState = {...state}
                newState.jobs.splice(action.payload, 1);
                console.log(newState)
                break;
            default:
                throw new Error('Hello');
        }
        return newState;
    }
    //set job
    const setJob = (payload)=>{
        return{
            type: SET_JOB,
            payload
        }
    }
    //add job
    const addJob = (payload)=>{
        return {
            type: ADD_JOB,
            payload
        }
    }
    //delete job
        const deleteJob = (payload)=>{
        return {
            type: DELETE_JOB,
            payload
        }
    }
function TodoApp(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const {job, jobs} = state;
    const jobRef = useRef();
    const handleAdd = ()=> {
        dispatch(addJob(job));
        dispatch(setJob(''));
        jobRef.current.focus();
    }
    return (
        <div>
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
export default TodoApp;