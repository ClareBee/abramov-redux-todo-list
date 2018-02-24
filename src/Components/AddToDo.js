import React from 'react';
import store from '../index'

const AddToDo = () => {
  //creates local variable
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={(nextToDoId) =>{
        store.dispatch({
          type: 'ADD_TODO',
          id: nextToDoId++,
          text: input.value
        })
        input.value = '';
      }}>
      Add ToDo
      </button>
    </div>
  );
}
export default AddToDo;
