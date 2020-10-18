import debounce from "lodash.debounce";
import React, { useCallback, useContext, useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import { SidebarStyles } from "../styles/sidebar.styles";
import MovieContext from "../utils/movieContext";
import DisplayError from "./DisplayError";
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

  const { setSelectedMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    setValue(e.target.value);
    setPage(1);
    debounceHandler(e.target.value);
    setSelectedMovie(undefined);
  };

  const debounceHandler = useCallback(
    debounce((value) => {
      setSearchText(value);
    }, 250),
    []
  );

  return (
    <SidebarStyles>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Start Search..."
          className="searchBox"
        />

        {loading && <div>Loading...</div>}
        {!loading && error && (
          <DisplayError error={error} />
          // <div>Error loading movie, please try later. {error.message}</div>
        )}
        {!loading && !error && data && (
          <div
            className="resultPane"
            // style={{ background: "red", overflow: "auto" }}
          >
            {data.Response === "True" && value && (
              <SearchResults movies={data.Search} />
            )}
          </div>
        )}
      </div>
      <PaginationComponent
        page={page}
        total={data.totalResults}
        changePage={setPage}
      />
    </SidebarStyles>
  );
};

export default Sidebar;
