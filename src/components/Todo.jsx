import React from "react";
import './ComponentStyle.css';

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
};

export const todosReducer = (todos, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...todos, {id: Date.now(), text: action.task, isCompleted: false}];
    case TODO_ACTIONS.TOGGLE_TODO:
      return todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return todos.filter((item) => item.id !== action.id);
    default:
      return todos;
  }
};

const Todo = ({ todo, dispatch }) => {
  return (
    <div
      className="todo-card"
    >
      <span
        className="todo-text"
        style={{
          color: todo.isCompleted ? "#AAA" : "#282c34",
          textDecoration: todo.isCompleted ? "line-through" : "none",
          marginRight: "80px"
        }}
      >
        {todo.text}
      </span>
      <button
        className="toggle-button"
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, id: todo.id })
        }
      >
        Toggle
      </button>
      <button
        className="delete-button"
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.DELETE_TODO, id: todo.id })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
