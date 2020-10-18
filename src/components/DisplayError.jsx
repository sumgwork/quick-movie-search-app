import React from "react";

const DisplayError = ({ error }) => {
  return (
    <div>
      <h3>Error</h3>
      <p>{error.message || "Something went wrong."}</p>
    </div>
  );
};

export default DisplayError;
