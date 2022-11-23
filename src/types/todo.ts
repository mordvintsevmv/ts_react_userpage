export interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ToDoState {
    todos: IToDo[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum ToDoActionType {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchToDoAction  {
    type: ToDoActionType.FETCH_TODO
}

interface FetchToDoSuccessAction  {
    type: ToDoActionType.FETCH_TODO_SUCCESS,
    payload: IToDo[]
}

interface FetchToDoErrorAction  {
    type: ToDoActionType.FETCH_TODO_ERROR,
    payload: string
}

interface SetToDoPageAction  {
    type: ToDoActionType.SET_TODO_PAGE,
    payload: number
}

export type ToDoAction = FetchToDoAction | FetchToDoSuccessAction | FetchToDoErrorAction | SetToDoPageAction