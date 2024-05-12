export default function ToDoList({ todoItem, handleToDoItemClick }) {

    const task = todoItem.completed ? <strike>{todoItem.task}</strike> : todoItem.task;

    return (

        <li className="todo" onClick={() => handleToDoItemClick(todoItem.id)}>
            {task}

        </li>

    )
} 