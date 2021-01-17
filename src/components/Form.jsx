import React from 'react';
import './ComponentStyle.css';
import logo from '../assets/plus-icon.png';
import { TODO_ACTIONS } from './Todo';

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos({type: TODO_ACTIONS.ADD_TODO, task: inputText })
    setInputText("")
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text"
             className="todo-input"
             placeholder="Input your task"
             value={ inputText }
             onChange={ e => { setInputText(e.target.value) }} />
      <button className="todo-button">
        <img src={ logo } className="plus-icon" alt=""/>
      </button>
      <select name="todos" className="todo-select">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  )
}

export default Form