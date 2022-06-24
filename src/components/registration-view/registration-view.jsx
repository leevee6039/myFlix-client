import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  CardGroup,
  Card
} from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    /** Send a request to the server for authentication */
    /** then call props.onRegistration(username) */
    props.onRegistration(username);
  };
  return (
    <Container className="mt-5 mb-5">
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={12} md={6} lg={6}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Register to myFlix</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your Username"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                      minLength="8"
                      required
                    />
                    <Form.Text className="text-muted">
                      Your password must be 8 or more characters.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDob">
                    <Form.Label>Date of birth:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    varient="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Register
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
