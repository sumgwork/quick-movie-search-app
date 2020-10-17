import React, { useContext } from "react";
import MovieContext from "../utils/movieContext";

const MainContent = () => {
  const { selectedMovie } = useContext(MovieContext);
  return (
    <div>
      <h2>Content</h2>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.Title}</h2>
        </div>
      )}
    </div>
  );
};

export default MainContent;
