import React, { useContext } from "react";
import MovieContext from "../utils/movieContext";

const PaginationComponent = ({ page, changePage, total }) => {
  const pageSize = 10;
  const numPages = Math.ceil(total / pageSize);

  const handleToPrevPage = () => {
    changePage(page - 1);
    setSelectedMovie(undefined);
  };
  const handleToNextPage = () => {
    changePage(page + 1);
    setSelectedMovie(undefined);
  };

  const { setSelectedMovie } = useContext(MovieContext);
  if (numPages < 2 || !total) {
    return null;
  }
  return (
    <div>
      Pagination
      <button onClick={handleToPrevPage} disabled={page === 1}>
        -
      </button>
      {total && (
        <div>
          Page {page} of {numPages}
        </div>
      )}
      <button onClick={handleToNextPage} disabled={page === numPages}>
        +
      </button>
    </div>
  );
};

export default PaginationComponent;
