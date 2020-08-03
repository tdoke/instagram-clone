import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; /* 1rem = 10px */
}

body {
  box-sizing: border-box;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  p {
    font-size: 1.6rem;
  }  
}
`;

export default GlobalStyles;
