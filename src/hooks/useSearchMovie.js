import { useEffect, useState } from "react";
import { baseMovieApiUrl } from "../utils/baseUrl";
import httpMovieService from "../utils/httpMovieService";

// this custom hook will invoke API call every time the search text is modified
const useSearchMovie = (searchText, page = 1) => {
  // state management
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!searchText || searchText.length < 3) {
      setLoading(false);
      setError(undefined);
      setSearchResults([]);
      return;
    }
    const performSearch = async () => {
      try {
        setLoading(true);
        setSearchResults([]);
        const response = await httpMovieService.get(
          `${baseMovieApiUrl}?s=${searchText}&page=${page}`
        );
        let json = response.data;

        // error handling
        if (json.errors) {
          throw new Error(Object.values(json.errors));
        }

        // success case
        if (json.Response === "True") {
          setSearchResults(json);
          setError(undefined);
        } else if (json.Response === "False") {
          // any other error returned by the API
          throw new Error(json.Error);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    performSearch();
  }, [searchText, page]);

  return { searchResults, loading, error };
};

export default useSearchMovie;
