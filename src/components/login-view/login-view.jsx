import React, { useState } from 'react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  CardGroup,
  Card
} from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /** Send a request to the server for authentication */
    /** then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title></Card.Title>
                <Form>
                  <h1>Log in to myFlix</h1>

                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Username"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
