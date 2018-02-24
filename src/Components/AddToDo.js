import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions'
import logo from '../redux.png'

// second argument is context - destructed here into store variable
const AddToDo = ({ dispatch }) => {
  //creates local variable
  let input;
  return (
    <div>
      <img src={logo} alt='redux logo'/>
      <h1>Redux ToDoList</h1>
      <a className='web-link' target='_blank' href="https://egghead.io/courses/getting-started-with-redux">Dan Abramov Tutorial</a>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={(nextToDoId) =>{
        dispatch(addTodo(input.value))
        input.value = '';
      }}>
      Add ToDo
      </button>
    </div>
  );
}

export default connect()(AddToDo);
