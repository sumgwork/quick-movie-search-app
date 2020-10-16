import React from "react";
import { LayoutStyles } from "../styles/layoutStyles";

const Layout = ({ sidebar, children }) => {
  return (
    <LayoutStyles>
      <div>{sidebar}</div>
      <div>{children}</div>
    </LayoutStyles>
  );
};

export default Layout;
