import React, {useEffec,useEffect} from 'react'

function ToDoList({todo, onTodoDelete}) {
    function handleDeleteClick() {
        fetch('http://localhost:9292/todos/${todo.id}', {
            method: 'DELETE',
        })
        onTodoDelete(todo.id)
    }

    return (
        <div className='all-todos'>
                {(<li className="listList"><button className="deleteITEM" onClick={handleDeleteClick}>🆇</button>{todo.item.toLowerCase()} </li>)}
                
        </div>
    )
}

export default ToDoList