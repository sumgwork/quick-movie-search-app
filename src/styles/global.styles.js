import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --primaryFg: var(--black);
    --maxContentHeight: 1000px;
  }
  html, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  html {
    font-size: 10px;
    background: var(--grey);
  }
  body {
    background: var(--white);
    max-width: 1200px;
    color: var(--primaryFg);
    margin: 0 auto;
    max-height: 100vh;
    padding: 1rem;
    min-height: 100vh;
  }
  button {
    font-weight: 700;
    font-size: 1.5rem;
    border: 0;
    padding: 1rem;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: var(--white);
    color: var(--red);
    }
  }
`;

export default GlobalStyles;
