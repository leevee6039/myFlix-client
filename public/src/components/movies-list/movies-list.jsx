import React from 'react';
import { Col } from 'react-bootstrap';

import { MovieCard } from '../movie-card/movie-card';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="main-view" />;

  return (
    <>
      <Col md={12} style={{ margin: '1em' }}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>
      {filteredMovies.map((m) => (
        <Col
          sm={6}
          md={4}
          lg={3}
          className="d-flex align-items-stretch mb-3"
          key={m._id}
        >
          <MovieCard movie={m} />
        </Col>
      ))}
    </>
  );
}

export default connect(mapStateToProps)(MoviesList);
