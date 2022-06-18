import React from 'react';

import inceptionPoster from '../../assets/inception-poster.jpeg';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    // state
    this.state = {
      movies: [
        {
          _id: 1,
          Title: 'Inception',
          Description:
            'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
          Genre: {
            Name: 'Action',
            Description:
              'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases.'
          },
          Director: {
            Name: 'Christopher Nolan',
            Bio: 'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. ',
            Birth: '1970'
          },
          // ImagePath:
          //   'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
          ImagePath: inceptionPoster,
          Featured: true
        },
        {
          _id: 2,
          Title: 'The Shawshank Redemption',
          Description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          Genre: {
            Name: 'Drama',
            Description:
              'Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature. A dramatic film shows us human beings at their best, their worst, and everything in-between.'
          },
          Director: {
            Name: 'Frank Darabont',
            Bio: 'Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution.',
            Birth: '1959'
          },
          ImagePath:
            'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
          Featured: true
        },
        {
          _id: 3,
          Title: 'Gladiator',
          Description:
            'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
          Genre: {
            Name: 'Adventure',
            Description:
              'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.'
          },
          Director: {
            Name: 'Ridley Scott',
            Bio: 'Ridley Scott was awarded Knight Bachelor of the Order of the British Empire at the 2003 Queen\'s New Year Honours for his "substantial contribution to the British film industry". On July 3, 2015, he was awarded an honorary doctorate by the Royal College of Art in a ceremony at the Royal Albert Hall in London. He was awarded the BAFTA Fellowship in 2018. ',
            Birth: '1937'
          },
          ImagePath:
            'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
          Featured: true
        }
      ],
      selectedMovie: null
    };
  }

  // onClick handler function for viewing movie-card
  setSelectedMovie(newSelectedMovie) {
    this.setState({ selectedMovie: newSelectedMovie });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) {
      return <div className="main-view">The list is empty!</div>;
    } else {
      return (
        <div className="main-view">
          {selectedMovie ? (
            <MovieView
              movie={selectedMovie}
              onBackClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(movie) => this.setSelectedMovie(movie)}
              />
            ))
          )}
        </div>
      );
    }
  }
}
