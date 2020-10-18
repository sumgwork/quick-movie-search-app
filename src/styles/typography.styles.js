import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  
  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  body {
      font-size: 1.5rem;
  }
  p, li {
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 700;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
