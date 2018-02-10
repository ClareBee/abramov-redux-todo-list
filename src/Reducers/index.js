
import { combineReducers } from 'redux';
import { todos } from './AddToDoReducer';
import { visibilityFilter } from './SetVisibilityReducer';
// const todoApp = (state = {}, action) => {
//   return (
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   );
// };

//root reducer which maps state name and reducers
//keys correspond to fields of state object
//values are reducers that are called to update corresponding state fields
export const todoApp = combineReducers({
  todos,
  visibilityFilter
})
