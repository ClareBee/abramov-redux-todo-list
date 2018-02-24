//presentational component
import React from 'react';

//presentational components don't specify behaviour
export const ToDoItem = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>
);
