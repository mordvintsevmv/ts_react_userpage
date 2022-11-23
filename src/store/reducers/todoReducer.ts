/*

    INITIAL STATE

 */
import {ToDoAction, ToDoActionType, ToDoState} from "../../types/todo";

const initial_state: ToDoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initial_state, action: ToDoAction): ToDoState => {
    switch (action.type){
        case ToDoActionType.FETCH_TODO: {
            return {...state, loading:true}
        }

        case ToDoActionType.FETCH_TODO_SUCCESS: {
            return {...state, loading:false, todos: action.payload, error: null}
        }

        case ToDoActionType.FETCH_TODO_ERROR: {
            return {...state, loading:false, error: action.payload}
        }

        case ToDoActionType.SET_TODO_PAGE: {
            return {...state, page: action.payload}
        }

        default:
            return state
    }
}