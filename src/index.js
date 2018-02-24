import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './Reducers';
import ToDoApp from './Components/ToDoApp';
import Provider from './Provider'

const store = createStore(todoApp);


ReactDOM.render(
  // provider makes store available to any component inside it
  <Provider store={store}>
    <ToDoApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();



export default store;
