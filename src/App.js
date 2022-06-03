import './App.css'
import React, { useEffect, useState } from 'react'
import ItemList from './Components/ItemList'
import Header from './Components/Header'
import Nav from 'react-bootstrap/Nav';


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then(response => response.json())
    .then(todos => setTodos(todos))
  }, [])

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  const handleDeleteItem = (id) => {
    const finalTodos = todos.filter(todo => todo.id !== id)
    setTodos(finalTodos)
  }

  function handleUpdateTodo(updatedTodoObj) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === updatedTodoObj.id) {
        return updatedTodoObj;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home Page</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/journal">Journal</Nav.Link>
         </Nav.Item>
        </Nav>
      <div className="box">
     <Header todos={todos} onTodoDelete={handleDeleteItem}/>
     <ItemList onAddTodo={handleAddTodo} todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>
     <br/><br/>
   </div>
    </div>
   
  )
}

export default App;