import React from 'react';
import ToDoList from './ToDoList'
import { Footer } from './Footer';
import AddToDo from './AddToDo'

const ToDoApp = () => (
// three container components which each subscribe to store
// store will be accessible via context, thanks to Provider
    <div>
      <AddToDo />
      <ToDoList />
      <Footer />
    </div>
)

export default ToDoApp;
