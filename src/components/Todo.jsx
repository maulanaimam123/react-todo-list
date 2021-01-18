import { v4 as uuidv4 } from 'uuid';
import './ComponentStyle.css';

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  REARRANGE_TODO: "rearrange-todo"
};

export const todosReducer = (todos, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...todos, 
              { id: uuidv4(),
                text: action.task,
                isCompleted: false }
              ];
    case TODO_ACTIONS.TOGGLE_TODO:
      return todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return todos.filter((item) => item.id !== action.id);
    case TODO_ACTIONS.REARRANGE_TODO: {
      const [movedTodo] = todos.splice(action.source, 1)
      todos.splice(action.destination, 0, movedTodo)
      return todos
    }
    default:
      return todos;
  }
};
