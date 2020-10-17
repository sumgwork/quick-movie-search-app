import React, { useContext } from "react";
import MovieContext from "../utils/movieContext";

const SearchResults = ({ movies }) => {
  const { setSelectedMovie } = useContext(MovieContext);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID} onClick={() => setSelectedMovie(movie)}>
          {movie.Title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
