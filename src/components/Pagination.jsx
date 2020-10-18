import React, { useContext } from "react";
import { PaginationStyles } from "../styles/pagination.styles";
import MovieContext from "../utils/movieContext";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

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
    <PaginationStyles>
      <button onClick={handleToPrevPage} disabled={page === 1}>
        <BiLeftArrow />
      </button>
      {total && (
        <div>
          <div>
            Page {page} of {numPages}
          </div>
          <div>{total} Results</div>
        </div>
      )}
      <button onClick={handleToNextPage} disabled={page === numPages}>
        <BiRightArrow />
      </button>
    </PaginationStyles>
  );
};

export default PaginationComponent;
