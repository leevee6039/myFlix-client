import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Button, Col, Row } from 'react-bootstrap';

import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (!!accessToken) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  // GET movies
  getMovies(token) {
    axios
      .get('https://lee-movies.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // onClick handler function for viewing movie-card
  setSelectedMovie(movie) {
    this.setState({ selectedMovie: movie });
  }

  /** When a user succesfully registers in, this function `register` property in state to that particular user */

  onRegistration(register) {
    this.setState({
      register
    });
  }

  /** When a user succesfully logs in, this function updates the`user` property in state to that particular user*/

  onLoggedIn(authData) {
    console.log('authData-->', authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.clear();
    this.setState({
      user: null
    });
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;

    /** */
    if (!register)
      return (
        <RegistrationView
          onRegistration={(register) => this.onRegistration(register)}
        />
      );

    /**If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView */
    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    //Before the movies have been loaded
    if (movies.length === 0) {
      return <div className="main-view" />;
    } else {
      return (
        <>
          <div className="d-flex justify-content-between mb-3">
            <h1> 🎭 Movies &#128640;</h1>
            <Button
              variant="danger"
              onClick={() => {
                this.onLoggedOut();
              }}
            >
              Logout
            </Button>
          </div>

          <Row className="main-view justify-content-md-center">
            {selectedMovie ? (
              <Col md={8} className="d-flex align-items-stretch mb-3">
                <MovieView
                  movie={selectedMovie}
                  onBackClick={(newSelectedMovie) => {
                    this.setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Col>
            ) : (
              movies.map((movie) => (
                <Col
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex align-items-stretch mb-3"
                >
                  <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) =>
                      this.setSelectedMovie(newSelectedMovie)
                    }
                  />
                </Col>
              ))
            )}
          </Row>
        </>
      );
    }
  }
}
