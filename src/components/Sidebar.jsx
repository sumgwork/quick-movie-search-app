import React, { useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import SearchResults from "./SearchResults";

const Sidebar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchResults: data, loading, error } = useSearchMovie(searchText);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h2>Sidebar</h2>
      <input type="text" value={searchText} onChange={handleChange} />

      {loading && <div>Loading</div>}
      {!loading && error && (
        <div>Error loading movie, please try later. {error.message}</div>
      )}
      {!loading && !error && data && (
        <div>
          {data.Response === "True" && (
            <>
              {searchText && <SearchResults movies={data.Search} />}
              <div>{data.totalResults} Results found</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
