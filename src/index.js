import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { todoApp } from './Reducers';

const store = createStore(todoApp);

//will update dom in response to current application state
const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
}


store.subscribe(render);
//renders initial state
render();
