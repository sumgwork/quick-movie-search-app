import React, { useContext, useEffect, useState } from "react";
import {
  ContentStyles,
  Property,
  ImageWrapper,
} from "../styles/content.styles";
import httpMovieService from "../utils/httpMovieService";
import MovieContext from "../utils/movieContext";
import DisplayError from "./DisplayError";

const MainContent = () => {
  const { selectedMovie } = useContext(MovieContext);
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovieDetails = async () => {
      try {
        const response = await httpMovieService.get(
          `http://www.omdbapi.com/?i=${selectedMovie}`
        );
        const json = response.data;
        if (json.Error) {
          throw new Error(json.Error);
        }
        setMovieDetails(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!!selectedMovie) {
      setLoading(true);
      setMovieDetails({});
      setError(undefined);
      searchMovieDetails();
    }
  }, [selectedMovie]);
  return (
    <>
      {selectedMovie && (
        <div>
          {loading && <div style={{ margin: "2rem" }}>Loading...</div>}
          {!loading && error && (
            <div style={{ margin: "2rem" }}>
              <DisplayError error={error} />
            </div>
          )}
          {!loading && !error && movieDetails && (
            <ContentStyles>
              <div>
                <h1 className="movieTitle">{movieDetails.Title}</h1>
                <sub className="movieGenre">{movieDetails.Genre}</sub>
                <p className="moviePlot">{movieDetails.Plot}</p>
                {showProperty("Language", movieDetails.Language)}
                {showProperty("Directors", movieDetails.Director)}
                {showProperty("Actors", movieDetails.Actors)}
                {showProperty("Duration", movieDetails.Runtime)}
              </div>
              <ImageWrapper>
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
              </ImageWrapper>
            </ContentStyles>
          )}
        </div>
      )}
    </>
  );
};

export default MainContent;

function showProperty(title, description) {
  return (
    <Property>
      <span className="title">{title}:</span> {description}
    </Property>
  );
}
