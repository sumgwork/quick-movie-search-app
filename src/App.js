import React from "react";

function App() {
  console.log("process.env.REACT_APP_OMDB_KEY", process.env.REACT_APP_OMDB_KEY);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
