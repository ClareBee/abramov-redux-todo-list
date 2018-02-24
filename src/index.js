import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import todoApp from './Reducers';
import ToDoApp from './Components/ToDoApp';

const store = createStore(todoApp);


ReactDOM.render(<ToDoApp store={store}/>, document.getElementById('root'));
registerServiceWorker();



export default store;
