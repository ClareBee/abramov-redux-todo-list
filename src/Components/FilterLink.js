import React from 'react';
import store from '../index';
export const FilterLink = ({
  filter,
  //currentFilter shows which filter has been selected and styles conditionally
  currentFilter,
  //children are the contents of the link
  children
}) => {
  //if filter matches the chosen filter, then an unclickable span is rendered rather than an a-tag
  if(filter === currentFilter){
    return <span>{children}</span>;
  }
  return (<a href='#'
          onClick={e => {
            e.preventDefault();
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            });
          }}>
          {children}
        </a>
    );
};
