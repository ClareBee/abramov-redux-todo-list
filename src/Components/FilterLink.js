import React from 'react'
import { Link } from './Link'

// container component for Link presentational component
class FilterLink extends React.Component {
  componentDidMount(){
    // any time the store changes, the component will update
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount(){
    //cleans up the subscription before unmounting
    this.props.store.unsubscribe();
  }
  render(){
    const props = this.props;
    //gets redux state
    const state = this.props.store.getState();

    return (
      <Link
        //container provides appearance info
        active={
          //compares own prop - passed from the footer - with redux state which represents the currently chosen visibility filter
          props.filter === state.visibilityFilter
        }
        // container specifies Link's behaviour
        onClick={() =>
          this.props.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        } >
        {props.children}
      </Link>
    );
  }
}
export default FilterLink
