import React, { Component } from 'react';
import ToDoApp from './Components/ToDoApp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp />
      </div>
    );
  }
}

export default App;
