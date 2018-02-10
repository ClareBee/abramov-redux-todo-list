import React from 'react';

//pattern = 'reducer composition'
const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
          id: action.id,
          text: action.text,
          completed: false
      };
    case 'TOGGLE_TODO':
     if(state.id !== action.id){
      return state;
    }
    return {
      ...state,
      completed: !state.completed
    };
    //default to cover any undefined actions
    default:
      return state;
  }
}
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
          //all properties of original todo object copied by spread operator
          ...todo,
          completed:  !todo.completed
        };
      });
//for any unknown/undefined action
    default:
      return state;
  }
}
