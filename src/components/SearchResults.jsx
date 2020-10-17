import React from "react";

const SearchResults = ({ movies }) => {
  return movies.map((movie) => <div key={movie.imdbID}>{movie.Title}</div>);
};

export default SearchResults;
