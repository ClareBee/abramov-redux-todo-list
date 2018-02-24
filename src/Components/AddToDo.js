import React from 'react';

// second argument is context - destructed here into store variable
const AddToDo = (props, context) => {
  //creates local variable
  let input;
  const { store } = this.context;
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
AddToDo.contextTypes = {
  store: React.PropTypes.object
}
export default AddToDo;
