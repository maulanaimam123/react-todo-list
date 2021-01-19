import React from 'react';
import { TODO_ACTIONS } from './Todo'
import { Container } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './ComponentStyle.css';

export default function TodoBoard({ todos, setTodos }) {
  const handleDragEnd = result => {
    // Destination not exist: DELETE
    if (!result.destination) {
      setTodos({
                type: TODO_ACTIONS.DELETE_TODO,
                id: result.draggableId
              })
      return
    }
    // Destination exist: REARRANGE
    setTodos({
              type: TODO_ACTIONS.REARRANGE_TODO,
              source: result.source.index,
              destination: result.destination.index
            })
  }
  const getDest = foundIndex => foundIndex > 0 ? foundIndex - 1 : todos.length - 1
  const handleDoubleClick = e => {
    // Toggle todo isCompleted
    setTodos({type: TODO_ACTIONS.TOGGLE_TODO, id: e.target.id})

    // Rearrange todo
    const source = todos.findIndex(el => el.id === e.target.id)
    const dest = todos[source].isCompleted? // Somehow the state is not directly changed
                 todos.findIndex((el, index) => el.isCompleted === todos[source].isCompleted) :
                 getDest(todos.findIndex((el, index) => 
                                            el.isCompleted !== todos[source].isCompleted
                                            && source !== index))
    setTodos({type: TODO_ACTIONS.REARRANGE_TODO, source: source, destination: dest})
  }

  if (todos.length){
    return (
        <Container className="mt-5">
          <p>Today we are doing:</p>
          <DragDropContext onDragEnd={ handleDragEnd }>
            <Droppable droppableId="todo-list">
              { provided => (
                <div className="card-container mx-auto col-10 col-lg-6"
                     {...provided.droppableProps}
                    ref={provided.innerRef}>

                  {todos.map((todo, index) => (
                    <Draggable id={ todo.id }
                              draggableId={ todo.id }
                              key={ todo.id }
                              index={ index }>
                      { provided => (
                        <div className={ todo.isCompleted? "todo-done" : "todo-notyet" }
                            onDoubleClick={ handleDoubleClick }
                            id={ todo.id }
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                          { todo.text }
                        </div>
                      )}
                    </Draggable>)
                  )}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
    )}
  else {
    return (
      <Container className="mt-5">
        <p className="todo-nothing">Nothing to do today - yet</p>
      </Container>
    )
  }
}
