import {FC} from "react";
import {IToDo} from "../../types/todo";
// @ts-ignore
import styles from "./ToDo.module.css"

interface ToDoProfileProps {
    todos: IToDo[] | null
}

const ToDoProfile: FC<ToDoProfileProps> = ({todos}) => {
    return (
        <div className={styles.todos_wrapper}>
                <h4>
                    ToDo List
                </h4>

            <div className={styles.todos}>
                {todos?.map(todo =>
                    <div className={styles.item} key={todo.id}>
                        <input type={"checkbox"} checked={todo.completed} readOnly={true}/>
                        {todo.title}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDoProfile
