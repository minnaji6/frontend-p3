import React, {useEffect, useState} from 'react'
import UpdateToDo from './UpdateToDo.js';


function Item({todo,onTodoDelete, onUpdateTodo}) {
    const [editor,setEditor] = useState(false)

    function handleCick() {
        setEditor(!editor)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
            method: "DELETE",
        })
        onTodoDelete(todo.id)
    }

    function handleUpdateTodo(updatedTodo) {
        onUpdateTodo(updatedTodo)
    }

    function getEditor() {
        if (editor)
        return <UpdateToDo onUpdateTodo={handleUpdateTodo} todo={todo} />
    }

    return (
        <>
           
                <b className='item-text'>{todo.item.toUpperCase()}</b>
                <p className='item-text'> {todo.habit.habit}</p>
                <button className='btn' onClick={handleCick}>📝</button>
                {getEditor()}
                <button className='deleteITEM' onClick={handleDeleteClick}>🆇</button>
              
        </>
    )

}
export default Item
