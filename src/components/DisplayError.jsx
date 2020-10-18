import PropTypes from "prop-types";
import React from "react";

// Generic component for showing any javascript or API errors on the app
const DisplayError = ({ error }) => {
  return (
    <div>
      <h3>Error</h3>
      <p>{error.message || "Something went wrong."}</p>
    </div>
  );
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
