import React from 'react';
import ToDoList from './ToDoList'
import { Footer } from '../Components/Footer';
import AddToDo from './AddToDo'

const ToDoApp = () => (
// three container components which each subscribe to store
// store will be accessible via context, thanks to Provider
    <div className='app'>
      <AddToDo />
      <ToDoList />
      <Footer />
    </div>
)

export default ToDoApp;
