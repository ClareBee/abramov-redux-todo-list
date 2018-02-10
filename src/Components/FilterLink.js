export const FilterLink= ({
  filter,
  //children are the contents of the link
  children
}) => {
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
