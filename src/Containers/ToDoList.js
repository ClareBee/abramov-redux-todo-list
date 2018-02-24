import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, getVisibleTodos } from '../Actions';
import { Todo } from '../Components/ToDo';


const TodoList = ({
    todos,
    onTodoClick
    }) => (
    <div className='list-container'>

      <ul className='to-do-list'>
          {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                />
          )}
      </ul>
    </div>
);


const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
