import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions'

// second argument is context - destructed here into store variable
const AddToDo = ({ dispatch }) => {
  //creates local variable
  let input;
  return (
    <div>
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
