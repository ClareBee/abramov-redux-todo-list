import React from 'react';

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
    //state shouldn't be mutated therefore use map
      return state.map(todo => {
        if(todo.id !== action.id){
          return todo
        }
        return {
          ...todo,
          completed:  !todo.completed
        };
      });
//for any unknown/undefined action
    default:
      return state;
  }
}
