import React from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./styles/global.styles";
import Typography from "./styles/typography.styles";
import { MovieProvider } from "./utils/movieContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <MovieProvider>
        <Homepage>
          <Sidebar />
          <MainContent />
        </Homepage>
      </MovieProvider>
    </>
  );
}

export default App;
