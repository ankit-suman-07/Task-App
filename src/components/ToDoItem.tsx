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
        <input type='checkbox' />
        <label>Item Name</label>
        <button>Delete</button>
    </div>
  )
}

export default ToDoItem