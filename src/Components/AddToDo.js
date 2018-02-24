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
        onAddClick(input.value)
        input.value = '';
      }}>
      Add ToDo
      </button>
    </div>
  );
}
export default AddToDo;
