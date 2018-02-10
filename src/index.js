import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './Reducers';
import ToDoApp from './Components/ToDoApp';

const store = createStore(todoApp);

//will update dom in response to current application state
const render = () => {
  //spread operator passes down all state fields as props
  ReactDOM.render(<ToDoApp {...store.getState()}/>, document.getElementById('root'));
registerServiceWorker();
}


store.subscribe(render);
//renders initial state
render();

export default store;
