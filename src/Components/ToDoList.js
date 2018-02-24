//presentational component
import React from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ({
  todos,
  onToDoClick
}) => (
  //maps over array of todos received as props
  <ul>
    {todos.map(todo =>
    <ToDoItem
      //unique key needed for enumerated elements
      key={todo.id}
      //uses spread operator to pass every property of the todo objects to the todo component
          {...todo}
      onClick={() => onToDoClick(todo.id)}
    />
  )}
  </ul>
);
