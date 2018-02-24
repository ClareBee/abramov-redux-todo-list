import React from 'react';
import store from '../index';
import { ToDoList } from './ToDoList';
import VisibleToDoList from './VisibleToDoList'
import { Footer } from './Footer';
import AddToDo from './AddToDo'

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
const ToDoApp = ({ store }) =>
// three container components which each subscribe to store
    <div>
      <AddToDo store={store}/>
      <VisibleToDoList store={store}/>
      <Footer store={store}/>
    </div>



export default ToDoApp;
