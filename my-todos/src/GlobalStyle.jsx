import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto;
    max-width: 500px;
  }
  body {
    background-color: #eee;
  }
`;

export default GlobalStyle;
