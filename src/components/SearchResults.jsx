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
            onClick={() => setSelectedMovie(movie)}
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

export default SearchResults;
