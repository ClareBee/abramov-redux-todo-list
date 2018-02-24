import React from 'react';
import store from '../index';

// presentational component
export const Link = ({
  active,
  //children are the contents of the link
  children,
  onClick
}) => {
  //if filter matches the chosen filter, then an unclickable span is rendered rather than an a-tag
  if(active){
    return <span>{children}</span>;
  }
  return (<a href='#'
          onClick={e => {
            e.preventDefault();
            onClick()
          }}>
          {children}
        </a>
    );
};
