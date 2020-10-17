import React from "react";

const PaginationComponent = ({ page, changePage, total }) => {
  const pageSize = 10;
  const numPages = Math.ceil(total / pageSize);

  const handleToPrevPage = () => changePage(page - 1);
  const handleToNextPage = () => changePage(page + 1);

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
