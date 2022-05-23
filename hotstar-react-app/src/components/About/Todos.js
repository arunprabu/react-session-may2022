import React, { useReducer, useRef } from 'react'
import todoReducer from '../../reducers/todoReducer';

const Todos = () => {
  console.log('Program Started');

  // creating ref for input field to capture data in a fn comp
  const todoInput = useRef(null);
  console.log(todoInput);

  // useReducer will get a reducer fn as input and will return an array
  // with state and dispatcher fn 
  // let's create reducer fn to pass inside useReducer Hook
  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    // dispatch an action. action is an obj 
    // dispatch with an action type 'ADD_TODO' and the above todo item as payload
    todoDispatch({
      type: 'ADD_TODO', 
      payload: todoInput.current.value
    });
  }

  let myTodos = null;
  if(todoState && Array.isArray(todoState)){
    myTodos = todoState.map( (todo, index) => {
      return (
        <li className='list-group-item' key={todo+index}>
          {todo}
          <button type="button" className='btn btn-sm btn-primary'>Edit</button>
          <button type="button" className='btn btn-sm btn-danger'>Delete</button>
        </li>
      )
    })
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <h3>Todo App</h3>
      {/* TODO: Learn about prefilling this field */}
      <input type="text" ref={todoInput}/>
      <button type='button' className='btn btn-sm btn-success' 
        onClick={handleAddTodo}>Add Todo</button>
      <div >
        
        <ul className='list-group'>
        { todoState? myTodos :  
          <div className='alert alert-danger'>
          No Todos Found. You can add one 
          </div>
          }
        </ul>
      
      </div>
    </div>
  )
}

export default Todos