import React from 'react'
import PropTypes from 'prop-types'

// enables advanced react feature 'context'
class Provider extends React.Component {
  //this store will be part of the context that the provider provides for any of its children/grandchildren
  getChildContext(){
    return {
      store: this.props.store
    };
  }
  render(){
    return this.props.children
  }
}
// this bit is vital - must specify types
// essential for the context to be put on
// store is now readable from each component's context
Provider.childContextTypes = {
  store: React.PropTypes.object
};

export default Provider;
