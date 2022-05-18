import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css"

const TodoItem = ({Todos, onDelete})=>{
    const [isCompleted, setIsCompleted]= useState(Todos.isCompleted)

    return (
        <div className={styles.todo} key={Todos.id}>
            <input type="checkbox" checked={isCompleted} onChange={(e) =>{
          setIsCompleted(e.target.checked)      
        }}/>
        <div className="values">{Todos.value}</div>
        <button onClick={() => onDelete(Todos.id)}>Delete</button>
        </div>
    )
}

export default TodoItem