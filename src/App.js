import React from "react";
import Layout from "./components/Layout";
import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./styles/globalStyles";
import Typography from "./styles/typography";

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout sidebar={<Sidebar />}>
        <MainBody />
      </Layout>
    </>
  );
}

export default App;
