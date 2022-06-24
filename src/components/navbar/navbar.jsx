import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export function Menubar({ user }) {
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
      <Navbar
        bg="dark"
        expand="lg"
        className="main-view"
        sticky="top"
        variant="dark"
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
                  varient="link"
                  onClick={() => {
                    this.onLoggedOut();
                  }}
                >
                  Logout
                </Button>
              )}
              {!isAuth() && <Nav.Link href="/">Sign-in</Nav.Link>}
              {!isAuth() && <Nav.Link herf="/register">Sign-up</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
