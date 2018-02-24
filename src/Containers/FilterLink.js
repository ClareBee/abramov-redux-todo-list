import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions'
import { Link } from '../Components/Link'

// container component for Link presentational component
class FilterLink extends React.Component {
  componentDidMount(){
    //access is enabled by Provider
    const { store } = this.context;
    // any time the store changes, the component will update
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount(){
    const { store } = this.context
    //cleans up the subscription before unmounting
    store.unsubscribe();
  }
  render(){
    const props = this.props;
    const { store } = this.context;
    //gets redux state
    const state = store.getState();

    return (
      <Link
        //container provides appearance info
        active={
          //compares own prop - passed from the footer - with redux state which represents the currently chosen visibility filter
          props.filter === state.visibilityFilter
        }
        // container specifies Link's behaviour
        onClick={() =>
          store.dispatch(setVisibilityFilter(props.filter))
        } >
        {props.children}
      </Link>
    );
  }
}
const mapStateProps = (state, ownProps) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

export default FilterLink = connect(
  mapStateProps,
  mapDispatchProps
)(Link);
