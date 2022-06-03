import React, { useEffect, useState } from 'react'

function UpdateTodo({onUpdateTodo, todo}) {
    const [newTodo, setTodo] = useState(todo.item)
    const [habit_id, setHabitId] = useState(todo.habit_id)


    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newTodo,
          habit_id:  habit_id
        }),
      })
      .then((r) => r.json())
      .then(updatedTodo => {
          onUpdateTodo(updatedTodo)
      })
    }
  
    return (
      <form className='edit-form' onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="item"
          autoComplete="off"
          value={newTodo}
          placeholder=" new item"
          onChange={(e) => setTodo(e.target.value)}
        />

        <select className='habitEdit' onChange={(e) => setHabitId(e.target.value)}>
          <option value={habit_id}>Update Habit </option>
            <option value="0">Unassigned</option>
            <option value="1">Chores</option>
            <option value="2">Bootcamp</option>
            <option value="3">Exercise</option>
        </select>
        
        <button className='btn' type="submit">Update</button>
      </form>
    )
}

export default UpdateTodo