import React from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./styles/globalStyles";
import Typography from "./styles/typography";

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Homepage>
        <Sidebar />
        <MainContent />
      </Homepage>
    </>
  );
}

export default App;
