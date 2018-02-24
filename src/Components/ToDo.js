import React from 'react'

export const Todo = ({
    onClick,
    completed,
    text
    }) => (
    <li
        className={completed ? 'list-item' : 'none'}
        onClick={onClick}
        style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
      >
        {text}
    </li>
);
