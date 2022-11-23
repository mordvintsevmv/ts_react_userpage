import React, {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const ToDoList: FC = () => {

    const {todos, page, loading, limit, error} = useTypedSelector(state => state.todo)
    const {fetchToDos, setToDoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchToDos(page, limit)
    }, [page])

    if (loading) {
        return (
            <div>
                Loading...
            </div>)
    }

    if (error) {
        return (
            <div>
                {error}
            </div>)
    }

    return(
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id}.{todo.title} {todo.completed ? "done" : "in progress"}
                </div>
            )}

            {pages.map(p =>
                <span
                    onClick={() => setToDoPage(p)}
                    style={{margin: 5, fontWeight: p==page ? "bold" : "inherit", cursor: "pointer"}}>
                    {p}
                </span>
            )
            }
        </div>
    )
}

export default ToDoList