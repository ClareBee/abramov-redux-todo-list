import React from 'react';
import store from '../index';
import { FilterLink } from './FilterLinke';

let nextToDoId = 0;
class ToDoApp extends React.Component {
  render(){
    console.log(this.props)
    return(
      <React.Fragment>
        <h1>todolist</h1>
        <div>
          <input ref={node => {
            this.input = node;
          }} />
          <button onClick={() =>{
            //dispatches the add todo action - which calls the root reducer, which calls the todo reducer
            store.dispatch({
              type: 'ADD_TODO',
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
              return <li key={todo.id}
                  onClick={() => {
                    store.dispatch({
                      type: 'TOGGLE_TODO',
                      id: todo.id
                    });
                  }}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                  }}>
                {todo.text}
              </li>
            })}
          </ul>
          <p>
            Show:
            {' '}
            <FilterLink
              filter='SHOW_ALL'>
              All
            </FilterLink>
            {' '}
            <FilterLink
              filter='SHOW_ACTIVE'>
              Active
            </FilterLink>
            {' '}
            <FilterLink
              filter='SHOW_COMPLETED'>
              Completed
            </FilterLink>
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default ToDoApp;
