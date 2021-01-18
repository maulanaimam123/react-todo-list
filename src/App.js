import React, { useReducer, useState } from "react";
import { todosReducer } from "./components/Todo";
import Query from "./components/Query";
import TodoBoard from "./components/TodoBoard";
import './App.css';
import logo from './logo.svg';
import { Container } from 'react-bootstrap'


export default function App() {
  const [todos, setTodos] = useReducer(todosReducer, []);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src={ logo } className="App-logo" alt="logo" style={{marginTop: "5vh", marginBottom: "5vh"}}/>
          
          <Query todos={ todos }
                setTodos={ setTodos }
                inputText={ inputText }
                setInputText={ setInputText }/>
                
          <TodoBoard todos={ todos }
                     setTodos={ setTodos }/>
        </Container>
      </header>
    </div>
  );
}
