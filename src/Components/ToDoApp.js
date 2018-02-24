import React from 'react';
import store from '../index';
import { ToDoList } from './ToDoList';
import AddToDo from './AddToDo';
import Footer from './Footer';

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
let nextToDoId = 0;
//uses destructuring method to create variables from props
const ToDoApp = ({  todos,
  visibilityFilter }) => {
    <AddToDo onAddClick={text =>
      //click dispatches action and updates store's state
      store.dispatch({
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
      })
    }/>
    <ToDoList
      //currently visible todos
      todos={getVisibleTodos(
        todos,
        visibilityFilter
      )}
      // callback
      onToDoClick={id => store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })} />
    <Footer />
}



export default ToDoApp;
