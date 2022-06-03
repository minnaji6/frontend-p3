import React, { useEffect, useState } from 'react'
import Item from './Item'
import ToDoList from './ToDoList'
import NewTodo from './NewTodo'


function ItemList({todos, onTodoDelete, onUpdateTodo, onAddTodo}) {
    const [search, setSearch] = useState("")
    const [filterBy, setFilterBy] = useState('')

    const filteredTodos = todos.filter(todo => todo.habit.habit === filterBy) 
    const renderTodosList = filteredTodos.map(todo => <ToDoList key={todo.id}  todo={todo} onTodoDelete={onTodoDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    const displayedTodos = todos.filter(todo =>
    todo.item.toLowerCase().includes(search.toLowerCase())
    )

    const renderTodos = displayedTodos.map(todo => <Item key={todo.id} todo={todo} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)

    return (
        <div className='flexer'>
            <div className='flex'>
                <div className='dropdown'>
                    
                <div className='info'>View Task by Habit </div>

                    

                    <select className='select' onChange={onFilterChange} value={filterBy}>
                        <option value="">Choose Habit</option>
                        <option value="unassigned">Unassigned</option>
                        <option value="chores">Chores</option>
                        <option value="Bootcamp">Bootcamp</option>
                        <option value="exercise">Exercise</option>
                       

                    </select>
                </div>
                    <div id='todos-render'>
                    {renderTodosList} 
                    
                
                </div>
            </div>

            <div className='flex'>
                
            <div id='edit' className='info'>To do</div>

                    {renderTodos}
                    
                
                
            </div>

            <div className='info'>Add a New Task </div> 
                    <div className='todo'> 
                    <NewTodo onAddTodo={onAddTodo}/> </div>
                


        </div>
    )
}

export default ItemList