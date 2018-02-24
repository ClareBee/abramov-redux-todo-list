import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';
import logo from '../redux.png';
import list from '../todo.jpg';

// second argument is context - destructed here into store variable
const AddToDo = ({ dispatch }) => {
  //creates local variable
  let input;
  return (
    <div>
      <img className='logo' src={logo} alt='redux logo'/>
      <h1>Redux ToDo List</h1>
      <img className='list-img' src={list} alt='todo list' />
      <a className='web-link' target='_blank' href="https://egghead.io/courses/getting-started-with-redux">Dan Abramov Tutorial</a>
      <div className='search'>
        <i className='fas fa-pencil-alt'></i>
        <input placeholder='to do...' ref={node => {
          input = node;
        }} />
        <button onClick={(nextToDoId) =>{
          dispatch(addTodo(input.value))
          input.value = '';
        }}>
        Add ToDo
        </button>
      </div>
    </div>
  );
}

export default connect()(AddToDo);
