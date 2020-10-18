import debounce from "lodash.debounce";
import React, { useCallback, useContext, useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import { SidebarStyles } from "../styles/sidebar.styles";
import MovieContext from "../utils/movieContext";
import DisplayError from "./DisplayError";
import PaginationComponent from "./Pagination";
import SearchResults from "./SearchResults";

const Sidebar = () => {
  // state management
  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  // using custom hook to obtain search results
  const { searchResults: data, loading, error } = useSearchMovie(
    searchText.trim(),
    page
  );

  // read from movie context
  const { setSelectedMovie } = useContext(MovieContext);

  // event handler for user input
  const handleChange = (e) => {
    setValue(e.target.value);
    setPage(1);
    // debounce the input to avoid multiple queries as user types
    debounceHandler(e.target.value);
    setSelectedMovie(undefined);
  };

  // debounce handler used for bouncing off api calls while the user is still typing
  const debounceHandler = useCallback(
    debounce((value) => {
      setSearchText(value);
    }, 400),
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
        {!loading && error && <DisplayError error={error} />}
        {!loading && !error && data && (
          <div className="resultPane">
            {data.Response === "True" && value && (
              <SearchResults movies={data.Search} />
            )}
          </div>
        )}
      </div>
      <PaginationComponent
        page={page}
        total={parseInt(data.totalResults)}
        changePage={setPage}
      />
    </SidebarStyles>
  );
};

export default Sidebar;
