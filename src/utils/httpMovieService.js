import axios from "axios";

const apiKey = process.env.REACT_APP_OMDB_KEY;

// This interceptor adds the apiKey to every api request
axios.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey };
  return config;
});

// Response interceptor to read API errors
axios.interceptors.response.use(null, async (error) => {
  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  const serverError =
    error.response &&
    error.response.status >= 500 &&
    error.response.status < 600;

  if (clientError) {
    return Promise.reject(
      new Error("Error with user input. Please try again.")
    );
  }

  if (serverError) {
    return Promise.reject(
      new Error("Error at the server. Please try again later.")
    );
  }

  // Any Other errors
  return Promise.reject(error);
});

// Use this for any API call from OMDB
// Only exposed get here. post, put, delete can be named similarly
export default {
  get: axios.get,
};
