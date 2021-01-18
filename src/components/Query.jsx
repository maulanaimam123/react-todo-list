import React from 'react';
import './ComponentStyle.css';
import { TODO_ACTIONS } from './Todo';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Query = ({ todos, setTodos, inputText, setInputText }) => {
  const handleSubmit = e => {
      e.preventDefault()
      if (inputText === "") {
        return
      }
      setTodos({type: TODO_ACTIONS.ADD_TODO, task: inputText})
      setInputText("")
      e.target.value = ""
  }

  return (
    <Container>
      <Row style={{marginBottom: "5vh"}}>
        <Col className="app-title">
          Set your goals for today:
        </Col>
      </Row>
      <Form className="col-lg-8 offset-lg-2" onSubmit={handleSubmit}>
        <Form.Row>
          <Col xs="8">
            <Form.Control type="text"
                          placeholder="Input your task"
                          value={ inputText }
                          onChange ={ e => { setInputText(e.target.value) }} />
          </Col>
          <Col xs="2">
            <Button type="submit"
                    className="mb-2"
                    variant="success"
                    disabled={ inputText.length > 0? false : true }
                    onClick={ handleSubmit }>Add</Button>
          </Col>
          <Col xs="2">
            <Form.Control as="select">
              <option value="all">All</option>
              <option value="completed">Done</option>
              <option value="uncompleted">Not yet</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}

export default Query