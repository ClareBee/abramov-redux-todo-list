import React from 'react';

let nextToDoId = 0;
class ToDoApp extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>todolist</h1>
        <div>
          <button onClick={() =>{
            store.dispatch({
              type: 'ADD_TO',
              text: 'test',
              id: nextToDoId++
            });
          }}>
          Add ToDo
          </button>
          <ul>
            {this.props.todos.map(todo => {
              <li key={todo.id}>
                {todo.text}
              </li>
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default ToDoList;
