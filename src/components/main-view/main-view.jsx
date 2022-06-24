import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Menubar } from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Button, Col, Row } from 'react-bootstrap';

import './main-view.scss';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { UserUpdate } from '../profile-view/user-update';

export class MainView extends React.Component {
  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
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

  // createUser(token) {
  //   axios
  //     .post('https://lee-movies.herokuapp.com/users', {
  //       headers: { Authorization: `Bearer ${token}` }
  //     })
  //     .then((response) => {
  //       this.setState({ users: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // // onClick handler function for viewing movie-card
  // setSelectedMovie(movie) {
  //   this.setState({ selectedMovie: movie });
  // }

  /** When a user succesfully registers in, this function `register` property in state to that particular user */

  // onRegistration(authData) {
  //   console.log('authData-->', authData);
  //   this.setState({
  //     register: { ...authData }
  //   });
  //   localStorage.setItem('token', authData.token);
  //   localStorage.setItem('user', authData.user.Username);
  //   this.createUser(authData.token);
  // }

  render() {
    const { movies, user } = this.state;

    /** */
    // if (!register)
    //   return (
    //     <RegistrationView
    //       onRegistration={(register) => this.onRegistration(register)}
    //     />
    //   );

    /**If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView */
    // if (!user)
    //   return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    //Before the movies have been loaded
    if (movies.length === 0) {
      return <div className="main-view" />;
    } else {
      return (
        <>
          <Router>
            <Menubar user={user} />
            <Row className="main-view justify-content-md-center">
              <Routes>
                <Route
                  exact
                  path="/"
                  render={() => {
                    /**If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView */
                    if (!user)
                      return (
                        <Col>
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
                        </Col>
                      );
                    if (movies.length === 0)
                      return <div className="main-view" />;
                    return movies.map((m) => (
                      <Col md={3} key={m._id}>
                        <MovieCard movie={m} />
                      </Col>
                    ));
                  }}
                />
                <Route
                  path="/register"
                  render={() => {
                    if (user) return <Redirect to="/" />;
                    return (
                      <Col lg={8} md={8}>
                        <RegistrationView />
                      </Col>
                    );
                  }}
                />
                <Route
                  path="/movies/:movieId"
                  render={({ match, history }) => {
                    return (
                      <Col md={8}>
                        <MovieView
                          movie={movies.find(
                            (m) => m._id === match.param.movieId
                          )}
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                    );
                  }}
                />
                <Route
                  path="/directors/:name"
                  render={({ match, history }) => {
                    return (
                      <Col>
                        <DirectorView
                          movie={movies.find((m) => m._id === match.params.id)}
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                    );
                  }}
                />
                <Route
                  path="/genre/:name"
                  render={({ match, history }) => {
                    return (
                      <Col>
                        <GenreView
                          movie={movies.find((m) => m._id === match.params.id)}
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                    );
                  }}
                />
                <Route
                  path={`/users/${user}`}
                  render={({ match, history }) => {
                    if (!user) return <Redirect to="/" />;
                    return (
                      <Col>
                        <ProfileView
                          movies={movies}
                          user={user}
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                    );
                  }}
                />
                <Route
                  path={`/user-update/${user}`}
                  render={({ match, history }) => {
                    if (!user) return <Redirect to="/" />;
                    return (
                      <Col>
                        <UserUpdate
                          user={user}
                          onBackClick={() => history.goBack()}
                        />
                      </Col>
                    );
                  }}
                />
              </Routes>
            </Row>
          </Router>
        </>
      );
    }
  }
}
