import { useEffect, useState } from "react";
import { baseMovieApiUrl } from "../utils/baseUrl";
import httpMovieService from "../utils/httpMovieService";

const useSearchMovie = (searchText, page = 1) => {
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
        if (json.errors) {
          throw new Error(Object.values(json.errors));
        }
        if (json.Response === "True") {
          setSearchResults(json);
          setError(undefined);
        } else if (json.Response === "False") {
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
