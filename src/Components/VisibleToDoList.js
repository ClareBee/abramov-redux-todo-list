import React from 'react'
import { connect } from 'react-redux'
import { ToDoList } from './ToDoList'
import store from '../index'
import PropTypes from 'prop-types'

// container components connect presentational components to the redux store
// they specify the data/behaviour that they need
class VisibleToDoList extends React.Component {
  componentDidMount(){
    const { store } = this.context;
    // any time the store changes, the component will update
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount(){
    //cleans up the subscription before unmounting
    store.unsubscribe();
  }
  getVisibleTodos = (todos, filter) => {
    switch(filter){
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(t =>
          !t.completed
        );
      case 'SHOW_COMPLETED':
        return todos.filter(t =>
          t.completed
        );
    }
  }
  render(){
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <ToDoList
        todos={
          this.getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onToDoClick={
        }
      />
    );
  }

}
// context is opt-in for receiving components, so types need to be specified
// specify which context the component will receive
VisibleToDoList.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onToDoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VisibleToDoList)
