import React from 'react';
import store from '../index';
import { FilterLink } from './FilterLink';
import { ToDoList } from './ToDoList';
import AddToDo from './AddToDo';

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
class ToDoApp extends React.Component {
  render(){
    //uses destructuring method to create variables from props
    const {
      todos,
      visibilityFilter
    } = this.props

    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );
    return(
      <React.Fragment>
          <AddToDo />
          <ToDoList
            todos={visibleTodos}
            onToDoClick={id => store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })} />
          <p>
            Show:
            {' '}
            <FilterLink
              filter='SHOW_ALL'
              currentFilter={visibilityFilter}>
              All
            </FilterLink>
            {' '}
            <FilterLink
              filter='SHOW_ACTIVE'
              currentFilter={visibilityFilter}>
              Active
            </FilterLink>
            {' '}
            <FilterLink
              filter='SHOW_COMPLETED'
              currentFilter={visibilityFilter}>
              Completed
            </FilterLink>
          </p>
        </div>
      </React.Fragment>
    )
  }
}



export default ToDoApp;
