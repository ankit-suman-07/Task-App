"use client"
import React from 'react'

type ToDoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleToDo: (id: string, complete: boolean) => void,
    deleteToDo: (id: string) => void
}

const ToDoItem = ({id, title, complete, toggleToDo, deleteToDo}: ToDoItemProps) => {
  return (
    <div>
        <input 
            id={id}
            defaultChecked={complete}
            type='checkbox' 
            onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        <label>{title}</label>
        <button onClick={() => deleteToDo(id)} >Delete</button>
    </div>
  )
}

export default ToDoItem