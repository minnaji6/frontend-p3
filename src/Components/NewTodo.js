import React, {useState} from 'react';

function NewTodo ({onAddTodo}) {
    const [todo, setTodo] = useState ("")
    const [habit_id, setHabitId] = useState ("0")

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/todos", {
            method: "POST",
            headers: {
                contentType: "application/json",
            },
            body: JSON.stringify({
                item: todo,
                habit_id: habit_id
            }),
        })
        .then((response) => response.json())
        .then(newTodo => {
            onAddTodo(newTodo)
            setTodo("")
            setHabitId(habit_id)
        })
    }

    return (
        <div>
            <form className='add-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    autoComplete="off"
                    value={todo}
                    placeholder="Add to do"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <br></br>
                <select className="habit" onChange={(e) => setHabitId(e.target.value)}>
                    <option value={habit_id}>Choose Habit </option>
                    <option value="0">Unassigned</option>
                    <option value="1">Chores</option>
                    <option value="2">Bootcamp</option>
                    <option value="3">Exercise</option>
                </select>
                
                <button class="btn" id='add' type="submit">Add To Do</button>
                </form>


        </div>
    )
}
export default NewTodo