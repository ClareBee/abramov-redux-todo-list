import React from 'react';

const AddToDo = ({onAddClick}) => {
  //creates local variable
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() =>{

        //dispatches the add todo action - which calls the root reducer, which calls the todo reducer
        store.dispatch({
          type: 'ADD_TODO',
          id: nextToDoId++,
          text
        });
        //empties input field after submission
        onAddClick(input.value)
        input.value = '';
      }}>
      Add ToDo
      </button>
    </div>
  );
}
export default AddToDo;
