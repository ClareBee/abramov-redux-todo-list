import React from 'react';
import store from '../index';
import { FilterLink } from './FilterLink';
import { ToDoList } from './ToDoList';
import AddToDo from './AddToDo';
import Footer from './Footer';

let nextToDoId = 0;

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t =>
        !t.completed
      );
    case 'SHOW_COMPLETED':
      return todos.filter(t =>
        t.completed
      );
  }
}
//uses destructuring method to create variables from props
const ToDoApp = ({  todos,
  visibilityFilter }) => {
    <AddToDo onAddClick={text =>
      store.dispatch({
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
      })
    }/>
    <ToDoList
      todos={getVisibleTodos(
        todos,
        visibilityFilter
      )}
      onToDoClick={id => store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })} />
    <Footer
      //to highlight the active link
      visibilityFilter={visibilityFilter}
      onFilterClick={filter =>
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }  
    />
}



export default ToDoApp;
