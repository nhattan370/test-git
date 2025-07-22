import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants'
//set job
export const setJob = (payload)=>{
    return{
        type: SET_JOB,
        payload
    }
}
//add job
export const addJob = (payload)=>{
    return {
        type: ADD_JOB,
        payload
    }
}
//delete job
export const deleteJob = (payload)=>{
    return {
        type: DELETE_JOB,
        payload
    }
}