import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export function Menubar({ user }) {
  //Logot handler
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };
  return (
    <>
      {}
      <Navbar
        bg="light"
        expand="md"
        className="main-view mb-2"
        sticky="top"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/" className="navbar-logo">
            myFlix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {isAuth() && <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>}
              {isAuth() && (
                <Button
                  className="btn btn-secondary"
                  varient="secondary"
                  onClick={() => {
                    onLoggedOut();
                  }}
                >
                  Logout
                </Button>
              )}
              {!isAuth() && <Nav.Link href="/">Sign-in</Nav.Link>}
              {!isAuth() && <Nav.Link href="/register">Sign-up</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
