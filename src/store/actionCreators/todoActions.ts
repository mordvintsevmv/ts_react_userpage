import {Dispatch} from "redux";
import axios from "axios";
import {IToDo, ToDoAction, ToDoActionType} from "../../types/todo";
import {todoReserve} from "../../data/todo";

export const fetchToDos = (page = 1, limit = 10): any => {
    return async (dispatch: Dispatch<ToDoAction>) => {
        try{
            dispatch({type: ToDoActionType.FETCH_TODO})
            const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos', {params:{_page: page, _limit: limit}})
            dispatch({type: ToDoActionType.FETCH_TODO_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: ToDoActionType.FETCH_TODO_ERROR, payload: "Error while loading todos from web. Loading local todos."})
            console.warn("Loading local todos")
            dispatch({type: ToDoActionType.FETCH_TODO_SUCCESS, payload: todoReserve.slice(limit*(page-1), limit*page)})
        }
    }
}

export const setToDoPage = (page: number): ToDoAction => {
    return {type: ToDoActionType.SET_TODO_PAGE, payload: page}
}