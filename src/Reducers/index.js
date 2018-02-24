
import { combineReducers } from 'redux';

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
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
          todo(t, action)
      );
    default:
      return state;
  }
};
const visibilityFilter =  (
  state = 'SHOW_ALL',
  action
) => {
    switch (action.type){
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }

};
//root reducer which maps state name and reducers
//keys correspond to fields of state object
//values are reducers that are called to update corresponding state fields
const todoApp = combineReducers({
  todos,
  visibilityFilter
})
export default todoApp;
