import { useState } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
export default function ToDoList() {
    const todoTasks = [
        { id: 1, task: "Read Springboot", completed: false },
        { id: 2, task: "Complete assignments", completed: false },
        { id: 3, task: "Prepare breakfast", completed: false },
        { id: 4, task: "Sleep for 2 hours", completed: false },
        { id: 5, task: "Take a shower", completed: false }
    ]

    const [todoList, setToDoList] = useState(todoTasks)

    function removeCompletedTasks() {
        const todos = [...todoList]
        setToDoList(todos.filter((todo) =>
            todo.completed === false))

    }
    function handleToDoItemClick(id) {
        const todos = [...todoList]
        todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        });
        setToDoList(todos)
    }

    function renderTodoList() {
        return todoList.map((todoItem) => (
            <ToDoItem
                key={todoItem.id}
                todoItem={todoItem}
                handleToDoItemClick={handleToDoItemClick}
            />
        ));
    }
    return (
        <div className='todo-container'>
            <ol>
                {todoList.length > 0 ? renderTodoList() : 'Nothing to do buddy. Sleep!'}
            </ol>
            {(todoList.length > 0) ?
                <button className='remove-btn' onClick={() => { removeCompletedTasks() }}>Remove Completed</button> : ''}
            

        </div>

    );
}