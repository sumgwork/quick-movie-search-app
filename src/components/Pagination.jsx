import PropTypes from "prop-types";
import React, { useContext } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { PaginationStyles } from "../styles/pagination.styles";
import MovieContext from "../utils/movieContext";

const PaginationComponent = ({ page, changePage, total }) => {
  const { setSelectedMovie } = useContext(MovieContext);

  const pageSize = 10; // could also be used from config, using default api page size here
  const numPages = total ? Math.ceil(total / pageSize) : 0;

  const handleToPrevPage = () => {
    changePage(page - 1);
    setSelectedMovie(undefined);
  };
  const handleToNextPage = () => {
    changePage(page + 1);
    setSelectedMovie(undefined);
  };

  if (numPages < 2 || !total) {
    return null;
  }

  return (
    <PaginationStyles className="center">
      <button onClick={handleToPrevPage} disabled={page === 1}>
        <BiLeftArrow />
      </button>
      {total && (
        <div>
          <div>Page {page}</div>
          <div>{total} Results</div>
        </div>
      )}
      <button onClick={handleToNextPage} disabled={page === numPages}>
        <BiRightArrow />
      </button>
    </PaginationStyles>
  );
};

PaginationComponent.propTypes = {
  page: PropTypes.number,
  changePage: PropTypes.func.isRequired,
  total: PropTypes.number,
};

PaginationComponent.defaultProps = {
  total: 0,
  page: 1,
};

export default PaginationComponent;
