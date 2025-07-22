import {SET_JOB, ADD_JOB, DELETE_JOB} from'./constants'
//Initial value
export const initialState = {
    job:'',
    jobs:[]
}
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
export default reducer;