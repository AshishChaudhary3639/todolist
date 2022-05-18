import React from "react";
import { useState } from "react";
import styles from './Todo.module.css'
import TodoItem from "./TodoItem";

const Todos = () => {
    let [value, setValue] = useState("")
    const [todo, setTodo] = useState([]);
    const onDelete = (id)=>{
        let newTodos= todo.filter(Todo=> Todo.id !==id);
        setTodo(newTodos)
    }



    return (
        <div>
            <h1>Todo Item</h1>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write Something" />
            <button onClick={() => {
                setTodo([
                    ...todo,
                    { id: Date.now(), value: value}
                ]);
                setValue("")
            }}

            className="addButton"
            >
                Add
            </button>
            <div className={styles.todoList}>
                {todo.map((Todos) => (
                    <div className={styles.todo}>
                        <TodoItem key={Todos.id} Todos={Todos} onDelete={onDelete} />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Todos;