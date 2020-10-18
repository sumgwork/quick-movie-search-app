import PropTypes from "prop-types";
import React, { useContext } from "react";
import { MovieItem, MovieList, StarIcon } from "../styles/searchResults.styles";
import MovieContext from "../utils/movieContext";

const SearchResults = ({ movies }) => {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  return (
    <MovieList>
      {movies.map((movie) => {
        const isSelected =
          selectedMovie && movie.imdbID === selectedMovie.imdbID;
        return (
          <MovieItem
            key={movie.imdbID}
            onClick={() => setSelectedMovie(movie.imdbID)}
            aria-selected={isSelected}
          >
            <h3>{movie.Title}</h3>
            {isSelected && <StarIcon />}
            <sub>{movie.Year}</sub>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

SearchResults.propTypes = {
  movies: PropTypes.array,
};

SearchResults.defaultProps = {
  movies: [],
};

export default SearchResults;
