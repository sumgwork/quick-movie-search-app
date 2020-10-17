import React, { useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import PaginationComponent from "./Pagination";
import SearchResults from "./SearchResults";

const Sidebar = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const { searchResults: data, loading, error } = useSearchMovie(
    searchText.trim(),
    page
  );
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h2>Sidebar</h2>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Start Search..."
      />

      {loading && <div>Loading</div>}
      {!loading && error && (
        <div>Error loading movie, please try later. {error.message}</div>
      )}
      {!loading && !error && data && (
        <div>
          {data.Response === "True" && (
            <>
              {searchText && (
                <div>
                  <SearchResults movies={data.Search} />
                  <PaginationComponent
                    page={page}
                    total={data.totalResults}
                    changePage={setPage}
                  />
                </div>
              )}
              <div>{data.totalResults} Results found</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
