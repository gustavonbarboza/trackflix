import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1c1c1c;
    color: #fff;
    font-family: Source Sans Pro, Arial, sans-serif;
  }
`;

export default GlobalStyle;