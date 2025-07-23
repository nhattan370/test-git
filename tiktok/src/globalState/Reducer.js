import { ADD_TODO, DELETE_TODO, SET_TODO } from "./constants";

const initialState = {
    todo: '',
    todos: [],
}

const reducer = (state, action) => {
    let newState;
    switch(action.type){
        case SET_TODO:
            newState = {
                ...state, todo: action.payload
            }
            break;
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, action.payload.todo]
            }
            break;
        case DELETE_TODO:
            newState = {...state};
            newState.todos.splice(action.payload, 1);
            break;
        default:
            throw new Error('Invalid value');
    }
    return newState
}

export {initialState, reducer}