import React, {useEffect, useState} from 'react'
import ToDoList from './ToDoList'

function Header ({todos, onTodoDelete}) {
    const renderTodosListAll = todos.map(todo => <ToDoList key={todo.id} todo={todo} onTodoDelete={onTodoDelete} />)
    return  (
        <div>
            <h1 className= 'header'>HABITUAL</h1>
            <div>
                <h3 className= 'moto'>Get Tasks Done and Build New Habits</h3>
                
                <br/>
            </div>
        </div>
    )
}

export default Header