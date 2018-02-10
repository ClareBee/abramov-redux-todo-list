import React from 'react';
import { store } from '../index';

let nextToDoId = 0;
class ToDoApp extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>todolist</h1>
        <div>
          <input ref={node => {
            this.input = node;
          }} />
          <button onClick={() =>{
            store.dispatch({
              type: 'ADD_TO',
              text: this.input.value,
              id: nextToDoId++
            });
            //empties input field after submission
            this.input.value = '';
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

export default ToDoApp;
