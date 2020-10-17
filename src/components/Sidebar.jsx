import debounce from "lodash.debounce";
import React, { useCallback, useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import PaginationComponent from "./Pagination";
import SearchResults from "./SearchResults";

const Sidebar = () => {
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const { searchResults: data, loading, error } = useSearchMovie(
    searchText.trim(),
    page
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    debounceHandler(e.target.value);
  };

  const debounceHandler = useCallback(
    debounce((value) => {
      setSearchText(value);
    }, 250),
    []
  );

  return (
    <div>
      <h2>Sidebar</h2>
      <input
        type="text"
        value={value}
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
              {value && (
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
