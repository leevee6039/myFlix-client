import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      <div className="movie-card" onClick={() => onMovieClick(movie)}>
        {movie.Title}
      </div>
    );
  }
}
