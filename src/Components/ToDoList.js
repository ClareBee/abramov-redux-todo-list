//presentational component
import React from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ({
  todos,
  onToDoClick
}) => (
  <ul>
    {todos.map(todo =>
    <ToDoItem
      //unique key needed for enumerated elements
      key={todo.id}
          {...todo}
      onClick={() => onToDoClick(todo.id)}
    />
  )}
  </ul>
);
