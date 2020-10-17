import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --primaryBg: var(--red);
    --primaryFg: var(--black);
  }
  html, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
    max-height: none;
    padding: 1rem;
    min-height: 100vh;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--primaryBg);
    color: var(--white);
    font-weight: 700;
    font-size: 1.5rem;
    border: 0;
    padding: 1rem;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: var(--black);
    color: var(--primaryBg);
    }
  }
  li {
    list-style: none;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  
  /* Other Styles */
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`;

export default GlobalStyles;
