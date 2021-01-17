import React, { useReducer, useState } from "react";
import Todo, { todosReducer } from "./components/Todo";
import Query from "./components/Query";
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
                style={{marginTop: "5vh", marginBottom: "5vh"}}
                setTodos={ setTodos }
                inputText={ inputText }
                setInputText={ setInputText }/>
          <Container style={{marginTop: "5vh", marginBottom: "5vh"}}>
          {todos.length > 0 ?
          (<div>
              <h2>Today we are doing:</h2>
              {todos.map((item) => (
                <Todo key={ item.id } todo={ item } dispatch={ setTodos } />
              ))}
            </div>) : (<h2>There is nothing to do today</h2>)}
          </Container>
        </Container>
      </header>
    </div>
  );
}
