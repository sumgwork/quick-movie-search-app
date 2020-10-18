import React from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./styles/global.styles";
import Typography from "./styles/typography.styles";
import { MovieProvider } from "./utils/movieContext";

/**
 * The App component injects global styles (and text styles) to the whole app,
 * and also wraps around the global context so all underlying components get
 * access to the same state.
 *
 * The home page is divided into a sidebar and a main content area
 */
const App = () => {
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
};

export default App;
