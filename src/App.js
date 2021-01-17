import React, { useReducer, useState } from "react";
import Todo, { TODO_ACTIONS, todosReducer } from "./components/Todo";
import Form from "./components/Form";
import './App.css';
import logo from './logo.svg';


export default function App() {
  const [todos, setTodos] = useReducer(todosReducer, []);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />
        <h1>Input activities you want to do:</h1>
        <Form todos={ todos }
              setTodos={ setTodos }
              inputText={ inputText }
              setInputText={ setInputText }/>

        <hr></hr>
        { todos.length > 0 ? (
          <div>
            <h2>Today we are doing:</h2>
            {todos.map((item) => (
              <Todo key={ item.id } todo={ item } dispatch={ setTodos } />
            ))}
          </div>
        ) : (
          <h2>There is nothing to do today</h2>
        )}
      </header>
    </div>
  );
}
