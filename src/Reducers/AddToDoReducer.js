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
        //reducers are normal javascript functions
      todo(undefined, action);
      ];
    case 'TOGGLE_TODO':
    //map avoids mutation
    //reducer as a javascript function can therefore call other reducers 

      return state.map(t =>
        todo(t, action));
//for any unknown/undefined action
    default:
      return state;
  }
}
