import React from 'react'
import Link from './Link'

// container component for Link presentational component
class FilterLink extends React.Component {
  componentDidMount(){
    // any time the store changes, the component will update
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate();
    );
  }
  componentWillUnmount(){
    //cleans up the subscription before unmounting
    store.unsubscribe();
  }
  render(){
    const props = this.props;
    //gets redux state
    const state = store.getState();
    return (
      <Link
        active={
          //compares own prop - passed from the footer - with redux state which represents the currently chosen visibility filter
          props.filter === state.visibilityFilter
        }
        // now specify behaviour
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        } >
        {props.children}
      </Link>
    );
  }
}
